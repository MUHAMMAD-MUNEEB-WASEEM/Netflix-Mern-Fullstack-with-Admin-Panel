import React from 'react'
import Chart from '../../components/Chart/Chart'
import FeaturedInfo from '../../components/FeaturedInfo/FeaturedInfo'
import WidgetsLarge from '../../components/WidgetsLarge/WidgetsLarge'
import WidgetsSmall from '../../components/WidgetsSmall/WidgetsSmall'
import { userData } from '../../DummyData'
import './Home.css'



function Home() {
    return (
        <div className="home">
            <FeaturedInfo/>
            <Chart data={userData} title="User Analytics" grid dataKey="Active Users"/>
            <div className="home__widgets">
                <WidgetsSmall/>
                <WidgetsLarge/>
            </div>
        </div>
    )
}

export default Home
