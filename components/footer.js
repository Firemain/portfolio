import React from 'react';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className='footer border border-t-[#4a4e69] border-l-transparent border-r-transparent border-b-transparent'>
            <div className='container p-12 text-[#4a4e69] flex justify-between items-center'>
                <span className="flex-1 text-left"><Image src="/images/logo.png" alt="logo" width={30} height={30}></Image></span>
                <p className="flex-1 text-center">Firmin THIERY portfolio</p>
                <p className="flex-1 text-right">Last update October 2024</p>
            </div>
        </footer>
    );
};

export default Footer;
