import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { AiFillAliwangwang } from "react-icons/ai";

import '../CSS/SignIn.css'

function SignInScreen(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault(); // 폼(submit) 기본 동작 방지
    
        // 입력값 확인 로직
        if (!username || !password || !confirmPassword) {
        alert('모든 필드를 입력해주세요.');
        return;
        }
    
        // 패스워드 일치 확인 로직
        if (password !== confirmPassword) {
        alert('비밀번호와 비밀번호 확인이 일치하지 않습니다.');
        return;
        }
    };

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

            <form onSubmit={handleSubmit}> 
                <input
                  type="text"
                  placeholder="아이디"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  style={inputStyle}
                />
                <input
                  type="password"
                  placeholder="비밀번호"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={inputStyle}
                />
                {/* <input
                  type="password"
                  placeholder="비밀번호 확인"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  style={inputStyle}
                /> */}
            </form>

            <button type="submit" className="signinBtn" onClick={goLogIn}>회원가입</button>
        </div>
    )
}

export default SignInScreen;