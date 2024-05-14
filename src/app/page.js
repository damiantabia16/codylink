import Navbar from "./components/home/navbar/navbar";
import Hero from "./components/home/hero/hero";
import Presentation from "./components/home/presentation/presentation";
import Courses from "./components/home/courses/courses";
import Path from "./components/home/path/path";
import Advising from "./components/home/advising/advising";
import Reviews from "./components/home/reviews/reviews";
import FAQ from "./components/home/faq/faq";
import Footer from "./components/home/footer/footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Presentation />
      <Courses />
      <Path />
      <Advising />
      <Reviews />
      <FAQ />
      <Footer />
    </>
  )
}

export default Home