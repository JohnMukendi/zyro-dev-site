import Banner from "../comps/banner/Banner";
import React from "react";
import styles from '../styles/zyro/zyrohome.module.css'
import Head from 'next/head'
import BuilderPlan from '../comps/builder-plan/Builder-plan'
import FWC_Section from "../comps/fcw-section/FWC";
import Footer from '../comps/footer';

const ZyroHome = () => {
    return (
    <>
    <Head>
    <title>Zyro</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
    </Head>


    <div className={styles['main']}>
    <Banner/>
    <BuilderPlan/>
    <FWC_Section/>
    <Footer/>
    
    </div>
    </> 
     
    );
}
 
export default ZyroHome;