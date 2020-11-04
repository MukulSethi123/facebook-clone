import { Avatar } from '@material-ui/core'
import React from 'react'
import "./css/Story.css"

function Story({image, profileSrc, title}){
    return (
        <div className="story" style={{backgroundImage:`url(${profileSrc})`}}>
            <Avatar className="story__avatar" src={image}/>
            <h4>{title}</h4>
        </div>
    )
}
export default Story;