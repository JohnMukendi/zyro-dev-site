import * as React from 'react';
import styles from '../../styles/zyro/banner.module.css';
import Head from 'next/head';
import Image from 'next/head'
import { navLinks } from './navLinks';
import LanguageSharpIcon from '@mui/icons-material/LanguageSharp';
import {
    Box,Typography,Button,Menu,Grow,
    Paper,Popper,MenuItem,MenuList,Stack
} from '@mui/material';

const Navbar = () => {

    const [hover,setHover] = React.useState('pointer')
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setHover('pointer')
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    
    return (
    <>
    <Head>
    <title>Zyro</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
    </Head>
    <div>
      
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
    <Box component ='nav' className={styles['nav-bar']}>
            <Box className={styles['logo']}>
             
             <img  src='/Zyro/logo_1.png'/>
            </Box>
            <Box className={styles['nav-links-left']}>
            { navLinks.map((link) =>(
                <Box 
                    className={[styles['nav-tab'],styles.tab1]}
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onMouseOver={handleClick}
                >
                    {link.name}<i className={link.icon}></i>
                    <svg alt="" fill='white' width="16px" height="16px" xmlns="http://www.w3.org/2000/svg" className="dropdown__arrow icon sprite-icons" data-v-79805227=""><use href="/_nuxt/3fd51a483de901f9af4f23e2d10a6c7f.svg#i-arrow-down" xlinkHref="/_nuxt/3fd51a483de901f9af4f23e2d10a6c7f.svg#i-arrow-down"></use></svg>
                </Box>
            ))
            }  
                  
                  
            </Box>
            <Box className ={styles['nav-links-right']}>
                <Box sx={{display:'flex',alignItems:'center'}}>
                    <LanguageSharpIcon sx={{marginRight:'8px'}}/>
                    EN
                </Box>
                <Box>Sign in</Box>
                <button>Start for free</button>
                
            </Box>
        </Box>
    </> 
    );
}
 
export default Navbar;