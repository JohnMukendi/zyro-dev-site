//BUILD FAST GROW FAST,LOAD FASTER
import * as React from 'react'
import {
    Box,Container,Card,Typography,Button,Toolbar,
    Tabs,Tab,Paper,Link
} from '@mui/material';
import {papers} from './papers'
import styles from '../../styles/zyro/builder-plan.module.css'

const Sect3 = () => {

    return ( 
        <>
        <Box className={styles['sect3-div']}>
            <Box sx={{display:'flex',width:'100%'}}>
                <Box
                 sx={{width:'50%',display:'flex',flexDirection:'column',
                    alignItems:'center',justifyContent:'center',padding:'0px 80px'
                }}
                >
                    <Typography variant='h3'>Build fast. Grow faster. Load fastest</Typography>
                    <Typography sx={{padding:'20px 0px'}}>
                        Get a professional waebsite that loads at lightning speed.
                        Convert more of your website traffic into paying customers and rank higher
                        on search engines.
                    </Typography>

                    <Box sx={{width:'100%',display:'flex',justifyContent:'flex-start'}}>
                        <button>Start for free</button>
                    </Box>
                </Box>
                <Box sx={{width:'50%',background:'#ebeff2',padding:'40px'}}>
                    <img style={{width:'100%'}}src='/Zyro/headphones.avif'/>
                </Box>
            </Box>

            <Box sx={{display:'flex',width:'100%'}}>
                <Box sx={{width:'50%'}}>
                    <img style={{width:'100%'}} src='Zyro/builder1.png'/>
                </Box>
                <Box
                  sx={{width:'50%',display:'flex',flexDirection:'column',
                  alignItems:'center',justifyContent:'center',padding:'0px 80px'
                  }}
                 >
                    <Typography variant='h3'>Customer support. Ready 24/7.</Typography>
                    <Typography sx={{padding:'20px 0px'}}>
                        Stuck ? Not for long. Our live support team can help, no matter the time of day (or night).
                    </Typography>
                    <Box sx={{width:'100%',display:'flex',justifyContent:'flex-start'}}>
                        <button>Start for free</button>
                    </Box>
                </Box>
            </Box>
        </Box>        
        </>
    );
}
 
export default Sect3;