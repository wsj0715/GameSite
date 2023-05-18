import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

import '../CSS/LogIn.css'

function LogInScreen(){
    const [userID, setUserID] = useState('');
    const [password, setPassword] = useState('');

    const UserIDChange = (event) => {
        setUserID(event.target.value);
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
        padding: 10
    }

    return(
        <div className="login">
            <p className="site">게임 사이트 이름</p>
            <form onSubmit={FormSubmit}>
                <input
                    type="text"
                    placeholder="아이디"
                    value={userID}
                    onChange={UserIDChange}
                    style={inputStyle}
                />
                <input
                    type="password"
                    placeholder="비밀번호"
                    value={password}
                    onChange={UserPasswordChange}
                    style={inputStyle}
                />

                {/* <Link to={"/Games"} 
                    style={
                        {
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            textDecoration: "none", 
                            color: 'white',
                            fontSize: 18,
                            backgroundColor: "#575757",
                            borderRadius: 70,
                            boxSizing: "border-box",
                            width: 440,
                            height: 80,
                            marginLeft: "auto",
                            marginRight: "auto",
                        }
                    }>
                    로그인
                </Link>

                <Link to={"/SingIn"} 
                    style={
                        {
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            textDecoration: "none", 
                            color: 'white',
                            fontSize: 18,
                            borderRadius: 70,
                            boxSizing: "border-box",
                            marginLeft: "auto",
                            marginRight: "auto",
                        }
                    }>
                    회원가입
                </Link> */}

                <button className="loginBtn"  onClick={goLogIn}>로그인</button>

                <div>
                    <button>아이디 찾기</button>       
                    <p>|</p>     
                    <button>비밀번호 찾기</button>     
                    <p>|</p>            
                    <button onClick={goSignIn}>회원가입</button>                    
                </div>
            </form>
        </div>
    )
}

export default LogInScreen;