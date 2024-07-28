import React from "react";
import Slider from "react-slick";
import { chipSections } from "../sections/homepages/data";

function VariableWidth() {
  const settings = {
    className: "slider variable-width",
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {chipSections.map((chip, index) => (
          <div style={{
            marginLeft: "20px"
          }} className="border border-[#A074FF80] rounded-full py-2 px-4 text-white bg-[#FFFFFF1A] ">
            {chip.text}
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default VariableWidth;
