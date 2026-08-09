import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { RentalItem } from "@/data/items";

export type CartLine = {
  item: RentalItem;
  quantity: number;
  startDate: string;
  endDate: string;
};

type CartState = {
  lines: CartLine[];
  isDrawerOpen: boolean;
  isMenuOpen: boolean;
  isCategoriesOpen: boolean;
  isSearchOpen: boolean;
};

type CartActions = {
  addLine: (line: CartLine) => void;
  updateLine: (id: string, patch: Partial<Omit<CartLine, "item">>) => void;
  removeLine: (id: string) => void;
  clearCart: () => void;
  openDrawer: () => void;
  closeDrawer: () => void;
  openMenu: () => void;
  closeMenu: () => void;
  openCategories: () => void;
  closeCategories: () => void;
  openSearch: () => void;
  closeSearch: () => void;
  totalItems: number;
  subtotal: number;
  totalDeposit: number;
};

const CartContext = createContext<(CartState & CartActions) | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isCategoriesOpen, setCategoriesOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);

  const addLine = useCallback((line: CartLine) => {
    setLines((prev) => {
      const existing = prev.find((l) => l.item.id === line.item.id);
      if (existing) {
        return prev.map((l) =>
          l.item.id === line.item.id
            ? { ...l, quantity: l.quantity + line.quantity }
            : l,
        );
      }
      return [...prev, line];
    });
    setDrawerOpen(true);
  }, []);

  const updateLine = useCallback(
    (id: string, patch: Partial<Omit<CartLine, "item">>) => {
      setLines((prev) =>
        prev.map((l) => (l.item.id === id ? { ...l, ...patch } : l)),
      );
    },
    [],
  );

  const removeLine = useCallback((id: string) => {
    setLines((prev) => prev.filter((l) => l.item.id !== id));
  }, []);

  const clearCart = useCallback(() => setLines([]), []);

  const daysFor = (line: CartLine) => {
    if (!line.startDate || !line.endDate) return 1;
    const s = new Date(line.startDate).getTime();
    const e = new Date(line.endDate).getTime();
    return Math.max(1, Math.ceil((e - s) / (1000 * 60 * 60 * 24)));
  };

  const totals = useMemo(() => {
    const totalItems = lines.reduce((sum, l) => sum + l.quantity, 0);
    const subtotal = lines.reduce(
      (sum, l) => sum + l.item.pricePerDay * l.quantity * daysFor(l),
      0,
    );
    const totalDeposit = lines.reduce(
      (sum, l) => sum + l.item.deposit * l.quantity,
      0,
    );
    return { totalItems, subtotal, totalDeposit };
  }, [lines]);

  const value = useMemo<CartState & CartActions>(
    () => ({
      lines,
      isDrawerOpen,
      isMenuOpen,
      isCategoriesOpen,
      isSearchOpen,
      addLine,
      updateLine,
      removeLine,
      clearCart,
      openDrawer: () => setDrawerOpen(true),
      closeDrawer: () => setDrawerOpen(false),
      openMenu: () => setMenuOpen(true),
      closeMenu: () => setMenuOpen(false),
      openCategories: () => setCategoriesOpen(true),
      closeCategories: () => setCategoriesOpen(false),
      openSearch: () => setSearchOpen(true),
      closeSearch: () => setSearchOpen(false),
      ...totals,
    }),
    [
      lines,
      isDrawerOpen,
      isMenuOpen,
      isCategoriesOpen,
      isSearchOpen,
      addLine,
      updateLine,
      removeLine,
      clearCart,
      totals,
    ],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
