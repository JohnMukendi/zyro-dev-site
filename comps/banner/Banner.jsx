import styles from '../../styles/zyro/banner.module.css';
import Head from 'next/head';
import {Box,Container,Typography,Button,Toolbar} from '@mui/material';
import Navbar from './Navbar'
import LanguageSharpIcon from '@mui/icons-material/LanguageSharp';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import GppGoodIcon from '@mui/icons-material/GppGood';
import Timer from './Timer'


const Banner = () => {
    let navBg = 'linear-gradient(180deg, #f5536f 0%, #fb506e 100%)'

    const handleScroll = () =>{
        alert('yes')
    }
    return (
    <>  
    <Navbar navBg = {navBg}/>        
    <div className={styles.banner}>
        
        
        <Box onScroll={handleScroll} sx={{padding:'0px'}}>
            <Box className={styles['banner-top-div']}>
                <Box className={styles['banner-top-div-left']}>
                <video 
                width='90%' height='90%'
                 autoplay="autoplay" loop="loop" muted="muted" playsinline="" 
                 className={styles['video-frame']}
                 >
                    <source 
                        src="/Zyro/banner-video.mp4" type="video/mp4"
                    />

                </video>
                </Box>
                <Box className={styles['banner-top-div-right']}>
                    <Box className={styles['banner-h1']}>
                        <h1>
                            Flawless templates, easy editing, no coding required 
                            — that's Zyro website builder
                        </h1>
                    </Box>
                    <Box className={styles['timer-heading']}>
                        Build a website and save up to 75% with plans from $2.99/mo. Deal ends in:
                    </Box>
                    <Box className={styles['timer-div']}>
                        <Timer/>
                    </Box>
                    <Box>
                        <button className={styles['banner-btn']}>Start for freee</button>
                    </Box>
                    <Box className={styles['banner-msg']}>
                        <Typography>No credit card required</Typography>
                    </Box>
                </Box>
            </Box>
            
            <Box className={styles['banner-bottom']}>
                <Toolbar className={styles['bottom-banner-div']}>
                    <Box>
                        <Box className={styles['bottom-banner-icons']}><LanguageSharpIcon/></Box>
                        <Typography>Free domain for one year</Typography>
                    </Box>
                    <Box>
                        <Box className={styles['bottom-banner-icons']}><HeadsetMicIcon/></Box>
                        <Typography>24/7 customer support</Typography>
                    </Box>
                    <Box>
                        <Box className={styles['bottom-banner-icons']}><GppGoodIcon/></Box>
                        <Typography>30-day money-back gurantee</Typography>
                    </Box>
                </Toolbar>
            </Box>
        </Box>        
    </div>
        
    </>

    );
}
 
export default Banner;