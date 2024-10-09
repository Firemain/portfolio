import Header from "@/components/header";
import Image from "next/image";
import Navbar from "@/components/navbar";
import About from "@/components/about";
import Projects from "@/components/Projects";
import Email from "@/components/Email";
import Footer from "@/components/footer";
import Achievement from "@/components/Achievement";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar></Navbar>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 mt-24">
        <Header></Header>
        <About></About>
        <Skills></Skills>
        <Projects></Projects>
        <Email></Email>
        {/* <Achievement></Achievement> */}
        <Footer></Footer>
      </div>
    </main>
  );
}
