import * as React from 'react'
import {Box,Container,Card,Typography,Button,Toolbar,
Accordion,Tab,tabs,Link,AccordionSummary,AccordionDetails
} from '@mui/material';
import styles from '../../styles/zyro/website-builder.module.css'
import {zyroContext} from '../../pages/_app'
import {webQuestions} from './web-questions'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const WebBuilderQuestions = () => {
    //console.log(webQuestions)
    return ( 
        <Box className={styles['web-builder-div']}>
            <Typography 
            sx={{textAlign:'center',fontWeight:'700',padding:'60px 0px 40px 0px'}}
             variant='h3'
            >
                Website Builder Questions? We've got answers
            </Typography>
            <div>
            {
                webQuestions.map((question,index) =>(
                    <Accordion key={index}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        className={styles['accordion']}
                        >
                        <Typography>{question.name}</Typography>
                        </AccordionSummary>
                        <AccordionDetails className={styles['accordion-details']}>
                        <Typography>
                            {question.info}
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                ))
            }
      
            </div>
        </Box>
    );
}
 
export default WebBuilderQuestions;