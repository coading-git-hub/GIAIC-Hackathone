import React from 'react'
import Image from 'next/image'
const About = () => {
  return (
    <div>
      <div className='w-[1050px] h-[545px]  ml-[195px] py-[112px] gap-[80px] -mt-10'>
        <div className='w-[599px] h-[321px] gap-[35px] ' >
          <h5 className='font-[700] text-[16px] leading-[24px] tracking-tight text-[#252B42] mt-8'>ABOUT COMPANY</h5>
          <h1 className='font-[700] text-[58px] leading-[80px] tracking-normal text-[#252B42] mt-8'>ABOUT US</h1>
          <h4 className='font-[400] text-[20px] leading-[30px] tracking-normal text-[#737373] mt-8'>We know how large objects will act, <br/>but things on a small scale</h4>
          <button className='w-[195px] h-[52px] text-[14px] mt-7 rounded-[5px] py-[15px] px-[40px] gap-[10px] bg-[#23A6F0] text-white'>Get Quote Now</button>


        <div className='w-[800px] h-[321px]  ml-[600px] -mt-[400px]'> 
          <Image alt='yello girl'
          src={require("../../../public/images/yell.png")}/>
        </div>     
           </div>

           {/* 2nd page */}

           <div className='w-[1440px] h-[236px] bg-white '>
            <div className='w-[1018px] h-[188px] gap-[60px]'></div>
           </div>
      </div>
    </div>
  )
}

export default About
