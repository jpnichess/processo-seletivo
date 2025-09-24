import { useCarousel } from "../../hooks/useCarousel";

import banner_botas from "../../assets/Categories/banner_botas.png";
import banner_scarpins from "../../assets/Categories/banner_scarpins.png";
import banner_sapatilhas from "../../assets/Categories/banner_sapatilhas.png";
import banner_sandalias from "../../assets/Categories/banner_sandalias.png";

//FIXED BANNERS BELLOW CATEGORIES
import small_banner from "../../assets/Banners/small_banner.png";
import large_banner from "../../assets/Banners/large_banner.png";

import "./categories.scss";

function Categories() {
  const categories = [
    { src: banner_botas, title: "Botas" },
    { src: banner_scarpins, title: "Scarpins" },
    { src: banner_sapatilhas, title: "Sapatilhas" },
    { src: banner_sandalias, title: "Sandálias" },
  ];

  const { containerRef, handleScroll } = useCarousel();

  return (
    <div>
      <div className="categories-wrapper">
        <h1>Categorias</h1>
        <div
          id="categories-container"
          onScroll={handleScroll}
          ref={containerRef}
        >
          {categories.map((category, i) => (
            <div className="category-item" key={i}>
              <img src={category.src} alt={category.title} />
              <p>{category.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="static_banners">
        <img src={small_banner} alt="small_banner" className="small_banner" />
        <img src={large_banner} alt="large_banner" />
      </div>
    </div>
  );
}

export default Categories;
