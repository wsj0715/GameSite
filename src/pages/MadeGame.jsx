import React, { useState } from "react";
import { AiOutlineStar, AiFillStar, AiOutlineLike, AiFillLike } from "react-icons/ai";
import { useParams } from "react-router-dom";
import "../CSS/MadeGame.css";
import Header from "../Components/header";
import { Unity, useUnityContext } from "react-unity-webgl";
function MadeGame() {
    const { id } = useParams();
    const [like, setLike] = useState(false);
    const [star, setStar] = useState(false);

    const toggleLike = () => {
        setLike(!like);
    };

    const toggleStar = () => {
        setStar(!star);
    };
    
    const { unityProvider } = useUnityContext({
        loaderUrl: `/build${id}/build.loader.js`,
        dataUrl: `/build${id}/build.data`,
        frameworkUrl: `/build${id}/build.framework.js`,
        codeUrl: `/build${id}/build.wasm`,
    });
   
    return (
        <div className="gamescreen">
            <Header />
            
            <div className="title">
                <h6>(게임 이름)</h6>
            </div>

            <hr />

            <div className="game">
              {unityProvider&&<Unity unityProvider={unityProvider} style={{width:"750px", height:"500px"}}/>}
            </div>

            <div className="sub">
                <p>(게임 이름)</p>

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

export default MadeGame;