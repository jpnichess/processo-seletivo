import React, { useState } from "react";
import Header from "./Components/Header/Header";
import Banners from "./Components/Banners/Banners";
import Categories from "./Components/Categories/Categories";
import Releases from "./Components/Releases/Releases";
import Cards from "./Components/Cards/Cards";
import Footer from "./Components/Footer/Footer";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [showAdded, setShowAdded] = useState(false);

  const handleAddToCart = () => {
    setCartCount((prev) => prev + 1);
    setShowAdded(true);
    setTimeout(() => setShowAdded(false), 3000);
  };

  return (
    <>
      <Header cartCount={cartCount} />

      <main>
        <Banners />
        <Categories />
        <Releases onAddToCart={handleAddToCart} />
        <Cards />
      </main>
        <Footer/>
      {showAdded && <div className="added">Adicionado ao carrinho</div>}
    </>
  );
}

export default App;
