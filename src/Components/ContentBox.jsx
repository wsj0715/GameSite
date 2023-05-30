import React from "react";
import { useNavigate } from "react-router-dom";
import { S3_URL } from "../api/apiClient";

//게임 로고를 그려줄 컴포넌트
export default function ContentBox({ id }) {
    const navigate = useNavigate();
    const imgUrl = [1, 2, 3].includes(id) ? `resource/img/${id}.jpg` : `${S3_URL}${id}.jpg`;

    const style = {
        display: "block",
        backgroundColor: "#D9D9D9",
        borderRadius: "30px",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        overflow: "hidden",
        marginBottom: "5px",
        height: "85%",
    };

    const handleClick = () => {
        if (id === 3) navigate(`/Tetris`);
        else if (id === 2) navigate(`/MadeGameScreen/${id}`);
        else if (id === 1) navigate(`/MadeGameScreen/${id}`);
        else navigate(`/GameScreen/${id}`);
    };

    return (
        <span onClick={handleClick} style={style}>
            <img src={imgUrl} alt="content" style={{ width: "100%", height: "100%" }} />
        </span>
    );
}
