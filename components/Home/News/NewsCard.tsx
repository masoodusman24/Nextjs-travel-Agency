import Image from "next/image";
import React from "react";

type props = {
  image: string;
  date: string;
  title: string;
};

const NewsCard = ({ image, date, title }: props) => {
  return (
    <div className="w-full max-w-[300px] bg-white rounded-lg shadow-md overflow-hidden flex flex-col transform transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
      <div className="relative h-[300px] w-full">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>

      <h1
        className="mt-6 px-4 text-lg text-gray-950 font-semibold hover:text-blue-800 transition-all duration-200 w-full break-words"
        style={{ wordBreak: "break-word" }}
      >
        {title}
      </h1>
      <p className="px-4 pb-4 text-sm text-gray-600 mt-3">{date}</p>
    </div>
  );
};

export default NewsCard;
