import React, { Component } from "react";
import '../css/style.css';
import Map from '../imgs/Seattlemap.png';

class About extends Component {

  render() {
    return (
      <div className="About">
        <div className="row">
          <div className="column">
            <h1 id="About">About</h1>
          <h2 id="problem">Problem</h2>
            <p className="problem">Hygiene is a basic human necessity and a human right. Keeping public, as well as personal, hygiene up
              to standards is critical to maintain the health of a city or population.
              This requires a city like Seattle, which includes a large homeless population, to require enough
              public hygiene stations for those who need it.
              According to Seattle Magazine, a lack of 24-hour public restrooms downtown contributes to sanitation
              hazards and the spreading of diseases.
              <br></br><br></br>As of January 1st 2019, Seattle had cut funding for hygiene centers downtown, leaving the homeless
              to relieve themselves wherever and whenever they can.
              As allocating funding and continuing the upkeep of public restrooms has previously failed in
              Seattle, city council members have made an effort to position restroom inaccessibility as a general
              public health issue,
              and not just one pertaining to our unsheltered population.
              Ballard has implemented one portable restroom, while the University District’s attempt is hindered
              by disagreeable maintenance fees. <br></br><br></br>So, as Seattle slowly makes advances to attempt to fix this issue,
              we hope to help sheltered and unsheltered populations alike find alternatives close to where they
              are!</p>
      </div>
      <div className="column">
      <div className="mainContainer">
          <div className="theCard" id="card1">
              <div className="front"><h1>Interactivity</h1><p>We want to make this map interactive for users, in order to
                  gather data and create a wholesome and helpful environment.</p>
              </div>
              <div className="back"><h1>Interactivity</h1><p>Check out the reviews and comments of each hygiene space
                  on the Home Page!</p>
              </div>
          </div>
      </div>
      </div>
      <div className="column">
          <div className="mainContainer">
              <div className="theCard" id="card2">
                  <div className="front"><h1>Accessibility</h1><p>We believe that accessibility is the number one priority; 
                      access to bathrooms is a right for all!
                  </p>
                  </div>
                  <div className="back"><h1>Accessibility</h1><p>Let us know if there are any comments or concerns for improvement
                      at our emails listed down below.
                  </p>
                  </div>
              </div>
          </div>
          </div>
          <div className="column">
              <div className="mainContainer">
                  <div className="theCard" id="card3">
                      <div className="front"><h1>Ease</h1><p>We are trying to make this app as easy as possible
                          to use; no lengthy sign ups, and no overly-confusing mechanisms!</p>
                      </div>
                      <div className="back"><h1>Ease</h1><p>Quick and easy access to your nearest bathroom; check 
                          out the map on the Home Page!</p>
                      </div>
                  </div>
              </div>
              </div>
      <div className="column" id="oldMap">
          <h2 id="solution">Solution</h2>
            <p className="solution">We want to focus on this issue and create a solution that will allow anyone to get access to the
              nearest restroom that is open to public, free or paid. At the moment, the city of Seattle has
              somewhat of an interactive map,
              but it is geared generally towards homeless populations and is lackluster in design and function. Our idea is to cater
              towards all citizens and create an interactive map that shows the locations of the nearest
              restrooms, laundry, showers, etc. including ones in restaurants and stores.
              After a certain period (TBD), we will ask the user to submit feedback on whether the restroom was
              accessible, free, clean, had a child station, etc. This information will be stored to improve the
              experience for people planning to use this tool in the future.
          </p>
          <h2 id="planning">What we plan to do</h2>
            <p className="planning"> The current map for Seattle does not have the ability to zoom in and out, and lacks basic details. It is complex and does
                    not have enough affordances to make it clear how it's supposed to be used. We also plan on allowing 
                    users to add a bathroom to the current list.
            </p>
      </div>
    </div>
  </div>
    );
  }
}

export default About;