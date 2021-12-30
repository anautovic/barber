import React, { useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'; 
import  NavbarS from '../components/NavbarS'
import HeroS from '../components/HeroS'
import Meta from '../components/Meta_Acc'
import Reviews from '../components/Reviews'
//import {Headers} from '../components/headers'

//import Reviews from '../components/Reviews'
/*const Navbar = lazy(() =>import ('../components/Navbar'));
const Dropdown = lazy(() =>import ('../components/Dropdown'));
const Hero = lazy(() =>import ('../components/Hero'));
const Services  = lazy(() =>import ('../components/Services'));
const Reviews  = lazy(() =>import ('../components/Reviews'));*/


const Accueil = () => {
    
   //const [loading,  setLoading] = useState(false);
   useEffect(()=> {
    Aos.init({duration:1000})
       
   }, [])
    return (
        <>
        {/*<Headers />*/}
        {/*<NavbarS  />
        <Meta />
        <HeroS />
        <Reviews />*/}
        
        </>
    )
}

export default Accueil
