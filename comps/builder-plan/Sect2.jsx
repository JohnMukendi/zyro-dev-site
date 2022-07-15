//ZYRO SUCCESS STORIES
import * as React from 'react'
import {
    Box,Container,Card,Typography,Button,Toolbar,
    Tabs,Tab,Paper,Link
} from '@mui/material';
import {papers} from './papers'
import styles from '../../styles/zyro/builder-plan.module.css'

const Sect2 = () => {

    const [value, setValue] = React.useState('one');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    
    return ( 
    <>
    <Box sx={{background:'#f5f8fb',display:'flex',flexDirection:'column',alignItems:'center'}}>
        <Typography variant ='h3' sx={{textAlign:'center',padding:'8% 0px 4% 0px',fontWeight:'700'}}>Zyro Sucess stories</Typography>
        <Typography sx={{textAlign:'center',width:'30%'}}>
            Join over 250,000 small business owners. Find out what you can do with a Zyro website
        </Typography>
        <Box sx={{ margin:'4% 0' }}>
            <Tabs
                value={value}
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="secondary tabs example"
            >
                <Tab value="one" label="Clients" />
                <Tab value="two" label="Tech exprerts" />
                <Tab value="three" label="Trust Pilot" />
            </Tabs>
        </Box>
        <Box className={styles['papers-div']}>
            {
                papers.clients.map((paper,i) =>(
                        <Paper className={styles['paper']}key={i}
                         sx={{background:'white',width:'300px',padding:'20px',marginBottom:'40px',
                         display:'flex',flexDirection:'column',alignItems:'flex-start',justifyContent:'center'
                        }}
                         >
                            <Box sx={{height:'50%'}}>
                        
                                <Typography sx={{paddingRight:'0%'}}>
                                    "{paper.info}"
                                </Typography>
                            </Box>
                            <Box sx={{display:'flex',alignItems:'center',marginTop:'20px',height:'50%'}}>
                                <Box className={styles['paper-image-div']}>
                                    <img src ={`/Zyro/${paper.img}`}/>
                                </Box>
                                <Box sx={{color:'#666',marginLeft:'12px'}}>
                                    <Typography color="black" fontSize={14} sx={{fontWeight:'700'}}>{paper.company}</Typography>
                                    <Link color='inherit' fontSize={13}>Visit the website</Link>
                                </Box>
                            </Box>
                        </Paper>
                    
                ))
            }
        </Box>
    </Box>
    </> 
    );
}
 
export default Sect2;