import './logo.scss'
import Logon from '../../../assets/images/MGL2020.JPG'
import { useEffect, useRef } from 'react'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import gsap from 'gsap-trial'
const Logo = () => {

    const bgRef = useRef()
    const solidLogoRef = useRef()
    const circleRef = useRef()

useEffect (()=>{
  gsap.registerPlugin(DrawSVGPlugin)
  
  gsap.timeline()
  .to(bgRef.current, {
    duration:1,
    opacity:1
  })
  
  gsap.fromTo(
    solidLogoRef.current,
    {
      opacity:0,
    },
    {
      opacity:1,
      delay:1,
      duration:6
    }
  )
},[])



    return (
      
        <div className='logo-container' ref={bgRef}>
          <div className="circle" ref={circleRef}>
            <img ref={solidLogoRef} className='solid-logo' src={Logon} alt='n'/>
          </div>
        </div>
    )
}

export default Logo;