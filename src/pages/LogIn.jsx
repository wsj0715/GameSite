import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { AiFillAliwangwang } from "react-icons/ai";

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
            

                <button className="loginBtn"  onClick={goLogIn}>로그인</button>

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