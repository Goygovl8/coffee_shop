import "./App.css";

import logo from "./images/Logo.png";
import search from "./images/search.png";
import shopping from "./images/shopping.png";
import bg from "./images/bg.png";

import partners1 from "./images/partners1.png";
import partners2 from "./images/partners2.png";
import partners3 from "./images/partners3.png";
import partners4 from "./images/partners4.png";
import partners5 from "./images/partners5.png";

import underline from "./images/Underline.png";

import product1 from "./products/product1.png";
import product2 from "./products/product2.png";
import product3 from "./products/product3.png";

import image from "./images/Image.png";

import usp from "./images/usp.png";
import usp2 from "./images/usp2.png";
import usp3 from "./images/usp3.png";
import usp4 from "./images/usp4.png";

import image2 from "./images/image2.png";

import image5 from "./images/image5.png";
import image4 from "./images/image4.png";
import image3 from "./images/image3.png";

function App() {
  return (
    <div className="App">
      <div className="header_top">
        <p>FREE SHIPPING ALL OVER INDIA</p>
      </div>
      <header>
        <div className="nav_bar">
          <div className="site_header">
            <img src={logo} alt="logo" />
            <p>Equipments</p>
            <p>Brew Guide</p>
            <p>Locations</p>
            <p>About</p>
            <p>Journal</p>
            <p>Menu</p>
          </div>

          <div className="header_actions">
            <img src={search} alt="search" />
            <img src={shopping} alt="shopping" />
            <div className="log_in">Log In</div>
          </div>
        </div>

        <div className="bg">
          <img src={bg} alt="bg" />
          <div className="bg-text">
            <span className="title">ROASTERY</span>
            <span className="subtitle">Coffee House</span>
          </div>
        </div>

        <div className="main_content">
          <div className="partners">
            <img src={partners1} alt="partners1" />
            <img src={partners2} alt="partners2" />
            <img src={partners3} alt="partners3" />
            <img src={partners4} alt="partners4" />
            <img src={partners5} alt="partners5" />
          </div>

          <div className="section_header">
            <p>OUR BEST SELLERS</p>
            <img src={underline} alt="underline" />
          </div>

          <div className="products_grid">
            <div className="product_card">
              <div
                className="product_image_wrapper"
                style={{ backgroundColor: "#FCE7B2" }}
              >
                <img src={product1} alt="Baarbara Estate" />
              </div>
              <div className="product_info">
                <h3 className="product_name">Baarbara Estate – Pineapple</h3>
                <div className="product_price_row">
                  <span className="product_price">₹ 525</span>
                  <span className="product_weight">250 gms</span>
                </div>
                <button className="select_options_btn">SELECT OPTIONS</button>
              </div>
            </div>

            <div className="product_card">
              <div
                className="product_image_wrapper"
                style={{ backgroundColor: "#E5E5E5" }}
              >
                <img src={product2} alt="Cold Brew Blend" />
              </div>
              <div className="product_info">
                <h3 className="product_name">Cold Brew Blend</h3>
                <div className="product_price_row">
                  <span className="product_price">₹ 445</span>
                  <span className="product_weight">250 gms</span>
                </div>
                <button className="select_options_btn">SELECT OPTIONS</button>
              </div>
            </div>

            <div className="product_card">
              <div
                className="product_image_wrapper"
                style={{ backgroundColor: "#E5E5E5" }}
              >
                <img src={product2} alt="Espresso Milk Blend" />
              </div>
              <div className="product_info">
                <h3 className="product_name">Espresso Milk Blend</h3>
                <div className="product_price_row">
                  <span className="product_price">₹ 445</span>
                  <span className="product_weight">250 gms</span>
                </div>
                <button className="select_options_btn">SELECT OPTIONS</button>
              </div>
            </div>

            <div className="product_card">
              <div
                className="product_image_wrapper"
                style={{ backgroundColor: "#FCE7B2" }}
              >
                <img src={product1} alt="Mandalkhan Estate" />
              </div>
              <div className="product_info">
                <h3 className="product_name">Mandalkhan Estate</h3>
                <div className="product_price_row">
                  <span className="product_price">₹ 445</span>
                  <span className="product_weight">250 gms</span>
                </div>
                <button className="select_options_btn">SELECT OPTIONS</button>
              </div>
            </div>

            <div className="product_card">
              <div
                className="product_image_wrapper"
                style={{ backgroundColor: "#E5E5E5" }}
              >
                <img src={product3} alt="Mandalkhan Estate Insta Pour" />
              </div>
              <div className="product_info">
                <h3 className="product_name">Mandalkhan Estate Insta Pour</h3>
                <div className="product_price_row">
                  <span className="product_price">₹ 345</span>
                  <span className="product_weight">250 gms</span>
                </div>
                <button className="select_options_btn">SELECT OPTIONS</button>
              </div>
            </div>

            <div className="product_card">
              <div
                className="product_image_wrapper"
                style={{ backgroundColor: "#FCE7B2" }}
              >
                <img src={product1} alt="Monsoon Malabar" />
              </div>
              <div className="product_info">
                <h3 className="product_name">Monsoon Malabar</h3>
                <div className="product_price_row">
                  <span className="product_price">₹ 470</span>
                  <span className="product_weight">250 gms</span>
                </div>
                <button className="select_options_btn">SELECT OPTIONS</button>
              </div>
            </div>

            <div className="product_card">
              <div
                className="product_image_wrapper"
                style={{ backgroundColor: "#E5E5E5" }}
              >
                <img src={product3} alt="Monsoon Malabar Insta Pour" />
              </div>
              <div className="product_info">
                <h3 className="product_name">Monsoon Malabar Insta Pour</h3>
                <div className="product_price_row">
                  <span className="product_price">₹ 345</span>
                  <span className="product_weight">250 gms</span>
                </div>
                <button className="select_options_btn">SELECT OPTIONS</button>
              </div>
            </div>

            <div className="product_card">
              <div
                className="product_image_wrapper"
                style={{ backgroundColor: "#E5E5E5" }}
              >
                <img src={product3} alt="Monsoon Malabar Insta Pour" />
              </div>
              <div className="product_info">
                <h3 className="product_name">Monsoon Malabar Insta Pour</h3>
                <div className="product_price_row">
                  <span className="product_price">₹ 345</span>
                  <span className="product_weight">250 gms</span>
                </div>
                <button className="select_options_btn">SELECT OPTIONS</button>
              </div>
            </div>
          </div>

          <div className="about_section">
            <div className="cafe_content">
              <p className="cafe_header">OUR CAFE</p>
              <img src={underline} alt="underline" className="cafe_underline" />
              <p className="cafe_description">
                Find Roastery coffee house near you to experience finest <br />
                coffee selections, live roasting spaces and cafes that are{" "}
                <br />
                designed to give calming coffee estate banglow <br />{" "}
                experience.
              </p>
              <button className="view_cafes_btn">VIEW CAFES &gt;</button>
            </div>
            <div className="cafe_image">
              <img src={image} alt="Our Cafe" />
            </div>
          </div>

          <div className="features">
            <div className="features_item">
              <img src={usp} alt="usp" />
              <img src={usp2} alt="usp2" />
              <img src={usp3} alt="usp3" />
              <img src={usp4} alt="usp4" />
            </div>
          </div>

          <div className="journal_banner">
            <div className="journal_content">
              <div className="journal_text_block">
                <p>
                  Roastery’s <br /> Coffee Journal
                </p>
                <button className="view_cafes_btn2">VIEW CAFES &gt;</button>
              </div>
              <div className="foto">
                <img src={image2} alt="image2" />
              </div>
            </div>
          </div>
          <div className="text">
            KEY OFFERINGS
            <img src={underline} alt="underline" />
          </div>
          <div className="offerings_grid">
            <img src={image5} alt="image5" />
            <img src={image3} alt="image3" />
            <img src={image4} alt="image4" />
          </div>
          <div className="brew_guide_header">
            <div className="brew_guide_title">
              <div className="text2">
                BREW GUIDE
                <img src={underline} alt="underline" />
              </div>
              <iframe className="video" src="https://rutube.ru/play/embed/aff7e9fc676938c6dbc2760a614c52e2/" allow="clipboard-write; autoplay" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
