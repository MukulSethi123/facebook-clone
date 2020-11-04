import React,{useState} from 'react'

import "./css/MessageSender.css";
import {Avatar} from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import {useStateValue} from './StateProvider';
import firebase from 'firebase'
import db from "../firebase";

function MessageSender(){
    const  [{user},dispatch] = useStateValue();
    const[input,setInput] = useState('');
    const[imageUrl,setImageUrl] = useState('');
    const handleSubmit = (e)=>{
        e.preventDefault();

        db.collection("posts").add({
            message:input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic:user.photoURL,
            username: user.displayName,
            image: imageUrl,
        });
        setInput("");
        setImageUrl("");
    }
    
    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar  className="messageSender__avatar" src={user.photoURL}/>
                <form>
                <input type="text" 
                    value={input}
                    onChange={(e)=>setInput(e.target.value)}
                    className="messageSender__input"
                    placeholder="Whats on you mind? "
                />
                <input type="text"
                    value={imageUrl}
                    onChange={e=>setImageUrl(e.target.value)}
                    className="messageSender__input2"
                    placeholder="Image url (optional)"
                />
                <button onClick={handleSubmit} type="submit">
                    hidden Button
                </button>
            </form>
            </div>            
            
            <div className="messageSender__bottom">
                <div className ="messageSender__option">
                    <VideocamIcon style={{color:"red"}}/>
                    <h3>Live Video</h3>
                </div>
                <div className ="messageSender__option">
                    <PhotoCameraIcon style={{color:"green"}}/>
                    <h3>Add photo</h3>
                </div>
                <div className ="messageSender__option">
                    <InsertEmoticonIcon style={{color:"gold",}}/>
                    <h3>Feeling</h3>
                </div>
            </div> 

        </div>
    )
}

export default MessageSender;