import React from "react";
import image1 from "../../../assets/photo1.png";
import image2 from "../../../assets/photo2.png";
import image3 from "../../../assets/photo3.png";
import image4 from "../../../assets/photo_4.png";
import image5 from "../../../assets/photo5.png";
import image6 from "../../../assets/photo6.png";
import GridGalery from "./GridGalery";

const GridGaleryContainer = () => {
  return (
    <div>
      <GridGalery
        area1={image1}
        area2={image2}
        area3={image3}
        area4={image4}
        area5={image5}
        area6={image6}
      />
x
    </div>
  );
};

export default GridGaleryContainer;
