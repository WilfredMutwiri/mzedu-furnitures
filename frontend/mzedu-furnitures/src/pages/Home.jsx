import React from 'react'
import banner2 from '../images/banner2.jpg'
import banner1 from '../images/banner1.jpg'
import banner3 from '../images/banner3.jpg'
import banner4 from '../images/banner4.jpg'
import banner5 from '../images/banner5.jpg'
import dinningTable1 from '../images/dinningTable1.jpeg'
import popular1 from '../images/popular1.jpeg'
import popular2 from '../images/popular2.jpeg'
import popular3 from '../images/officeDesk1.jpeg'
import { useState,useEffect } from 'react'
import { Button } from 'flowbite-react'
export default function Home() {
  const images=[banner1,banner2,banner3,banner4,banner5];
  const [currentImage,setCurrentImage]=useState(0)
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1));
        return () => clearInterval(interval);
      }, 3000);
    }, [images.length],
  );
  return (
    <div >
      <div className='max-w-[1400px] h-[780px] w-full m-auto'>
      <div style={{backgroundImage:`url(${images[currentImage]})`}} className='bg w-full h-full bg-cover bg-center duration-500'>
        <div className='pt-16 md:pt-24'>
          <div className='flex w-full md:w-96 mx-auto'>
          <div className='w-52 mx-auto border-r-4 border-white z-50 p-3 font-bold'>
          <h1 className=' text-center text-orange-500 font-semibold text-5xl md:text-7xl font-Dancing'>Mzedu</h1>
          </div>
          <div className='w-64 text-lg md:text-xl font-semibold text-white z-50 p-3'>
            <h2>Where quality meets passion</h2>
          </div>
          </div>
        <h2 className='text-white z-50 relative text-center font-serif text-4xl md:text-5xl pt-5'>Furniture <span className='text-orange-500'>&</span> Deco</h2>
        <div className='flex gap-5 justify-center mt-10'>
          <Button gradientDuoTone="pinkToOrange">Shop Now</Button>
          <Button gradientDuoTone="pinkToOrange">New Arrivals</Button>
        </div>
        </div>
      </div>
      </div>
      <section>
        {/* home banner */}
        <div className="w-10/12 mx-auto block md:grid grid-cols-3 -mt-56 z-50 relative mb-10">
          <div className="bg-orange-500">
            <h2 className="p-5 text-xl text-white font-semibold">DEALS OF THE DAY</h2>
            <hr />
            <p className="p-4 text-white leading-relaxed">
              We offer valuable deals every day, our exclusive offers are available to all users,
              you can visit our store today to grab your offer or order online!
            </p>
          </div>
          <div className="pb-3 border-r-4 border-white bg-gray-300">
            <img src={dinningTable1}/>
            <div className="block md:flex">
              <div>
              <h2 className="p-3 font-semibold">Complete Dinning Table</h2>
              <span className="p-3 text-red-600">Ksh 20,000 <span className="line-through text-black text-sm">Ksh 23,000</span></span>
              </div>
              <div className="flex gap-2 mt-2 h-9 ml-2 md:ml-0">
                <Button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
                </Button>
                <Button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
                </Button>
              </div>
            </div>
            <Button className="ml-2 mt-2" gradientDuoTone="pinkToOrange">Order Now</Button>
          </div>
          <div className="flex flex-col gap-4 mt-4 md:mt-0 bg-gray-300">
            <h2 className="p-5 text-lg font-semibold">POPULAR PRODUCT</h2>
            <hr />
            <div className="flex gap-4 p-3">
              <img className="w-20" src={popular1} alt="" />
              <div className="block">
              <h2 className="font-semibold">Packing Spur</h2>
              <span className="text-red-600">Ksh 12,000 <span className="line-through text-sm text-black">Ksh 16,000</span></span>
              </div>
            </div>
            <hr />
            <div className="flex gap-4 p-3">
              <img className="w-20" src={popular2} alt="" />
              <div className="block">
              <h2 className="font-semibold">Flowers Holder</h2>
              <span className="text-red-600">Ksh 10,000 <span className="line-through text-sm text-black">Ksh 14,000</span></span>
              </div>
            </div>
            <hr />
            <div className="flex gap-4 p-3">
              <img className="w-20" src={popular3} alt="" />
              <div className="block">
              <h2 className="font-semibold">Office desk</h2>
              <span className="text-red-600">Ksh 22,000 <span className="line-through text-sm text-black">Ksh 28,000</span></span>
              </div>
            </div>
          </div>

        </div>
      </section>
      </div>
  )
}
