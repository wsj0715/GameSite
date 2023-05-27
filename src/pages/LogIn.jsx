/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { AiFillAliwangwang } from "react-icons/ai";

import { Login } from "../api/apiLogin";
import '../CSS/LogIn.css'

function LogInScreen(){
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const movePage = useNavigate();

    const onEmailHandler = (event) => { //state을 바꾸면 value가 바뀜
        setUserName(event.currentTarget.value)
    }
  
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }

    const handleLogin = () => {
        let body = {
            username: username,
            password: password,
        }  

        Login(body)
        .then((res)=>{
            if(res.data.code === 200){
                window.alert("로그인 성공!");
                console.log(res.data)
                movePage('/');
            }
        })
        .catch((error)=>{
            window.alert("아이디 또는 비밀번호를 확인해주세요.");
            console.log(error);
        })
    };

    const FormSubmit = (event) => {
        event.preventDefault();
    };

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
                    onChange={onEmailHandler}
                    style={inputStyle}
                />
                <input
                    type="password"
                    placeholder="비밀번호"
                    value={password}
                    onChange={onPasswordHandler}
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