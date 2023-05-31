import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import ContentBox from "./ContentBox";

//페이지 안에서 게임 리스트를 보여주는 컴포넌트
const HomeContentList = ({ contents }) => {
    const [gameList, setGameList] = useState(contents); // 게임 목록
    //받아온 contents로 img
    useEffect(() => {
        setGameList(contents);
    }, [contents]);
    return (
        <Box sx={{ display: "flex", justifyContent: "space-evenly", flexWrap: "wrap" }}>
            {gameList.map((game) => (
                <Box key={game.id} sx={{ width: "25%", margin: "1rem", maxWidth: "270px" }}>
                    <ContentBox id={game.id}></ContentBox>
                    <Typography sx={{ color: "#D9D9D9", whiteSpace: "normal", fontSize: "0.7rem", width: "100%" }}>{game.name}</Typography>
                </Box>
            ))}
        </Box>
    );
};

export default HomeContentList;
