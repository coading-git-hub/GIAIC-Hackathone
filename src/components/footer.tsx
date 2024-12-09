import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Footer = () => {
  return (
    <div>
      <div className='lg:w-[1440px] lg:h-[488px] bg-white'>
        <div className='lg:w-[1440px] lg:h-[488px] bg-[#FAFAFA] '>
          <div className='lg:w-[1050px] lg:h-138px] lg:ml-[195px] p-[40px] flex'>
            <div>
            
          
             <h3 className="w-[108px] h-[32px] mt-[13px] font-[700] text-[24px] leading-[32px] tracking-tight">Bandage</h3>
             <Image
                    alt=" icon"
                    className=" h-[24px] ml-[800px] -mt-8"
                    src={require("../../public/images/col-md-3.png")}
                  />
               
            </div>
          </div>
        </div>
        <div className='lg:w-[1440px] lg:h-[272px] mt-[142px] bg-white '>
          <div className='lg:w-[1050px] lg:h-[270px] flex ml-44 -mt-8'>
            <div className=' lg:w-[148px] lg:h-[170px]  lg:gap-[20px] ml-10  '>
              <h5 className='-mt-10 w-[115px] h-[24px] font-[700] text-[16px] leading-[24px]  tracking-tight text-[#252B42]'>Company Info</h5>
              <div className='w-[50px] mt-4 h-[126px]  text-[#737373]'>
                <Link href="/">About Us</Link>
                <Link href="/">Carrier</Link>
                <Link href="/">We are hiring</Link>
                <Link href="/">Blog</Link>

              </div>
              </ div>


              <div className=' lg:w-[148px] lg:h-[170px] gap-[20px] ml-10  '>
              <h5 className=' -mt-10 w-[115px] h-[24px] font-[700] text-[16px] leading-[24px] tracking-tight text-[#252B42]'>Legal</h5>
              <div className='w-[50px] mt-4 h-[126px] gap-[10px] text-[#737373]'>
                <Link href="/">About Us</Link>
                <Link href="/">Carrier</Link>
                <Link href="/">We are hiring</Link>
                <Link href="/">Blog</Link>

              </div>
              </ div>

              <div className=' lg:w-[148px] lg:h-[170px] gap-[20px] ml-10 '>
              <h5 className='-mt-10 w-[115px] h-[24px] font-[700] text-[16px] leading-[24px] tracking-tight text-[#252B42]'>Features</h5>
              <div className='  mt-5 h-[126]  text-[#737373]'>
                <Link href="/">Business Marketing</Link><br/>
                <Link href="/">User Analytic</Link><br/>
                <Link href="/">Live Chat</Link><br/>
                <Link href="/">Unlimited Support</Link>

              </div>
              </ div>

              <div className=' lg:w-[148px] lg:h-[170px] gap-[20px] ml-10 '>
              <h5 className='-mt-10 w-[115px] h-[24px] font-[700] text-[16px] leading-[24px] tracking-tight text-[#252B42]'>Resources</h5>
              <div className=' mt-4  h-[126] gap-[10px] text-[#737373]'>
                <Link href="/">IOS & Android</Link><br/>
                <Link href="/">Watch a Demo</Link><br/>
                <Link href="/">Customers</Link><br/>
                <Link href="/">API</Link>

              </div>
              </ div>

              <div className=' lg:w-[148px] lg:h-[170px] gap-[20px] ml-12 '>
              <h5 className=' -mt-10 w-[115px] h-[24px] font-[700] text-[16px] leading-[24px] tracking-tight text-[#252B42]'>Get In Touch</h5>
              <div className='w-[97px]  h-[126] gap-[10px] text-[#737373]'>
                <div className=' mb-4 mt-5 w-60  h-[50px] bg-[#E6E6E6] '><h3 className='py-3 ml-2'>Your Email</h3>
                  <div className=' ml-36 w-30 -mt-6 h-[50px] bg-[#23A6F0] text-[#E6E6E6]'><h3 className=' -mt-12 py-3 px-2'>Subscribe</h3></div>

                </div>
                <Link href="/">Blog</Link>

              </div>
              </ div>
          </div>
        </div>
        {/* last */}
        <div className='lg:w-[1440px] lg:h-48 bg-[#FAFAFA]'>
          <h3 className='py-8 ml-56 text-[#737373]'>Made With Love By Finland All Right Reserved </h3>
        </div>
      </div>
    </div>
   )
}

export default Footer
