import Header from "@/components/header";
import Image from "next/image";
import Navbar from "@/components/navbar";
import About from "@/components/about";
import Projects from "@/components/Projects";
import Email from "@/components/Email";
import Footer from "@/components/footer";
import Achievement from "@/components/Achievement";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar></Navbar>
      <div className="container mx-auto px-12 py-4 mt-24">
      <Header></Header>
      <About></About>
      <Achievement></Achievement>
      <Projects></Projects>
      <Email></Email>
      <Footer></Footer>
      </div>
    </main>
  );
}
