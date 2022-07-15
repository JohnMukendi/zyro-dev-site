//SELL online with no hidden fees
import * as React from 'react'
import {
    Box,Container,Card,Typography,Button,Toolbar,
    Tabs,Tab,Paper,Link
} from '@mui/material';
import {papers} from './papers'
import styles from '../../styles/zyro/builder-plan.module.css'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LanguageIcon from '@mui/icons-material/Language';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
//import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const Sect4 = () => {
        
    return ( 
        <>
        
        <Box className={styles['sect4-div']}>
            <Box sx={{padding:'0 0px',width:'70%'}}>
                <Typography variant='h3' sx={{fontWeight:'600'}}>Sell online with no hidden fess</Typography>
                <Typography sx={{width:'60%',padding:'20px 0px',marginBottom:'80px'}}>
                    Zyro's powerful eCommerce builder has everything you need to start, manage and grow 
                    your business online without taking a cut of your profits
                </Typography>
            </Box>
            <Box sx={{display:'flex'}}>
                <Box sx={{width:'50%'}}>
                    {/* FEATURES */}
                    <Box sx={{paddingBottom:'20px'}}>
                        <Box sx={{display:'flex'}}>
                            <AccessTimeIcon sx={{marginRight:'20px',color:'#fb506e'}}/>       
                            <Typography sx={{fontWeight:'600'}}>SET UP IN MINUTES</Typography>
                        </Box>
                        <Typography sx={{paddingLeft:'45px',width:'70%',margin:'10px 0px 20px 0px'}}>
                            Use our all-in-one eCommerce platform to build your shop
                            and start selling online today
                        </Typography>
                    </Box>
                  
                    <Box sx={{paddingBottom:'20px'}}>
                        <Box sx={{display:'flex'}}>
                            <LanguageIcon sx={{marginRight:'20px',color:'#fb506e'}}/>       
                            <Typography sx={{fontWeight:'600'}}>Sell Everywhere</Typography>
                        </Box>
                        <Typography sx={{paddingLeft:'45px',width:'70%',margin:'10px 0px 20px 0px'}}>
                            Make your products available on your online store,
                            Facebook and Instagram
                        </Typography>
                    </Box>
                    <Box sx={{paddingBottom:'20px'}}>
                        <Box sx={{display:'flex'}}>
                            <CheckCircleOutlineIcon sx={{marginRight:'20px',color:'#fb506e'}}/>       
                            <Typography sx={{fontWeight:'600'}}>Management made easy</Typography>
                        </Box>
                        <Typography sx={{paddingLeft:'45px',width:'70%',margin:'10px 0px 20px 0px'}}>
                        Whether it's inventory, shipping, or even taxes, our automatic tools
                         will do the hard work for you.
                        </Typography>
                    </Box>
                    <Box sx={{paddingBottom:'20px'}}>
                        <Box sx={{display:'flex'}}>
                            <ArrowUpwardIcon sx={{marginRight:'20px',color:'#fb506e'}}/>       
                            <Typography sx={{fontWeight:'600'}}>Grow your Business</Typography>
                        </Box>
                        <Typography sx={{paddingLeft:'45px',width:'70%',margin:'10px 0px 20px 0px'}}>
                            Unleaash the power of our AI tools and third party marketing
                            tools to scale your online business.
                        </Typography>
                    </Box>
                    <Box sx={{paddingBottom:'20px'}}>
                        <Box sx={{display:'flex'}}>
                            <CreditCardIcon sx={{marginRight:'20px',color:'#fb506e'}}/>       
                            <Typography sx={{fontWeight:'600'}}>Multiple payment options</Typography>
                        </Box>
                        <Typography sx={{paddingLeft:'45px',width:'70%',margin:'10px 0px 20px 0px'}}>
                        Zyro Business, Online Store and Advanced Store plans support all of the most
                         popular payment methods. From PayPal and Visa to Mastercard and more,
                         accept online payments from all over the globe. See payment gateways.
                        </Typography>
                    </Box>
                {/* FEATURES */}
                    
                </Box>
                <Box sx={{width:'50%'}}>
                    <img style={{width:'100%'}} src='Zyro/cart.webp'/>
                </Box>
            </Box>
        </Box>
        </>
    );
}
 
export default Sect4;