import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import { useLenis } from "@/hooks/useLenis";
import { Preloader } from "@/components/Preloader";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MenuOverlay } from "@/components/layout/MenuOverlay";
import { CartDrawer } from "@/components/layout/CartDrawer";
import { CategoriesOverlay } from "@/components/layout/CategoriesOverlay";
import { SearchOverlay } from "@/components/layout/SearchOverlay";
import Home from "@/pages/Home";
import Rentals from "@/pages/Rentals";
import RentalDetail from "@/pages/RentalDetail";
import Cart from "@/pages/Cart";
import Checkout from "@/pages/Checkout";
import About from "@/pages/About";
import NotFound from "@/pages/NotFound";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
}

export default function App() {
  const [ready, setReady] = useState(false);
  useLenis();

  return (
    <CartProvider>
      {!ready && <Preloader onDone={() => setReady(true)} />}
      <ScrollToTop />
      <Header />
      <MenuOverlay />
      <CartDrawer />
      <CategoriesOverlay />
      <SearchOverlay />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rentals" element={<Rentals />} />
          <Route path="/rental/:slug" element={<RentalDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </CartProvider>
  );
}
