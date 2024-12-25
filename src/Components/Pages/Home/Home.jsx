import React from 'react';
import Banner from './Banner';
import Testimonials from '../EtraSection/TestimonialCard';
import FindSteps from '../EtraSection/FindSteps';
import WhyChooseUs from './WhyChooseUs';
import RecentListings from '../Cars/Recent Car/RecentListings';

const Home = () => {
    return (
        <div className=' text-center min-h-[1000px]'>
            <Banner></Banner>
            <RecentListings></RecentListings>

            <WhyChooseUs></WhyChooseUs>
            <FindSteps></FindSteps>
            
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;