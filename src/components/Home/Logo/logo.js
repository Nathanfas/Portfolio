import './logo.scss';

import Logon from '../../../assets/images/MGL2020.JPG';


const Logo = () => {
  // const bgRef = useRef();
  // const solidLogoRef = useRef();
  // const circleRef = useRef();

  // useEffect(() => {
  //   const bg = SVG(bgRef.current);
  //   const solidLogo = SVG(solidLogoRef.current);

  //   // Initial animations
  //   bg.opacity(0).animate(1000).opacity(1);
  //   solidLogo.opacity(0).animate(6000).opacity(1);
  // }, []);

  return (
    <div className='logo-container' >
      <div className="circle" >
        <img className='solid-logo' src={Logon} alt='n' />
      </div>
    </div>
  );
};

export default Logo;
