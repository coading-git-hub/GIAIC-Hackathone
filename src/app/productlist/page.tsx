import React from 'react'
import Image from "next/image";
import Link from "next/link";
const ProductList = () => {
  return (
    <div>
      <div className="lg:w-[1440px] lg:h-[58px]   ">
        <div className="lg:w-[1128px] lg:h-[46px]   ">
          <div className="lg:w-[1128px] lg:h-[46px] px-28  flex    bg-[#252B42] text-white py-2">
            <div className="w-52 ml-28">
              <Image
                className="w-[16px] h-[16px] ml-2"
                alt=" icon"
                src={require("../../public/images/icn settings icn-xs.png")}
              />
              <h3 className=" ml-10 -mt-4 w-[100px] h-[16px] text-sm font-[Montserrat] font-400 leading-[16px] tracking-tighter">
                (225) 555-0118
              </h3>
            </div>
            <div className="lg:w-[228px] lg:h-[36px] rounded-[5px] px-10 gap-[4px]  ">
              <div>
                <Image
                  className="w-[16px] h-[16px] "
                  alt=" icon"
                  src={require("../../public/images/icn settings icn-xs (1).png")}
                />
                <h3 className="text-sm font-[400] tracking-tighter px-5 -mt-5">
                  michelle.rivera@example.com
                </h3>
                <p className="px-60 text-sm font-[400] tracking-tighter  -mt-5">
                  Follow Us and get a chance to win 80% off
                </p>
              </div>
              <div className="text-sm lg:w-[1128px] lg:h-[46px] px-28 -mt-5 ml-[470px] flex tracking-tighter  ">
                <h3 className=" w-24">Follow Us :</h3>
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
    </div>
  )
}

export default ProductList
