import axios from 'axios'
import React, { useState, useEffect, useMemo } from 'react'
import Chart from '../../components/Chart/Chart'
import FeaturedInfo from '../../components/FeaturedInfo/FeaturedInfo'
import WidgetsLarge from '../../components/WidgetsLarge/WidgetsLarge'
import WidgetsSmall from '../../components/WidgetsSmall/WidgetsSmall'
import { userData } from '../../DummyData'
import './Home.css'



function Home() {

    const MONTHS = useMemo(
        ()=>[
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
       ],[])
    
       const [userStats, setUserStats] = useState([])
       let componentMounted = true
       
       useEffect(()=>{
            
        if (componentMounted){
    
        axios.get('users/stats')
            .then(response => {
                response.data.sort((a,b)=> (a._id - b._id)).map((item) => (
                  setUserStats((prev)=> [...prev, {name:MONTHS[item._id - 1], "New User": item.total}
                ])
                ))
            })
            .catch(err => {
                console.log(err)
            })
        }
        return ()=>{
            componentMounted = false
        }
    },[MONTHS]) //Whenever item changes, useEffect will get fire
    
     
    return (
        <div className="home">
            <FeaturedInfo/>
            <Chart data={userStats} title="User Analytics" grid dataKey="New User"/>
            <div className="home__widgets">
                <WidgetsSmall/>
                <WidgetsLarge/>
            </div>
        </div>
    )
}

export default Home
