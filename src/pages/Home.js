import React from "react";
import Profile from "../images/Profile.png";

function About() {
  return (
    <div className="Grid-Container">
      <div className="Bio">
        <img src={Profile} className="Profile" alt="../images/Profile.png" />
        <div className="Container">
          <p>Alexander Yarnell</p>
        </div>
      </div>
      <div className="Info">
        <hr />
        <div className="Phone">
          <h2>Phone</h2>
          <h3>1+ (620)-363-4966</h3>
        </div>
        <hr />
        <div>
          <h2>Email</h2>
          <h3>yarnell.alexander@yahoo.com</h3>
        </div>
        <hr />
        <div>
          <h2>GitHub</h2>
          <h3>Alexander-Yarnell</h3>
        </div>
        <hr />
      </div>
      <div className="Description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
      <div className="Projects">
        <div>
          <div class="card" style={{ width: "auto" }} />
          <img src="..." class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div>
          <div class="card" style={{ width: "auto" }} />
          <img src="..." class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div>
          <div class="card" style={{ width: "auto" }} />
          <img src="..." class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
