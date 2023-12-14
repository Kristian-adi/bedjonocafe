import React from "react";
import logo from '../../assets/bedjono_logoT.png';
import { FaRegEnvelope, FaCaretRight, FaFacebookF, FaInstagram } from "react-icons/fa";
import { AiOutlinePhone } from 'react-icons/ai';
import { MdOutlineLocationOn } from 'react-icons/md';
import './footer.css';

const Footer = () => {
    return (
    <footer className="footer">
        <div className="footer__grid container grid">
            <div className="footer__content">
                <a href="/" className="footer__logo">
                    <img src={ logo } alt='' className="footer__logo-img"/>
                </a>

                <p className="footer__description">
                Silahkan mampir dan hubungi kami di nomor telefon dan keteraangan lokasi dibawah ini:
                </p>

                <ul className="footer__contact">
                    <li className="footer__contact-item">
                        <AiOutlinePhone className="icon" /> +62 882-0058-81285
                    </li>

                    <li className="footer__contact-item">
                        <MdOutlineLocationOn className="icon" /> Jalan Agung Timur No.113 <br/>Mojosongo<br/>Kecamatan Jebres<br/> Kota Surakarta<br/> Jawa Tengah 57127<br/>Indonesia
                    </li>

                    <li className="footer__contact-item">
                        <FaRegEnvelope className="icon" /> info@example.com
                    </li>
                </ul>
            </div>

            <div className="footer__content">
                <h3 className="footer__title">Quick Links</h3>

                <ul className="footer__links">
                    <li>
                        <a href="#about" className="footer__link">
                            <FaCaretRight className="icon" /> About us
                        </a>
                    </li>

                    <li>
                        <a href="#menu" className="footer__link">
                            <FaCaretRight className="icon" /> Menu
                        </a>
                    </li>

                    <li>
                        <a href="#features" className="footer__link">
                            <FaCaretRight className="icon" /> Features
                        </a>
                    </li>

                    <li>
                        <a href="#gallery" className="footer__link">
                            <FaCaretRight className="icon" /> Gallery
                        </a>
                    </li>

                    <li>
                        <a href="#team" className="footer__link">
                            <FaCaretRight className="icon" /> Team
                        </a>
                    </li>

                    <li>
                        <a href="#reservation" className="footer__link">
                            <FaCaretRight className="icon" /> Reservation
                        </a>
                    </li>
                </ul>
            </div>

            <div className="footer__content">
                <h3 className="footer__title">Jam Buka Kami</h3>

                <div className="footer__opening-hour">
                    <ul className="opening__hour-list">
                        <li className="opening__hour-item">
                            <span>Minggu:</span>
                            <span>09AM - 12PM</span>
                        </li>

                        <li className="opening__hour-item">
                            <span>Senin:</span>
                            <span>09AM - 12PM</span>
                        </li>

                        <li className="opening__hour-item">
                            <span>Selasa:</span>
                            <span>09AM - 12PM</span>
                        </li>

                        <li className="opening__hour-item">
                            <span>Rabu:</span>
                            <span>09AM - 12PM</span>
                        </li>

                        <li className="opening__hour-item">
                            <span>Kamis:</span>
                            <span>09AM - 12PM</span>
                        </li>

                        <li className="opening__hour-item">
                            <span>Jumat:</span>
                            <span>09AM - 12PM</span>
                        </li>

                        <li className="opening__hour-item">
                            <span>Sabtu:</span>
                            <span>09AM - 12PM</span>
                        </li>
                    </ul>
                </div>
                
               
            </div>

            <div className="footer__content">
                <h3 className="footer__title">Newsletter</h3>

                <p className="footer__description">
                    Subscribe Our Newsletter to Get Lastest Update and News
                </p>

                <form action="" className="subscribe__form">
                    <input type="text" placeholder="Your Email" className="form__input subscribe__input" />
                
                <button className="btn btn--flex subscribe__btn">
                    <FaRegEnvelope /> Subscribe Now
                </button>
                </form>
                <div className="footer__socials">
                    <h3 className="footer__social-follow">Follow Us:</h3>

                    <div className="footer__social-links">
                        <a href="/" className="footer__social-link">
                    <FaFacebookF /></a>

                    <div className="footer__social-links">
                        <a href="/" className="footer__social-link">
                    <FaInstagram /></a>
                    </div>
                    </div>
                </div>
                </div>
        </div>

        <p className="copyright__text">
            @ Copyright 2023 <span>Bedjono-Kristian</span> All Rights
        </p>
    </footer>
    )
}

export default Footer