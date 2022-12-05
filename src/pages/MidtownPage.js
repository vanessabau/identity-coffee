import React from "react";
import "../styles/default.css";
import "../styles/midtown.css";

const MidtownPage = () => {
  return (
    <section className="row" id="main-container-row">
      <div className="col-2"></div>
      <div className="col-8" id="main-container">
        <div className="logo-div">
          <h1 id="logo-identity">IDENTITY</h1>
          <h3 id="logo-coffees">COFFEES</h3>
        </div>
        <div className="midtown-details-div">
          <p>
            <em>
              PLEASE NOTE - DUE TO COVID-19 WE HAVE MOVED TO TO-GO SERVEWARE
              ONLY. WE HAVE ALSO INTRODUCED GRAB-AND-GO FOOD ITEMS THAT CAN BE
              PURCHASED IN OUR CAFE. AS OF 10/10/20 WE HAVE OPENED LIMITED
              SEATING IN OUR CAFE WHILE CONTINUING TO FOLLOW STRICT HEALTH AND
              SAFETY GUIDELINES. WE APPRECIATE YOUR SUPPORT AS WE NAVIGATE THESE
              TIMES AND WISH EVERYONE GOOD HEALTH AND WELL BEING. THANK YOU AND
              STAY WELL.
            </em>
          </p>
          <p>
            Welcome to Identity Coffees. Our flagship location is also our
            coffee roasterie. Visit us in our spacious 4500-sf flagship in
            Midtown Sacramento. We feature minimalist decor with live-wood slab
            tables and seating, concrete and metal details all custom made by
            co-owner Lucky Rodrigues and his closes kin. Much love goes into our
            space and we are happy to share it with you.
          </p>
        </div>
        <div className="midtown-photos-array row">
          <img
            className="col-xs-12 col-sm-12 col-md-3 col-lg-3 midtown-pic"
            src={require("../images/ai-seating.png")}
          />
          <img
            className="col-xs-12 col-sm-12 col-md-3 col-lg-3 midtown-pic"
            src={require("../images/ai-plantdetail.png")}
          />
          <img
            className="col-xs-12 col-sm-12 col-md-3 col-lg-3 midtown-pic"
            src={require("../images/ai-roaster.png")}
          />
          <img
            className="col-xs-12 col-sm-12 col-md-3 col-lg-3 midtown-pic"
            src={require("../images/ai-lateart.png")}
          />
        </div>
        <div className="midtown-photos-array row">
          <img
            className="col-xs-12 col-sm-12 col-md-3 col-lg-3 midtown-pic"
            src={require("../images/ai-roasting.png")}
          />
          <img
            className="col-xs-12 col-sm-12 col-md-3 col-lg-3 midtown-pic"
            src={require("../images/ai-woodtable.png")}
          />
          <img
            className="col-xs-12 col-sm-12 col-md-3 col-lg-3 midtown-pic"
            src={require("../images/ai-space.png")}
          />
          <img
            className="col-xs-12 col-sm-12 col-md-3 col-lg-3 midtown-pic"
            src={require("../images/ai-wooddetail.png")}
          />
        </div>
        <div className="midtown-jumbo row">
          <img
            className="col-12"
            src={require("../images/ai-outside.jpg")}
            id="midtown-jumbo"
          />
        </div>
        <div className="midtown-info-div row">
          <div className="col">
            <p className="midtown-info-header">IDENTITY COFFEES</p>
            <p className="midtown-details">
              1430 28th Street
              <br />
              Sacramento, CA 95816
            </p>
          </div>
          <div className="col">
            <p className="midtown-info-header">OPEN DAILY</p>
            <p className="midtown-details">
              Monday-Sunday
              <br />
              7am - 6pm
            </p>
          </div>
          <div className="col">
            <p className="midtown-info-header">INFO</p>
            <p className="midtown-details">
              <a id="email-link" href="mailto:everything@identitycoffees.com">
                everything@
                <span>
                  <br />
                </span>
                identitycoffees.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default MidtownPage;
