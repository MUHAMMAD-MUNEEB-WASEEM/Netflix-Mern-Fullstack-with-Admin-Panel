import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Login from '../../redux/auth/apiCall'

import './LoginPage.css'

function LoginPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch()
    const isFetching = useSelector(state=>state.user.isFetching);
    console.log(isFetching)


    const handleSubmit = (e)=>{
        e.preventDefault();
        Login({email, password}, dispatch)
        
    }

    return (
        <div className="login">
            <form className="login__form">
                <input type="text" placeholder="email" className="login__input" value={email} onChange={e=>setEmail(e.target.value)}/>
                <input type="password" placeholder="password" className="login__input" value={password} onChange={e=>setPassword(e.target.value)}/>
                <button className="login__button" onClick={handleSubmit} disabled={isFetching}>Login</button>
            </form>
        </div>
    )
}

export default LoginPage
