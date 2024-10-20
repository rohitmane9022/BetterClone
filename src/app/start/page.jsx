import Image from 'next/image';
import { MdCall } from 'react-icons/md';
import { TbHomeDollar } from "react-icons/tb";
import { CiDollar } from "react-icons/ci";

const data=[
  {
    title:"Buying a home",
    icon:<TbHomeDollar/>

  },
  {
    title:"Buying a home",
    icon:<TbHomeDollar/>

  },
  {
    title:"Buying a home",
    icon:<TbHomeDollar/>

  },
]

const page = () => {
  return (
    <section className=' bg-[#FFFDFA]'>
      <div className='w-[80%] mx-auto pt-10'>
      <div className='flex justify-between sticky'>
        <div>
          <p className='text-[#017848] font-semibold text-lg leading-3'>Better</p>
        <p className='text-muted-foreground font-normal'>Mortgage</p></div>
        <div className='flex gap-2 items-center'>
        <MdCall className={`w-8 h-8 border-2 rounded-full text-[#017848] bg-[#CCE9D3]  border-solid `} />
        <p className='text-base font-medium'>Need help? Call (943) 2xx 5xx</p>
        </div>
      </div>
      <div className='my-8 sticky '>
        <div className='border-2 w-full  z-0'></div>
        <div>
          <Image src="/Image/betty1.jpg" alt='/Image/betty1.jpg' width={50} height={50} className='mx-auto -mt-6 rounded-full z-20  '/>
        </div>
      </div>
      <div className=' w-[49%] mx-auto'>
        <div className='text-5xl font-semibold text-center my-5 text-[#292B29]'>
          <h1><span> Hi, I'm Betsy!</span> <br></br>
          What can I help you with</h1>
        </div>
        <div className='my-10  mx-auto '>
          {data.map((get)=>(
            <div key={get.lenght} className='flex items-center hover:border-[5px] transition-all cursor-pointer hover:border-[#017848]  border-[1px] rounded-lg border-[#292B29] gap-2  py-3 px-9 my-4'>
              <div className='text-4xl text-[#017848] font-normal'>{get.icon}</div>
              <p className='text-[#292B29] font-semibold text-lg'>{get.title}</p>
              
              </div>
          ))}
        </div>
        <div>
          <div className='flex justify-between mt-20 text-center'>
            <div>
              <p className='text-3xl font-semibold'>$100B</p>
              <p className='text-muted-foreground font-normal text-sm mt-5  '>home loans funded entirely online</p>
            </div>
            <div>
              <p className='text-3xl font-semibold'>$100B</p>
              <p className='text-muted-foreground font-normal text-sm mt-5  '>home loans funded entirely online</p>
            </div>
          </div>
          <div className='bg-[#F0F7F1] px-9 py-4 rounded-xl mx-auto my-10 '>
            <p className='text-center text-muted-foreground'>After a few questions, you'll unlock</p>
            <div className='my-5'>
              <div className='flex items-center justify-center my-3 gap-3 '>
                <CiDollar className='text-[#017848] text-2xl'/>
                <p className='text-muted-foreground text-base'>Custom mortgage rates</p>
              </div>
              <div className='flex items-center justify-center my-3 gap-3 '>
                <CiDollar className='text-[#017848] text-2xl'/>
                <p className='text-muted-foreground text-base'>Custom mortgage rates</p>
              </div>
              <div className='flex items-center justify-center  gap-3 '>
                <CiDollar className='text-[#017848] text-2xl'/>
                <p className='text-muted-foreground text-base'>Custom mortgage rates</p>
              </div>
            </div>

          </div>
        </div>
      </div>
      </div>
    </section>
  )
}

export default page