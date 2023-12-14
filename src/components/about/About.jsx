import React from "react";
import "./about.css";
import aboutImg from "../../assets/about-img.jpg";
import { FiCheck } from 'react-icons/fi'

const About = () => {
  return (
    <section className="about section" id="About">
      <div className="about__grid container grid">
        <div className="about__img-wrapper">
          <img src={aboutImg} alt="" className="about__img" />
        </div>

        <div className="about__content">
          <h2 className="section__title" data-title="About Us">
            Fresh Quality Coffe and Organic Mbako
          </h2>

          <p className="about__description">
            Bermula dari keinginan memberikan lokasi ngudud mbako yang nyaman, pasti butuh minum juga dan kopi adalah perpaduan yang pas bagi para penikmat "linthing dewe". Tapi semua boleh mampir kok, banyak menu selain kopi juga.
          </p>

          <div className='about__details grid'>
            <p className="about__details-description">
                <FiCheck className='about__details-icon'/>
                Perpaduan antara rasa
            </p>

            <p className="about__details-description">
                <FiCheck className='about__details-icon'/>
                Cita rasa yang khas
            </p>

            <p className="about__details-description">
                <FiCheck className='about__details-icon'/>
                Beberapa sajian klasik
            </p>
          </div>

          <a href="#team" className="btn">Our Experts</a>
        </div>
      </div>
    </section>
  );
};

export default About;
