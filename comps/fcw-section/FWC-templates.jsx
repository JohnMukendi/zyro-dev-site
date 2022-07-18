import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import styles from '../../styles/zyro/fwc.module.css'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
    const items =[
        {
            name : 'Popular templates',
            images :[
                'template-popular-one.avif',
                'template-popular-two.avif',
                'template-popular-three.avif'
            ]
        },
        {
            name : 'Portfolio',
            images : [
                'template-portfolio-one.webp',
                'template-portfolio-two.webp',
                'template-portfolio-three.webp'
            ]
        },{
            name : 'eCommerce',
            images : [
                'template-ecommerce-one.webp',
                'template-ecommerce-two.webp',
                'template-ecommerce-three.webp'
            ]
        },{
            name : 'Blog',
            images : [
                'template-blog-one.webp',
                'template-blog-two.webp',
                'template-blog-three.webp',
            ]
        },{
            name : 'Business',
            images : [
                'template-business-one.webp',
                'template-business-two.webp',
                'template-business-three.webp',
            ]
        },{
            name : 'Resume',
            images : [
                'template-resume-one.webp',
                'template-resume-two.webp',
                'template-resume-three.webp',
            ]
        },{
            name : 'Events',
            images : [
                'template-events-one.webp',
                'template-events-two.webp',
                'template-events-three.webp',
            ],
        }
    ]
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ 
        borderBottom: 1, borderColor: 'divider',
        display:'flex',justifyContent:'center',fontSize:'14px',
        padding:'0 15%',color:'#fb506f',textDecorationColor:'red'
     }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"
        textColor = 'inherit' indicatorColor='secondary' 
        >
          {
            items.map((item,index) =>(
                <Tab label={item.name} {...a11yProps(index)}
                    sx={{fontSize:'12px',fontWeight:'700'}}
                />
            ))
          }
        </Tabs>
      </Box>
      {
        items.map((item,i) =>(
            <TabPanel value={value} index={i}>
                <Box  className={styles['image-template-div']}sx={{display:'flex',width:'100%',padding:'20px 80px',justifyContent:'space-between'}}>
                    {
                        item.images.map((image) =>(
                            <Box sx={{width:'32%'}}>
                                <img style={{width:'100%'}} src ={`/Zyro/${image}`}/>
                            </Box>
                        ))
                    }
                    
                </Box>
            </TabPanel>

        ))
      }
    <Box sx={{display:'flex',justifyContent:'center'}} className={styles['template-btn-div']}>
        <button
        style={{
                color:'white',background:'#fb506f',
                borderRadius:'50px',borderStyle:'none',
                padding:'20px 60px',
                fontWeight:'700',fontSize:'18px'
            }}>
                Explore Templattes
        </button>
    </Box>
    </Box>
  );
}
