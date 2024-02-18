import './contact.scss';
import {useEffect,useRef,useState} from "react";
import AnimatedLetters from '../AnimatedLetters/animatedletters'
import emailjs from '@emailjs/browser';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const Contact = () => {

    const refform = useRef();
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timeout = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 3000);
        return () => clearTimeout(timeout);
      }, []);

const submit_btn = (e) => { 
    e.preventDefault();

    emailjs
      .sendForm('service_ppi9mxm', 'template_4kiaqca', refform.current, {
        publicKey: 'wKg33zQffhMEraSFy',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('message sent successfully')
          window.location.reload(false)
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
}
    return (
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['C','o','n','t','a','c','t',' ', 'm','e']}
                    idx={15}
                    />
                </h1>
                <p> 
                    If you have any questions, suggestions or request,
                    donot hesitate to contact me using the below form.
                </p>

                <div className='contact-form'>
                    <form ref={refform} onSubmit={submit_btn}>
                        <ul>
                            <li className='half' >
                                <input type='text' name='name' placeholder='Name' id='text-email' required />
                            </li>
                            <li className='half'>
                                <input type='email' 
                                    name='email' 
                                    id='text-email'
                                    placeholder='Email' required 
                                />
                            </li>
                            <li >
                                <input type='text'
                                     id='text-email' 
                                    name='subject' 
                                    placeholder='Subject' required 
                                />
                            </li>
                            <li>
                                <textarea 
                                    name='message' 
                                    placeholder='Message' required 
                                ></textarea>
                            </li>
                            <li>
                                <input type='submit' className='flat-button' value='SEND' />
                            </li>
                        </ul>
                    </form>
                
                </div>
            </div>

            <div className='info-map'>
                Nathan Fasil,
                <br />
                Ethiopia,
                <br />
                Addis Ababa
                <br />
                +251969141420 
                <span>natmich6@gmail.com</span>
            </div>
            <div className='map-wrap'>
                <MapContainer center={[9.0328504,38.7627562]} zoom={15}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[9.0328504,38.7627562]}>
                        <Popup>I live here</Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>    
        </>
    )
}

export default Contact