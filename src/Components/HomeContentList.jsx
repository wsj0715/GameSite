import React from "react";
import { Box, Typography } from "@mui/material";
import ContentBox from "./ContentBox";

//페이지 안에서 게임 리스트를 보여주는 컴포넌트
const HomeContentList = ({ contents }) => {
    //받아온 contents로 img
    return (
        <Box sx={{ display: "flex", justifyContent: "space-evenly", flexWrap: "wrap" }}>
            {contents.map((content) => (
                <Box key={content.id} sx={{ width: "25%", padding: "5px", maxWidth: "270px" }}>
                    <ContentBox id={content.id}></ContentBox>
                    <Typography sx={{ color: "#D9D9D9", whiteSpace: "normal", fontSize: "0.7rem", width: "100%" }}>{content.name}</Typography>
                </Box>
            ))}
        </Box>
    );
};

export default HomeContentList;
