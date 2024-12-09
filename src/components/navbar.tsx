 'use client'
 
 import React, { useState } from "react"
import Image from "next/image"

const Navbar = () => {
  
  return (
    <div >
      <div className="lg:w-[1440px] lg:h-[58px]   ">
        <div className="lg:w-[1128px] lg:h-[46px]   ">
          <div className="lg:w-[145px] lg:h-[44px] px-28  flex    bg-[#252B42] text-white py-2">
            <div className="w-52 ">
              <Image
                className="w-[16px] h-[16px] ml-2"
                alt=" icon"
                src={require("../../public/images/icn settings icn-xs.png")}/>
              <h3 className=" ml-10 -mt-4 w-[100px] h-[16px] text-sm font-[Montserrat] font-400 leading-[16px] tracking-tighter">
                (225) 555-0118
              </h3>
            </div>
            <div className="lg:w-[228px] lg:h-[36px] rounded-[5px]  gap-[4px]  ">
              <div>
                <Image
                  className="w-[16px] h-[16px] "
                  alt=" icon"
                  src={require("../../public/images/icn settings icn-xs (1).png")}
                />
                <h3 className="text-sm font-[400] tracking-tighter px-5 -mt-5">
                  michelle.rivera@example.com
                </h3>
                <p className="px-96 text-sm font-[400] tracking-tighter  -mt-5">
                  Follow Us and get a chance to win 80% off
                </p>
              </div>
              <div className="text-sm lg:w-[1128px] lg:h-[46px] px-56 -mt-5 ml-[650px]  flex tracking-tighter  ">
                <h3 className=" w-24 ">Follow Us :</h3>
                <div className="lg:w-[150px] lg:h-[26px] flex py-1 px-2  gap-3 ">
                  <Image
                    alt=" icon"
                    className="  w-[14px] h-[14px]"
                    src={require("../../public/images/Vector (1).png")}
                  />
                  <Image
                    alt=" icon"
                    className="  w-[14px] h-[14px]"
                    src={require("../../public/images/icn settings icn-xs (6).png")}
                  />
                  <Image
                    alt=" icon"
                    className="  w-[14px] h-[14px]"
                    src={require("../../public/images/icn settings icn-xs (7).png")}
                  />
                  <Image
                    alt=" icon"
                    className=" w-[14px] h-[14px]"
                    src={require("../../public/images/icn settings icn-xs (8).png")}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* navbar */}
      
      
      <div className="lg:w-[1437px] lg:h-[58px]  ">
        <div className="lg:w-[187px] lg:h-[58px]  ">
          <div className="lg:w-[108px] lg:h-[32px] py-2 ml-10  ">
            <Image
              alt=" logo"
              className=" w-[108px] h-[50px]"
              src={require("../../public/images/navbar-brand.png")}
            />
          </div>
        </div>
        <div className="lg:w-[1155px] lg:h-[58px] ml-[200px]  -mt-14 ">
          <div className="lg:w-[361px] lg:h-[25px] mt-3 gap-[15px] text-gray-400 ">
            <div className="lg:w-[43px] lg:h-[24px] ">
              <a href="/Hero">Home</a>
            </div>
            <div className="lg:w-[63px] lg:h-[25px] flex ml-20 -mt-6">
              <a href="/">Shop</a>
              <Image
                alt=" logo"
                className=" w-[8px] h-[8px] mt-3 ml-2  "
                src={require("../../public/images/Vector (2).png")}
              /> 
            </div>
           <div className="text-gray-400  leading-3  ml-40 -mt-5 "> <a href="/About">About</a>
            <a className="ml-8 " href="/Blog">Blog</a>
            <a className="ml-8" href="/Contact">Contact</a>
            <a className="ml-8"  href="/Team"> Pages</a>
            </div>
          </div>
        </div>
        {/* icondiv */}
        <div className=" lg:w-[1155px] lg:h-[58px] flex justify-end">
          <div className="lg:w-[166px] lg:h-[54px] rounded-[37px] p-[15px] gap-[5px]">
         <div className="flex gap-2 mr-8 -mt-8"> <Image
                alt=" user"
                
                className=" w-[10px] h-[10px] mt-2 ml-2  "
                src={require("../../public/images/icn settings icn-xs (2).png")}
              /> 
              <a className="text-[#23A6F0]">Login / Register</a>
              <div className="-mt-1" ><a href="/"><Image
                alt=" icon"
                className=" w-[15px] h-[15px] mt-3 ml-2  "
                src={require("../../public/images/icn settings icn-xs (3).png")}
              /></a> </div>
              <div className="-mt-1">
                <a href="/">
                <Image
                alt=" logo"
                className=" w-[15px] h-[15px] mt-3 ml-2  "
                src={require("../../public/images/icn settings icn-xs (4).png")}
              /></a> </div>
              <div className="-mt-1"><a href="/"><Image
                alt=" logo"
                className=" w-[15px] h-[15px] mt-3 ml-2  "
                src={require("../../public/images/icn settings icn-xs (5).png")}
              /></a> </div>
              </div>
          </div>
        </div>
      </div>
     </div>
    
  );
};

export default Navbar;



