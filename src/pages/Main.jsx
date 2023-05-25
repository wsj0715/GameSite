/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useNavigate } from "react-router-dom";

import Header from "../Components/header";
import '../CSS/Main.css'

function MainScreen(){
    const movePage = useNavigate();

    function goGame(){
        movePage('/GameScreen')
    }

    return(
        <div>
            <Header/>

            <div className="title">
                <h6>제작 게임</h6>
            </div>

            <hr/>

            <div className="games">
                <ul>
                    <li><a onClick={goGame}><img src="https://via.placeholder.com/270x270" alt="undefined"/></a></li>
                    <li><a href="#"><img src="https://via.placeholder.com/270x270" alt="undefined"/></a></li>
                    <li><a href="#"><img src="https://via.placeholder.com/270x270" alt="undefined"/></a></li>
                    <li><a href="#"><img src="https://via.placeholder.com/270x270" alt="undefined"/></a></li>
                </ul>
            </div>

            <div className="title2">
                <h6>사이트 게임</h6>
            </div>

            <hr/>

            <div className="games2">
                <ul>
                    <li><a href="#"><img src="https://via.placeholder.com/270x270" alt="undefined"/></a></li>
                    <li><a href="#"><img src="https://via.placeholder.com/270x270" alt="undefined"/></a></li>
                    <li><a href="#"><img src="https://via.placeholder.com/270x270" alt="undefined"/></a></li>
                    <li><a href="#"><img src="https://via.placeholder.com/270x270" alt="undefined"/></a></li>
                    <li><a href="#"><img src="https://via.placeholder.com/270x270" alt="undefined"/></a></li>
                    <li><a href="#"><img src="https://via.placeholder.com/270x270" alt="undefined"/></a></li>
                    <li><a href="#"><img src="https://via.placeholder.com/270x270" alt="undefined"/></a></li>
                    <li><a href="#"><img src="https://via.placeholder.com/270x270" alt="undefined"/></a></li>
                    <li><a href="#"><img src="https://via.placeholder.com/270x270" alt="undefined"/></a></li>
                    <li><a href="#"><img src="https://via.placeholder.com/270x270" alt="undefined"/></a></li>
                    <li><a href="#"><img src="https://via.placeholder.com/270x270" alt="undefined"/></a></li>
                    <li><a href="#"><img src="https://via.placeholder.com/270x270" alt="undefined"/></a></li>
                </ul>
            </div>

        </div>
    )
}

export default MainScreen;