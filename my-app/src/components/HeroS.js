import React, { useEffect } from 'react'
import styled from 'styled-components'
import Imageaccueil from '../images/accueil_pat1.webp'
import Imageaccueils from '../images/accueil_pat.webp'
//import Services from '../components/Services'
import Aos from 'aos'
import 'aos/dist/aos.css';




const HeroS = () => {
    const Accueilcontaint= styled.p`
    font-size: 1.5rem;
    padding: 1rem 2rem;
    @media only screen and (max-width:400px) {
        font-size:1rem;
        padding: 0.6rem 1rem;
    }
    `;
    
    
    const ImageA= styled.img`
    height:300px;
    width:250px;
    padding:6px;
    margin:6px;
    @media only screen and (max-width:424px) {
    height:120px;
    width:100px;
    padding: 2px;
    margin:2px;
    };
     @media only screen and (min-width:1024px) {
    height:200px;
    width:200px;
    padding: 2px;
    margin:2px;
    }
    `;
useEffect(() =>{
    Aos.init({duration:1000}, [])
})
    return (
       <>
<img src="https://res.cloudinary.com/wil/image/upload/v1620932120/hero1_hzhcjg.webp" className="img-fluid"
 alt="couverture patchouli"></img>

<div className="jumbotron">
<h1 className="text-justify text-center" data-aos="zoom-in" style = {{
    fontSize:'1.8rem'
}}>institut de beauté patchouli Douala </h1>
                    <div className="row" data-aos="zoom-in">
                    <div className= "col-md-6 col-lg-6 ">
                        <Accueilcontaint >Venez découvrir l'institut de beauté Patchouli pour prendre soin de vous mais aussi, pour faire votre
                            shopping près de chez vous à prix discount.
                        </Accueilcontaint>
                    </div>
                    <div className="col-md-6 col-lg-6"
                     >
            <ImageA  src={Imageaccueils} alt="acceuil" />
            <ImageA  src="https://res.cloudinary.com/wil/image/upload/v1636025439/consultation_nszmkt.jpg" alt="acceuil" />
                    </div>
                    </div>
                </div>
                {/*<Services />*/}
 
 
       </> 
    )
} 

export default HeroS
