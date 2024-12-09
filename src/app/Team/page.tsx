import React from "react";
import Image from "next/image";
const Team = () => {
  return (
    <div>
      <div className="w-[1440px] h-[384px]">
        <div>
          <h5 className="font-[700] text-[16px] leading-[24px] tracking-tight text-gray-400 text-center mt-16">
            WHAT WE DO
          </h5>
          <h1 className="font-[700] text-[58px] leading-[80px] tracking-tight text-center">
            Innovation tailored for you
          </h1>
        </div>
        <div className="w-[122px] h-[44px] mt-[10px] mb-[10px] gap-[15px] text-center ml-[650px]">
          <a className="text-gray-400" href="/">
            Home :{" "}
          </a>
          <h5 className="ml-24 -mt-6 text-gray-400"> Team</h5>
        </div>
        {/* card */}
        <div className="w-[1440px] h-[420px] gap-5 mb-6 ">
          <div className="w-[1440px]  h-[420px] flex ml-12 mb-24">
            <div className="ml-6 ">
              <Image
                className="w-[1400px] h-[430px] "
                alt="contact"
                src={require("../../../public/images/unsplash_Lks7vei-eAg (3).png")}
              />
            </div>
            <div className=" ml-4 mr-12">
              <div className="mb-4 mr ">
                <Image
                  className="w-[999px] h-[200px]"
                  alt="contact"
                  src={require("../../../public/images/unsplash_mcSDtbWXUZU.png")}
                />
              </div>

              <div className=" ml-">
                <Image
                  className="w-[1000px] h-[210px]"
                  alt="contact"
                  src={require("../../../public/images/unsplash_gMsnXqILjp4.png")}
                />
              </div>
            </div>
            <div className="  mr-12 -ml-6 ">
              <div className=" mr-32">
                <Image
                  className="w-[1000px] h-[200px] "
                  alt="contact"
                  src={require("../../../public/images/unsplash_PSmDDeXaEWE (1).png")}
                />
              </div>

              <div className=" mt-4 mr-32  ">
                <Image
                  className="w-[1000px] h-[210px]"
                  alt="contact"
                  src={require("../../../public/images/unsplash_1-aA2Fadydc.png")}
                />
              </div>
            </div>
          </div>
        </div>
</div>
<div  className="w-[1440px] h-[330px] mt-64 font-[700] text-[24px] leading-[24px] tracking-tight mr-48" >
  <h1 className="text-center mt-24">Our Team</h1>
</div>
        <div className="-mt-44 ml-64">
                <Image
                  className="w-[800px] h-[500px]"
                  alt="contact"
                  src={require("../../../public/images/team1.png")}
                /></div>
                <div className="ml-64 mt-28 mr-12">
                <Image
                  className="w-[800px] h-[500px]"
                  alt="contact"
                  src={require("../../../public/images/tem-5.png")}
                /></div>
                <div className="ml-12 mt-16 mr-12">
                <Image
                  className="w-[1440px] h-[430px]"
                  alt="contact"
                  src={require("../../../public/images/desktop-cta-3 (1).png")}
                /></div>
    </div>
  );
};

export default Team;
