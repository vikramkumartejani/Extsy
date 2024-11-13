import Image from 'next/image'
import React from 'react'
// import Svg from '../Svg'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";


const Hero = () => {
    return (
        <div className='w-full py-10 md:py-[100px] lg:py-[156px]'>
            <div className='max-w-[1440px] w-full mx-auto flex lg:flex-row flex-col-reverse gap-10 items-center justify-between lg:gap-4'>
                <div className='flex-1 px-[14px] sm:px-0'>
                    <h2 className='text-[29px] sm:text-left text-center sm:text-[60px] xl:text-[72px] xl:leading-[93.6px] tracking-[-0.05em] font-medium'>
                        Unlock Your Potential: Upgrade to 
                        <span className='font-bold text-nowrap'> Extsy Pro</span>
                    </h2>
                    <p className='sm:text-left text-center pt-5 sm:pt-8 text-[13px] sm:text-[20px] font-medium leading-[14.22px] sm:leading-[35px]'>
                        Enhance your trading with Extsy Pro. Effortlessly trade DeFi assets on a user-friendly platform, with real-time data 
                        and exclusive tools to maximize your earnings.
                    </p>
                    <div className="gradient-border mt-[25px] sm:mt-[45px] w-full sm:w-[227px]">
                        <button className="pt-0.5 inner-button font-semibold text-[16.4px] sm:text-xl">
                            Earn like a Pro <MdOutlineKeyboardArrowRight className="text-[28px] sm:text-[33px] mb-[2px]" />
                        </button>
                    </div>

                </div>
                <div className='flex-1 items-end justify-end flex'>
                    <Image src='/assets/pro-assets/pro-hero.svg' alt='hero' width={654} height={500} />
                </div>
            </div>
        </div>
    )
}

export default Hero