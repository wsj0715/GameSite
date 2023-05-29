/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { FaBars } from "react-icons/fa";
import { AiFillAliwangwang } from "react-icons/ai";

import "../CSS/Header.css";

const Header = () => {
    const [menuActive, setMenuActive] = useState(false);
    const [searchActive, setSearchActive] = useState(false);
    const [iconActive, setIconActive] = useState(false);
    const [registerActive, setRegisterActive] = useState(false);

    const handleToggle = () => {
        setMenuActive(!menuActive);
        setSearchActive(!searchActive);
        setIconActive(!iconActive);
        setRegisterActive(!registerActive);
    };

    const movePage = useNavigate();

    function goLogIn() {
        movePage("/LoginScreen");
    }

    function goSignIn() {
        movePage("/SignInScreen");
    }

    function goHome() {
        movePage("/MainScreen");
    }

    function goMyPage() {
        movePage("/MyPageScreen");
    }

    function goCommunity() {
        movePage("/CommunityScreen");
    }

    return (
        <div>
            <header className="header">
                <div className="title">
                    <h1 onClick={goHome}>
                        추억의 플래시 5락실
                        <AiFillAliwangwang
                            style={{
                                color: "white",
                                marginLeft: 10,
                                fontSize: 25,
                                marginTop: 5,
                            }}
                        />
                    </h1>
                </div>

                <ul className={`menu ${menuActive ? "active" : ""}`}>
                    <li>
                        <a onClick={goLogIn}>로그인</a>
                    </li>
                    <li>
                        <a onClick={goSignIn}>회원가입</a>
                    </li>
                    <li>
                        <a onClick={goCommunity}>커뮤니티</a>
                    </li>
                    {/* <li>
                        <a>카테고리</a>
                    </li> */}
                    {/* <li>
                        <a>즐겨찾는 게임</a>
                    </li> */}
                </ul>

                <div className={`search-container ${searchActive ? "active" : ""}`}>
                    <div className="search-icon">
                        <SearchIcon />
                    </div>
                    <input placeholder="게임을 검색하세요." />
                </div>

                <div className={`user ${iconActive ? "active" : ""}`}>
                    <IconButton onClick={goMyPage}>
                        <AccountCircleOutlinedIcon
                            style={{
                                fontSize: 30,
                                color: "#ffffff",
                            }}
                        />
                    </IconButton>
                </div>

                <ul className={`register ${registerActive ? "active" : ""}`}>
                    <li>
                        <a onClick={goLogIn}>로그인</a>
                    </li>
                    <span>|</span>
                    <li>
                        <a onClick={goSignIn}>회원가입</a>
                    </li>
                </ul>

                <button className="toggleBtn" onClick={handleToggle}>
                    <FaBars
                        style={{
                            color: "#ffffff",
                        }}
                    />
                </button>
            </header>
        </div>
    );
};

export default Header;
