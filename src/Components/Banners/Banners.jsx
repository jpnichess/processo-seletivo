import { useCarousel } from "../../hooks/useCarousel";
import banner_1 from "../../assets/Banners/main_banner_1.png";
import banner_2 from "../../assets/Banners/main_banner_2.png";
import banner_3 from "../../assets/Banners/main_banner_3.png";
import "./banners.scss";

function Banners() {
  const banners = [banner_1, banner_2, banner_3];
  const { current, containerRef, handleScroll } = useCarousel();

  return (
    <div className="banners-wrapper">
      <div id="banners-container" onScroll={handleScroll} ref={containerRef}>
        {banners.map((banner, i) => (
          <img key={i} src={banner} alt={`Banner ${i + 1}`} />
        ))}
      </div>

      <div className="bottom_banner">
        <button id="banner_button">Conheça agora!</button>
        <div className="indicators">
          {banners.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === current ? "active" : ""}`}
              onClick={() =>
                containerRef.current.scrollTo({
                  left: i * containerRef.current.clientWidth,
                  behavior: "smooth",
                })
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Banners;
