import { ArrowBackOutlined } from '@material-ui/icons'
import React from 'react'
import { useLocation } from 'react-router'
import './Watch.scss'
import { Link } from 'react-router-dom'

function Watch() {
    const location = useLocation()
    const movie = location.movie;
    console.log(location)
    return (
        <div className="watch">

            <Link to='/' className="link">
                <div className="back">
                    <ArrowBackOutlined />
                    Home

                </div>
            </Link>

            <video
                className="video"
                autoPlay
                progress
                controls
                src={movie.video}
             />
        </div>
    )
}

export default Watch
