import * as React from 'react'
import {Box,Container,Card,Typography,Button,Toolbar,
Accordion,Tab,tabs,Link
} from '@mui/material';
import styles from '../../styles/zyro/fwc.module.css'
import CreateWebAccordions from './createWeb'
import {zyroContext} from '../../pages/_app'


const FWCcreateWeb = () => {
    const {image,setImage} = React.useContext(zyroContext)
    return ( 
        <Box sx={{paddingTop:'120px'}}>
            <Box sx={{display:"flex",justifyContent:'center',width:'100%'}}>
                <Typography sx={{fontWeight:'700',width:'70%',textAlign:'center',marginBottom:'40px'}}variant='h3'>
                    Create a website you're proud of in 5 steps
                </Typography>
            </Box>
            <Box sx={{display:'flex',padding:'0px 80px'}}>
                    <Box sx={{width:'60%'}}>
                        <Box className={styles['images-div']}>
                            <img style={{width:'100%'}}src={`/Zyro/${image}`}/>
                        </Box>  
                        <Typography sx={{padding:'20px 0px'}}>
                            Want to learn more? Learn how to create a website.
                        </Typography>
                    </Box>
                    <Box sx={{width:'40%',padding:' 0px 40px'}}>

                        <CreateWebAccordions/>
                    </Box>
                </Box>
        </Box>
    );
}
 
export default FWCcreateWeb;