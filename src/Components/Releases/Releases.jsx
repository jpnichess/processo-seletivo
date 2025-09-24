import "./releases.scss";
import { useEffect, useState } from "react";
import getProducts from "../../hooks/utils.js";
import { useCarousel } from "../../hooks/useCarousel.js";

import icon_add from "../../assets/Icons/BlackIcons/icon_add.png";
import icon_empty_heart from "../../assets/Icons/BlackIcons/icon_empty_heart.png";
import icon_heart from "../../assets/Icons/BlackIcons/icon_heart.png";

function Releases({ onAddToCart }) {
  const [products, setProducts] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const data = await getProducts();
      setProducts(data);
    }
    fetchProducts();
  }, []);

  const { containerRef, handleScroll } = useCarousel();

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
    );
  };

  return (
    <div className="products_wrapper">
      <h1>Lançamentos</h1>
      <div
        className="products_container"
        onScroll={handleScroll}
        ref={containerRef}
      >
        {products.map((product) => (
          <div className="products_item" key={product.id}>
            <div className="image_wrapper">
              <img src={product.image} alt={product.name} />

              {product.price.isDiscount && (
                <div className="discount_badge">10% OFF</div>
              )}

              <div
                className="icon_heart_wrapper"
                onClick={() => toggleFavorite(product.id)}
              >
                <img
                  src={
                    favorites.includes(product.id)
                      ? icon_heart
                      : icon_empty_heart
                  }
                  alt="favorite"
                  className="icon_heart"
                />
              </div>

              <div
                className="icon_add_wrapper"
                onClick={() => onAddToCart(product)}
              >
                <img src={icon_add} alt="add" className="icon_add" />
              </div>
            </div>

            <p className="name">{product.name}</p>
            <p className="discount">
              {product.price.isDiscount ? (
                <>
                  <span className="old_price">
                    R${product.price.amount.toFixed(2)}
                  </span>
                  <span className="new_price">
                    R${product.price.isDiscount.toFixed(2)}
                  </span>
                </>
              ) : (
                <span className="new_price">
                  R${product.price.amount.toFixed(2)}
                </span>
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Releases;
