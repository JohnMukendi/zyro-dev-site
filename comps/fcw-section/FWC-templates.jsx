import * as React from 'react'
import {Box,Container,Card,Typography,Button,Toolbar,Tab,Tabs} from '@mui/material';
import styles from '../../styles/zyro/fwc.module.css'

const FWCtemplate = () => {

    const [value, setValue] = React.useState('one');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
        <Box>
        <Box sx={{ margin:'4% 0',width:'100%',display:'flex',justifyContent:'center' }}>
            <Tabs
                value={value}
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="secondary tabs example"
            >
                <Tab value="one" label="Popular templates" />
                <Tab value="two" label="Portfolio" />
                <Tab value="three" label="eCommerce" />
                <Tab value="four" label="Blog" />
                <Tab value="five" label="Business" />
                <Tab value="six" label="Resume" />
                <Tab value="seven" label="Events" />
            </Tabs>
        </Box>
        <Box  className={styles['image-template-div']}sx={{display:'flex',width:'100%',padding:'20px 80px',justifyContent:'space-between'}}>
            <Box sx={{width:'32%'}}>
                <img style={{width:'100%'}} src ='/Zyro/template-popular-one.avif'/>
            </Box>
            <Box sx={{width:"32%"}}>
                <img style={{width:'100%'}} src ='/Zyro/template-popular-two.avif'/>
            </Box>
            <Box sx={{width:'32%'}}>
                <img style={{width:'100%'}} src ='/Zyro/template-popular-three.avif'/>
            </Box>
        </Box>
        <Box style={{display:"flex",width:'100%',justifyContent:"center",padding:'20px'}}>
            <button className={styles['explore-btn']}>Explore Templates</button>
        </Box>
        </Box>
        </>
    );
}
 
export default FWCtemplate;