import React from 'react'
import './style/login.css';
export default function Signup() {
  return (
    <div className='login-form'>
<h3>Welcome to MedUp!</h3>
<form>
    <input type="email" name="email" placeholder='email' />
    <input type="password" name="password" placeholder='password' />
    <input type="password" name="cpassword" placeholder='confirm password' />
  <input type="submit" value="Sign Up" />
  <a>Click here to Log In</a>
</form>
    </div>
  )
}
