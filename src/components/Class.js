import React from "react";
import Classbody from "./Classbody";
import Sessionmap from "./Sessionmap";

function Class() {
  return (
    <>
      <div className="container">
        <div className="compbody">
          <div className="head">
            <div className="headtxt">Please watch the recording.</div>
            <button className="headbtn">Play Recording</button>
          </div>
          <div className="cardbody">
            <Classbody/>
          </div>
          <div className="act">Activities</div>
          <div className="cardbody">
            Usually, map provides you with a simple and expressive syntax to
            change an array to another with elements you want, e.g. var i So if
            you aren't expecting a new array but just doing something to e feels
            a better practice to me. But sure this is just a matter of s
          </div>
        </div>

        <div className="compside">
          <div className="map">
            <div className="roadmap">Session Roadmap</div>
            <Sessionmap />
          </div>
          <div className="mapx">
            <div className="roadmapx">Additional Sessions</div>
            <Sessionmap />
          </div>
        </div>
      </div>
    </>
  );
}

export default Class;
