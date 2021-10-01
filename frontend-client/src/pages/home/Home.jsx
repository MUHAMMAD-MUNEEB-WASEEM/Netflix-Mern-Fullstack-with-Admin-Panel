import React, { useEffect, useState } from 'react'
import Featured from '../../components/featured/Featured'
import Navbar from '../../components/navbar/Navbar'
import List from '../../components/list/List'
import './Home.scss'
import axios from 'axios'

function Home({type}) {
    const [lists, setLists] = useState([]);
    const [genre, setGenre] = useState(null);

    //get list on page refresh

    useEffect(()=>{
         axios.get(`lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`,{
             headers : {
                 authorization : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNTZmNTExMmQ4Y2Y3NThhNmM0ZGJiNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMzEwOTA0MywiZXhwIjoxNjMzMTEyNjQzfQ.TWXqHjAz16a77GzhdPovv9tkY3xguRe7LkaybbwrmKs"
             }
         })
            .then(response=>{
                console.log(response.data)
                setLists(response.data)
            })
            .catch(err => {
                console.log(err)
            })
            
    },[type, genre]) //when we  change type or genre, it will automatically called useEffect
    return (
        <div className="home">
            <Navbar/>
            <Featured type={type}/>

            {/*map is used because it is an array of objects*/}
            {lists.map((list, i)=>(
                <List key={i} list={list}/>
            ))}
            
        </div>
    )
}

export default Home
