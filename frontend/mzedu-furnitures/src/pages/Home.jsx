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
import newSign from '../images/sign.png'
import dinningTable2 from '../images/dinningTable2.jpeg'
import bedsAd from '../images/bedsAds.png'
import diningAd from '../images/diningAd.jpg'
import officeAd from '../images/officeAd.png'
import sofasAd from '../images/sofasAd.png'
import Decor1 from '../images/luxurydecor.png'
import Decor2 from '../images/decor2.png'
import { useState,useEffect } from 'react'
import { Button } from 'flowbite-react'
export default function Home() {
  const images=[banner1,banner2,banner3,banner4,banner5];
  const [currentImage,setCurrentImage]=useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1));
        // return () => clearInterval(interval);
    }, 3000);
  }, [images.length],
  )
  const dealimages=[popular1,dinningTable1,dinningTable2];
  const [currentdealImage,setCurrentdealImage]=useState(0);
  const [currentImageName,setImageName]=useState(0);
  const [decorImage,setDecorImage]=useState(0)
  const [imagePrice,setImagePrice]=useState(0);
  const imageName=["Outdoor Tent","Complete Dinning Table","Living Room Table"]
  const imagePrices=['20,000','16,000','28,500']
  const decorImages=[Decor1,Decor2]
  const changedealImage=(direction)=>{
    setCurrentdealImage((prevDealImage)=>{
      if(direction==="prev"){
        return prevDealImage===0?dealimages.length-1:prevDealImage-1;
      }else{
        return prevDealImage===dealimages.length-1?0:prevDealImage+1;
      }
    });
    setImageName((prevImageName)=>{
      if(direction==="prev"){
        return prevImageName===0?imageName.length-1:prevImageName-1;
      }else{
        return prevImageName===imageName.length-1?0:prevImageName+1
      }
    })
    setImagePrice((prevImagePrice)=>{
      if(direction==="prev"){
        return prevImagePrice===0?imagePrices.length-1:prevImagePrice-1;
      }else{
        return prevImagePrice===imagePrices.length-1?0:prevImagePrice+1
      }
    })
    }

    const changedecorImage=(direction)=>{
      setDecorImage((prevDecorImage)=>{
        if(direction==="prev"){
          return prevDecorImage===0?decorImages.length-1:prevDecorImage-1;
        }else{
          return prevDecorImage===decorImages.length-1?0:prevDecorImage+1;
        }
      })
      }
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
            <img src={dealimages[currentdealImage]}/>
            <img className="w-14 -mt-64 md:-mt-72 ml-52 md:ml-64 absolute" src={newSign} alt="" />
            <div className="block md:flex">
              <div>
              <h2 className="p-3 font-semibold">{imageName[currentImageName]}</h2>
              <span className="p-3 text-red-600">Ksh {imagePrices[imagePrice]}</span>
              </div>
              <div className="flex gap-2 mt-2 h-9 ml-2 md:ml-0">
                <Button onClick={()=>changedealImage('prev')}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
                </Button>
                <Button onClick={()=>changedealImage('next')}>
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
      {/* ads section */}
      <section>
        <div className='w-11/12 m-auto mt-5 mb-5'>
        <div className='flex justify-center'>
          <div className='block md:flex gap-10'>
            <div className='flex gap-10' id='block1'>
            <div className=' bg-gray-200 hover:bg-teal-900 hover:text-white cursor-pointer'>
              <a href='#'>
              <img className='w-40 md:w-44' src={bedsAd}/>
              <h2 className='font-semibold text-lg text-center p-1'>Beds</h2>
              </a>
            </div>
            <div className=' bg-gray-200 hover:bg-teal-900 hover:text-white cursor-pointer'>
              <a href='#'>
              <img className='w-40 md:w-44' src={sofasAd}/>
              <h2 className='font-semibold text-lg text-center p-1'>Sofas</h2>
              </a>
            </div>
            </div>
            <div className='flex gap-10 mt-6 md:mt-0' id='block2'>
            <div className=' bg-gray-200 hover:bg-teal-900 hover:text-white cursor-pointer'>
              <a href='#'>
              <img className='w-40 md:w-44' src={diningAd}/>
              <h2 className='font-semibold text-lg text-center p-1'>Dining</h2>
              </a>
            </div>
            <div className=' bg-gray-200 hover:bg-teal-900 hover:text-white cursor-pointer'>
              <a href='#'>
              <img className='w-40 md:w-44' src={officeAd}/>
              <h2 className='font-semibold text-lg text-center p-1'>Office</h2>
              </a>
            </div>
            </div>
          </div>
        </div>
        </div>
      </section>
      {/* decore section */}
      <section>
        <div className='hidden md:block'>
        <div className='w-10/12 block md:flex m-auto pt-10 pb-10 gap-0 md:gap-14'>
          <a href='#'>
          <div className='' id='decor'>
            <img src={Decor1}/>
          </div>
          </a>
          <a href='#'>
          <div id='decor'>
            <img src={Decor2}/>            
          </div>
          </a>
        </div>
        </div>

        <div className="w-10/12 m-auto block md:hidden">
              <div className="flex gap-2 pt-10 pb-10 m-auto ">
                <Button className='h-10 my-auto w-6' onClick={()=>changedecorImage('prev')}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-auto h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
                </Button>
                <div id='decor'>
                <img className='w-60 h-60 object-contain mx-auto' src={decorImages[decorImage]}/>
                </div>
                <Button className='h-10 my-auto w-6' onClick={()=>changedecorImage('next')}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
                </Button>
              </div>
            </div>
            <div className=' mt-5 text-white bg-teal-900 p-6 w-11/12 m-auto mb-5'>
              <p className='text-center leading-relaxed font-semibold text-lg'>
                SAVE UP TO 25% OFF SOFAS!
              </p>
              <h2 className='text-center'>
              *Terms & Condtitons Apply. Save on almost everything with exclusive prices and offers
              </h2>
            </div>
      </section>
      </div>
  )
}
