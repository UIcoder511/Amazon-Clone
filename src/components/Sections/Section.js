import React from "react";
import Bg from "./amazonbg.jpg";
import "./Section.css";
import { AutoRotatingCarousel, Slide } from "material-auto-rotating-carousel";

function Section() {
  return (
    <section>
      {/* <div className="images__bg__carousel">
        <AutoRotatingCarousel
          open={true}
          onClose={true}
          style={{ position: "absolute" }}
          landscape={true}
          autoplay={false}
        >
          <Slide media={<img src={Bg} />} />
          <Slide media={<img src={Bg} />} />
          <Slide media={<img src={Bg} />} />
        </AutoRotatingCarousel>
      </div> */}
      <img src={Bg} className="bg__image" />
    </section>
  );
}

export default Section;
