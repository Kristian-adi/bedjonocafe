import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Features from "./components/features/Features";
import Menu from "./components/menu/Menu";
import Choose from "./components/choose/Choose";
import Stats from "./components/stats/Stats";
import Gallery from "./components/gallery/Gallery";
import Offer from "./components/offer/Offer";
import Team from "./components/team/Team";
import Reservation from "./components/reservation/Reservation";
import Testimonial from "./components/testimonial/Testimonial";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
    	<Home/>
      <Header />
      <About />
      <Features />
      <Menu />
      <Choose />
      <Stats />
      <Gallery />
      <Offer />
      <Team />
      <Reservation />
      <Testimonial />
      <Footer />
    </>
  );
}

export default App;
