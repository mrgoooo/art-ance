import { useState } from "react";
import NavBar from "./Components/NavBar";
import MainPage from "./Components/MainPage";
import ShineText from "./Components/ShineText";
import Grid from "./Components/Grid";
import MotText from "./Components/MotText";
import Advantages from "./Components/Advantages";
import Carousel from "./Components/Carousel";
import WhyComponent from "./Components/WhyComponent";
import OpinionsCarousel from "./Components/OpinionsCarousel";
import GradientAnimation from "./Components/Animation";

import "./App.css";

function App() {
  return (
    <body>
      <main>
        <section id="intro">
          <MainPage />
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

        <section id="dd">
          <WhyComponent />
        </section>

        <section id="dd">
          <OpinionsCarousel />
        </section>
      </main>
    </body>
  );
}

export default App;
