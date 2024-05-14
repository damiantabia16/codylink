import { Inter } from "next/font/google";
import Navbar from "@/app/components/home/navbar/navbar";
import Reviews from "@/app/components/home/reviews/reviews";
import FAQ from "@/app/components/home/faq/faq";
import Footer from "@/app/components/home/footer/footer";

export default function CourseLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Reviews />
      <FAQ />
      <Footer />
    </>
  );
}
