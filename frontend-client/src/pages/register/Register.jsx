import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import './Register.scss'

function Register() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const emailRef = useRef();
    const passwordRef = useRef();

    const handleStart = () => {
        setEmail(emailRef.current.value)
    }

    const handleFinish = () => {
        setEmail(passwordRef.current.value)
    }

    return (
        <div className="register">

            <div className="top">

                <div className="wrapper">
                   <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="" />
                    <button className="login__button">Sign In</button>
                </div>

            </div>

            <div className="container">

                <h1>Unlimited movies, TV shows, and more.</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <p>
                     Ready to watch? Enter your email to create or restart your membership.
                </p>
                {!email ? (
                        <div className="input">

                            <input type="email" placeholder="email address" ref={emailRef}/>
                            <button onClick={handleStart} className="register__button">Get started</button>
               
                         </div>
                    ): (
                        <form className="input">

                            <input type="password" placeholder="password" ref={passwordRef}/>
                            <button onClick={handleFinish} className="register__button">Start</button>
               
                        </form>
                    )
                }     
            </div>


        </div>
    )
}

export default Register
