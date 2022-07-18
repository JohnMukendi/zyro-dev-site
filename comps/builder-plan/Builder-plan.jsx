import {Box,Container,Card,Typography,Button,Toolbar} from '@mui/material';
import styles from '../../styles/zyro/builder-plan.module.css'
import {cards} from './cards'
import DoneSharpIcon from '@mui/icons-material/DoneSharp';
import Sect1 from './Sect1'
import Sect2 from './Sect2'
import Sect3 from './Sect3'
import Sect4 from './Sect4'

const BuilderPlan = () => {
    
    return (
    <>  
    <Box className={styles['builder-plan-top-div']}>
        <Box className={styles['builder-plan-header']}>
            <Typography fontSize={48} variant='h1'>Chooose your website builder plan</Typography>
        </Box>
        <Box className={styles['builder-plan-header2']}>
        30-day <b> money-back guarantee </b> with every Zyro plan.
        </Box>
        {/* CARDS DIV */}
        <Sect1/>
        <Typography className={styles['see-features-btn']}>See all features</Typography>

        
    </Box>
    <Box sx={{background:'#f5f8fb',padding:'40px',margin:'0px 8% 80px 8%' }}>
            <Typography varient = 'h5' fontSize={26} mb='16px'>Which plan is best for you</Typography>
            <Typography sx={{width:'55%',textAlign:'left',marginBottom:'20px',color:'rgb(117, 117, 117)' }}>
                Still not sure which plan to pick? Don't worry the Zyro pricing
                wizard will guide you to the perfect plan
            </Typography>
            <Typography className={styles['price-wizard-text']} component ='a'>Try pricing wizard</Typography>
    </Box>
    {/* SECTION 2 -SUCCESS STORIES */}
    <Sect2/>
    {/* {SECTION 3 -BUILD FAST,GROW FASTER} */}
    <Sect3/>
    {/* SECTION 4 -SELL ONLINE WITH NO HIDDEM FEES */}
    <Sect4/>
    </> 
    );
}
 
export default BuilderPlan;