import "./cards.scss";
import getCards from "../../hooks/cards.js";
import { useCarousel } from "../../hooks/useCarousel.js";
import { useState, useEffect } from "react";

function Cards() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function fetchCards() {
      const data = await getCards();
      setCards(data);
    }
    fetchCards();
  }, []);

  const { current, containerRef, handleScroll } = useCarousel();

  const handleIndicatorClick = (index) => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: index * containerRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="cards_wrapper">
      <h1 className="main_title">Conheça mais</h1>
      <p className="small_text">Fique por dentro de tudo que acontece na Bebecê.</p>

      <div
        className="cards_container"
        onScroll={handleScroll}
        ref={containerRef}
      >
        {cards.map((card) => (
          <div className="cards_item" key={card.id}>
            <div className="cards_image">
              <img src={card.image} alt={card.title} />
              <div className="cards_text">
                <h1 className="title">{card.title}</h1>
                <p className="description">{card.description}</p>
                <p className="smaller_text">Saiba mais!</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="cards_indicators">
        {cards.map((_, i) => (
          <span
            key={i}
            className={`card_dot ${i === current ? "active" : ""}`}
            onClick={() => handleIndicatorClick(i)}
          />
        ))}
      </div>
    </div>
  );
}

export default Cards;
