import "./App.css";
import { useEffect, react } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./scenes/home/Home";
import ItemDetails from "./scenes/itemDetails/itemDetails";
import Checkout from "./scenes/checkout/Checkout";
import Confirmation from "./scenes/checkout/Confirmation";
import Navbar from "./scenes/global/NavBar";
import CartMenu from "./scenes/global/CartMenu";
import Footer from './scenes/global/Footer'
const ScrollTop = () => {
  const { pathname } = useLocation();
  // Extract the 'pathname' property from the current location using 'useLocation'
  // Use the 'useEffect' hook to perform a side effect
  useEffect(() => {
    // Scroll to the top of the window when the pathname changes
    window.scrollTo(0, 0);
  }, [pathname]);
  // The component returns 'null', meaning it doesn't render anything
  return null;
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <ScrollTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="item/:itemId" element={<ItemDetails />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="checkout/success" element={<Confirmation />} />
        </Routes>
        <CartMenu  />
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
