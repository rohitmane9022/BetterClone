'use client'

import { useState } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import { FaArrowTrendDown } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { IoStar } from "react-icons/io5";

const dataofVideo = [
  {
    img: '/Image/Arian.webp',
    title: "Arian"
  },
  {
    img: '/Image/Amanda.webp',
    title: "Amanda"
  },
  {
    img: '/Image/Paul.webp',
    title: "Paul"
  },
];

export default function Home() {
  // State to track selected video
  const [selectedVideo, setSelectedVideo] = useState(dataofVideo[0]);

  const handleSelect = (title) => {
    const selected = dataofVideo.find(video => video.title === title);
    setSelectedVideo(selected);  // Update state to change the image
  };

  return (
    <main>
      <div className="bg-primary2 h-full">
        <Navbar />
        <section className="flex flex-col pt-20 justify-center items-center w-9/12 mx-auto text-white">
          <div className="my-10 flex items-center gap-5">
            <FaArrowTrendDown className="p-2 w-10 h-10 text-[#6E4CF6] bg-white rounded-full" />
            <h1 className="text-3xl font-normal">Rate drop alert</h1>
          </div>
          <div className="relative z-20">
            <h1 className="text-[114px] text-center font-semibold leading-[120px]">
              The rate drop you’ve been waiting for
            </h1>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex flex-col items-center gap-y-2 -mt-20">
              <div>
                <button className="bg-btnColor px-10 py-5 rounded-full font-medium text-black hover:bg-transparent hover:text-white transition-all">
                  Start my approval
                </button>
              </div>
              <div>
                <p className="text-sm font-light text-white">3 min No credit impact</p>
              </div>
            </div>
            <div className="ml-28 -mt-[72px] z-10">
              <Image src="/Image/rate.webp" alt="Home Image" width={500} height={500} />
            </div>
            <div className="flex flex-col -mt-20">
              <div className="flex gap-2">
                <FcGoogle className="size-6" />
                <div className="flex gap-1">
                  <FaStar className="text-yellow-400 size-6" />
                  <FaStar className="text-yellow-400 size-6" />
                  <FaStar className="text-yellow-400 size-6" />
                  <FaStar className="text-yellow-400 size-6" />
                  <FaStarHalfAlt className="text-yellow-400 size-6" />
                </div>
              </div>
              <div>
                <p className="text-xs text-white font-light">4.6 Stars | 3177 Google reviews</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Video Section */}
      <div className="bg-[#FFFDFA]">
        <div className="h-screen mt-10 w-[80%] flex justify-between items-center mx-auto">
          <div className="my-5 ml-10">
            <div >
            <Image
                src={selectedVideo.img}
                alt={selectedVideo.title}
                width={350}
                height={300}
                className="rounded-lg"
              />
            </div>

            {/* List of titles */}
            <div className="mt-5 flex list-none gap-3">
              {dataofVideo.map(({ title }) => (
                <li
                  key={title}
                  onClick={() => handleSelect(title)}
                  className={`px-6 py-2 border-[#017848] border-[6px] rounded-full cursor-pointer ${selectedVideo.title === title ? 'bg-[#017848] text-white' : ''}`}
                >
                  {title}
                </li>
              ))}
            </div>
          </div>

          <div className="w-[50%]">
            <div>
              <p className="text-[88px] font-bold leading-[80px] text-[#292B29]">
                Find out why we’re better.
              </p>
            </div>
            <div className="my-7">
              
              <div className="flex gap-2 mt-4">
                <span className="flex items-center font-semibold">
                  <IoStar className="text-primary2 text-xl" /> Trustpilot
                </span>
                <p className="text-[#292B29] font-medium">
                  Excellent 4.4 out of 5
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
