/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { AiFillAliwangwang } from "react-icons/ai";

import { Login } from "../api/apiLogin";
import '../CSS/LogIn.css'
import axios from "axios";
import { post } from "request";
import { response } from "express";

function LogInScreen(){
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const postReq = {
        username: username,
        password: password
    };

    const BACKEND_URL = "http://54.180.13.188:8080";
    const host = window.location.hostname === "localhost" ? BACKEND_URL : "api";
    const API = axios.create({
        baseURL: host
    });

    const handleLogin = () => {
        if(!username || !password){
            window.alert('모든 필드를 입력하세요.');
            return;
        }

        API.post('/auth/login',{
            username: postReq.username,
            password: postReq.password
        })
        .then((response)=>{
            window.alert("로그인 성공!");
            movePage('/MainScreen');
        })
        .catch(function(error){
            window.alert("아이디 또는 비밀번호를 확인해주세요.");
            console.log(error);
        })
    }

    const UsernameChange = (event) => {
        setUserName(event.target.value);
    };
    const UserPasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const FormSubmit = (event) => {
        event.preventDefault();
    };

    const movePage = useNavigate();

    function goLogIn(){
        movePage('/MainScreen')
    }

    function goSignIn(){
        movePage('/SignInScreen')
    }

    const inputStyle={
        width: 440,
        height: 80,
        borderRadius: 70,
        margin: 10,
        textAlign: 'center'
    }

    return(
        <div className="login">
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
            
            <form onSubmit={FormSubmit}>
                <input
                    type="text"
                    placeholder="아이디"
                    value={username}
                    onChange={UsernameChange}
                    style={inputStyle}
                />
                <input
                    type="password"
                    placeholder="비밀번호"
                    value={password}
                    onChange={UserPasswordChange}
                    style={inputStyle}
                />
            

                <button className="loginBtn"  onClick={handleLogin}>로그인</button>

                <div className="subBtn">
                    {/* <button>아이디 찾기</button>       
                    <p>|</p>     
                    <button>비밀번호 찾기</button>     
                    <p>|</p>             */}
                    <button onClick={goSignIn}>회원가입</button>                    
                </div>
            </form>
        </div>
    )
}

export default LogInScreen;