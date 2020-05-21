import React from "react";
import "./landing.css";

const LandingPage = () => {
  return (
    <>
      <div id="wrapper">
        <div id="right">
          <div id="showcase">
            <div className="showcase-content">
              <h1 className="showcase-text">
                <strong>get your best books series </strong>
              </h1>
            </div>
          </div>
        </div>
        <div id="left">
          <div id="signin">
            <div>
              <h3> creativeThink </h3>
              <p> read your favourite episodes and books @ careativeThink</p>
            </div>

            <div className="links">
              <strong>
                {" "}
                <a href="/signin">Signin to get started</a>
              </strong>
            </div>
            <div className="or">
              <hr className="bar" />
              <span>OR</span>
              <hr className="bar" />
            </div>
            <a href="/signup" class="secondary-btn">
              Create an account
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
