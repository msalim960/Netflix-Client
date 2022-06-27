import './login.scss'
import { CheckBox } from '@mui/icons-material'
const Login = () => {
  return (
    <div className='login'>
        <div className="login--navbar">
            <div className="navbar--wrapper">
                <img className='logo' src={require('../../assets/logo.png')} alt="" />
            </div>
        </div>
        <div className="login--body">
            <div className="form">
                <div className="login--top">
                    <h1>Sign In</h1>
                    <input className='form-control' type="text" placeholder='Email or phone number'/>
                    <small></small>
                    <input className='form-control' type="password" placeholder='Password'/>
                    <small></small>
                    <button>Sign In</button>
                    <div className="login--help">
                        <div className="remember--me">
                            <input type="checkbox" id='checkbox' />
                            <label htmlFor="checkbox">Remember me</label>
                        </div>
                        <a href="">Need help?</a>
                    </div>
                </div>
                <div className="login--bottom">
                    <div className="login--register">
                        New to Netflix?  
                        <a href='#'>Sign up now</a>
                    </div>
                    <div className="login--recaptcha">
                        <p>This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="">Learn more.</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
)}
export default Login
