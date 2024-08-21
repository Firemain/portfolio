"use client";   

import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

export default function Header() {
    return (
        <section id="home" className="max-w-full px-8 mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <div className="col-span-1 sm:col-span-7 place-self-center text-center sm:text-left sm:ml-6">
                    <h1 className="text-[#f2e9e4] mb-4 text-4xl lg:text-6xl font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300">Hello, I&apos;m {""} <br></br></span>
                        <TypeAnimation
      sequence={[
        'Firmin',
        1000,
        'Centralien student',
        1000,
        'Web developper',
        1000,
        'DJ !',
        1000
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
                        </h1>
                    <p className="text-[#f2e9e4] text-lg lg:text-xl mb-6">Currently exploring new horizons in Indonesia at <Link className="text-[#9882ac]" href="https://taksu.tech/">Taksu Teknologi</Link>. Discover more about me here!</p>
                    <div>
                        <Link
                            href="/#contact"
                            className="px-6 font-semibold inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-[#453750] via-[#9882ac] to-[#f2e9e4] hover:bg-[#f2e9e4] text-[#22223b]"
                        >
                            Hire Me
                        </Link>
                        <Link
                            href="/Firmin_THIERY_CV_english_version.pdf"
                            target="_blank"
                            className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-[#453750] via-[#9882ac] to-[#f2e9e4] hover:bg-w mt-3"
                            download
                        >
                            <span className="block bg-[#22223b] font-semibold hover:bg-transparent hover:text-[#4a4e69] rounded-full px-5 py-2 text-[#f2e9e4]">
                                Download CV
                            </span>
                        </Link>
                    </div>

                </div>
                <div className="col-span-1 sm:col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className="rounded-full bg-[#4a4e69] hover:bg-[#6b6d80] w-[300px] h-[300px] flex items-center justify-center transition duration-300">
                        <Image className="max-w-full max-h-full hover:brightness-125" src="/images/hero.png" alt="me" width={300} height={300}/>
                    </div>
                </div>
            </div>
        </section>
    );
}
