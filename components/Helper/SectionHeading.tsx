import React from "react";

type props = {
  heading: string;
  subheading: string;
};

const SectionHeading = ({ heading, subheading }: props) => {
  return (
    <div className="w-[80%] mx-auto text-center">
      <h1 className="text-xl sm:text-3xl text-blue-900 font-bold">{heading}</h1>
      <p className="mt-2 text-gray-700 sm:text-base text-sm font-medium">
        {subheading}
      </p>
    </div>
  );
};

export default SectionHeading;
