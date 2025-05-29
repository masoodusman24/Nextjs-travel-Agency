import SectionHeading from "@/components/Helper/SectionHeading";
import React from "react";
import NewsCard from "./NewsCard";

const News = () => {
  return (
    <div className="pt-16 pb-16">
      <SectionHeading
        heading="Exciting Travel News for you"
        subheading="The best news for your next trips: 3-in-1 offer!"
      />

      <div className="max-w-7xl mx-auto mt-20 px-4">
        {/* Flex wrapper for mobile to center cards */}
        <div className="flex justify-center md:block">
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center"
             data-aos="fade-left"
            data-aos-anchor-placement="top-center"
            data-aos-delay="350"
          >
            <NewsCard
              image="/images/n1.jpg"
              title="Top 10 place to visit Australia"
              date="11 August 2025"
            />
            <NewsCard
              image="/images/n2.jpg"
              title="Top 10 place to visit Pakistan"
              date="31 October 2025"
            />
            <NewsCard
              image="/images/n3.jpg"
              title="Top 10 place to visit England"
              date="08 September 2025"
            />
            <NewsCard
              image="/images/n4.jpg"
              title="Top 10 place to visit Dubai"
              date="21 November 2025"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
