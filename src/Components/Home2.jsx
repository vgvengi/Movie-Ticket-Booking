import React from "react";
import "./Home2.scss";
import { Link } from "react-router-dom";
function Home2() {
  const pic=new URL("../img/Frame 35.png",import.meta.url);
  const image_element=new URL("../img/Frame_35_Elemental.png",import.meta.url);
  const image_galaxy=new URL("../img/Frame_36_Gardian.png",import.meta.url);
  const image_fast=new URL("../img/Frame_37_XMan.png",import.meta.url);
  const image_spider =new URL("../img/Frame_38_spider.png",import.meta.url);
  const image_polis =new URL("../img/Frame 39_1.png",import.meta.url);
  const image_anwar=new URL("../img/Frame 39.png",import.meta.url);
  return (
    <div className="he">
      <div className="d1">
          <img src={pic}alt="cinema"/>
          <div className="tic">
          <Link  to={"/MyTicket"} className="mytic">My Ticket</Link>
          </div>
          <div className="tic2">
          <Link className="tic2log" to={"/"}>Logout</Link>
          </div>  
          <div className="blur1"></div>
        </div>
        <div className="movieshow">
        <h4 >Now Showing</h4>
        </div>
        <Link to={"/Home3"}>
        <div className="movies_inHome2">
        <div className="image element">
          <img src={image_element}alt="Elemental Movie"/>
          <h3>Elemental Movie</h3>
        </div>
        <div className="image gardian">
          <img src={image_galaxy}alt="Galaxy Movie"/>
          <h3>GUARDIANS OF THE GALAXY</h3>
        </div>
        <div className="image Fast">
          <img src={image_fast}alt="galaxy movie"/>

          <h3> Fast X </h3>
        </div> 
        <div className="image spider">
          <img src={image_spider}alt="spider man movie"/>
          <h3>Spider Man <br/>
            <span>
              ACROSS THE SPIDER VERSE
            </span>
          </h3>
        </div>
        </div>
{/* ---------------------------------------------- */}
        <div className="movieshow2_inHome2">
        <div className="image polis">
          <img src={image_polis}alt="polis movie"/>
          <h3>Polis Evo 3</h3>
        </div>
        <div className="image Anwar">
          <img src={image_anwar}alt="Anwar movie"/>
          <h3>Anwar Movie</h3>
        </div>
        </div>
        </Link>
    </div>
  );
}

export default Home2;
