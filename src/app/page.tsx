import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Coursescategory from "./components/Coursescategory";
import Achievement from "./components/Acheivement";
import Course from "./components/Course";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Coursescategory/>
      <Achievement/>
      <Course/>
      <Team/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}
