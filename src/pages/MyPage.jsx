import React, {useEffect, useState} from "react";
import { Typography, Divider, Box, Button } from '@mui/material';
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import {AiOutlineRight} from "react-icons/ai"

import { Mypage } from "../api/apiMypage";

import Header from "../Components/header";

function MyPageScreen(){
    const [name, setName] = useState("");

    useEffect(()=>{
        Mypage.then((res)=>{
            setName(res.data.name)
        })
    })

    return(
        <div className="MyPage">
            <Header />

            <Typography 
                style={{
                    color: '#d9d9d9',
                    fontSize: 20,
                    fontWeight: 600,
                    margin: '87px 0 10px 50px'
                }}
            >마이페이지</Typography>

            <Divider style={{
                border: '1px solid #d9d9d9',
                marginLeft: 20,
                marginRight: 20
            }}/>

            <Box style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Typography
                    style={{
                        color: '#d9d9d9',
                        margin: '50px 0 0',
                        fontSize: 20
                    }}>
                        내 프로필
                    </Typography>

                <Box sx={{
                        width: '60%',
                        height: 450,
                        border: '1px solid #d9d9d9',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>
                    <AccountCircleOutlinedIcon style={{color: '#ffffff', fontSize: 75, margin: '50px 0 0'}}/>
                    
                    <Typography style={{color: '#ffffff', margin: 'auto 0 10px',}}>아이디 : {name}</Typography>

                    <Button style={{
                        backgroundColor: '#d9d9d9',
                        borderRadius: 0,
                        color: '#575757',
                        width: 150,
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginBottom: 100
                    }}>
                        즐겨찾는 게임
                        <AiOutlineRight/>
                    </Button>

                    <Button style={{
                        backgroundColor: '#32384C', 
                        color: '#ffffff', 
                        width: 250, 
                        height: 50,
                        borderRadius: 30,
                        margin: 'auto 0 50px'
                    }}>
                        로그아웃
                    </Button>
                </Box>
            </Box>
        </div>
    )
}

export default MyPageScreen;