import React from "react";
import { Typography, Divider, Box, TextField, Button } from "@mui/material";
import {AiOutlineRight} from "react-icons/ai"

import Header from "../Components/header";

function CommunityScreen(){
    return(
        <div>
            <Header />

            <Typography 
                style={{
                    color: '#d9d9d9',
                    fontSize: 20,
                    fontWeight: 600,
                    margin: '87px 0 10px 50px'
                }}
            >커뮤니티</Typography>

            <Divider style={{
                border: '1px solid #d9d9d9',
                marginLeft: 20,
                marginRight: 20
            }}/>

            <Box style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContents: 'center',
                alignItems: 'center'
            }}>
                <TextField 
                    label="제목"
                    variant="filled"
                    style={{
                        width: '70%',
                        margin: '50px 0 20px',
                    }}
                    InputProps={{
                        disableUnderline: true,
                        style: {
                          border: '1px solid #d9d9d9',
                          color: '#d9d9d9'
                        },
                    }}
                    InputLabelProps={{
                        style: {
                          color: '#d9d9d9',
                        }
                    }}
                />
                <TextField 
                    multiline
                    label="내용"
                    rows={10}
                    variant="filled"
                    style={{
                        width: '70%',
                        marginBottom: 20
                    }}
                    InputProps={{
                        disableUnderline: true,
                        style: {
                          border: '1px solid #d9d9d9',
                          color: '#d9d9d9'
                        },
                    }}
                    InputLabelProps={{
                        style: {
                          color: '#d9d9d9',
                        }
                    }}
                />

                <Button style={{
                    border: '1px solid #d9d9d9',
                    borderRadius: 0,
                    color: '#ffffff',
                    width: 150,
                    display: 'flex',
                    justifyContent: 'space-between',
                }}>
                    작성하기
                    <AiOutlineRight />
                </Button>
            </Box>
        </div>
    )
}

export default CommunityScreen;