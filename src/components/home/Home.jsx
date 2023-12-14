import React from "react";
import './home.css';

const Home =() => {
    return (
        <section className="home" id='home'>
            <div className="home__container container">
                <div className="home__content">
                <span className="home__subtitle">Welcome to Kedai Bedjono!</span>
                <h1 className="home__title">
                        Sruput kopi mu <br /> linting mbako mu <br />nikmati seperti <br />di rumah sendiri
                </h1>


                <div className="home__btns">
                    <a href="#menu" className="btn">Check menu</a>

                    <a href="#reservation" className="btn home__btn">Book Table</a>
                </div>
                </div>
                </div>
                </section>
    )
}

export default Home