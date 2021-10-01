import { ArrowBackOutlined } from '@material-ui/icons'
import React from 'react'
import './Watch.scss'

function Watch() {
    return (
        <div className="watch">

            <div className="back">
                <ArrowBackOutlined />
                Home

            </div>

            <video
                className="video"
                autoPlay
                progress
                controls
                src="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4"
             />
        </div>
    )
}

export default Watch
