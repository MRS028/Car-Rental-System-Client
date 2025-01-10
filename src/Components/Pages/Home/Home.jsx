import React, { useEffect, useRef } from "react";
import Banner from "./Banner";
import Testimonials from "../EtraSection/TestimonialCard";
import FindSteps from "../EtraSection/FindSteps";
import WhyChooseUs from "./WhyChooseUs";
import RecentListings from "../Cars/Recent Car/RecentListings";
import useDocumentTitle from "../../../Hooks/useDocumentTitle";
import SpecialOffers from "../EtraSection/SpecialOffers";
import usePreventScroll from "../../../Hooks/usePreventScroll";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useDocumentTitle("Home | Rent A Car");
  const containerRef = useRef(null);
  usePreventScroll(containerRef);
  return (
    <div className=" text-center min-h-[1000px]">
      <Banner></Banner>
      <RecentListings></RecentListings>

      <WhyChooseUs></WhyChooseUs>
      <SpecialOffers></SpecialOffers>
      <FindSteps></FindSteps>

      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
