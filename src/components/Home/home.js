import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

import LogoTitle from '../../assets/images/logo-n.png';
import AnimatedLetters from '../AnimatedLetters/animatedletters';
import Logo from "./Logo/logo";
import './home.scss';


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['a', 't', 'h', 'a', 'n'];
    const jobArray = ['a', ' ', 'w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.'];

    useEffect(() => {
        const timeout = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 4000);
        return () => clearTimeout(timeout);
      }, []);

    return (
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _9`}>e</span>
                    <span className={`${letterClass} _10`}>y,</span>
                    <br />
                    <span className={`${letterClass} _11`}>I</span>
                    <span className={`${letterClass} _12`}> </span>
                    <span className={`${letterClass} _13`}>a</span>
                    <span className={`${letterClass} _14`}>m</span>
                    <img src={LogoTitle} alt="developer" />
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={nameArray}
                        idx={15}
                    />
                    <br />
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={jobArray}
                        idx={20}
                    />
                </h1>
                <h2>Frontend and Backend Developer</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo />
        </div>
    );
}

export default Home;