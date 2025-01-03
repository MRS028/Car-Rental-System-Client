import React, { useRef } from 'react';
import Banner from './Banner';
import Testimonials from '../EtraSection/TestimonialCard';
import FindSteps from '../EtraSection/FindSteps';
import WhyChooseUs from './WhyChooseUs';
import RecentListings from '../Cars/Recent Car/RecentListings';
import useDocumentTitle from '../../../Hooks/useDocumentTitle';
import SpecialOffers from '../EtraSection/SpecialOffers';
import usePreventScroll from '../../../Hooks/usePreventScroll';

const Home = () => {
    useDocumentTitle("Home | Rent A Car");
    const containerRef = useRef(null);
    usePreventScroll(containerRef);
    return (
        <div className=' text-center min-h-[1000px]'>
            <Banner></Banner>
            <Testimonials></Testimonials>
            <RecentListings></RecentListings>

            <WhyChooseUs></WhyChooseUs>
            <SpecialOffers></SpecialOffers>
            <FindSteps></FindSteps>
            
            
        </div>
    );
};

export default Home;