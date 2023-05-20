import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { FaBars } from "react-icons/fa";
import { AiFillAliwangwang } from "react-icons/ai";

import '../CSS/Header.css';

const Header = () => {
    const [menuActive, setMenuActive] = useState(false);
    const [searchActive, setSearchActive] = useState(false);
    const [iconActive, setIconActive] = useState(false);
    const [profileActive, setProfileActive] = useState(false);    

    const handleToggle = () => {
        setMenuActive(!menuActive);
        setSearchActive(!searchActive);
        setIconActive(!iconActive);
    };

    const handleProfile = () => {
        setProfileActive(!profileActive);
    };

    const movePage = useNavigate();

    function goLogIn(){
        movePage('/LoginScreen')
    }

    function goSignIn(){
        movePage('/SignInScreen')
    }

    return (
        <div>
            <header className="header">
                <div className="title">
                    <h1>
                        추억의 플래시 5락실
                    </h1>
                    <AiFillAliwangwang 
                        style={{
                            color: 'white',
                            marginLeft: 10,
                            fontSize: 25
                        }}
                    />
                </div>                

                <ul className={`menu ${menuActive ? 'active' : ''}`}>
                    <li><a>카테고리</a></li>
                    <li><a>커뮤니티</a></li>
                    <li><a>즐겨찾는 게임</a></li>   
                </ul>

                <div className={`search-container ${searchActive ? 'active' : ''}`}>
                    <div className="search-icon">
                        <SearchIcon/>
                    </div>
                    <input 
                        placeholder="게임을 검색하세요." />
                </div>

                <div className={`user ${iconActive ? 'active' : ''}`}>
                    <IconButton onClick={handleProfile}>
                        <AccountCircleOutlinedIcon 
                            style={{
                                fontSize: 30,
                                color: '#ffffff'
                            }}
                        />
                    </IconButton>
                </div>

                <ul className={`profile ${profileActive ? 'active' : ''}`}>
                    <li><a >마이페이지</a></li>
                    <li><a onClick={goLogIn}>로그인</a></li>
                    <li><a onClick={goSignIn}>회원가입</a></li>
                </ul>

                <a href="#" className="toggleBtn" onClick={handleToggle}>
                    <FaBars 
                        style={{
                            color: '#ffffff'
                        }}
                    />
                </a>
            </header>
        </div>
    );
};

export default Header;
