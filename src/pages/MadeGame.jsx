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

    function getGameName(id) {
        let gameName;
        switch (id) {
            case "1":
                gameName = "플래피 버드";
                break;
            case "2":
                gameName = "언데드 서바이버";
                break;
            case "3":
                gameName = "테트리스";
                break;
            default:
                gameName = "게임?";
        }
        return gameName;
    }
    const gameName = getGameName(id);

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
            <h6>{gameName}</h6>
          </div>
      
          <hr />
          {id === "1" ? (
            <div className="madegame1">
              {unityProvider && <Unity unityProvider={unityProvider} style={{ width: "750px", height: "500px" }} />}
            </div>
          ) : id === "2" ? (
            <div className="madegame2">
              {unityProvider && <Unity unityProvider={unityProvider} style={{ width: "509px", height: "905px" }} />}
            </div>
          ) : null}
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

export default MadeGame;