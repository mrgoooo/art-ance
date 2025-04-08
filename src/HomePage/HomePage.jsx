import { useState } from "react";

import ShineText from "./ShineText";
import Grid from "./Grid";
import MotText from "./MotText";
import Advantages from "./Advantages";
import Carousel from "./Carousel";
import WhyComponent from "./WhyComponent";
import OpinionsCarousel from "./OpinionsCarousel";
import GradientAnimation from "./Animation";
import HeroHeading from "./Ofertapage";
import Kontakt from "./Kontakt";
import LastFooter from "../Components/LastFooter";

function HomePage() {
  return (
    <div>
      <div>
        <section id="caption">
          <GradientAnimation />
        </section>

        <section id="shine_text">
          <ShineText />
        </section>

        <section id="stats">
          <Grid />
        </section>

        <section id="seccaption">
          <MotText />
        </section>

        <section id="advantages">
          <Advantages />
        </section>

        <section id="advantages">
          <Carousel />
        </section>

        <section id="whyus">
          <WhyComponent />
        </section>

        <section id="opinions">
          <OpinionsCarousel />
        </section>

        <section id="kontakt">{/*<Kontakt />*/}</section>
      </div>
    </div>
  );
}

export default HomePage;
