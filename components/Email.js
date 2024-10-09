"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MailCheck, MailX, Send } from 'lucide-react';

const Email = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [notification, setNotification] = useState({ visible: false, message: '', success: false });

    // Référence pour la section du formulaire
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setNotification({ visible: false, message: '', success: false });

        const form = e.target; // Récupérer l'élément du formulaire

        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value
        };
        const JsonData = JSON.stringify(data);
        const endPoint = "/api/send";   

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JsonData
        };

        try {
            const response = await fetch(endPoint, options);

            if (!response.ok) {
                console.error("HTTP Error:", response.status);
                setNotification({ visible: true, message: 'Error sending email. Please try again.', success: false });
                setLoading(false);
                setEmailSubmitted(false);
                return;
            }

            const resData = await response.json();
            console.log(resData);
            if (response.status === 200) {
                console.log("Email sent successfully");
                setEmailSubmitted(true);
                setNotification({ visible: true, message: 'Email sent successfully!', success: true });
                form.reset(); // Réinitialiser le formulaire après succès
            } else {
                setEmailSubmitted(false);
                setNotification({ visible: true, message: 'Error sending email. Please try again.', success: false });
            }
        } catch (error) {
            console.error("Error submitting email:", error);
            setEmailSubmitted(false);
            setNotification({ visible: true, message: 'Error sending email. Please try again.', success: false });
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (notification.visible) {
            const timer = setTimeout(() => {
                setNotification({ visible: false, message: '', success: false });
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [notification]);

    const fieldVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (index) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: index * 0.2,
                type: "spring",
                stiffness: 100,
                damping: 15,
            }
            }),
    };

    return (
        <motion.section 
            className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4' 
            id="contact" 
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
            {/* Notification */}
             {/* Notification */}
             {notification.visible && (
                <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 flex items-center border border-green-500 rounded-md bg-white shadow-md p-2">
                    {notification.success ? (
                        <>
                            <MailCheck className="h-4 w-4 text-green-500 mr-2" />
                            <span className="text-green-500">{notification.message}</span>
                        </>
                    ) : (
                        <>
                            <MailX className="h-4 w-4 text-red-500 mr-2" />
                            <span className="text-red-500">{notification.message}</span>
                        </>
                    )}
                </div>
            )}

            <div>
                <h5 className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300 font-bold text-4xl">Get in touch!</h5>
                <p className='text-[#ADB7BE] mb-4 max-w-'>
                I&apos;m always open to new opportunities, especially in IT consulting. If you&apos;re looking for a passionate intern, let&apos;s connect. I&apos;m excited to see what we can achieve together! Available for internships starting from February 21th, 2025.
                </p>
                <div className='socials flex flex-row gap-2'>
                    <Link href="https://github.com/Firemain" target='_blank'>
                        <Image src="/images/github-icon.svg" alt="GitHub" width={50} height={50} className='cursor-pointer'></Image>
                    </Link>

                    <Link href="https://www.linkedin.com/in/firmin-thiery" target='_blank'>
                        <Image src="/images/linkedin-icon.svg" width={50} height={50} className='cursor-pointer' alt="linkedin"></Image>
                    </Link>
                </div>
            </div>
            <div>
                <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
                    <motion.label 
                        htmlFor="email" 
                        className='text-[#ADB7BE]'
                        custom={0}
                        variants={fieldVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        Your email
                    </motion.label>
                    <motion.input 
                        type="email" 
                        id="email" 
                        name="email" 
                        className='bg-[#4a4e69] text-[#ADB7BE] rounded-lg p-2' 
                        placeholder='hello@gmail.com'
                        custom={0}
                        variants={fieldVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    />

                    <motion.label 
                        htmlFor="subject" 
                        className='text-[#ADB7BE]'
                        custom={1}
                        variants={fieldVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        Your subject
                    </motion.label>
                    <motion.input 
                        type="text" 
                        id="subject" 
                        name="subject" 
                        className='bg-[#4a4e69] text-[#ADB7BE] rounded-lg p-2' 
                        placeholder='Just say hi !'
                        custom={1}
                        variants={fieldVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    />

                    <motion.label 
                        htmlFor="message" 
                        className='text-[#ADB7BE]'
                        custom={2}
                        variants={fieldVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        Your message
                    </motion.label>
                    <motion.textarea 
                        id="message" 
                        name="message" 
                        className='bg-[#4a4e69] text-[#ADB7BE] rounded-lg p-2 ' 
                        placeholder="Let&apos;s talk about..."
                        custom={2}
                        variants={fieldVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    />

                    <motion.button 
                        type="submit" 
                        className='bg-[#453750] hover:bg-[#6b6d80] text-[#f2e9e4] rounded-lg p-2 flex justify-center items-center'
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        custom={3}
                        variants={fieldVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        {loading ? (
                            <span className="flex items-center">
                                <Send className="animate-bounce mr-2" />
                            </span>
                        ) : (
                            <span>Send</span>
                        )}
                    </motion.button>
                
                </form>
            </div>
        </motion.section>
    );
};

export default Email;
