// import Head from 'next/head'
// import styles from '/styles/dashboard.module.css'
// import {Box,Typography,Grid,Toolbar,Stack,Container} from '@mui/material'
// import Image from 'next/image'

// const Dashboard = () => {
//     return ( 
//         <>
//         <Head>
//                 <title>Dashboard</title>
//                 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
    
//         </Head>
//         <body className={styles.body}>
//             <Box sx={{height:'7vh'}}>
//             <nav className={styles["nav-bar"]}>
//                     <p>Logo</p>
//             </nav>
//             </Box>
            
//             <main className={styles.main}>
//                 <Box className={styles['side-nav-box']}>
//                 <div className={styles["side-nav"]}>
//                     <div className={styles["side-nav-header"]}>
//                         <div className={styles["avater"]}>
//                             <img src="/dashboard/avatar2.png" alt=""/>
//                         </div>
//                         <div className={styles["side-nav-header-right"]}>
//                             <p>Welcome, <b>Mike</b></p>
//                             <div className="side-nav-header-icons">
//                                 <i className="fa fa-envelope"></i>
//                                 <i className="fa fa-user"></i>
//                                 <i className="fa fa-cog"></i>
//                             </div>
//                         </div>
//                     </div>
//                     <div className={styles["nav-main"]}>
//                         <div className={styles["nav-main-header"]}>DashBoard</div>
//                         {/* <!-- THE NAV LINKS --> */}
//                         <div className={styles["nav-links"]}>
//                             <a id={styles['overview']} href=""><i class="fa fa-users fa-fw"></i>Overview</a>
//                             <a href="#"><i className="fa fa-eye fa-fw"></i>Views</a>
//                             <a href="#"><i className="fa fa-users fa-fw"></i>Traffic</a>
//                             <a href="#"><i className="fa fa-bullseye fa-fw"></i>Geo</a>
//                             <a href="#"><i className="fa fa-diamond fa-fw"></i>Orders</a>
//                             <a href="#"><i className="fa fa-bell fa-fw"></i>News</a>
//                             <a href="#"><i className="fa fa-bank fa-fw"></i>General</a>
//                             <a href="#"><i className="fa fa-history fa-fw"></i>History</a>
//                             <a href="#"><i className="fa fa-cog fa-fw"></i>Settings</a>
//                         </div>
//                     </div>
//                 </div>
//                 </Box>
//                 <Box className={styles['main-section']}>
//                     <Box className={styles['main-sect-heading1']}>
//                         <i className='fa fa-dashboard'></i><Typography component='p'>My Dashboard</Typography>
//                     </Box>
//                     <Box className={styles['dashboard-content']}>
//                         <Box className={styles['dashboard-item-1']}>
//                             <Box>
//                                 <i className='fa fa-comment'></i>
//                                 <Typography>52</Typography>
//                             </Box>
                            
//                            <Typography>Messages</Typography>
//                         </Box>
//                         <Box className={styles['dashboard-item-2']}>
//                             <Box>
//                                 <i className='fa fa-eye'></i>
//                                 <Typography>99</Typography>
//                             </Box>
                            
//                             <Typography>Views</Typography>
//                         </Box>
//                         <Box className={styles['dashboard-item-3']}>
//                             <Box>
//                                 <i className='fa fa-share-alt'></i>
//                                 <Typography>23</Typography>
//                             </Box>
                            
//                             <Typography>Shares</Typography>
//                         </Box>
//                         <Box className={styles['dashboard-item-4']}>
//                             <Box>
//                                 <i className='fa fa-users'></i>
//                                 <Typography>50</Typography>
//                             </Box>
                            
//                             <Typography>Users</Typography>
//                         </Box>
//                     </Box>
//                     {/* REGION SESSION */}
//                     <Container className={styles['region-content']}>

//                         <Box className={styles['region-content-left']}>
//                             <Box className={styles['region-content-header']}>Regions</Box>
//                             <Box className={styles['region-img-div']}>
//                                 <img src='/Dashboard/region.jpg' height='100%' width='100%'/>
//                             </Box>
//                         </Box>

//                         <Box className={styles['region-content-right']}>
//                             <Box className={styles['region-content-header']}>Feeds</Box>
//                            <Box className={styles['feeds-content-div']}>
//                                 <Box className={styles['feeds-item']}>
//                                     <i className='fa fa-user' style={{color:'#2196f3'}}></i>
//                                     <Box className={styles['feed-content-text']}>
//                                         <Typography>New record over go views</Typography>
//                                         <Typography>10 mins</Typography>
//                                     </Box>
//                                 </Box>
//                                 <Box>
//                                     <i className='fa fa-bell' style={{color:'#f44336'}}></i>
//                                     <Box className={styles['feed-content-text']}>
//                                         <Typography>Database error</Typography>
//                                         <Typography>15 mins</Typography>
//                                     </Box>
//                                 </Box>
//                                 <Box className={styles['feeds-item']}>
//                                     <i className='fa fa-users' style={{color:'rgb(210, 190, 14)'}}></i>
//                                     <Box className={styles['feed-content-text']}>
//                                         <Typography>New record over 40 users</Typography>
//                                         <Typography>17 mins</Typography>
//                                     </Box>
//                                 </Box>
//                                 <Box >
//                                     <i className='fa fa-comment' style={{color:'#f44336'}}></i>
//                                     <Box className={styles['feed-content-text']}>
//                                         <Typography>New Comments</Typography>
//                                         <Typography>25 mins</Typography>
//                                     </Box>
//                                 </Box>
//                                 <Box className={styles['feeds-item']}>
//                                     <i className='fa fa-bookmark' style={{color:'#2196f3'}}></i>
//                                     <Box className={styles['feed-content-text']}>
//                                         <Typography>Check Transactions</Typography>
//                                         <Typography>28 mins</Typography>
//                                     </Box>
//                                 </Box>
//                                 <Box>
//                                     <i className='fa fa-laptop' style={{color:'#f44336'}}></i>
//                                     <Box className={styles['feed-content-text']}>
//                                         <Typography>CPU overload</Typography>
//                                         <Typography>35 mins</Typography>
//                                     </Box>
//                                 </Box>
//                                 <Box className={styles['feeds-item']}>
//                                     <i className='fa fa-share-alt'></i>
//                                     <Box className={styles['feed-content-text']}>
//                                         <Typography>New Shares</Typography>
//                                         <Typography>39 mins</Typography>
//                                     </Box>
//                                 </Box>
//                             </Box>
//                         </Box>
//                     </Container>
//                     <Container className={styles['general-stats-div']}>
//                         <Box className ={styles['general-stats-header']}>General Stats</Box>
//                         <Box>
//                             <Typography>New Visitors</Typography>
//                             <Box>+25%</Box>
//                         </Box>    
//                         <Box>
//                             <Typography>New Users</Typography>
//                             <Box>+50%</Box>
//                         </Box>    
//                         <Box>
//                             <Typography>Bounce Rate</Typography>
//                             <Box>+75%</Box>
//                         </Box>    
                            
//                     </Container>
//                 </Box>
//             </main>
                
//         </body>
                
            
//         </>
//      );
// }
 
// export default Dashboard;