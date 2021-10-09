import React, { useEffect, useState } from 'react'
import './WidgetsSmall.css'

//material ui
import { Visibility } from "@material-ui/icons";
import axios from 'axios';
import { Avatar } from '@material-ui/core';

function WidgetsSmall() {
    const [newUsers, setNewUsers] = useState([])

    useEffect(()=>{

        axios.get('users?new=true', {
            headers : {
                authorization : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNTZmNTExMmQ4Y2Y3NThhNmM0ZGJiNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMzc3MTU5NSwiZXhwIjoxNjY1MzA3NTk1fQ.D8NfuemZZNlEbUKC3I1s9NGEXGrT7YpR7EBFyzG8_FU"
            }
        }).
            then(response => {
                setNewUsers(response.data)
                console.log(response.data)
                
            }).
            catch(err => {
                console.log(err)
            })
    },[])
    return (
        <div className="widgetsSmall">
            <span className="widgetsSmall__title">New Join Members</span>
           
            <ul className="widgetsSmall__list">

                {/*First User*/}

                {newUsers.map((user, i) => (
                    <li key={i} className="widgetsSmallList__item">

                    {user.profilePic ? (
                        <img className="widgetSmall__img" src={user.profilePic} alt="" />
                    ):(
                        <Avatar>{user.username[0]}</Avatar>
                    )}

                    <div className="widgetsSmall__user">
                        <span className="widgetsSmallList__username">{user.username}</span>
                    </div>
                    <button className="widgetsSmall__button">
                        <Visibility className="widgetSmall__icon" />
                        Display
                    </button>
                                    
                </li>
                ) )}
                
            </ul>

        </div>
    )
}

export default WidgetsSmall
