import React from "react";
import { useNavigate } from "react-router-dom";

//게임 로고를 그려줄 컴포넌트
export default function ContentBox({ id }) {
    const navigate = useNavigate();

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
        if (id === "3") navigate(`/Tetris`);
        else navigate(`/GameScreen/${id}`);
    };

    return (
        <span onClick={handleClick} style={style}>
            <img src={`resource/img/${id}.jpg`} alt="content" style={{ width: "100%", height: "100%" }} />
        </span>
    );
}
