import axios from 'axios'
import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router'
import './Register.scss'

function Register() {

    const history = useHistory();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")

    const emailRef = useRef();
    const usernameRef = useRef()
    const passwordRef = useRef();

    const handleStart = () => {
        setEmail(emailRef.current.value)
    }

    const handleFinish = async (e) => {
        e.preventDefault()

        try{
           
            await axios.post('auth/register', {username, email, password})   
        }catch(err){
            console.log(err)
        }
        setUsername("");
        setPassword("")              
    }
    

    // const handleTest = async (e) => {
    //     e.preventDefault()
    //     try{
    
    //         await axios.post('auth/register', {username, email, password})   
    //     }catch(err){
    //         console.log(err)
    //     }

    // }
        console.log(email, password, username)
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
                        <>
                        <form className="input">

                            <input value={username} type="text" placeholder="username" onChange={e=>setUsername(e.target.value)}/>
                            <input value={password} type="password" placeholder="password" onChange={e=>setPassword(e.target.value)}/>
                            <button onClick={handleFinish} className="register__button">Start</button>
               
                        </form>
                    </>
                    )
                }     
            </div>


        </div>
    )
}

export default Register
