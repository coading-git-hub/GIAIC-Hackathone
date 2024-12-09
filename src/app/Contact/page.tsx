import React from "react";
import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  return (
    <div>
      <div className="w-[1300px] h-[91px]">
        <div className="w-187 h-[58px] mt-[26px] ml-[136px]">
          <h1 className="text-xl font-bold tracking-tight leading-5">
            Bandage
          </h1>
        </div>
        <div className="sm:flex-row">
          <div className="flex justify-center -mt-14 px-2   text-center c">
           <Link className="ml-5" href="/Hero"  >Home</Link>
           <Link className="ml-5" href="/Product" >Product</Link>
           <Link href="/Pricing" className="ml-5">Pricing</Link>
           <Link href="/Contact" className="ml-5">Contact</Link>
          </div>
       
        <div className="w-[300px] h-[52px] flex   ml-[900px] ">
          <h3 className="mr-3 -mt-6">Login</h3>
          <div  className="relative   -mt-7">
            <button className="bg-[#23A6F0] h-10">Become A member 
             <Image
            className="ml-48 -mt-4 mr-4 bg-[#23A6F0]"
                alt="image"
                src={require("../../../public/images/Vector (3).png")}
              />
            </button>
          </div>
        </div> 
        </div>
      </div>
      {/* 2page */}
      <div className="lg:w-[1440px] h-[882px] flex sm:flex-row  sm:mt-40  relative ml-32 mt-10">
        <div className=" h-[550px] flex  ">
          <div className="lg:w-[599px] lg:h-[518] gap-[35px]"><h5 className="lg:font-[700] sm:font[300] sm:text-[8px] sm:ml-5 lg:text-[16px] leading-[24px] tracking-tight">CONTACT US</h5>
          <h1 className="font-[700] text-[80px] leading-[80px] tracking-tight mt-4">Get in touch <br/>
          today!</h1>
          <p className="lg:font-[700] sm:font-[200px] lg:text-[16px] sm:text-[7px] leading-[24px] tracking-tight text-[#737373] mt-4">We know how large objects will act, <br/>
          but things on a small scale</p>
        <div className="py-5">  <p className=" h-[32px] text-[24px] text-[#252B42] font-[700px] tracking-tight leading-[34px]">Phone : +451 215 215 </p>
          <p className="w-[207px] h-[32px] text-[24px] text-[#252B42] font-[700px] tracking-tight leading-[34px]">Fax : +451 215 215</p>
          </div></div>
        </div>
        <div className=" h-3/4 -ml-[800px] -mt-40"> <Image  
        alt="kids"
        src={require("../../../public/images/background.png")}/></div>
      </div>
      {/* 3rd page */}
      <div className=" w-96 -mt-32">
        <div className=" w-[633] ml-64">
          <div className="w-[733px] h-[300px] text-center"><h6 className="text-[#252B42] text-center  text-[14px]  leading-[24px] ">VISIT OUR OFFICE</h6>
          <h2 className="text-[40px]  text-[#252B42] text-center  font-[700] leading-[20px] mt-5 ">We help small businesses <br/> <br/> <br/>with big ideas</h2></div> 
        </div>
        <div className="flex w-[1440px] h:[300px]  ml-40 -mt-32">
        <div>
           <Image alt="card"
           src={require("../../../public/images/col-md-4 (7).png")} />
        </div>
        <div>
           <Image alt="card"
           src={require("../../../public/images/col-md-4 (8).png")} />
        </div>

        <div>
           <Image alt="card"
           src={require("../../../public/images/col-md-4 (9).png")} />
        </div>
        </div>
        <div className=" w-[1440px] mt-20  ">
        <Image   className="w-[1440px] h-[300px]" 
        alt="contact"
        src={require("../../../public/images/desktop-cta-3.png")}/>
        </div>
      </div>
    </div>
  );
};

export default Contact;
