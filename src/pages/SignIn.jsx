/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { AiFillAliwangwang } from "react-icons/ai";

import { Signin } from "../api/apiUser";
import '../CSS/SignIn.css'

function SignInScreen(){
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const body = {
        name: name,
        email: email,
        password: password
    }

    const SigninHandle = () => {
        if(!name || !password || !email){
            window.alert("모든 필드를 입력해주세요.");
            return;
        }
        Signin(body)
        .then(response => {
            console.log(response.data);
            movePage('/LoginScreen')
        })
        .catch(error => {
            console.log(error);
        });
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
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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