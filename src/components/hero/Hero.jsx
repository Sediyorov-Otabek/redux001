import React from "react";
import { useDispatch } from "react-redux";
import { Carousel } from "antd";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const Hero = () => {
  const dispatch = useDispatch();
  return (
    <div className="container mx-auto my-7">
      <Carousel autoplay>
        <div>
          <img src={img1} alt="" />
        </div>
        <div>
          <img src={img2} alt="" />
        </div>
        <div>
          <img src={img3} alt="" />
        </div>
      </Carousel>
    </div>
  );
};

export default Hero;
