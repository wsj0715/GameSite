/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useNavigate } from "react-router-dom";
import HomeContentList from "../Components/HomeContentList";
import Header from "../Components/header";
import "../CSS/Main.css";

const madeGameList = [
    { id: "85", name: "플래피 버드" },
    { id: "2", name: "언데드 서바이버" },
    { id: "3", name: "테트리스" },
];
function MainScreen() {
    const movePage = useNavigate();

    function goGame() {
        movePage("/GameScreen");
    }

    return (
        <div>
            <Header />

            <div className="title">
                <h6>제작 게임</h6>
            </div>

            <hr />
            <HomeContentList contents={madeGameList} />

            <div className="title2">
                <h6>사이트 게임</h6>
            </div>

            <hr />
            <div className="games">
                <ul>
                    <li>
                        <a onClick={goGame}>
                            <img src="https://via.placeholder.com/270x270" alt="undefined" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="https://via.placeholder.com/270x270" alt="undefined" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="https://via.placeholder.com/270x270" alt="undefined" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="https://via.placeholder.com/270x270" alt="undefined" />
                        </a>
                    </li>
                </ul>
            </div>
            {/* <div className="games2">
                <ul>
                    <li>
                        <a href="#">
                            <img src="https://via.placeholder.com/270x270" alt="undefined" />
                        </a>
                    </li>
                </ul>
            </div> */}
        </div>
    );
}

export default MainScreen;
