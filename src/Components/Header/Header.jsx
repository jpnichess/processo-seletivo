import "./header.scss";
import { useState, useEffect } from "react";

// LOGOS IMPORT
import white_logo from "../../assets/Logos/white_logo.png";
import black_logo from "../../assets/Logos/black_logo.png";

// WHITE ICONS IMPORT
import white_icon_menu from "../../assets/Icons/WhiteIcons/icon_menu.png";
import white_icon_search from "../../assets/Icons/WhiteIcons/icon_search.png";
import white_icon_bag from "../../assets/Icons/WhiteIcons/icon_bag.png";
import white_icon_user from "../../assets/Icons/WhiteIcons/icon_user.png";

// BLACK ICONS IMPORT
import black_icon_menu from "../../assets/Icons/BlackIcons/icon_menu.png";
import black_icon_search from "../../assets/Icons/BlackIcons/icon_search.png";
import black_icon_bag from "../../assets/Icons/BlackIcons/icon_bag.png";
import black_icon_user from "../../assets/Icons/BlackIcons/icon_user.png";

// BANNER IMPORT
import banner_1 from "../../assets/Banners/main_banner_1.png";
import { HiChevronDown, HiChevronRight } from "react-icons/hi2";

function Header({ cartCount }) {
  const [scroll, setScroll] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [openSapatos, setOpenSapatos] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={scroll ? "scroll" : ""}>
      <div className="header-content">
        <div>
          <button
            className="menu_button"
            onClick={() => setOpenMenu(!openMenu)}
          >
            <img src={scroll ? black_icon_menu : white_icon_menu} alt="menu" />
          </button>
          <button className="btn_default">
            <img
              src={scroll ? black_icon_search : white_icon_search}
              alt="search"
            />
          </button>
        </div>

        <img src={scroll ? black_logo : white_logo} alt="logo" />

        <div>
          <button className="btn_default">
            <img src={scroll ? black_icon_user : white_icon_user} alt="user" />
          </button>

          <button className="bag_btn">
            <img src={scroll ? black_icon_bag : white_icon_bag} alt="cart" />
            {cartCount >= 0 && (
              <span
                className="cart_count"
                style={{ color: scroll ? "black" : "white" }}
              >
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      <div className={`sidebar ${openMenu ? "open" : ""}`}>
        <div id="top_menu">
          <img src={black_logo} alt="logo" />
          <button className="close_button" onClick={() => setOpenMenu(false)}>
            x
          </button>
        </div>

        <div id="menu_banner">
          <img src={banner_1} alt="banner" />
          <div id="bottom_info">
            <p>Celebration - 20 Anos</p>
            <button>Conheça</button>
          </div>
        </div>

        <nav className="menu_nav">
          <ul>
            <li className="menu_section">Liquida</li>

            <li className="categories">
              <div
                className="category_main"
                onClick={() => setOpenSapatos(!openSapatos)}
              >
                <span>Sapatos</span>
                {openSapatos ? <HiChevronDown /> : <HiChevronRight />}
              </div>

              {openSapatos && (
                <ul className="sub_category">
                  {[
                    "Scarpins",
                    "Mocassim",
                    "Sapatilhas",
                    "Mules",
                    "Peep Toe",
                    "Oxford",
                  ].map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </li>

            {["Sandálias", "Botas", "Tênis"].map((item, i, arr) => (
              <li className="menu_item" key={i}>
                <span>{item}</span>
                {i !== arr.length && <HiChevronRight />}
              </li>
            ))}

            <li className="outlet">Outlet</li>
          </ul>
        </nav>
      </div>

      {openMenu && (
        <div className="overlay" onClick={() => setOpenMenu(false)} />
      )}
    </header>
  );
}

export default Header;
