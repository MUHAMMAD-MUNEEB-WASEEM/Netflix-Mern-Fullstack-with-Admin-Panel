import React, { useEffect, useState } from 'react'
import Featured from '../../components/featured/Featured'
import Navbar from '../../components/navbar/Navbar'
import List from '../../components/list/List'
import './Home.scss'
import axios from 'axios'

function Home({type}) {
    const [lists, setLists] = useState([]);
    const [genre, setGenre] = useState(null);
    let componentMounted = true;

    //get list on page refresh

    useEffect(()=>{

        if (componentMounted){

         axios.get(`lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`,{
             headers : {
                 authorization : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNTZmNTExMmQ4Y2Y3NThhNmM0ZGJiNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMzE1MjQ1MywiZXhwIjoxNjMzMTU2MDUzfQ.Rl_zqq0wN3hYLUdl6c_ne00XkdgMfyR5NNLUG8sTu38"
             }
         })
            .then(response=>{
                console.log(response.data)
                setLists(response.data)
            })
            .catch(err => {
                console.log(err)
            })
        }
        return () => { // This code runs when component is unmounted
            componentMounted = false; // (4) set it to false if we leave the page
        }
            
    },[type, genre]) //when we  change type or genre, it will automatically called useEffect
                    //page will refresh
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
