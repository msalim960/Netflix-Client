import './register.scss'
import { ArrowForwardIos } from "@mui/icons-material"
import { useState, useRef } from 'react'

const Register = () => {
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const emailRef = useRef()
    const passwordRef = useRef()

    const handleEmail = () => {
        setEmail(emailRef.current.value)
    }

    const handleRegister = () => {
        setPassword(passwordRef.current.value)
    }
return (
    <div className='register'>
        <div className="register--navbar">
            <div className="navbar--wrapper">
                <img className='logo' src={require('../../assets/logo.png')} alt="" />
                <button className='sign--in'>Sign In</button>
            </div>
        </div>
        <div className="register--information">
            <h1>Unlimited movies, TV <br /> shows, and more.</h1>
            <h3>Watch anywhere. Cancel anytime.</h3>
            <p>Ready to watch? Enter your email to create or restart your membership.</p>
            { !email ? (
                <div className="register--input">
                    <input className='input' type="email" placeholder='Email address' ref={emailRef}/>
                    <button className='input--button' onClick={handleEmail} >Get Started 
                    <ArrowForwardIos className='icon' /> </button>
                </div>
            ) : (
                <form className="register--input">
                    <input className='input' type="password" placeholder='Password' ref={passwordRef}/>
                    <button className='input--button' onClick={handleRegister} >Start Membership 
                    <ArrowForwardIos className='icon' /> </button>
                </form>
            )}
        </div>
    </div>
  )
}

export default Register