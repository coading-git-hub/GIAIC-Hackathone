import Image from "next/image";
// import About from "./About/page";
import Contact from "./Contact/page";
import Hero from "./Hero/page";
import Navbar from "@/components/navbar";
import Team from "./Team/page";
import About from "./About/page";
// import Blog from "./Blog/page";
export default function Home() {
  return (
    
  <div>
    {/* <Navbar /> */}
    <Hero /><div/>
    <About />
   <div><Contact/></div> 
   
   <Team />
  </div>
  );
}
