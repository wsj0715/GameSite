/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import HomeContentList from "../Components/HomeContentList";
import Header from "../Components/header";
import "../CSS/Main.css";
import { getAllGames } from "../api/apiGame";
const madeGameList = [
    { id: 1, name: "플래피 버드" },
    { id: 2, name: "언데드 서바이버" },
    { id: 3, name: "테트리스" },
];
const loadScript = (url) => {
    // Check if the script is already loaded
    if (document.querySelector(`script[src="${url}"]`)) {
        return;
    }
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = url;
    document.body.appendChild(script);
};
function MainScreen() {
    const [gameList, setGameList] = useState([]); // 게임 목록

    useEffect(() => {
        getAllGames()
            .then((res) => {
                setGameList(res.data);
            })
            .catch((err) => {
                console.log(err);
            });

        loadScript("https://unpkg.com/@ruffle-rs/ruffle");
    }, []);

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
            <HomeContentList contents={gameList} />
        </div>
    );
}

export default MainScreen;
