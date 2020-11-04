import React from 'react';
import "./css/Login.css";
import {auth,provider} from "../firebase.js";
import Button from '@material-ui/core/Button';
import FacebookIcon from '@material-ui/icons/Facebook';
import { useStateValue } from './StateProvider';
import { actionTypes } from '../reducer';

function Login(){
const [state,dispatch] = useStateValue();
    const signIn = ()=>{
        auth.signInWithPopup(provider).then(result=>{
            dispatch({
                type:actionTypes.SET_USER,
                user:result.user,
            })

        }).catch(error=>{
            alert(error.massage);
            console.log(error)
        })

    }
    return(
        <div className="login">
            <div className="login__logo">
                <img src="https://3.bp.blogspot.com/-S8HTBQqmfcs/XN0ACIRD9PI/AAAAAAAAAlk/A_3ZXg7xO4YyGrKDhMpr6YRgrtOMn9tHwCLcBGAs/s1600/f_logo_RGB-Blue_1024.png"/>                               
            </div>
            <h1>facebook</h1> 
            <Button className="login__button" type="submit" onClick={signIn}><FacebookIcon/> Login </Button>
        </div>
    )
}

export default Login;