import React, {useState} from "react";
import {AiOutlineStar, AiFillStar, AiOutlineLike, AiFillLike} from 'react-icons/ai';

import '../CSS/Game.css'
import Header from "../Components/header";

function GameScreen(){
    const [like, setLike] = useState(false);
    const [star, setStar] = useState(false);

    const toggleLike = () => {
        setLike(!like);
    };

    const toggleStar = () => {
        setStar(!star);
    };
    return(
        <div className="gamescreen">
            <Header />

            <div className="title">
                <h6>(게임 이름)</h6>
            </div>

            <hr/>

            <div className="game">

            </div>

            <div className="sub">
                <p>(게임 이름)</p>

                <div className="icon">
                {star ? <AiFillStar onClick={toggleStar} /> 
                    : <AiOutlineStar onClick={toggleStar} />}
                    
                {like ? <AiFillLike style={{ marginLeft: 10 }} onClick={toggleLike} /> 
                    : <AiOutlineLike style={{ marginLeft: 10 }} onClick={toggleLike} />}
                </div>
            </div>
        </div>
    )
}

export default GameScreen;