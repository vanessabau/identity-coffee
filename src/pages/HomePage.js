import React from "react";

import Banner from "../components/banner/index";

import "../styles/default.css";
import "../styles/home.css";

const HomePage = () => {
  return (
    <>
      <Banner />

      <section id="home" className="d-flex vh-100">
        <div className="container-fluid">
          <div className="row" id="hero-header">
            <div className="col">
              <h1 className="text-white" id="hero-title">
                IDENITY
              </h1>
              <p className="text-white" id="hero-subscript">
                COFFEES
              </p>
            </div>
          </div>
          <div className="row">
            <div className="text-white col" id="hero-text">
              <p className="hero-info">
                1430 28th Street, Sacramento, CA 95816, USA
              </p>
              <p className="hero-info">916-225-0738</p>
              <p className="hero-info">
                <a
                  className="hero-info"
                  href="mailto:everything@identitycoffees.com"
                >
                  everything@identitycoffees.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
