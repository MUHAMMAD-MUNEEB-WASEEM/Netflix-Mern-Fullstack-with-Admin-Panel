import React from 'react'
import './Sidebar.css'

//material ui
import {
    LineStyle,
    Timeline,
    TrendingUp,
    PermIdentity,
    Storefront,
    AttachMoney,
    BarChart,
    MailOutline,
    DynamicFeed,
    ChatBubbleOutline,
    WorkOutline,
    Report,
  } from "@material-ui/icons";
import { Link } from 'react-router-dom';


function Sidebar() {
    return (
        <div className="sidebar">

            <div className="sidebar__wrapper">

                {/*First Menu*/}

                <div className="sidebar__menu">
                   
                    <h3 className="sidebar__title">Dashboard</h3>
                   
                    <ul className="sidebar__list">
                      
                      <Link to='/' className="link">
                            <li className="sidebarList__item active">
                                <LineStyle className="sidebar__icon" />
                                Home
                            </li>
                        </Link>


                        <li className="sidebarList__item">
                            <Timeline className="sidebar__icon" />
                            Analytics
                        </li>

                        <li className="sidebarList__item">
                           <TrendingUp className="sidebar__icon" />
                            Sales
                        </li>

                    </ul>
                </div>

                {/*Second Menu*/}

                <div className="sidebar__menu">
                   
                <h3 className="sidebar__title">Quick Menu</h3>
                   
                    <ul className="sidebar__list">
                      
                        <Link to="/users" className="link">
                            <li className="sidebarList__item">
                                <PermIdentity className="sidebar__icon" />
                                Users
                            </li>
                        </Link>

                        <Link to="/products" className="link">
                            <li className="sidebarList__item">
                                <Storefront className="sidebar__icon" />
                                Products
                            </li>
                        </Link>

                        <li className="sidebarList__item">
                           <AttachMoney className="sidebar__icon" />
                            Transactions
                        </li>

                    </ul>
                </div>

                {/*Third Menu*/}
                
                <div className="sidebar__menu">
                   
                    <h3 className="sidebar__title">Notifications</h3>
                   
                    <ul className="sidebar__list">
                      
                        <li className="sidebarList__item">
                            <MailOutline className="sidebar__icon" />
                            Mail
                        </li>


                        <li className="sidebarList__item">
                            <DynamicFeed className="sidebar__icon" />
                            Feedback
                        </li>

                        <li className="sidebarList__item">
                           <ChatBubbleOutline className="sidebar__icon" />
                            Messages
                        </li>

                    </ul>
                </div>

                {/*Fourth Menu*/}

                <div className="sidebar__menu">
                   
                    <h3 className="sidebar__title">Staff</h3>
                   
                    <ul className="sidebar__list">
                      
                        <li className="sidebarList__item">
                            <WorkOutline className="sidebar__icon" />
                            Manage
                        </li>


                        <li className="sidebarList__item">
                            <Timeline className="sidebar__icon" />
                            Analytics
                        </li>

                        <li className="sidebarList__item">
                           <Report className="sidebar__icon" />
                            Reports
                        </li>

                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Sidebar 
