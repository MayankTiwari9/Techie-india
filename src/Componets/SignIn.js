import { Link } from 'react-router-dom';
import '../Styles/signIn.css';


const SignIn = () => {
  return(
    <div className='signin'>
    
    <form>
    <h2>Tecchie</h2>
    <h3>Log In</h3>
    <p>to continue to Tecchie</p>
    <div>
    <input type='email' placeholder='Enter Your Email'/>
    </div>
    <div>
    <input type='password' placeholder='Enter Your Password'/>
    </div>
    <div  className='forgotPass'>
      <p><b>Forgot Your Password?</b></p>
    </div>
    <div>
      <button className='signin-btn-1'>login</button>
    </div>
    <div>
      <p><b>OR</b></p>
    </div>
    <div>
      <button className='signin-btn-2'>Continue With Facebook</button>
    </div>
    <div>
      <button className='signin-btn-2'>Continue With Google</button>
    </div>
    <div>
    <p>By continuing, you agree to Tecchie's <b>Terms of Service, Privacy Policy</b></p>
    </div>
    <div>
    <p><b>Not on Tecchie yet? 
      <Link to='/sign-up'>Sign up</Link></b></p>
    </div>
    </form>
    </div> 
  ) 
}

export default SignIn;