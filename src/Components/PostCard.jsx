import { Box } from "@mui/material";
import React from "react";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
const pStyle = {
    margin: "2px 7px",
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "400",
    color: "white",
};

export default function PostCard(post) {
    return (
        <Box
            sx={{
                display: "flex",
                width: "80%",
                minWidth: "200px",
                margin: "2%",
                cursor: "pointer",
                overflow: "hidden",
                borderTop: "1px solid white",
            }}
        >
            <Box sx={{ display: "flex", margin: "20px auto", width: "80%" }}>
                <AccountCircleOutlinedIcon sx={{ fontSize: "3.5rem", color: "white" }} />
                <div>
                    <p style={{ ...pStyle, fontSize: "12px" }}>{post.title}</p>
                    <p style={{ ...pStyle, fontSize: "10px", marginBottom: "10px" }}>{post.content}</p>
                </div>
            </Box>
        </Box>
    );
}
