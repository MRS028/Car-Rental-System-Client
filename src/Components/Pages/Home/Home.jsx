import React from 'react';
import Banner from './Banner';
import Testimonials from '../EtraSection/TestimonialCard';
import FindSteps from '../EtraSection/FindSteps';

const Home = () => {
    return (
        <div className=' text-center min-h-[1000px]'>
            <Banner></Banner>
            <FindSteps></FindSteps>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;