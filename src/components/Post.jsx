import { Avatar } from '@material-ui/core';
import React from 'react';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import "./css/Post.css";
import ShareIcon from '@material-ui/icons/Share';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import { Share } from '@material-ui/icons';



function Post({profilePic, image, username, timestamp,message}){
    
    return (
        <div className="post">
            <div className="post__top">
                
                <Avatar className="post__avatar" src={profilePic}/>
                <div className = "post__topInfo">
                    <h3>{username}</h3>
                    <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                </div>
                
            </div>

            <div className="post__bottom">
                <p>{message}</p>
            </div>
            <div className="post__image">
                {image && <img src = {image} alt=""/>}
            </div>
            <div className="post__options">
                <div className="post__option">
                    <ThumbUpIcon />
                    <p>Like</p>
                </div>
                
                <div className="post__option">
                    <ChatBubbleIcon />
                    <p>Comment</p>
                </div>
                <div className="post__option">
                    <ShareIcon />
                    <p>Share</p>
                </div>
            </div>
        </div>
    )
}

export default Post;