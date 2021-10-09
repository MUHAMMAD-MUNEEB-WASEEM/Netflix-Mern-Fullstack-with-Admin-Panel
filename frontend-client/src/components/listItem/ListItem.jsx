import React, { useEffect } from 'react'
import './ListItem.scss'
import { Link } from 'react-router-dom'

import {
    PlayArrow,
    Add,
    ThumbUpAltOutlined,
    ThumbDownOutlined,
  } from "@material-ui/icons";
import { useState } from 'react';
import axios from 'axios';

function ListItem({index, item}) {
    const [isHovered, setIsHovered] = useState(false);
    const [movie, setMovie] = useState({})
    let componentMounted = true;

    useEffect(()=>{
        
        if (componentMounted){

        axios.get('movies/find/' + item, {
            headers : {
                authorization : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNTZmNTExMmQ4Y2Y3NThhNmM0ZGJiNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMzc3MTU5NSwiZXhwIjoxNjY1MzA3NTk1fQ.D8NfuemZZNlEbUKC3I1s9NGEXGrT7YpR7EBFyzG8_FU"
            }
        })
            .then(response => {
                setMovie(response.data)
            })
            .catch(err => {
                console.log(err)
            })
        }
        return ()=>{
            componentMounted = false
        }
    },[item]) //Whenever item changes, useEffect will get fire


    return (
        <Link to={{pathname: "/watch", movie: movie}}>
            <div className="list__item"
                style={{left: isHovered && index * 225 - 50 + index * 2.5}} 
                onMouseEnter={()=>setIsHovered(true)} 
                onMouseLeave={()=>setIsHovered(false)}
            >
                <img src={movie.img} alt="" />
            
                {isHovered && (
                <>
                <video src={movie.trailer} autoPlay={true} loop/>
                <div className="item__info">

                    <div className="icons">
                        <PlayArrow className="icon" />
                        <Add className="icon" />
                        <ThumbUpAltOutlined className="icon" />
                        <ThumbDownOutlined className="icon" />
                    </div>

                    <div className="itemInfo__top">
                        <span>{movie.duration}</span>
                        <span className="limit">{movie.limit}</span>
                        <span>{movie.year}</span>
                    </div>

                    <div className="desc">
                        {movie.desc}
                    </div>

                    <div className="genre">{movie.genre}</div>

                </div>
                </>
                )}
        
            </div>
        </Link>
    )
}

export default ListItem
