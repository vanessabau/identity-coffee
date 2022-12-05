import React from "react";
import "../styles/default.css";
import "../styles/team.css";

const TeamPage = () => {
  return (
    <section className="row" id="main-container-row">
      <div className="col-2"></div>
      <div className="col-8" id="main-container">
        <div className="logo-div">
          <h1 id="logo-identity">IDENTITY</h1>
          <h3 id="logo-coffees">COFFEES</h3>
        </div>
        <div className="content-title-div">
          <h2 className="team-header">INTERESTED IN WORKING AT IDENTITY?</h2>
          <h2 className="team-header">SWEET.</h2>
        </div>
        <div className="team-details-div">
          <h4 className="team-h4">Here is a little about us:</h4>
          <br />
          <p className="team-ptag">
            We're a small and growing company that seasonally sources our
            coffees directly from farmers. We roast everything on-site in small
            batches, multiple times per week at our 4,500-sf flagship Cafe &
            Roasterie in Midtown Sacramento.
          </p>
          <p className="team-ptag">
            Our goal is to curate tasty things in a place for people to
            socialize, un-socialize, draw, compute, or whatever really. THe
            point is simply good people, good coffee, good eats, good place.
          </p>
          <p className="team-ptag">
            There are a lot of ideas about what is behind working in our
            industry so we'd like to share with you the skill sets that are
            required in order to become considered for the job. They are as
            follows:
          </p>
          <br />
          <h4 className="team-h4">
            <i>Personality & Interests</i>
          </h4>
          <br />
          <ul>
            <i>
              <li>Have a genuine interest for the service industry</li>
              <li>Want to learn about what goes into great coffee</li>
              <li>Enjoy cleaning. A lot. All day long</li>
              <li>Eclectic and open-minded</li>
            </i>
          </ul>
          <br />
          <h4 className="team-h4">
            <i>Social Skills</i>
          </h4>
          <br />
          <ul>
            <i>
              <li>Possess a naturally sociable disposition</li>
              <li>
                Capable of personable and casual interactions with customers
              </li>
              <li>Not offended easily and can joke within a realm of irony</li>
              <li>
                Comfortable receiving direct criticism without taking it
                personally
              </li>
            </i>
          </ul>
          <br />
          <h4 className="team-h4">
            <i>Communication Skills</i>
          </h4>
          <br />
          <ul>
            <i>
              <li>
                Must be capable of clear verbal communication at an audible
                level in a loud environment
              </li>
              <li>Possess both an assertive and directive demeanor</li>
            </i>
          </ul>
          <br />
          <h4 className="team-h4">
            <i>Information Retention</i>
          </h4>
          <ul>
            <i>
              <li>
                Able to retain both general and specific information no matter
                the subject
              </li>
              <li>Capable of memorizing steps of protocols quickly</li>
              <li>
                Must be able to follow verbal and written instructions correctly
              </li>
            </i>
          </ul>
          <br />
          <h4 className="team-h4">
            <i>Reliability</i>
          </h4>
          <ul>
            <i>
              <li>Must have reliable transportation to work</li>
              <li>
                Do not call in sick often or constantly need to trade shifts
              </li>
              <li>Have open or mostly open availability</li>
            </i>
          </ul>
          <br />
          <h4 className="team-h4">
            <i> Physical Ability </i>
          </h4>
          <ul>
            <i>
              <li>Lift 20 lbs without strain</li>
              <li>Remain actively on your feet for up to 6 straight hours</li>
              <li>
                Flexible enough to clean or retrieve items on the floor or in
                tight spaces
              </li>
              <li>Solid hand-eye coordination</li>
            </i>
          </ul>
          <br />
          <h6 className="team-ptag">
            <em>
              If you posses these qualities and want to be considered for a
              position, bring your resume in person to our Midtown Roasterie at
              1430 28th Street, Sacramento, CA 95816
            </em>
          </h6>
        </div>
      </div>
      <div className="col-2"></div>
    </section>
  );
};

export default TeamPage;
