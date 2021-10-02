import { InfoOutlined, PlayArrow } from '@material-ui/icons'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Featured.scss'

function Featured({type}) {
    const [content, setContent] = useState({})
    let componentMounted = true;

    useEffect(()=>{
        if (componentMounted){

        
        axios.get(`movies/random?type=${type ? type : ""}`, {
            headers : {
                authorization : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNTZmNTExMmQ4Y2Y3NThhNmM0ZGJiNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMzE1MjQ1MywiZXhwIjoxNjMzMTU2MDUzfQ.Rl_zqq0wN3hYLUdl6c_ne00XkdgMfyR5NNLUG8sTu38"
            }
        })
            .then(response => {
                setContent(response.data[0])
                console.log(response.data[0])
            })
            .catch(err => {
                console.log(err)
            }
            )
        }
        return () => { // This code runs when component is unmounted
            componentMounted = false; // (4) set it to false if we leave the page
        }
    },[type])

    return (
        <div className="featured">

            {type && ( 
                <div className="category">
                    
                    <span>{type === "movie" ? 'Movies' : 'Series'}</span>
                    
                    <select name="genre" id="genre">
                        <option>Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>
                    </select>
                </div>
            )}
            <img
                src={content.img}
                alt=""
            />

            <div className="info">
                <img
                    src={content.imgSm}//Should be content.imgTitle
                    alt=""
                />
                <span className="desc">{content.desc}</span>
                
                <div className="buttons">

                    <button className="play">
                        <PlayArrow />
                        <span>Play</span>
                    </button>
                    
                    <button className="more">
                        <InfoOutlined />
                        <span>Info</span>
                    </button>

                </div>
            </div>
        </div>
    )
}

export default Featured
