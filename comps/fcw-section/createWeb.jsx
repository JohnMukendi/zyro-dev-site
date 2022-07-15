import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {items} from './create-web-sect'
import {Link} from '@mui/material'
import styles from '../../styles/zyro/fwc.module.css'
import {zyroContext} from '../../pages/_app'


export default function CreateWebAccordions() {

  const {image,setImage} = React.useContext(zyroContext)

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel,item) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
    setImage(item.image)
  };
  
  return (
    <div>
      {
        items.map((item) =>(
            <Accordion expanded={expanded === `panel${item.id}`} onChange={handleChange(`panel${item.id}`,item)}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{fontWeight:'700',padding:'12px 0px'}}>{item.id}. {item.name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{paddingBottom:'12px'}}>{item.info}</Typography>
          <Link sx={{color:'#fb506e',fontWeight:'700',padding:'12px 0px',textDecorationColor:'#fb506e'}}>{item.link}</Link>
        </AccordionDetails>
      </Accordion>
        ))
      }
      
      
    </div>
  );
}
