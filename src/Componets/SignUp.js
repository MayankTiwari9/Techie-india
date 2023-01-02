import '../Styles/signUp.css';

const SignUp = () => {
  return(
    <div className='signup'>
        <form>
        <div>
          <h2>Tecchie</h2>
        </div>
        <div>
          <h3>Signup</h3>
        </div>
        <div>
            <input type='text' name='fullName' id='name' placeholder='Enter Full Name'/>
          </div>
          <div>
            <input type='email' name='email' id='email' placeholder='Enter Your Email'/>
          </div>
          <div>
            <input type='password' name='password' id='password' placeholder='Enter Your Password'/>
          </div>
          <div>
            <input type='password' name='confirnPass' id='confirmPass' placeholder='Confirm Your Password'/>
          </div>
          <div>
      <button className='signin-btn-1' id='btn'>login</button>
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
    <p><b>Already Have Account? Log in</b></p>
    </div>
        </form>
    </div>
  )
}

export default SignUp;