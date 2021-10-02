import React from 'react'
import './UserPage.css'

//material ui
import {
    CalendarToday,
    LocationSearching,
    MailOutline,
    PermIdentity,
    PhoneAndroid,
    Publish,
  } from "@material-ui/icons";
import { Link } from 'react-router-dom';

function UserPage() {
    return (
        <div className="userPage">
            
            <div className="userTitle__container">
                <h1 className="user__title">Edit User</h1>
                <Link to="/newUser">
                    <button className="user__button">Create</button>
                </Link>
            </div>

            <div className="userContainer">

                <div className="userContainer__show">

                    <div className="userShow__top">
                        
                        <img className="userShowTop__img" src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""/>
                        <div className="userShowTop__title">
                            <span className="userShowTitle__username">Julia Ann</span>
                            <span className="userShowTitle__title">Electrical Engineer</span>
                        </div>

                    </div>

                    <div className="userShow__bottom">
                       
                       <span className="userShowBottom__title">Account Details</span>
                       
                        <div className="userShowBottom__info">
                            <PermIdentity className="userShow__icon" />
                            <span className="userShowBottomInfo__title">Juliann99</span>
                        </div>

                        <div className="userShowBottom__info">
                            <CalendarToday className="userShow__icon" />
                            <span className="userShowBottomInfo__title">10.12.1999</span>
                        </div>

                        <span className="userShowBottom__title">Contact Details</span>

                        <div className="userShowBottom__info">
                            <PhoneAndroid className="userShow__icon" />
                            <span className="userShowBottomInfo__title">+1 193 1343 40</span>
                        </div>
                        <div className="userShowBottom__info">
                            <MailOutline className="userShow__icon" />
                            <span className="userShowBottomInfo__title">Julia99@gmail.com</span>
                        </div>
                        <div className="userShowBottom__info">
                            <LocationSearching className="userShow__icon" />
                            <span className="userShowBottomInfo__title">New York | USA</span>
                        </div>
                       
                    </div>
                </div>

                <div className="userContainer__update">
                    
                    <span className="userUpdate__title">Edit</span>
                    <form className="userUpdate__form">
                        
                        <div className="userUpdate__left">
                            <div className="userUpdateLeft__item">
                                <label>Username</label>
                                <input type="text" placeholder="Juliann99" className="userUpdateLeft__input"/>
                            </div>

                            <div className="userUpdateLeft__item">
                                <label>Full Name</label>
                                <input type="text" placeholder="Julia Ann" className="userUpdateLeft__input"/>
                            </div>

                            <div className="userUpdateLeft__item">
                                <label>Email</label>
                                <input type="text" placeholder="Juliann99@gmail.com" className="userUpdateLeft__input"/>
                            </div>

                            <div className="userUpdateLeft__item">
                                <label>Phone</label>
                                <input type="text" placeholder="+1 193 1343 40" className="userUpdateLeft__input"/>
                            </div>

                            <div className="userUpdateLeft__item">
                                <label>Address</label>
                                <input type="text" placeholder="New York | USA" className="userUpdateLeft__input"/>
                            </div>
                            

                        </div>    
                        
                        <div className="userUpdate__right">

                            <div className="userUpdateRight__upload">
                                
                                <img className="userUpdate__img" alt="" src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
                                <label htmlFor="file"><Publish className="userUpdate__icon"/></label>
                                <input type="file" id="file" style={{display: "none"}}/>
                            
                            </div>

                            <button className="userUpdate__button">Update</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default UserPage
