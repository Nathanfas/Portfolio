import { Link, NavLink } from 'react-router-dom';
import  Logos  from "../../assets/images/logo-n.png";
import  LogoSubtitle  from "../../assets/images/logo-sub1.png";
import './sidebar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () =>{
   return( 
    <div className='nav-bar'>
      <Link className='logo' to='/'>
        <img src ={Logos} alt='logo' />
        <img className='sub-logo' src ={LogoSubtitle} alt='logoSub' />
      </Link>
        <nav>
          <NavLink exact="true" acvtiveclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
          </NavLink>

          <NavLink exact="true" acvtiveclassname="active" className="about-link" to="/about">
            <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
          </NavLink>

          <NavLink exact="true" acvtiveclassname="active" className="contact-link" to="/contact">
            <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
          </NavLink>
        </nav>
        <ul>
          <li>
            <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/nathan-fasil-59a29b246'>
              <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
            </a>
          </li>

          <li>
            <a target='_blank' rel='noreferrer' href='https://github.com/Nathanfas'>
              <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
            </a>
          </li>

          <li>
            <a target='_blank' rel='noreferrer' href='https://www.instagram.com/nathan__fasil/'>
              <FontAwesomeIcon icon={faInstagram} color='#4d4d4e' />
            </a>
          </li>
        </ul>
    </div>
   )
}

export default Sidebar