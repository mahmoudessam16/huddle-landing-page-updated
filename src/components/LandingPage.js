import React from 'react'
import logo from '../images/logo.svg';
import landingPhoto from '../images/illustration-mockups.svg';
import '../sass/landingPage.scss';

const LandingPage = () => {
    return (
        <>
            <header>
                <img src={logo} alt='logo' />
                <button>Try It Free</button>
            </header>
            <main>
                <div className='info'>
                    <h1>Build The Community Your Fans Will Love</h1>
                    <p>
                        Huddle re-imagines the way we build communities. You have a voice, but so does your audience. 
                        Create connections with your users as you engage in genuine discussion. 
                    </p>
                    <button>Get Started For Free</button>
                </div>
                <div className='landing-photo'>
                    <img src={landingPhoto} alt='Landing-Photo' />
                </div>
            </main>
        </>
    )
}

export default LandingPage
