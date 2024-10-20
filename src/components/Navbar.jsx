'use client';
import { useState, useEffect } from 'react';
import { MdCall } from 'react-icons/md';
import { usePathname } from 'next/navigation'; 

const Navbar = ({ scrollHeight = 955 }) => {
  const [bgColor, setBgColor] = useState('bg-transparent');
  const [SecondBgColor, setSecondBgColor] = useState('hover:bg-white hover:text-black');
  const [Contact, setContact] = useState('bg-btnColor hover:bg-transparent text-black hover:text-white');
  
  const pathname = usePathname(); 
  
  console.log(pathname)
  const [isMounted, setIsMounted] = useState(false); 

  useEffect(() => {
    setIsMounted(true); 

    const handleScroll = () => {
      if (pathname === '/about-us') {
       
        setBgColor('bg-white text-black'); 
        setSecondBgColor('hover:bg-[#F6F6F3]');
        setContact('bg-[#017848] hover:bg-[#004733] text-white'); 
      } else if (window.scrollY > scrollHeight) {
      
        setBgColor('bg-white text-black');
        setSecondBgColor('hover:bg-[#F6F6F3]');
        setContact('bg-[#017848] hover:bg-[#004733] text-white');
      } else {
        
        setBgColor('bg-transparent text-white');
        setSecondBgColor('hover:bg-white hover:text-black');
        setContact('bg-btnColor hover:bg-transparent text-black hover:text-white');
      }
    };

    window.addEventListener('scroll', handleScroll);

    
    handleScroll(); 

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollHeight, pathname]); 

  if (!isMounted) {
    return null; 
  }

  return (
    <div className={`fixed top-0 left-0 w-full z-50 transition-all pb-5 duration-300 ${bgColor}`}>
      <div className="flex justify-between w-[90%] mx-auto items-center pt-5">
        <div className="flex gap-5 items-center">
          <div>
            <h1 className="text-lg">Better</h1>
          </div>
          <div className="ml-8 flex list-none justify-between w-1/4 gap-10 text-sm">
            <li className={`cursor-pointer p-4 rounded-full ${SecondBgColor}`}>Buy</li>
            <li className={`cursor-pointer p-4 rounded-full ${SecondBgColor}`}>Refinance</li>
            <li className={`cursor-pointer p-4 rounded-full ${SecondBgColor}`}>HELOC</li>
            <li className={`cursor-pointer p-4 rounded-full ${SecondBgColor}`}>Rates</li>
            <li className={`cursor-pointer p-4 rounded-full ${SecondBgColor}`}>Better+</li>
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <div>
            <MdCall className={`w-11 h-11 border-2 rounded-full ${SecondBgColor} border-solid p-2`} />
          </div>
          <div>
            <p className={`font-light text-sm cursor-pointer p-4 rounded-full ${SecondBgColor}`}>Sign in</p>
          </div>
          <div>
            <p className={`text-base px-5 py-2 rounded-full  transition-all ${Contact} font-medium`}>
              Continue
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
