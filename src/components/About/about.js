import './about.scss'
import React, { useEffect, useState } from "react";
import AnimatedLetters from '../AnimatedLetters/animatedletters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCss3, faGitAlt, faHtml5, faJava, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';


const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timeout = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 3000);
        return () => clearTimeout(timeout);
      }, []);

    return (
        <>
        <div className="container about-page">
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                        strArray={['A','b','o','u','t',' ','m','e']}
                        idx={15}
                        />
                </h1>
                <p>I am result-driven compyter science graduate with a passion fo problem solving and strong
                foundation in software development</p>

                <p>Proficent in HTML, CSS, javascript, Java and other programing laguages with hands-on
                experience in database management. </p>

                <p>friendly, very calm, critical thinking, curies, hard working and strong ability to solve problems will be my strenghts</p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faHtml5} color='#F06529'/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faCss3} color='#28A4D9'/>
                     </div>
                     <div className='face3'>
                         <FontAwesomeIcon icon={faJsSquare} color='#EFD81D'/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color='#5ED4F4'/>
                    </div>
                    <div className='face5'>
                         <FontAwesomeIcon icon={faGitAlt} color='#EC4D28'/>
                    </div>
                    <div className='face6'>
                         <FontAwesomeIcon icon={faJava} color='#EC4D28'/>
                    </div>
                </div>
            </div>
        </div>
        
        </>
        )
    }

    export default About