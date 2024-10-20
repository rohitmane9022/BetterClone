import React from 'react';
import Navbar from '../../components/Navbar';
import Image from 'next/image';

const AboutUs = () => {
  return (
    <section className="bg-[#FFFDFA] mx-auto">
      <Navbar />
      <div className='w-2/3 mx-auto'>
      <div className="pt-20 h-screen flex flex-col justify-center items-center text-center  mt-10 "> 
        <div className='flex flex-col text-[#017848] text-4xl font-medium'><p>Our mission</p></div>
        <div className='text-[44px] text-[#292B29] font-semibold'><p>We’re making homeownership simpler, faster — and most importantly, more accessible for all Americans.</p></div>
      </div>
      <div className='flex justify-between my-10'>
      <div className='w-[50%]'>
        <h1 className=' text-[#292B29] text-2xl font-semibold my-6'>The status quo is broken</h1>
        <p className='text-[#004733] font-light'>
        The traditional processes around homeownership are opaque and stressful. Fees aren’t transparent and some are simply outrageous in size. Traditional mortgage lending is rife with unnecessary fees and slow, painful processes. It’s a system set up to benefit insiders — not you. Better.com CEO, Vishal Garg, set out to change that.
        </p>
        <p className='bg-[#017848] font-medium hover:bg-[#004733] rounded-xl w-56 text-center my-7 text-white  px-6 py-5'>Ready Rohit's story</p>
      </div>
      <div className='w-[40%] overflow-hidden rounded-md pl-20'>
        <Image src="/Image/Amanda.webp" alt='Amanda Image' width={300} height={500}/>
      </div>
      </div>

      
      </div>
      <div className='bg-[#017848] text-white py-14'>
        <div className='w-2/3 mx-auto'>
        <h1 className='text-4xl font-semibold my-7'>
        How we’re changing things
        </h1>
        <p className='my-7 font-medium'>Homeownership is a huge part of our economy. Housing overall is a $33 trillion business, and mortgages account for $15 trillion. Yet home finance operates in the same way it has for decades — through opaque systems and expensive intermediaries whose interests are misaligned with consumers’.</p>
        <p className='my-7 font-medium'>That’s why Better.com is redefining the homeownership process from the ground up. We’re using technology to make it faster and more efficient, and humans to help make it friendly and enjoyable.</p>
      </div>
      </div>
    </section>
  );
};

export default AboutUs;
