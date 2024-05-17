import React from 'react'
import banner2 from '../images/banner2.jpg'
import banner1 from '../images/banner1.jpg'
import banner3 from '../images/banner3.jpg'
import banner4 from '../images/banner4.jpg'
import banner5 from '../images/banner5.jpg'
import { useState,useEffect } from 'react'
import { Button } from 'flowbite-react'
export default function Home() {
  const images=[banner1,banner2,banner3,banner4,banner5];
  const [currentImage,setCurrentImage]=useState(0)
  let counter=0;
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1));
      }, 3000);
  
      // Cleanup function to clear the interval
      // return () => clearInterval(interval);
    }, [images.length]);
  return (
    <div className='max-w-[1400px] h-[780px] w-full m-auto'>
      <div style={{backgroundImage:`url(${images[currentImage]})`}} className='bg w-full h-full bg-cover bg-center duration-500'>
        <div className='pt-24'>
          <div className='flex w-96 mx-auto'>
          <div className='w-52 mx-auto border-r-4 border-white z-50 p-3 font-bold'>
          <h1 className=' text-center text-orange-500 font-semibold text-7xl font-Dancing'>Mzedu</h1>
          </div>
          <div className='w-64 text-xl font-semibold text-white z-50 p-3'>
            <h2>Where quality meets passion</h2>
          </div>
          </div>
        <h2 className='text-white z-50 relative text-center font-serif text-5xl pt-5'>Furniture <span className='text-orange-500'>&</span> Deco</h2>
        <div className='flex gap-5 justify-center mt-10'>
          <Button gradientDuoTone="pinkToOrange">Shop Now</Button>
          <Button gradientDuoTone="pinkToOrange">New Arrivals</Button>
        </div>
        </div>
      </div>
      </div>
  )
}
