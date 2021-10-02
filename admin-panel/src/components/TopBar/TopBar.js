import React from 'react'
import './TopBar.css'
import { Link } from 'react-router-dom'

//material ui
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import { Avatar } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/authSlice';

function TopBar() {
    const dispatch = useDispatch()
    const logoutToApp = ()=>{
        dispatch(logout())
    }
    return (
        <div className="topbar">

            <div className="topbar__wrapper">

                <div className="top__left">
                     <Link to='/' className="link">
                        <span className="left__logo">
                            Leadastaire Admin
                        </span>
                    </Link>
                </div>

                <div className="top__right">
                    <div className="rightIcons__container">
                        <NotificationsNone />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="rightIcons__container">
                        <Language />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="rightIcons__container">
                        <Settings />
                    </div>
                    <Avatar style= {{cursor: "pointer"}}src="https://whatsapp-mern-fullstack.web.app/static/media/my%20image3jpg.f2592b34.jpg" alt="avatar" className="right__avatar"/>

                </div>

            </div>
        </div>
    )
}

export default TopBar
