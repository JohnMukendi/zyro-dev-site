import WebBuilderQuestions from "./web-builder-questions";
import * as React from 'react'
import {Box,Container,Card,Typography,Button,Toolbar,
Accordion,Tab,tabs,Link,AccordionSummary,AccordionDetails
} from '@mui/material';
import styles from '../../styles/zyro/website-builder.module.css'

const WebBuilderSect = () => {
    return (
        <>
        <WebBuilderQuestions/>
        <Box>
            <Box sx={{position:'relative'}}>
                <img style={{width:'100%'}} src='/Zyro/home-page-templates.avif'/>
                <Typography
                    sx={{
                        position:'absolute',
                        color:'white',
                        top:'40%',
                        left:'50%',
                        transform:'translate(-50%,-50%)',
                        textAlign:'center',
                        width:'40%'
                    }}
                    variant='h3'
                >
                    Got a business idea? build it with Zyro
                </Typography>
                <button style={{
                    background:'pink',
                    position:'absolute',
                    color:'white',background:'#fb506f',
                    top:'70%',
                    left:'50%',
                    transform:'translate(-50%,-50%)',
                    borderRadius:'50px',
                    padding:'20px 60px',
                    fontWeight:'700',fontSize:'18px'
                }}>
                    Start for free
                </button>
            </Box>
        </Box>
        </>
    );
}
 
export default WebBuilderSect;