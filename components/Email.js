"use client";

import { useState } from 'react';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Email = () => {

    const {emailSubmitted, setEmailSubmitted} = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value
        }
        const JsonData = JSON.stringify(data);
        const endPoint = "/api/send";   

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JsonData
        }
        const response = await fetch(endPoint, options);
        const resData = await response.json();
        console.log(resData);
        if (response.status == 200) {
            console.log("Email sent successfully");
            setEmailSubmitted(true);
        }
    }

    return (
        <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4'>
            <div>
                <h5 className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300 font-bold text-4xl">Get in touch !</h5>
                <p className='text-[#ADB7BE] mb-4 max-w-'>
                I&apos;m always open to new opportunities, especially in IT consulting. If you&apos;re looking for a passionate intern, let&apos;s connect. I&apos;m excited to see what we can achieve together! Available for internships starting from February 21th, 2025.
                </p>
                <div className='socials flex flex-row gap-2'>
                    <Link href="/">
                    <Image src="/images/github-icon.svg" alt="GitHub" width={50} height={50} className='cursor-pointer'></Image>
                    </Link>

                    <Link href="/">
                    <Image src="/images/linkedin-icon.svg" width={50} height={50} className='cursor-pointer'></Image>
                    </Link>
                </div>
            </div>
            <div>
                <form className='flex flex-col gap-4 ' onSubmit={handleSubmit}>

                    <label htmlFor="email" className='text-[#ADB7BE]'>Your email</label>
                    <input type="email" id="email" name="email" className='bg-[#4a4e69] text-[#ADB7BE] rounded-lg p-2' placeholder='hello@gmail.com'/>

                    <label htmlFor="subject" className='text-[#ADB7BE]'>Your subject</label>
                    <input type="text" id="subject" name="subject" className='bg-[#4a4e69] text-[#ADB7BE] rounded-lg p-2' placeholder='Just say hi !'/>

                    <label htmlFor="message" className='text-[#ADB7BE]'>Your message</label>
                    <textarea id="message" name="message" className='bg-[#4a4e69] text-[#ADB7BE] rounded-lg p-2 ' placeholder="Let's talk about..."></textarea>

                    <button type="submit" className='bg-[#453750] hover:bg-[#6b6d80] text-[#f2e9e4] rounded-lg p-2'>Send</button>
                
                {emailSubmitted && <p className='text-green'>Email sent successfully !</p>}
                
                </form>
            </div>
        </section>
    );
};

export default Email;