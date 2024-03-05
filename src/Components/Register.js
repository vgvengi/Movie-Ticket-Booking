import React from 'react'
import "./Register.scss"
import { Link, useNavigate } from 'react-router-dom'
function Register() {
  const navigate=useNavigate();
  function onClicktoHome2(){
    navigate("/Home2");
  }
  return (
    <html id='reg'>
      <>
      <div className='signinmaindiv'>
        <div className='maindivone'>
          {/* <div className="firstcircle"></div>
        <div className="secondcircle"></div> */}
        </div>
        <div className='maindivtwo'>
          <div className='h4'>
            <h4>Create an Account</h4>
          </div>
          <div className='mail'>
            <form className='form'>
              <div className='form2'> 
              <label for="email" id="Email" required>Email</label>
              <input type='text'id='email' placeholder="Enter your Email" name="email" required></input>
              </div>
              <div className='form3'>
              <label for="password" id="password" required>Password</label>
              <input type="text" id='password'placeholder="Enter Your Password" name="password" required></input>
              <input type="text"id="confirmpassword" placeholder="Confirm your password" required></input>
              </div>
            </form>
          </div>
          <button id='createaccount'onClick={onClicktoHome2}>Create Account</button>
          <h6>Already have an account? <span>
            <Link to={ "/Login"} className="login2">
            Login In
            </Link>
            </span>
            </h6>
        </div>
      </div>
      </>

    </html>
  )
}

export default Register