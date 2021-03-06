import { ArrowDropDown, Notifications, Search } from '@material-ui/icons';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss'

function Navbar() {

    const [isScroll, setIsScroll] = useState(false);
    // console.log(window.scrollY)
    
    window.onscroll =  () => {
        setIsScroll(window.scrollY === 0 ? false : true)
        return () => (window.onscroll = null)
    }
    // console.log(isScroll)

    return (
        <div className={isScroll ? 'navbar scrolled' : 'navbar'}>

            <div className="container">

                <div className="left">
                    <Link to='/' className="link">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                            alt=""
                        />
                    </Link>

                    <Link to="/" className="link">
                     <span>Homepage</span>
                    </Link>

                    <Link to="/series" className="link">
                        <span className="navbarLinks">Series</span>
                    </Link>

                    <Link to="/movies" className="link">
                        <span className="navbarLinks">Movies</span>
                    </Link>
                    
                    <span>New and Popular</span>
                    <span>My list</span>
                </div>

                <div className="right">
                    
                    <Search className="icon" />
                    <span>KID</span>
                    <Notifications className="icon" />
                    <img
                    src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt=""
                    />
                    <div className="profile">
                        
                        <ArrowDropDown className="icon" />
                        
                        <div className="options">
                           <span>Settings</span>
                            <span>Logout</span>
                        </div>

                    </div>
                     
                
                </div>

            </div>
            
        </div>
    )
}

export default Navbar
