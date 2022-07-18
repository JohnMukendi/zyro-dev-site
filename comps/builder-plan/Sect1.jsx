// CARDS PRICES PLAN SECTION
import {Box,Container,Card,Typography,Button,Toolbar} from '@mui/material';
import styles from '../../styles/zyro/builder-plan.module.css'
import {cards} from './cards'
import DoneSharpIcon from '@mui/icons-material/DoneSharp';

const Sect1 = () => {
    //console.log('CARDS',cards)
    return (
    <> 
    <Box className={styles['builder-plan-cards-div']}>
            {
                cards.map((card) =>(
                    <div key ={card.id}className={styles['card-div']}>
                        <Box>
                        <Box><b>{card.cardName}</b></Box>

                        <Box sx={{fontSize:'12px',padding:'10px 20px 10px 0px'}}
                        >
                            {card.cardInfo}
                        </Box>
                        <Box sx={{display:'flex',padding:'12px 0px',alignItems:'center'}}>
                            <Box className={styles['card-price1']}>{card.price1}</Box>
                            <Box className={styles['card-price2']}>{card.discount}</Box>
                        </Box>
                        <Box>
                            <Typography>From :</Typography>
                            <Typography sx={{fontSize:'32px',fontWeight:'600'}}>
                                {card.fromPrice}
                                <span style={{fontSize:'11px'}}>/mo</span>
                            </Typography>
                            
                            <Typography sx={{color:'gray'}}>VAT may apply.</Typography>
                        </Box>
                        <Box sx={{display:'flex',justifyContent:'center',width:'100%'}}>
                            <button>Select</button>
                        </Box>
                        <Box sx={{fontSize:'14px',width:'100%'}}>

                            {card.details.map((detail) =>(
                                <Typography sx={{fontSize:'16px'}}>
                                    <DoneSharpIcon sx={{color:'green',fontSize:'16px'}}/>
                                    {detail}
                                </Typography>
                            ))}
                            
                        </Box>
                    </Box>
                
                
                    </div>
                ))
            }
        </Box>
 
    </> 
    );
}
 
export default Sect1;