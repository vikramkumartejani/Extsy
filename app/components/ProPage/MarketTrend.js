import Image from 'next/image'
import React from 'react'

const MarketTrendCard = ({coinSymbol, coinIcon, rate, change }) => {
    return (
        <div className='w-full dark:bg-[#161414] bg-[#F6F6F6] rounded-[14.33px] p-[25.50px] md:p-[28.50px]'>
            <div className='flex items-center justify-between border-b border-[#383434] pb-[14.33px]'>
                <div className='flex items-center gap-2'>
                    <div className='dark:bg-[#383434] bg-white rounded-full w-[75px] sm:w-[77.28px] h-[35.82px] flex items-center justify-center gap-1'>
                        <Image src={coinIcon} alt={coinSymbol} width={22.36} height={22.36} className='w-[20px] h-[20px] sm:w-[22.36px] sm:h-[22.36px]' />
                        <h3 className='dark:text-[#F0C2DB] text-primary text-[12.75px] sm:text-[14.33px] font-medium leading-[17.19px] mt-0.5'>{coinSymbol}</h3>
                    </div>
                    <Image
                        src='/assets/pro-assets/swap-dark.svg'
                        alt='swap-arrow-logo'
                        width={20.76}
                        height={18.69}
                        className='dark:block hidden w-[18.47px] h-[16.63px] sm:w-[20.76px] sm:h-[18.69px]'
                    />
                    <Image
                        src='/assets/pro-assets/swap-light.svg'
                        alt='swap-arrow-logo'
                        width={20.76}
                        height={18.69}
                        className='block dark:hidden'
                    />
                    <div className='dark:bg-[#383434] bg-white rounded-full w-[80px] h-[31.88px] sm:w-[88.28px] sm:h-[35.82px] flex items-center justify-center gap-1.5'>
                        <Image src='/assets/pro-assets/tether.svg' alt='USDT' width={22.36} height={22.36} className='w-[20px] h-[18px] sm:w-[22.36] sm:h-[22.36]' />
                        <h3 className='dark:text-[#F0C2DB] text-primary text-[12.75px] sm:text-[14.33px] font-medium leading-[17.19px] mt-0.5'>USDT</h3>
                    </div>
                </div>
                <button className='dark:bg-white bg-custom-gradient rounded-full min-w-[31.88px] h-[31.88px] sm:min-w-[35.82px] sm:h-[35.82px] flex items-center justify-center'>
                    <Image src='/assets/pro-assets/arrow.svg' alt='arrow' width={12} height={12} />
                </button>
            </div>

            <div className='mt-3 sm:mt-[14.33px] flex items-center gap-3.5'>
                <div className='flex items-end gap-2'>
                    <h1 className='dark:text-[#FAFAFA] text-primary font-semibold text-[19.13px] sm:text-[21.49px] leading-[25.79px]'>{`1 ${coinSymbol}`}</h1>
                    <h3 className='dark:text-[#BAB8B8] text-[#7A7474] font-normal text-[12.75px] sm:text-[14.33px] leading-[17.19px]'> ~ ${rate} USDT </h3>
                </div>
                <div className='dark:bg-[#1B433C] bg-white rounded-[894.63px] flex items-center pr-5 gap-[9px] px-3 py-[7.16px]'>
                    <h3 className='dark:text-[#C4FFF5] text-primary font-normal text-[11.16px] sm:text-[12.54px] leading-[15.04px]'>{change} </h3>
                    <Image
                        src='/assets/pro-assets/chart.svg'
                        alt='chart'
                        width={15}
                        height={10}
                        className='dark:block hidden'
                    />
                    <Image
                        src='/assets/pro-assets/light-chart.svg'
                        alt='chart'
                        width={20.76}
                        height={18.69}
                        className='block dark:hidden'
                    />
                </div>
            </div>
        </div>
    );
};

const MarketTrend = () => {
    const marketData = [
        { coinName: 'Bitcoin', coinSymbol: 'BTC', coinIcon: '/assets/pro-assets/btc.svg', rate: '57,042', change: '+1.23%'},
        { coinName: 'Ethereum', coinSymbol: 'ETH', coinIcon: '/assets/pro-assets/eth.svg', rate: '4,200', change: '+0.89%'},
        { coinName: 'Cardano', coinSymbol: 'ADA', coinIcon: '/assets/pro-assets/ada.svg', rate: '2.15', change: '-0.42%'},
        { coinName: 'Binance Coin', coinSymbol: 'BNB', coinIcon: '/assets/pro-assets/bnb.svg', rate: '670', change: '+0.76%'},
    ];

    return (
        <div className='py-[91px] max-w-[1440px] mx-auto w-full'>
            <h1 className='text-center font-bold text-[19.16px] sm:text-[40px] sm:leading-[48px]'>🔥 Last 24 hours Market Trend</h1>
            <div className='mt-[29px] sm:mt-[60px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 xl:gap-1'>
                {marketData.map((data, index) => (
                    <MarketTrendCard key={index} {...data} isDarkMode={true} />
                ))}
            </div>
        </div>
    );
};

export default MarketTrend;
