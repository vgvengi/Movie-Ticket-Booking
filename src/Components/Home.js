import React from "react";
import "./Home.scss";
import { Link } from "react-router-dom";
/* Inside your CSS or SCSS file */
function Home() {
  const img=new URL("../img/Frame 35.png",import.meta.url);
  const elemental =new URL("../img/Frame_35_Elemental.png",import.meta.url);
  const galaxy=new URL("../img/Frame_36_Gardian.png",import.meta.url);
  const fast=new URL("../img/Frame_37_XMan.png",import.meta.url);
  const spider =new URL("../img/Frame_38_spider.png",import.meta.url);
  const polis =new URL("../img/Frame 39_1.png",import.meta.url);
  const anwar=new URL("../img/Frame 39.png",import.meta.url);
  return (
    <>
    <html className="homepage">
      <div className="firstdiv">
        <img src={img}alt="cinema"/>
        <div className="Login">
        <Link className="link" to={"/Login"}>Login</Link>
        </div>
        <div className="register">
          <Link className="link2" to={"/Register"}>Register</Link>
        </div>
      </div>
      <div className="blur"></div>
        <div className="seconddiv">
          <h4>Now Showing</h4>
        </div>

         <div className="movies">

        <div className="images1">
          <img src={elemental} alt="elemental movie"/>
          <h3>Elemental</h3>``
        </div>

          <div className="images2">
          <img className="gardian" src={galaxy} alt=" guardians of the galaxy movie"/>
          <h3> GUARDIANS OF THE GALAXY</h3>
          </div>
          <div className="images3">
            <img src={fast} alt="fastXMovie"/>
            <h3>Fast X </h3>
          </div>
          <div className="images4">
           <img src={spider} alt="Spider man movie" />
           <h3>
            Spider-Man <br/>
            <span>
            ACROSS THE SPIDER VERSE
              </span> 
           </h3>
          </div>
        </div> 

         <div className="movies2">
          <div className="images5">
            <img src={polis} alt="polis movie"/>
            <h3> Polis Evo 3</h3>
          </div>
          <div className="images6">
            <img src={anwar} alt="Anwar Movie"/>
            <h3>Anwar Movie</h3>
          </div>
        <div className="blur2"></div>
        </div> 
    </html>
    </>
    );
}

export default Home;
