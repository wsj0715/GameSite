import React, { useState, useEffect } from "react";
import { Typography, Divider, Box, TextField, Button } from "@mui/material";
import PostCard from "../Components/PostCard";
import Header from "../Components/header";
import { getPostsList, postPosts } from "../api/apiCommunity";

function CommunityScreen() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const [postsList, setPostsList] = useState([]);

    const body = {
        title: title,
        content: content,
    };
    useEffect(() => {
        getPostsList()
            .then((res) => {
                setPostsList(res.data);
                console.log("게시글 목록 성공");
            })
            .catch((err) => {
                console.error("게시글 목록 실패");
            });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault(); // 폼(submit) 기본 동작 방지

        // 입력값 확인 로직
        if (!title || !content) {
            alert("모든 필드를 입력해주세요.");
            return;
        }
        postPosts(body)
            .then((res) => {
                console.log("post 성공");
                getPostsList()
                    .then((res) => {
                        setPostsList(res.data);
                        console.log("게시글 목록 성공");
                    })
                    .catch((err) => {
                        console.error("게시글 목록 실패");
                    });
            })
            .catch((err) => {
                console.log("post 실패");
                console.error(err);
            });
    };
    return (
        <div>
            <Header />
            <Typography
                style={{
                    color: "#d9d9d9",
                    fontSize: 20,
                    fontWeight: 600,
                    margin: "87px 0 10px 50px",
                }}
            >
                커뮤니티
            </Typography>

            <Divider
                style={{
                    border: "1px solid #d9d9d9",
                    marginLeft: 20,
                    marginRight: 20,
                }}
            />

            <Box
                component={"form"}
                onSubmit={handleSubmit}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContents: "center",
                    alignItems: "center",
                }}
            >
                <TextField
                    label="제목"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    variant="filled"
                    style={{
                        width: "70%",
                        margin: "50px 0 20px",
                    }}
                    InputProps={{
                        disableUnderline: true,
                        style: {
                            border: "1px solid #d9d9d9",
                            color: "#d9d9d9",
                        },
                    }}
                    InputLabelProps={{
                        style: {
                            color: "#d9d9d9",
                        },
                    }}
                />
                <TextField
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    multiline
                    label="내용"
                    rows={10}
                    variant="filled"
                    style={{
                        width: "70%",
                        marginBottom: 20,
                    }}
                    InputProps={{
                        disableUnderline: true,
                        style: {
                            border: "1px solid #d9d9d9",
                            color: "#d9d9d9",
                        },
                    }}
                    InputLabelProps={{
                        style: {
                            color: "#d9d9d9",
                        },
                    }}
                />

                <Button
                    type="submit"
                    style={{
                        border: "1px solid #d9d9d9",
                        borderRadius: 0,
                        color: "#ffffff",
                        width: 150,
                        display: "flex",
                        justifyContent: "space-between",
                    }}
                >
                    작성하기
                </Button>
                {postsList.map((post, index) => (
                    <PostCard key={index} post={post} />
                ))}
            </Box>
        </div>
    );
}

export default CommunityScreen;
