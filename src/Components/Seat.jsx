import React from 'react'
import "./Seat.scss"
function Seat() {
  function colorChange(){
    document.getElementByClassName("A1").style.backgroundcolor="lightgreen";
  }
  return (
    <div className='seat'>
        <h2>Seat</h2>
        <div className='seater' >
            <div className='A1' onClick={colorChange}>
                <h5>A1</h5>
                <h5>A2</h5>
                <h5>A3</h5>
                <h5>A4</h5>
                <h5>A5</h5>
                <h5>A6</h5>
                <h5>A7</h5>
                <h5>A8</h5>
                <h5>A9</h5>
                <h5>A10</h5>
            </div>
            <div className='A1'>
              <h5>B1</h5>
              <h5>B2</h5>
              <h5>B3</h5>
              <h5>B4</h5>
              <h5>B5</h5>
              <h5>B6</h5>
              <h5>B7</h5>
              <h5>B8</h5>
              <h5>B9</h5>
              <h5>B10</h5>
            </div>
            <div className='A1'>
              <h5>C1</h5>
              <h5>C2</h5>
              <h5>C3</h5>
              <h5>C4</h5>
              <h5>C5</h5>
              <h5>C6</h5>
              <h5>C7</h5>
              <h5>C8</h5>
              <h5>C9</h5>
              <h5>C10</h5>

            </div>
            <div className='A1'>
            <h5>D1</h5>
            <h5>D2</h5>
            <h5>D3</h5>
            <h5>D4</h5>
            <h5>D5</h5>
            <h5>D6</h5>
            <h5>D7</h5>
            <h5>D8</h5>
            <h5>D9</h5>
            <h5>D10</h5>
            </div>
            <div className='A1'>
            <h5>E1</h5>
            <h5>E2</h5>
            <h5>E3</h5>
            <h5>E4</h5>
            <h5>E5</h5>
            <h5>E6</h5>
            <h5>E7</h5>
            <h5>E8</h5>
            <h5>E9</h5>
            <h5>E10</h5>
            </div>
            <div className='A1'>
            <h5>F1</h5>
            <h5>F2</h5>
            <h5>F3</h5>
            <h5>F4</h5>
            <h5>F5</h5>
            <h5>F6</h5>
            <h5>F7</h5>
            <h5>F8</h5>
            <h5>F9</h5>
            <h5>F10</h5>

            </div>
            <div className='A1'>
            <h5>G1</h5>
            <h5>G2</h5>
            <h5>G3</h5>
            <h5>G4</h5>
            <h5>G5</h5>
            <h5>G6</h5>
            <h5>G7</h5>
            <h5>G8</h5>
            <h5>G9</h5>
            <h5>G10</h5>
            </div>
        </div>
            <div className='A2'>
              <h5>X</h5>
            </div>
            <hr className='hr'/>
            <div className='proceed'>
              {/* <hr/> */}
              <div className='payment'>
                <h6>Total</h6>
                <h5>Value-Amount</h5>
              </div>
              <div className='seatcounts'>
                <h5>Seat</h5>
                <h5>Selected Seat</h5>
              </div>
              <div className='finalproced'>
                <div className='back'>
                  <h4>Back</h4>
                </div>
              </div>
            </div>
            
    </div>
  )
}

export default Seat