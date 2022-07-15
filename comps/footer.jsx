import * as React from 'react'
import {Box,Container,Card,Typography,Button,Toolbar,
Accordion,Tab,tabs
} from '@mui/material';
import styles from '../styles/zyro/footer.module.css'

const Footer = () => {

    const footerLinks = [
        {
            name : 'Products',
            links : [
                'Website Builder','Online store','Features','Website Templates','Domains',
                'Business email','Pricing','Free domain','Free hosting','Landing page builder'
            ]
        },
        {
            name : 'Company',
            links : [
                'About','Contact','Careers','Press','Affiliates','Youtube creators','Terms & privacy',
                'Sitemap'
            ] 
        },
        {
            name : 'Resources',
            links : [
                'Blog','Support','Help center','Sell online','eCommerce website','Business Glossary',
                'Roadmap','eCommerce guide','refer to 20$'
            ]
        },
        {
            name : 'AI Tools',
            links: [
                'Logo maker','Image resizer','Business name generator','Slogan generator',
                'Blog title generator','Heatmap','AI Writer','AI Image upscaler','Image background remover',
                'Favicon generator'
            ]
        }
    ]
    return ( 
        <Box component='footer' variant ='footer' sx={{padding:'80px '}}>
            <Box sx={{display:'flex',width:"100%"}}>
                <Box sx={{width:'35%'}}>
                    <Typography sx={{fontWeight:'900',fontSize:'18px',marginBottom:'20px'}}>ZYRO</Typography>
                    <Typography sx={{fontSize:'14px',width:'78%'}}>
                    Zyro is a powerful website builder that makes it easy for anyone to create a professional 
                    website or online store.
                    Get your website online in under 1 hour and use AI tools to brand and grow your business.
                    </Typography>
                </Box>
                <Box sx={{display:'flex',width:'65%'}}>
                {
                    footerLinks.map((footerLink) =>(
                        <Box sx={{padding:'0 40px'}}>
                            <Typography sx={{fontWeight:'700'}}>{footerLink.name}</Typography>
                            {
                                footerLink.links.map((link) =>(
                                    <Typography
                                     sx={{fontSize:'14px',padding:'6px 0px'}}
                                    >
                                        {link}
                                    </Typography>
                                ))
                            }
                        </Box>
                    ))
                }
                    
                </Box>
            <Box>

            </Box>
            </Box>
            <hr style={{marginTop:'80px 0'}}/>
            <Typography sx={{padding:'20px'}}>
                © 2019-2022 Zyro.com – Website Builder, AI Powered Business Tools.

            </Typography>
        </Box>
    );
}
 
export default Footer;