import React from "react";
import chooseImg from "../../assets/choose.jpg";
import coffeMug from "../../assets/coffee-mug.svg";
import coffeBeans2 from "../../assets/coffee-beans-2.svg";
import coffeBeans3 from "../../assets/coffee-beans-3.svg";
import "./choose.css";

const Choose = () => {
  return (
    <section className="choose section">
      <div className="choose__grid container grid">
        <div className="choose__content">
          <h2 className="section__title title-left" data-title="Silahkan Sekedar Mampir">
            Kami menyajikan racikan yang bisa menjadi favorit anda
          </h2>

          <p className="choose__description">Kaya variasi rasa dari bijih segar, pilihan dan pengolahan</p>

          <div className="choose__details grid">
            <div className="choose__details-item">
            <div className="choose__details-img-wrapper">
              <img src={coffeMug} alt="" className="choose__detail img" />
            </div>

            <div>
              <h3 className="choose__details-title">Aroma yang khas</h3>
              <p className="choose__details-description">loremipsum</p>
            </div>
            </div>

            <div className="choose__details-item">
            <div className="choose__details-img-wrapper">
              <img src={coffeBeans2} alt="" className="choose__detail img" />
            </div>

            <div>
              <h3 className="choose__details-title">Bijih asli kopi</h3>
              <p className="choose__details-description">loremipsum</p>
            </div>
            </div>

            <div className="choose__details-item">
            <div className="choose__details-img-wrapper">
              <img src={coffeBeans3} alt="" className="choose__detail img" />
            </div>

            <div>
              <h3 className="choose__details-title">Rasa khas klasik</h3>
              <p className="choose__details-description">loremipsum</p>
            </div>
            </div>
            </div>
          </div>

          <img src={chooseImg} alt='' className="choose__img" />
        </div>
    </section>
  );
};

export default Choose;
