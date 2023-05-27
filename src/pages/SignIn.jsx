/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { AiFillAliwangwang } from "react-icons/ai";

import axios from "axios";

import { Signin } from "../api/apiSignin";
import '../CSS/SignIn.css'
import { create } from "@mui/material/styles/createTransitions";

function SignInScreen(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');


    const body = new FormData();

    const postReq = {
        username: username,
        email: email,
        password: password
    };

    useEffect(()=>{
        body.append("username", username);
        body.append("email", email);
        body.append("password", password)
    })

    const API = axios.create({
        baseURL: 'http://54.180.13.188:8080',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const SigninHandle = () => {
        if(!username || !password || !email) {
            window.alert("모든 필드를 입력하세요.");
            return;
        }

        API.post('/auth/signup', {
            username: postReq.username,
            email: postReq.email,
            password: postReq.password
        })
        .then((res)=>{
            if(res.data.code === 200){
                window.alert("회원가입 완료!");
                console.log(res.data)
                movePage("/LoginScreen");
            }
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    const movePage = useNavigate();

    function goLogIn(){
        movePage('/LogInScreen')
    }

    const inputStyle={
        width: 440,
        height: 80,
        borderRadius: 70,
        margin: 10,
        textAlign: 'center'
    }

    return(
        <div className="signin">

            <div className="site">
                <h1>추억의 플래시 5락실</h1>
                <AiFillAliwangwang 
                    style={{
                        color: '#ffffff',
                        fontSize: 25,
                        marginTop: 20,
                        marginLeft: 10
                    }}
                />
            </div>

            <form> 
                <input
                  type="text"
                  placeholder="아이디"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  style={inputStyle}
                />
                <input
                  type="email"
                  placeholder="이메일"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={inputStyle}
                />
                <input
                  type="password"
                  placeholder="비밀번호"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={inputStyle}
                />
            </form>

            <button type="submit" className="signinBtn" onClick={SigninHandle}>회원가입</button>
        </div>
    )
}

export default SignInScreen;