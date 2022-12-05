import React from "react";
import "../styles/default.css";
import "../styles/coffee.css";

const CoffeePage = () => {
  return (
    <section className="row" id="main-container-row">
      <div className="col-2"></div>

      <div className="col-8" id="main-container">
        <div className="logo-div">
          <h1 id="logo-identity">IDENTITY</h1>
          <h3 id="logo-coffees">COFFEES</h3>
        </div>
        <div className="jumbotron"></div>
        <div className="coffee-details-div">
          <h4 id="coffee-title">Directly sourced, single-origin coffees</h4>
          <p className="coffee-ptag">
            We believe coffee is about people. We designed our shops as places
            for Sacramentans to gather and move the world forward. We built our
            company to provide for our families and those of our team members
            and farming partners. This is why we work directly with coffee
            producers in Central and South America to procure small lots of
            exquisitely delicious coffees.
          </p>
          <p className="coffee-ptag">
            Over time we have forged long lasting relationships that reflect a
            mutuality in benefit and in love of coffee. Co-owner Lucky Rodrigues
            visits our farming partners, stays in their homes, and relishes in
            sharing the inherent qualities of the work put into each small lot
            of coffee cherry with our Sacramento customers.
          </p>
        </div>

        <div
          id="demo"
          className="carousel slide"
          data-ride="carousel"
          data-pause="hover"
        >
          {/*Indicators*/}
          <ul className="carousel-indicators">
            <li data-target="#demo" data-slide-to="0" className="active"></li>
            <li data-target="#demo" data-slide-to="1"></li>
            <li data-target="#demo" data-slide-to="2"></li>
            <li data-target="#demo" data-slide-to="3"></li>
            <li data-target="#demo" data-slide-to="4"></li>
            <li data-target="#demo" data-slide-to="5"></li>
            <li data-target="#demo" data-slide-to="6"></li>
          </ul>

          {/*The Slideshow*/}
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={require("../images/sourceluckronpatio.png")}
                alt="Lucky and Ronaldo"
              />
            </div>
            <div className="carousel-item">
              <img
                src={require("../images/sourcecampo.png")}
                alt="Campo Santo"
              />
            </div>
            <div className="carousel-item">
              <img
                src={require("../images/sourcebushes.png")}
                alt="Coffee Bushes"
              />
            </div>
            <div className="carousel-item">
              <img
                src={require("../images/sourcepickerman.png")}
                alt="Coffee Picker Male"
              />
            </div>
            <div className="carousel-item">
              <img
                src={require("../images/sourcepickerwoman.png")}
                alt="Coffee Picker Female"
              />
            </div>
            <div className="carousel-item">
              <img
                src={require("../images/sourcecherrybasket.png")}
                alt="Coffee Basket"
              />
            </div>
            <div className="carousel-item">
              <img
                src={require("../images/sourceccherrypile.png")}
                alt="Coffee Basket"
              />
            </div>
          </div>

          {/*Left and Right Controls*/}
          <a className="carousel-control-prev" href="#demo" data-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </a>
          <a className="carousel-control-next" href="#demo" data-slide="next">
            <span className="carousel-control-next-icon"></span>
          </a>
        </div>
      </div>
      <div className="col-2"></div>
    </section>
  );
};
export default CoffeePage;
