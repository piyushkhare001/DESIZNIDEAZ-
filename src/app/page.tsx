
"use client";
// import Certificate from "@/components/ui/certificate";
import { useState } from "react";
import Footer from "src/components/frontend/footer";
import Hero from "src/components/frontend/Hero";
import Navbar from "src/components/frontend/Navbar";
import RazorpayButton from "src/components/frontend/TestingPaymentPage";



const Home = () => {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);
  return (
    <div>
      <div className="overflow-x-hidden flex flex-col gap-[100px]">
        <div>
          {/*Navbar section*/}
          <Navbar/>
          {/*Hero section*/}
          <Hero />
          {/* <Certificate/> */}
          <Footer/>
          
        </div>
      </div>
   
    </div>
  );
};
export default Home;
