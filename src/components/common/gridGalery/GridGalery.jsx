import React from "react";
import "./gridGalery.css";

const GridGalery = (props) => {
  const { area1, area2, area3, area4, area5, area6 } = props;
  return (
    <div className="galeryGrid">
      <div className="boxArea1 box">
        <img src={area1} alt="" />
      </div>
      <div className="boxArea2 box">
        <img src={area2} alt="" /> 
      </div>
      <div className="boxArea3 box">
        <img src={area3} alt="" />
      </div>
      <div className="boxArea4 box">
        <img src={area4} alt="" />
      </div>
      <div className="boxArea5 box">
        <img src={area6} alt="" />
      </div>
      <div className="boxArea6 box">
        <img src={area5} alt="" />
      </div >
      <div className="boxArea7">
              <h6>create by <a href="https://github.com/
      Estebanvasquex">Estebanvasquex</a>-devChanllenges.io</h6>
      </div>


    </div>
  );
};

export default GridGalery;
