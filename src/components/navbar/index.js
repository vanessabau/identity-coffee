import React from "react";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import CoffeePage from "../../pages/CoffeePage";
import AboutPage from "../../pages/AboutPage";
import MidtownPage from "../../pages/MidtownPage";
import TeamPage from "../../pages/TeamPage";

import "../../styles/default.css";
import "../../styles/midtown.css";

const Navbar = () => {
  return (
    <BrowserRouter>
      <nav
        className="navbar navbar-expand-sm navbar-dark justify-content-center"
        id="navbar"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              HOME
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/coffee">
              COFFEE
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/midtown">
              MIDTOWN CAFE
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/team">
              JOIN THE TEAM
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">
              ABOUT
            </NavLink>
          </li>
        </ul>
      </nav>
      <Route path="/" exact component={HomePage}></Route>
      <Route path="/coffee" exact component={CoffeePage}></Route>
      <Route path="/midtown" exact component={MidtownPage}></Route>
      <Route path="/team" exact component={TeamPage}></Route>
      <Route path="/about" exact component={AboutPage}></Route>
    </BrowserRouter>
  );
};

export default Navbar;
