import React from "react";
import Image from "next/image";
import { DivideCircle } from "lucide-react";
const Home = () => {
  return (
    <div>
      <div className="lg:w-[1440px] lg:h-[716px]   relative">
        <div className="lg:w-[1440px] lg:h-[716px] lg:-mt-28 ml-[1px] lg:py-[112px]   ">
          <Image
            alt="image"
            src={require("../../../public/images/shop-hero-1-product-slide-1.jpg")}
          />
        </div>

        <div className="lg:w[1044px] lg:h-[427px] py-[48px] gap-[30px] absolute -mt-[700px] ml-36">
          <div className=" w-[122px] lg:h-[24px] ">
            <h5 className="font-[700px] text-[16px] leading-[24px] text-white mt-32 ">
              SUMMER 2020
            </h5>
          </div>
          <div className="lg:w-[548px] lg:h-[80px]">
            <h1 className="font-[700] text-[58px] leadinng-[80px] tracking-tight text-white py-6">
              NEW COLLECTION
            </h1>
          </div>
          <div className="lg:w-[376px] lg:h-[60px] ">
            <p className="font-[40] text-[20px] text-white leading-[30px] tracking-tight">
              We know how large objects will act, <br />
              but things on a small scale.
            </p>
          </div>
          <div className="mt-7">
            <button className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">
              Shop Now
            </button>
          </div>
        </div>
        {/* 2nd page */}
        <div className="w-[607px] h-[62px] text-center mb-12  ml-80 mt-10">
          <h3 className=" text-[#252B42] lg:w-[181px] h-[32px] lg:font-[700] text-[24px] leading-[32px] tracking-tight">
            EDITOR'S PICK
          </h3>
          <p className="lg:w-[347px] lg:h-[20px] font-[400] text-[14px] leading-[20px] tracking-tight text-[#737373] mt-5">
            Problems trying to resolve the conflict between{" "}
          </p>
        </div>
        <div className="lg:w-[1440px] lg:h-[716px] bg-[#FAFAFA] gap-3 ">
          <div className="flex gap-4 relative ">
            <Image
              className="lg:w-[510px] lg:h-[500px]   "
              alt="image"
              src={require("../../../public/images/filter.png")}
            />
            <div className="mt-80 bg-white w-[170px] h-[48px] text-sm text-black absolute ">
              <h3 className="text-center py-3 "> Men</h3>
            </div>
            <div className="relative">
              <Image
                className="lg:w-[440px] lg:h-[500px] "
                alt="image"
                src={require("../../../public/images/filter (1).png")}
              />
              <div className="-mt-20 ml-5 bg-white w-[136px] h-[48px] text-sm text-black absolute ">
                <h3 className="text-center py-3 "> WOMen</h3>
              </div>
            </div>
          </div>
          <div className="lg:w-[240px] lg:h-[500px] ml-[800px] -mt-[500px]  ">
            <div className="lg:w-[240px] lg:h-[242px]">
              <Image
                alt="image"
                src={require("../../../public/images/filter (2).png")}
              />
              <div className="-mt-20 ml-3 bg-white w-[170px] h-[48px] text-sm text-black absolute ">
                <h3 className="  text-center py-3 "> ACCESSORIES</h3>
              </div>
            </div>
            <div className="lg:w-[240px] lg:h-[242px] mt-4">
              <Image
                className=""
                alt="image"
                src={require("../../../public/images/filter (3).png")}
              />
              <div className="-mt-20 bg-white ml-3 w-[120px] h-[48px] text-sm text-black absolute ">
                <h3 className="text-center py-3 "> Kids</h3>
              </div>
            </div>
          </div>
        </div>
        {/* 3rd page */}
        <div className="lg:w-[607px] lg:h-[62px] text-center mb-9 mt-10 ">
          <h3 className=" text-[#737373] lg:w-[191px] lg:h-[30px] font-[400] text-[20px] leading-[30px] tracking-tight">
            Featured Products
          </h3>
          <h3 className=" text-[#252B42] lg:w-[181px] lg:h-[32px] font-[700] text-[24px] leading-[32px] tracking-tight mt-4">
            BESTSELLER PRODUCTS
          </h3>
          <p className="lg:w-[347px] lg:h-[20px] font-[400] text-[14px] leading-[20px] tracking-tight text-[#737373] mt-4">
            Problems trying to resolve the conflict between{" "}
          </p>
        </div>
        {/* card1 */}
        <div className="lg:w-[238px] lg:h-[615px] flex ">
          <div className="lg:w-[239px] lg:h-[427px] ml-20">
            <div>
              <Image
                className=""
                alt="image"
                src={require("../../../public/images/product-cover-5 (2).png")}
              />
              <div className="ml-14">
                <h3 className="font-[700] text-[16px] leading-[24px] tracking-tight mt-4">
                  Graphic Design
                </h3>
                <h3 className="font-[700] text-[14px] leading-[24px] tracking-tight mt-2 text-[#737373]">
                  English Department
                </h3>
                <h3 className="w-[108px] h-[34px] px-[7px] py-[5px]">$16.4 </h3>{" "}
                <h3 className="-mt-7 ml-14">$6.488</h3>
                <Image
                  className="mt-4 ml-4"
                  alt="image"
                  src={require("../../../public/images/product-colors.png")}
                />
              </div>
            </div>
          </div>
          {/* card2 */}
          <div className="lg:w-[239px] lg:h-[427px] ml-20">
            <div>
              <Image
                className=""
                alt="image"
                src={require("../../../public/images/product-cover-5 (3).png")}
              />
              <div className="ml-14">
                <h3 className="font-[700] text-[16px] leading-[24px] tracking-tight mt-4">
                  Graphic Design
                </h3>
                <h3 className="font-[700] text-[14px] leading-[24px] tracking-tight mt-2 text-[#737373]">
                  English Department
                </h3>
                <h3 className="w-[108px] h-[34px] px-[7px] py-[5px]">$16.4 </h3>{" "}
                <h3 className="-mt-7 ml-14">$6.488</h3>
                <Image
                  className="mt-4 ml-4"
                  alt="image"
                  src={require("../../../public/images/product-colors.png")}
                />
              </div>
            </div>
          </div>
          {/* card3 */}
          <div className="lg:w-[239px] lg:h-[427px] ml-20">
            <div>
              <Image
                className=""
                alt="image"
                src={require("../../../public/images/product-cover-5 (1).png")}
              />
              <div className="ml-14">
                <h3 className="font-[700] text-[16px] leading-[24px] tracking-tight mt-4">
                  Graphic Design
                </h3>
                <h3 className="font-[700] text-[14px] leading-[24px] tracking-tight mt-2 text-[#737373]">
                  English Department
                </h3>
                <h3 className="w-[108px] h-[34px] px-[7px] py-[5px]">$16.4 </h3>{" "}
                <h3 className="-mt-7 ml-14">$6.488</h3>
                <Image
                  className="mt-4 ml-4"
                  alt="image"
                  src={require("../../../public/images/product-colors.png")}
                />
              </div>
            </div>
          </div>
          {/* card4 */}
          <div className="lg:w-[239px] lg:h-[427px] ml-20">
            <div>
              <Image
                className=""
                alt="image"
                src={require("../../../public/images/product-cover-5.png")}
              />
              <div className="ml-14">
                <h3 className="font-[700] text-[16px] leading-[24px] tracking-tight mt-4">
                  Graphic Design
                </h3>
                <h3 className="font-[700] text-[14px] leading-[24px] tracking-tight mt-2 text-[#737373]">
                  English Department
                </h3>
                <h3 className="w-[108px] h-[34px] px-[7px] py-[5px]">$16.4 </h3>{" "}
                <h3 className="-mt-7 ml-14">$6.488</h3>
                <Image
                  className="mt-4 ml-4"
                  alt="image"
                  src={require("../../../public/images/product-colors.png")}
                />
              </div>
            </div>
          </div>

          {/* 3end */}
        </div>
        {/*  */}
        {/* card1 */}
        <div className="lg:w-[238px] lg:h-[615px] flex mt-7">
          <div className="lg:w-[239px] lg:h-[427px] ml-20">
            <div>
              <Image
                className=""
                alt="image"
                src={require("../../../public/images/product-cover-5 (6).png")}
              />
              <div className="ml-14">
                <h3 className="font-[700] text-[16px] leading-[24px] tracking-tight mt-4">
                  Graphic Design
                </h3>
                <h3 className="font-[700] text-[14px] leading-[24px] tracking-tight mt-2 text-[#737373]">
                  English Department
                </h3>
                <h3 className="w-[108px] h-[34px] px-[7px] py-[5px]">$16.4 </h3>{" "}
                <h3 className="-mt-7 ml-14">$6.488</h3>
                <Image
                  className="mt-4 ml-4"
                  alt="image"
                  src={require("../../../public/images/product-colors.png")}
                />
              </div>
            </div>
          </div>
          {/* card2 */}
          <div className="lg:w-[239px] lg:h-[427px] ml-20">
            <div>
              <Image
                className=""
                alt="image"
                src={require("../../../public/images/product-cover-5 (4).png")}
              />
              <div className="ml-14">
                <h3 className="font-[700] text-[16px] leading-[24px] tracking-tight mt-4">
                  Graphic Design
                </h3>
                <h3 className="font-[700] text-[14px] leading-[24px] tracking-tight mt-2 text-[#737373]">
                  English Department
                </h3>
                <h3 className="w-[108px] h-[34px] px-[7px] py-[5px]">$16.4 </h3>{" "}
                <h3 className="-mt-7 ml-14">$6.488</h3>
                <Image
                  className="mt-4 ml-4"
                  alt="image"
                  src={require("../../../public/images/product-colors.png")}
                />
              </div>
            </div>
          </div>
          {/* card3 */}
          <div className="lg:w-[239px] lg:h-[427px] ml-20">
            <div>
              <Image
                className=""
                alt="image"
                src={require("../../../public/images/product-cover-5 (5).png")}
              />
              <div className="ml-14">
                <h3 className="font-[700] text-[16px] leading-[24px] tracking-tight mt-4">
                  Graphic Design
                </h3>
                <h3 className="font-[700] text-[14px] leading-[24px] tracking-tight mt-2 text-[#737373]">
                  English Department
                </h3>
                <h3 className="w-[108px] h-[34px] px-[7px] py-[5px]">$16.4 </h3>{" "}
                <h3 className="-mt-7 ml-14">$6.488</h3>
                <Image
                  className="mt-4 ml-4"
                  alt="image"
                  src={require("../../../public/images/product-colors.png")}
                />
              </div>
            </div>
          </div>
          {/* card4 */}
          <div className="lg:w-[239px] lg:h-[427px] ml-20">
            <div>
              <Image
                className=""
                alt="image"
                src={require("../../../public/images/product-cover-5 (7).png")}
              />
              <div className="ml-14">
                <h3 className="font-[700] text-[16px] leading-[24px] tracking-tight mt-4">
                  Graphic Design
                </h3>
                <h3 className="font-[700] text-[14px] leading-[24px] tracking-tight mt-2 text-[#737373]">
                  English Department
                </h3>
                <h3 className="w-[108px] h-[34px] px-[7px] py-[5px]">$16.4 </h3>{" "}
                <h3 className="-mt-7 ml-14">$6.488</h3>
                <Image
                  className="mt-4 ml-4"
                  alt="image"
                  src={require("../../../public/images/product-colors.png")}
                />
              </div>
            </div>
          </div>

          {/* 3end */}
        </div>
        {/* 4page */}
        <div className="lg:w-[1440px] lg:h-[709px] rounded-[5px] border-[1px]  bg-[#23856D] text-white mt-20">
          <div className="lg:w-[1036px] lg:h-[709px] px-[112px gap-8] ">
            <div className="lg:w-[509px] lg:h-[432px] pt[60px] flex ml-96 mt-36">
              <div className="mt-14">
                {" "}
                <h3 className="-ml-40  mb-10 mt-14">SUMMER 2020</h3>
                <h1 className="-ml-40 font-[700px] text-[58px] leading-[80px] tracking-tight">
                  Vita Classic <br />
                  Product{" "}
                </h1>
                <p className="-ml-40 mt-7 mb-7">
                  We know how large objects will act, We know <br />
                  how are objects will act, We know{" "}
                </p>
              </div>
              <div className="ml-36 -mt-8">
                {" "}
                <Image
                  className="ml-10"
                  alt="image"
                  src={require("../../../public/images/shop-hero-2-png-picture-1 (1).png")}
                />
              </div>
            </div>
            <div className="lg:-[265px] lg:-[52px] gap-[34px] -mt-24 ml-80 mb-14">
              <h3 className=" tracking-tight -ml-20  ">$16.48</h3>
              <div className="w-[184px] h-[52px] rounded-[5px] px-[15px] bg-[#2DC071]  -mt-8 m">
                <h3 className="px-7 py-4 text-white text-[14px] font-[700] leading-[22px] tracking-tight">
                  ADD TO CART
                </h3>
              </div>
            </div>
          </div>
        </div>
        {/* 5page */}
        <div className="lg:w-[1440px] lg:h-[682px] bg-white  ">
          <div className="lg:w-[704px] lg:h-[682px] flex ">
            <Image
              className=""
              alt="image"
              src={require("../../../public/images/asian-woman-man-with-winter-clothes 1.png")}
            />
            <div className=" lg:w-[704px] lg:h-[682px] gap-6 mt-40 ml-40">
              <h3 className=" mb-8 font-[700px] text-[16px] leading-[24px] text-[#BDBDBD] ">
                SUMMER 2020
              </h3>
              <h1 className=" mb-8 lg:w-[375px] lg:h-[100px] font-[700] text-[40px] leading-[50px] tracking-tight">
                Part of the Neural <br /> Universe
              </h1>
              <h3 className="font-[400px] text-[20px] leading-[30px] tracking-tight">
                We know how large objects will act,
                <br /> but things on a small scale.
              </h3>
            </div>
            <div className="flex mt-64  -ml-80">
            <div className=" h-10 rounded-[5px] px-[40px]  bg-[#2DC071] mt-48  ">
              <h3 className=" py-2 text-black text-[14px] font-[700] leading-[22px] tracking-tight">
                BUY NOW
              </h3>
            </div>

            <div className=" h-10 rounded-[5px] px-[20px] mt-48 bg-white border-green-600 border-[1px]  ml-5 ">
              <h3 className=" px-[20px] 8 py-2 text-black text-[14px] font-[700] leading-[22px] tracking-tight">
                BUY NOW
              </h3>
            </div></div>
            
          </div>
        </div>
        {/* 6page */}
<div className="lg:w-[1440px] lg:h-[1044px] bg-white">
  <div className="lg:w-[1050px] lg:h-[1044px]">
    <div className=" lg:w-[692px] lg:h-[134px] text-center mt-20">
      <h6 className="text-[#23A6F0] text-[14px] font-[700] leading-[24px] tracking-tight">Practice Advice</h6>
    <h1  className="text-[#252B42] text-[40px] font-[700] leading-[50px] tracking-tight">Featured Posts</h1>
     <p  className="text-[#737373] text-[14px] font-[400] leading-[20px] tracking-tight mt-4">Problems trying to resolve the conflict between <br/>
     the two major realms of Classical physics: Newtonian mechanics </p>
     {/* card */}
     <div className="flex ml-32 mt-20">
      <div>
        {/* 1 */}
        <Image
                className=""
                alt="image"
                src={require("../../../public/images/col-md-4 (2).png")}
              />
      </div>
      <div>
        {/* 2 */}
        <Image
                className=""
                alt="image"
                src={require("../../../public/images/col-md-4 (3).png")}
              />
      </div>
      <div>
        {/* 3 */}
        <Image
                className=""
                alt="image"
                src={require("../../../public/images/col-md-4 (4).png")}
              />
      </div>
     </div>
     </div>
  </div>
</div>




      </div>
    </div>
  );
};

export default Home;
