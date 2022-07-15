import {Box,Container,Card,Typography,Button,Toolbar,Tab,Tabs} from '@mui/material';
import styles from '../../styles/zyro/fwc.module.css'
import FWCtemplate from './FWC-templates'
import FWCcreateWeb from './FWC-createWeb'
const FWC_Section = () => {
    return ( 
        <>
        <Box sx={{}}>
            <Box sx={{display:'flex',flexDirection:"column",width:"100%",alignItems:'center'}}>
                <Typography variant='h3' sx={{textAlign:"center",width:"50%"}}>
                    Fully customizable website templates
                </Typography>
                <Typography sx={{textAlign:'center',width:"50%",padding:'20px 0px'}}>
                Designer-made templates built to meet your needs. Choose a template and edit anything
                – change colors, fonts, images, and more. No coding skills needed.
                </Typography>
                <FWCtemplate/>
                <FWCcreateWeb/>
            </Box>
            
        </Box>
        </>
    );
}
 
export default FWC_Section;