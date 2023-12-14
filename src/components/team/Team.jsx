import React from "react";
import chef1 from '../../assets/team-1.jpg';
import chef2 from '../../assets/team-2.jpg';
import chef3 from '../../assets/team-3.jpg';
import chef4 from '../../assets/team-4.jpg';
import {FaFacebookF, FaTwitter, FaLinkedin, FaInstagram} from 'react-icons/fa'
import './team.css'


const Team = () => {
    return (
        <section className="team section" id="team">
           <h2 className="section__title" data-title='Chefs'>
            Para punggawa di Warung kami
           </h2>

           <div className="team__grid grid container">

            <div className="team__item">
                <img src={chef1} alt="" className="team__img" />

                <div className="team__data">
                    <h3 className="team_title">Mbak Kriwil</h3>
                    <p className="team__job">Senior Chef</p>
                </div>

                <div className="team__socials">
                    <a href="/" className="team__social-link">
                        <FaFacebookF/></a>

                    <a href="/" className="team__social-link">
                        <FaTwitter/></a>

                    <a href="/" className="team__social-link">
                        <FaLinkedin/></a>

                    <a href="/" className="team__social-link">
                        <FaInstagram/>
                    </a>
                </div>
            </div>

            <div className="team__item">
                <img src={chef2} alt="" className="team__img" />

                <div className="team__data">
                    <h3 className="team_title">Mas Alus</h3>
                    <p className="team__job">Senior Chef</p>
                </div>

                <div className="team__socials">
                    <a href="/" className="team__social-link">
                        <FaFacebookF/></a>

                    <a href="/" className="team__social-link">
                        <FaTwitter/></a>

                    <a href="/" className="team__social-link">
                        <FaLinkedin/></a>

                    <a href="/" className="team__social-link">
                        <FaInstagram/>
                    </a>
                </div>
            </div>

            <div className="team__item">
                <img src={chef3} alt="" className="team__img" />

                <div className="team__data">
                    <h3 className="team_title">Mas Sumeh</h3>
                    <p className="team__job">Senior Chef</p>
                </div>

                <div className="team__socials">
                    <a href="/" className="team__social-link">
                        <FaFacebookF/></a>

                    <a href="/" className="team__social-link">
                        <FaTwitter/></a>

                    <a href="/" className="team__social-link">
                        <FaLinkedin/></a>

                    <a href="/" className="team__social-link">
                        <FaInstagram/>
                    </a>
                </div>
            </div>

            <div className="team__item">
                <img src={chef4} alt="" className="team__img" />

                <div className="team__data">
                    <h3 className="team_title">Mas-mas jago masak</h3>
                    <p className="team__job">Senior Chef</p>
                </div>

                <div className="team__socials">
                    <a href="/" className="team__social-link">
                        <FaFacebookF/></a>

                    <a href="/" className="team__social-link">
                        <FaTwitter/></a>

                    <a href="/" className="team__social-link">
                        <FaLinkedin/></a>

                    <a href="/" className="team__social-link">
                        <FaInstagram/>
                    </a>
                </div>
            </div>
           </div>
           </section>
    )
}
export default Team