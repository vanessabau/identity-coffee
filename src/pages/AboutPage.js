import React from "react";
import "../styles/default.css";
import "../styles/about.css";

const AboutPage = () => {
  return (
    <section className="row" id="main-container-row">
      <div className="col-2"></div>
      <div className="col-8" id="main-container">
        <div className="logo-div">
          <h1 id="logo-identity">IDENTITY</h1>
          <h3 id="logo-coffees">COFFEES</h3>
        </div>
        <div className="about-details-div">
          <div id="img-wrapper">
            <img
              id="owner-pic"
              src={require("../images/luckyandryan.png")}
              alt="lucky and ryan"
            />
          </div>
          <p>It all started when...</p>

          <p>
            Lucky and Ryan got business married. They birthed a coffee company.
            It was a dream come true.
          </p>

          <p>
            A few years later they had a second baby named Westside. Westside
            brought breakfast, lunch, and happy hour in to the mix. It was a
            joyful occasion indeed.
          </p>

          <p>
            Shortly after, Simpleton cafe came into the mix with records
            spinning, breakfast and lunch, house-made biscuits and massive
            breakfast burritos. Simpleton danced to the beat of its own drum.
          </p>

          <p>
            The family has grown but it still retains the high-five vibes and
            wry humor of this duo. It has been their dream to share their vision
            of down-to-earth, quality spots with Sacramento where the only thing
            that matters are the things that matter.
          </p>

          <p>
            Post script - Covid has upended many things for many people.
            Simpleton and Westside doors shuttered permanently, and cafe
            dynamics change daily as the industry navigates our changing world.
            Nevertheless, we are still here for you, bringing a great start to
            every day via a friendly greeting and warm cup of delicious coffee.
            The simple things are what matter: good coffee and good people.
          </p>
          <p>Thank you for being part of that narrative.</p>
        </div>
        "
      </div>
      <div className="col-2"></div>
    </section>
  );
};

export default AboutPage;
