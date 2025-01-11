import React, {useEffect, useState} from 'react';
import '../styles/stylesheet.css'
import Hero from '../components/Hero.jsx';
import About from '../components/About.jsx';
import SocialButtons from '../components/SocialButtons.jsx';
import MatrixBackground from '../components/MatrixBackground.jsx';
import Loader from '../components/Loader.jsx';
import Footer from '../components/Footer.jsx';
import {SpeedInsights} from "@vercel/speed-insights/react";

function App() {
     const [isLoading, setIsLoading] = useState(true);

      useEffect(() => {
           setTimeout(() => {
              setIsLoading(false);
           }, 3000);
     }, []);

    return (
        <div className="app">
            <SpeedInsights />

            <MatrixBackground/>
            <Loader gifUrl="/handshake.gif" loadingText="HANDCOIN" isLoading={isLoading}/>
            {/*<Loader isLoading={isLoading}/>*/}
            <Hero/>
            <SocialButtons/>
            <About/>
            <Footer/>
        </div>
    );
}

export default App;
