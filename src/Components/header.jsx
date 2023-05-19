import React, {useEffect} from "react";
import { IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { FaBars } from "react-icons/fa";
import { AiFillAliwangwang } from "react-icons/ai";

import '../CSS/Header.css'
import '../JS/toggle.js'

const Header = () => {

    return(
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

                <ul className="menu">
                    <li><a href="#">카테고리</a></li>
                    <li><a href="#">커뮤니티</a></li>
                    <li><a href="#">즐겨찾는 게임</a></li>   
                </ul>

                <div className="search-container">
                    <div className="search-icon">
                        <SearchIcon/>
                    </div>
                    <input 
                        placeholder="게임을 검색하세요." />
                </div>

                <div className="user">
                    <IconButton>
                        <AccountCircleOutlinedIcon 
                            style={{
                                fontSize: 30,
                                color: '#ffffff'
                            }}
                        />
                    </IconButton>
                </div>

                <a href="#" className="toggleBtn">
                    <FaBars 
                        style={{
                            color: '#ffffff'
                        }}
                    />
                </a>
            </header>
        </div>
    )
}

export default Header;