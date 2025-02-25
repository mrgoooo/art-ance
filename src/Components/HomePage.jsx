import { useState } from "react";
import NavBar from "./NavBar";
import MainPage from "./MainPage";
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

function HomePage() {
  return (
    <div>
      <div>
        <section id="caption">
          <GradientAnimation />
        </section>

        <section id="caption">
          <ShineText />
        </section>

        <section id="grid">
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

        <section id="dssd">
          <WhyComponent />
        </section>

        <section id="dvd">
          <OpinionsCarousel />
        </section>

        <section id="dvd">
          <Kontakt />
        </section>
      </div>
    </div>
  );
}

export default HomePage;
