import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { changePostById, deletePostById } from "../api/apiCommunity";

const pStyle = {
    margin: "2px 7px",
    fontStyle: "normal",
    fontWeight: "400",
    color: "white",
    fontSize: "12px",
};

export default function PostCard({ post, afterDelete }) {
    const [isEditMode, setIsEditMode] = useState(false);
    const [title, setTitle] = useState(post.title);
    const [content, setContent] = useState(post.content);

    const handleChange = async () => {
        if (!title || !content) {
            alert("모든 필드를 입력해주세요.");
            return;
        }
        try {
            await changePostById(post.id, { title: title, content: content });
            console.log("post 수정 성공");
            setTitle(title);
            setContent(content);
            setIsEditMode(false);
        } catch (err) {
            if (err.response.status === 403) {
                alert("수정 권한이 없습니다.");
                setIsEditMode(false);
                return;
            }
            console.log(err);
        }
    };
    useEffect(() => {
        setTitle(post.title);
        setContent(post.content);
    }, [post]);
    const handleDelete = async () => {
        try {
            await deletePostById(post.id);
            console.log("삭제 성공");
            afterDelete();
        } catch (err) {
            if (err.response.status === 403) {
                alert("삭제 권한이 없습니다.");
                return;
            }
            console.log(err);
        }
    };

    return (
        <Box
            sx={{
                display: "flex",
                width: "80%",
                minWidth: "200px",
                margin: "2% auto",
                overflow: "hidden",
                borderTop: "1px solid white",
            }}
        >
            <Box sx={{ display: "flex", margin: "20px ", width: "100%" }}>
                <AccountCircleOutlinedIcon sx={{ fontSize: "3.5rem", color: "white", marginRight: "1rem" }} />
                <div style={{ ...pStyle, width: "100%" }}>
                    <div style={{ display: "flex", width: "100%", marginBottom: "10px" }}>
                        <div>{`${post.writtenBy} | ${post.writtenDateTime}`}</div>
                        <div style={{ flexGrow: 1 }}> </div>
                        <div>
                            <span onClick={() => setIsEditMode(true)} style={{ cursor: "pointer" }}>
                                수정
                            </span>
                            <span style={{ margin: "0 10" }}> | </span>
                            <span
                                style={{ cursor: "pointer" }}
                                onClick={() => {
                                    window.confirm("정말 삭제하시겠습니까?") && handleDelete();
                                }}
                            >
                                삭제
                            </span>
                        </div>
                    </div>
                    <span>제목: </span>
                    {!isEditMode ? (
                        <span>{title}</span>
                    ) : (
                        <input
                            type="text"
                            name="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            style={{ backgroundColor: "#575757", color: "white" }}
                        />
                    )}
                    <br />
                    <span>내용: </span>
                    {!isEditMode ? (
                        <span>{content}</span>
                    ) : (
                        <>
                            <input
                                type="text"
                                name="content"
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                style={{ backgroundColor: "#575757", color: "white" }}
                            />
                            <button onClick={handleChange} style={{ marginLeft: "0.5rem", backgroundColor: "#575757", color: "white" }}>
                                수정
                            </button>
                        </>
                    )}
                </div>
            </Box>
        </Box>
    );
}
