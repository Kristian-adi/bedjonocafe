import React from "react";
import coffeeShop from '../../assets/coffeshop.png';
import experiences from '../../assets/experiences.png';
import coffeecup from '../../assets/coffeecup.png';
import chef from '../../assets/chef.svg';
import './stats.css'

const Stats = () => {
    return (
        <section className="stats section">
            <div className="stats__grid container grid">
                <div className="stats__item">
                    <div className="stats__img-wrapper">
                        <img src={coffeeShop} alt="" className="stats__img" />
                    </div>

                    <div>
                        <p className="stats__no">3</p>
                        <h3 className="stats__title">total branches</h3>
                    </div>
                </div>

                <div className="stats__item">
                    <div className="stats__img-wrapper">
                        <img src={coffeecup} alt="" className="stats__img" />
                    </div>

                    <div>
                        <p className="stats__no">500+</p>
                        <h3 className="stats__title">Happy Customers</h3>
                    </div>
                </div>

                <div className="stats__item">
                    <div className="stats__img-wrapper">
                        <img src={chef} alt="" className="stats__img" />
                    </div>

                    <div>
                        <p className="stats__no">12</p>
                        <h3 className="stats__title">professional chef and barista </h3>
                    </div>
                </div>

                <div className="stats__item">
                    <div className="stats__img-wrapper">
                        <img src={experiences} alt="" className="stats__img" />
                    </div>

                    <div>
                        <p className="stats__no">10</p>
                        <h3 className="stats__title">years of experience</h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;