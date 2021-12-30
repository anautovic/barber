import React from "react";
import { useHistory } from "react-router-dom";
import { Header } from "./headers";
//import  Footer  from "./footer";

export const Hours = () => {
  const history = useHistory();

  function handleClick() {
    history.push("/form");
  }

  return (
    <div className="hours page">
      <Header />
      <div className="nameTag">
          
        <div className="lines"></div>
        <h1 className="text-center text-white">Heures d'ouvertures</h1>
        <div className="lines"></div>
      </div>
      <div className="container">
        <div className="table text-center">
          <div>
            <div>LUNDI</div>
            <div>8:30-18:00</div>
          </div>
          <div>
            <div>MARDI</div>
            <div>8:30-18:00</div>
          </div>
          <div>
            <div>MERCREDI</div>
            <div>8:30-18:00</div>
          </div>
          <div>
            <div>JEUDI</div>
            <div>8:30-18:00</div>
          </div>
          <div>
            <div>VENDREDI</div>
            <div>8:30-18:00</div>
          </div>
          <div>
            <div>SAMEDI</div>
            <div>8:00-17:00</div>
          </div>
          <div>
            <div>DIMANCHE</div>
            <div>FERME</div>
          </div>
        </div>
        <div className="button text-center">
          <button type="button" onClick={handleClick} id="btn">
            Contactez nous
          </button>
        </div>
      </div>
      {/*<Footer />*/}
    </div>
  );
};