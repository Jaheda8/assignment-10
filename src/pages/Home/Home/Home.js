import React from 'react';
import Banner from '../Banner/Banner';
import Faq from '../Faq/Faq';
import Feature from '../Feature/Feature';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div>
            <Banner/>
            <Services></Services>
            <Feature></Feature>
            <Faq></Faq>
        </div>
    );
};

export default Home;