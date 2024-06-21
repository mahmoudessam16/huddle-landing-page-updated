import React from 'react'
import '../sass/footer.scss'
import messageIcon from '../images/icon-messages.svg';
import location from '../images/icon-location.svg';
import phone from '../images/icon-phone.svg';
import email from '../images/icon-email.svg';
import { BsFacebook, BsTwitterX, BsInstagram } from 'react-icons/bs';

const Footer = () => {
    return (
        <footer>
            <div className='logo'>
                <img src={messageIcon} alt='message' />
                <h1 style={{ color: "#fff" }}>Huddle</h1>
            </div>
            <div className='two'>
                <div className='info'>
                    <div className='location'>
                        <img src={location} alt='location' />
                        <p>
                            Generate meaningful discussions with your audience and build a strong,
                            loyal community. Think of the insightful conversations
                        </p>
                    </div>
                    <div className='phone'>
                        <img src={phone} alt='phone' />
                        <p>+1-543-123-4567</p>
                    </div>
                    <div className='email'>
                        <img src={email} alt='email' />
                        <p>example@huddle.com</p>
                    </div>
                </div>
                <ul>
                    <li>About Us</li>
                    <li>What We Do</li>
                    <li>FAQ</li>
                </ul>
                <ul>
                    <li>Career</li> 
                    <li>Blog</li>
                    <li>Contact Us</li>
                </ul>
                <div className='social'>
                    <BsFacebook size={20} color={'#fff'} className='icon' />
                    <BsTwitterX size={20} color={'#fff'} className='icon' />
                    <BsInstagram size={20} color={'#fff'} className='icon' />
                </div>
            </div>
            <p className='copyright'>&copy; Copyright 2024 Huddle. All rights reserved.</p>
        </footer>
    )
}

export default Footer
