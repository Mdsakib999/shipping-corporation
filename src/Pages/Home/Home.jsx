import React, { useEffect } from 'react';
import Banner from './HomeComponent/Banner';
import PartnerAbout from './HomeComponent/PartnerAbout';
import HomeService from './HomeComponent/HomeService';
const Home = () => {
      useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, []);
    return (
        <div>
            <Banner></Banner>
            <HomeService></HomeService>
            <PartnerAbout></PartnerAbout>
        </div>
    );
};

export default Home;