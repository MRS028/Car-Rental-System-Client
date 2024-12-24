import React from 'react';
import Banner from './Banner';
import Testimonials from '../EtraSection/TestimonialCard';

const Home = () => {
    return (
        <div className=' text-center min-h-[1000px]'>
            <Banner></Banner>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;