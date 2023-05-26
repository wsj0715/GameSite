import React, { useEffect, useState } from "react";
import { AiOutlineStar, AiFillStar, AiOutlineLike, AiFillLike } from "react-icons/ai";
import { useParams } from "react-router-dom";
import "../CSS/Game.css";
import Header from "../Components/header";
import RufflePlayer from "../Components/RufflePlayer";
import { S3_URL } from "../api/apiClient";
import { getAGames } from "../api/apiGame";
function GameScreen() {
    const { id } = useParams();
    const [like, setLike] = useState(false);
    const [star, setStar] = useState(false);
    const [gameName, setGameName] = useState("");
    const toggleLike = () => {
        setLike(!like);
    };

    const toggleStar = () => {
        setStar(!star);
    };

    useEffect(() => {
        getAGames(id).then((res) => {
            setGameName(res.data.name);
        });
    }, [id]);

    return (
        <div className="gamescreen">
            <Header />

            <div className="title">
                <h6>{gameName}</h6>
            </div>

            <hr />

            <div className="game">
                <RufflePlayer swfUrl={`${S3_URL}${id}.swf`} />
            </div>

            <div className="sub">
                <p>{gameName}</p>

                <div className="icon">
                    {star ? <AiFillStar onClick={toggleStar} /> : <AiOutlineStar onClick={toggleStar} />}

                    {like ? (
                        <AiFillLike style={{ marginLeft: 10 }} onClick={toggleLike} />
                    ) : (
                        <AiOutlineLike style={{ marginLeft: 10 }} onClick={toggleLike} />
                    )}
                </div>
            </div>
        </div>
    );
}

export default GameScreen;
