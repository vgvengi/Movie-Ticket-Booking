import React from 'react'
import "./Home3.scss"
import { Link } from 'react-router-dom';
function Home3() {
    const img=new URL("../img/Frame 35.png",import.meta.url);
  return (
    <div className='maindiv_1'>
        <div className='headerdiv'>
            <img src={img}alt='cinema '/>
            <div className='Link'>
            <Link className='link_logout' to={"/Login"}>Logout</Link>
            </div>
        </div>
        {/*  This Div is for Theater date and time  //  this div is grid */}
        <div className='movieDetails'>

        </div>
            <div className='time_Booking'>
                <h3>Theater</h3>
                <div className='theater_name'>
                 <div><h5>I-max</h5></div>
                    <div><h5>ARRS</h5></div>
                    <div><h5>PVR Cinemas</h5></div>
                </div>
                <h3>Date</h3>
                <div className='dates'>
                    <div className='date'>22 Feb <br/>Thr</div>
                    <div className='date'>23 Feb <br/>Fri</div>
                    <div className='date'>24 Feb <br/>Sat</div>
                    <div className='date'>25 Feb <br/>Sun</div>
                    <div className='date'>26 Feb<br/>Mon</div>
                    <div className='date'>27 Feb<br/>Tue</div>
                </div>
                <h3>Time</h3>
                <div className='times'>
                    <div className='time'>10AM</div>
                    <div className='time'>1PM</div>
                    <div className='time'>4PM</div>
                </div>
                <div>

                </div>
            </div>

    </div>
  )
}

export default Home3