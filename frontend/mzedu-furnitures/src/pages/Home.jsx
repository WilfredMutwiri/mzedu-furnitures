import React, { useRef } from 'react'
import { Carousel, Label } from "flowbite-react";
import { FaArrowRight } from "react-icons/fa6";

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
// featured funiture
import featured1 from '../images/featured1.jpeg'
import featured2 from '../images/featured2.jpeg'
import featured3 from '../images/featured3.jpeg'
import featured4 from '../images/featured4.jpeg'
import featured5 from '../images/featured5.jpeg'
import featured6 from '../images/featured6.webp'
import featured7 from '../images/featured7.webp'
import featured8 from '../images/featured8.webp'
import featured9 from '../images/featured9.webp'
import featured10 from '../images/featured10.webp'

// arrivals
import Arrival1 from '../images/Arrival1.jpeg'
import Arrival2 from '../images/Arrival2.jpeg'
import Arrival3 from '../images/Arrival3.jpeg'
import Arrival4 from '../images/Arrival4.jpeg'
import Arrival5 from '../images/Arrival5.jpeg'

import { useState,useEffect } from 'react'
import { Button,Rating } from 'flowbite-react'
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

  const arrivalImages=[Arrival1,Arrival2,Arrival3,Arrival4,Arrival5]
  const [currentArrivalImage,setCurrentArrivalImage]=useState(0);
  const [arrivalName,setArrivalName]=useState(0);
  const [arrivalPrice,setArrivalPrice]=useState(0);
  const arrivalPrices=['12,000','15,000','10,000','23,000','25,600']
  const arrivalNames=["Dining Set","Table Talk Set","Wall Clock","Infinity Cup","Wall Decoraters"]

  const [currentdealImage,setCurrentdealImage]=useState(0);
  const [currentImageName,setImageName]=useState(0);
  const [decorImage,setDecorImage]=useState(0)
  const [imagePrice,setImagePrice]=useState(0);

  const [featuredImage,setFeaturedImage]=useState(0);
  const [featureImageName,setFeaturedImageName]=useState(0)
  const [featuredPrice,setFeaturedPrices]=useState(0)
// features products
  const featuredImages=[featured1,featured2,featured3,featured4,featured5,featured6,featured7,featured8,featured10,featured9]
  const imageName=["Outdoor Tent","Complete Dinning Table","Living Room Table"]
  const featuredImagesNames=["Gamming Chair","Outdoor Shade","Rounded Table","Flower Holder","Flower Grid","Office Mahogany Desk","Glassdoor Office Desk","Office Chair","Dining set","Gaming chair Armless"]
  const featuredImagesPrice=['10,500','12,500','8,900','6,300','8300',"14500","20,500","9,900","26,300","8,300"]
  const imagePrices=['20,000','16,000','28,500']
  const decorImages=[Decor1,Decor2]

  // testimonies section
  const testimonies=[
  "Mzedu Furniture & Deco have a remarkable attention to detail skillset.I just purchased a sofa set from then and I still can't beleive the awesome appearance of my living room. Thank you!",
  "Mzedu furniture and Deco never disappoints. Their executive desks and chairs turned my office into a sophisticated workspace. Their wide selection and commitment to excellence and perfection make them the go-to for furniture in Kenya.","I rely on Mzedu furniture and Deco to bring my visions to life. Their collection allows me to create bespoke spaces that exude sophistication. Their dedication toquality craftsmanship and timeless design is amazing."]
  const [currentTestimoner,setCurrentTestimoner]=useState(0);
  const [currentTestimony,setCurrentTestimony]=useState(0);
  const testimoners=['Margaret Kiani','John Kimani','Judy Mwende'];
  const changeTestimony=(direction)=>{
    setCurrentTestimony((prevTestimony)=>{
      if(direction==="prev"){
        return prevTestimony===0?testimonies.length-1:prevTestimony-1;
      }else{
        return prevTestimony===testimonies.length-1?0:prevTestimony+1;
      }
    });
    setCurrentTestimoner((prevTestimoner)=>{
      if(direction==="prev"){
        return prevTestimoner===0?testimoners.length-1:prevTestimoner-1;
      }else{
        return prevTestimoner===testimoners.length-1?0:prevTestimoner+1;
      }
    });
  }

// deals section
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
// decoration advert section
    const changedecorImage=(direction)=>{
      setDecorImage((prevDecorImage)=>{
        if(direction==="prev"){
          return prevDecorImage===0?decorImages.length-1:prevDecorImage-1;
        }else{
          return prevDecorImage===decorImages.length-1?0:prevDecorImage+1;
        }
      })
      }
    // featured images section
      const changeFeaturedImage=(direction)=>{
        setFeaturedImage((prevFeaturedImage)=>{
          if(direction==="prev"){
            return prevFeaturedImage===0?featuredImages.length-1:prevFeaturedImage-1;
          }else{
            return prevFeaturedImage===featuredImages.length-1?0:prevFeaturedImage+1;
          }
        })
        setFeaturedImageName((prevImageName)=>{
          if(direction==="prev"){
            return prevImageName===0?featuredImagesNames.length-1:prevImageName-1;
          }else{
            return prevImageName===featuredImagesNames.length-1?0:prevImageName+1
          }
        })
        setFeaturedPrices((prevPrice)=>{
          if(direction==="prev"){
            return prevPrice===0?featuredImagesPrice.length-1:prevPrice-1;
          }else{
            return prevPrice===featuredImagesPrice.length-1?0:prevPrice+1
          }
        })
        }
        // new Arrivals section
      const changeNewArrival=(direction)=>{
        setCurrentArrivalImage((prevArrivalImage)=>{
          if(direction==="prev"){
            return prevArrivalImage===0?arrivalImages.length-1:prevArrivalImage-1;
          }else{
            return prevArrivalImage===arrivalImages.length-1?0:prevArrivalImage+1;
          }
        })
        setArrivalName((prevArrivalName)=>{
          if(direction==="prev"){
            return prevArrivalName===0?arrivalNames.length-1:prevArrivalName-1;
          }else{
            return prevArrivalName===arrivalNames.length-1?0:prevArrivalName+1
          }
        })
        setArrivalPrice((prevPrice)=>{
          if(direction==="prev"){
            return prevPrice===0?arrivalPrices.length-1:prevPrice-1;
          }else{
            return prevPrice===arrivalPrices.length-1?0:prevPrice+1
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
          <h1 className=' text-center text-orange-500 font-semibold text-5xl md:text-7xl font-dancing'>Mzedu</h1>
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
        <div className='w-11/12 m-auto mt-5 mb-0 md:mb-5'>
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

        <div className="w-10/12 m-auto block md:hidden -mt-8 md:-mt-0">
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
            <div className=' text-white bg-teal-900 p-6 w-11/12 m-auto mb-5 -mt-14 md:mt-5 mb-10'>
              <p className='text-center leading-relaxed font-semibold text-lg'>
                SAVE UP TO 25% OFF SOFAS!
              </p>
              <h2 className='text-center'>
              *Terms & Condtitons Apply. Save on almost everything with exclusive prices and offers
              </h2>
            </div>
      </section>
      {/* explanation one */}
      <hr className='w-10/12 m-auto'/>
      <section>
        <div className='w-11/12 pt-10 m-auto'>
          <h2 className='text-3xl font-Dancing text-center pb-10'>Your choice,Our command!</h2>
          <p className='leading-relaxed pb-5'>
          At Mzedu Furniture & Deco, we offer an extensive selection of furniture, 
          ranging from cool and captivating accents to eye-catching centrepieces, we ensure that you
          find everything necessary to shape your dream home. We understand that your living space
          is a personal expedition, we have thoughtfully designed a diverse range of products,
          showcasing exceptional craftsmanship that allows you to weave your own narrative.
          All you desire,we deliver.Your choice will forever be our command!
          </p>
        </div>
      </section>
      <hr className='w-11/12 m-auto'/>
      {/* Featured Products */}
      <section>
        <div className={`mt-5 w-72 m-auto border-black border-t-2 md:border-t-4 border-b-2 md:border-b-4 `}>
        <h2 className='text-center font-dancing text-xl md:text-3xl p-2'>Featured Products</h2>
        <Label className='pt-3 right-12 absolute my-auto flex gap-1 text-cyan-700 hover:text-red-600 cursor-pointer'>View all <span><FaArrowRight className='text-sm md:text-lg mt-1 md:mt-0'/></span></Label>
        </div>
        <div className='flex flex-col gap-2 mt-2 md:mt-0'>
          {/* first features products div */}
          <div className={`w-[97%] md:w-11/12 m-auto pt-10 pb-5 flex flex-wrap gap-4 md:gap-6 transition-opacity duration-100`} id='visibleBig'>
          <div className=''>
            <img className='w-40 md:w-52 h-[200px] object-fill' src={featured1}/>
            <div className='p-2 flex flex-col gap-2 bg-gray-200'>
            <h2 className=''>Gamming Chair</h2>
            <h3 className=' text-red-500'>Ksh 10,500</h3>
            <Button className='w-full' gradientDuoTone="pinkToOrange" outline>Buy Now</Button>
            </div>
          </div>
          <div className=''>
          <img className='w-40 md:w-52 h-[200px] object-fill' src={featured2}/>
          <div className='p-2 flex flex-col gap-2 bg-gray-200'>
            <h2 className=''>Outdoor Shade</h2>
            <h3 className=' text-red-500'>Ksh 12,500</h3>
            <Button className='w-full' gradientDuoTone="pinkToOrange" outline>Buy Now</Button>
            </div>
          </div>
          <div>
          <img className='w-40 md:w-52 h-[200px] object-cover' src={featured3}/>
          <div className='p-2 flex flex-col gap-2 bg-gray-200'>
            <h2 className=''>Rounded Table</h2>
            <h3 className=' text-red-500'>Ksh 8,900</h3>
            <Button className='w-full' gradientDuoTone="pinkToOrange" outline>Buy Now</Button>
            </div>
          </div>
          <div>
          <img className='w-40 md:w-52 h-[200px] object-cover' src={featured4}/>
          <div className='p-2 flex flex-col gap-2 bg-gray-200'>
            <h2 className=''>Flower Holder</h2>
            <h3 className=' text-red-500'>Ksh 6,300</h3>
            <Button className='w-full' gradientDuoTone="pinkToOrange" outline>Buy Now</Button>
            </div>
          </div>
          <div>
          <img className='w-40 md:w-52 h-[200px] object-cover' src={featured5}/>
          <div className='p-2 flex flex-col gap-2 bg-gray-200'>
            <h2 className=''>Flower Grid</h2>
            <h3 className=' text-red-500'>Ksh 8,300</h3>
            <Button className='w-full' gradientDuoTone="pinkToOrange" outline>Buy Now</Button>
            </div>
          </div>
          
        </div>
        {/* second featured products div */}
        <div className={`w-11/12 m-auto pt-5 pb-5 hidden md:flex gap-6 transition-opacity duration-100`} id='visibleBig'>
          <div className=''>
            <img className='w-52 h-[200px] object-fill' src={featured6}/>
            <div className='p-2 flex flex-col gap-2 bg-gray-200'>
            <h2 className=''>Office Mahogany Desk</h2>
            <h3 className=' text-red-500'>Ksh 14,500</h3>
            <Button className='w-full' gradientDuoTone="pinkToOrange" outline>Buy Now</Button>
            </div>
          </div>

          <div className=''>
          <img className='w-52 h-[200px] object-fill' src={featured7}/>
          <div className='p-2 flex flex-col gap-2 bg-gray-200'>
            <h2 className=''>Glassdoor Office Desk</h2>
            <h3 className=' text-red-500'>Ksh 20,500</h3>
            <Button className='w-full' gradientDuoTone="pinkToOrange" outline>Buy Now</Button>
            </div>
          </div>

          <div>
          <img className='w-52 h-[200px] object-fill' src={featured8}/>
          <div className='p-2 flex flex-col gap-2 bg-gray-200'>
            <h2 className=''>Office Chair</h2>
            <h3 className=' text-red-500'>Ksh 9,900</h3>
            <Button className='w-full' gradientDuoTone="pinkToOrange" outline>Buy Now</Button>
            </div>
          </div>
          <div>
          <img className='w-52 h-[200px] object-fill' src={featured10}/>
          <div className='p-2 flex flex-col gap-2 bg-gray-200'>
            <h2 className=''>Dining set</h2>
            <h3 className=' text-red-500'>Ksh 26,300</h3>
            <Button className='w-full' gradientDuoTone="pinkToOrange" outline>Buy Now</Button>
            </div>
          </div>
          <div className='w-52'>
          <img className='w-52 h-[200px] object-fill' src={featured9}/>
          <div className='p-2 flex flex-col gap-2 bg-gray-200 '>
            <h2 className=''>Gaming chair Armless</h2>
            <h3 className=' text-red-500'>Ksh 8,300</h3>
            <Button className='w-full' gradientDuoTone="pinkToOrange" outline>Buy Now</Button>
            </div>
          </div>
        </div>
        </div>
        {/* visible small device */}
        {/* <div className="flex md:hidden gap-2 m-auto justify-center pt-10 pb-24">
                <Button className='h-10 my-auto w-6' onClick={()=>changeFeaturedImage('prev')}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-auto h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
                </Button>
                <div id='decor'>
                <img className='w-60 h-60 object-contain mx-auto' src={featuredImages[featuredImage]}/>
                <div className='p-2 flex flex-col gap-2 bg-gray-200'>
            <h2 className=''>{featuredImagesNames[featureImageName]}</h2>
            <h3 className=' text-red-500'>{featuredImagesPrice[featuredPrice]}</h3>
            <Button className='w-full' gradientDuoTone="pinkToOrange" outline>Buy Now</Button>
            </div>
                </div>
                <Button className='h-10 my-auto w-6' onClick={()=>changeFeaturedImage('next')}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
                </Button>
              </div> */}
      </section>
      <section>
      <div className=' text-white bg-red-600 p-6 w-11/12 m-auto mt-14 md:mt-5 mb-10'>
              <p className='text-center leading-relaxed font-semibold text-lg'>
                WE OFFER FREE DELIVERY FOR ABOVE 100,000!
              </p>
              <h2 className='text-center'>
              *Terms & Condtitons Apply. Save on your transport! Breath, we've got you covered!
              </h2>
            </div>
      </section>
      {/* New Arrivals Section */}
      <section>
        <div className={`mt-5 w-56 m-auto border-black border-t-4 border-b-4 `}>
        <h2 className='text-center font-Dancing text-3xl p-2'>New Arrivals</h2>
        </div>
        <div className={`w-11/12 m-auto pt-10 pb-5 hidden md:flex gap-6 transition-opacity duration-100`} id='visibleBig'>
          <div className=''>
            <img className='w-52 h-[200px] object-fill' src={Arrival1}/>
            <div className='p-2 flex flex-col gap-2 bg-gray-200'>
            <h2 className=''>Dining Set</h2>
            <h3 className=' text-red-500'>Ksh 12,000</h3>
            <Button className='w-full' gradientDuoTone="pinkToOrange" outline>Buy Now</Button>
            </div>
          </div>
          <div className=''>
          <img className='w-52' src={Arrival2}/>
          <div className='p-2 flex flex-col gap-2 bg-gray-200'>
            <h2 className=''>Table Talk Set</h2>
            <h3 className=' text-red-500'>Ksh 15,000</h3>
            <Button className='w-full' gradientDuoTone="pinkToOrange" outline>Buy Now</Button>
            </div>
          </div>
          <div>
          <img className='w-52 h-[200px] object-cover' src={Arrival3}/>
          <div className='p-2 flex flex-col gap-2 bg-gray-200'>
            <h2 className=''>Wall Clock</h2>
            <h3 className=' text-red-500'>Ksh 10,000</h3>
            <Button className='w-full' gradientDuoTone="pinkToOrange" outline>Buy Now</Button>
            </div>
          </div>
          <div>
          <img className='w-52 h-[200px] object-cover' src={Arrival4}/>
          <div className='p-2 flex flex-col gap-2 bg-gray-200'>
            <h2 className=''>Infinity Cup</h2>
            <h3 className=' text-red-500'>Ksh 23,000</h3>
            <Button className='w-full' gradientDuoTone="pinkToOrange" outline>Buy Now</Button>
            </div>
          </div>
          <div>
          <img className='w-52 h-[200px] object-cover' src={Arrival5}/>
          <div className='p-2 flex flex-col gap-2 bg-gray-200'>
            <h2 className=''>Wall Decorators</h2>
            <h3 className=' text-red-500'>Ksh 25,600</h3>
            <Button className='w-full' gradientDuoTone="pinkToOrange" outline>Buy Now</Button>
            </div>
          </div>
        </div>
        {/* visible small device */}
        <div className="flex md:hidden gap-2 m-auto justify-center pt-10 pb-24">
                <Button className='h-10 my-auto w-6' onClick={()=>changeNewArrival('prev')}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-auto h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
                </Button>
                <div id='decor'>
                <img className='w-60 h-60 object-cover mx-auto' src={arrivalImages[currentArrivalImage]}/>
                <div className='p-2 flex flex-col gap-2 bg-gray-200'>
            <h2 className=''>{arrivalNames[arrivalName]}</h2>
            <h3 className=' text-red-500'>{arrivalPrices[arrivalPrice]}</h3>
            <Button className='w-full' gradientDuoTone="pinkToOrange" outline>Buy Now</Button>
            </div>
                </div>
                <Button className='h-10 my-auto w-6' onClick={()=>changeNewArrival('next')}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
                </Button>
              </div>
      </section>
      {/* testimonies section */}
      <hr className='w-11/12 m-auto' />
      <section>
      <h2 className={`text-center font-Dancing text-2xl md:text-3xl pt-6 md:pt-10 pb-6 md:pb-10`}>~What Our Customers Have To Say~</h2>
        <div className='w-11/12 flex gap-6 m-auto pb-10'>
          <div className={`bg-gray-300 p-3 rounded-md leading-relaxed shadow-sm shadow-blue-500`}>
            <div className='flex gap-4 justify-center m-auto pt-2 pb-2'>
            <Rating>
            <Rating.Star className='text-red-600' />
            <Rating.Star className='text-red-600'/>
            <Rating.Star className='text-red-600'/>
            <Rating.Star className='text-red-600'/>
            <Rating.Star className='text-red-600'/>
            <Rating.Star className='text-white' filled={false} />
            </Rating>
            </div>
            <p>{testimonies[currentTestimony]}</p>
            <h2 className='font-semibold'>@{testimoners[currentTestimoner]}<span className='font-normal pl-2 text-blue-600 hidden md:block'>/Facebook</span></h2>
            <div className='flex md:hidden justify-between pt-5'>
            <Button className='h-10 my-auto w-14' onClick={()=>changeTestimony('prev')}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-auto h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
            </Button>
            <Button className='h-10 my-auto w-14' onClick={()=>changeTestimony('next')}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
            </Button>
            </div>
          </div>
          <div className={`bg-gray-300 p-3 rounded-md leading-relaxed shadow-sm shadow-blue-500 hidden md:block`}>
          <div className='flex gap-4 justify-center m-auto pt-2 pb-2'>
          <Rating>
            <Rating.Star className='text-red-600' />
            <Rating.Star className='text-red-600'/>
            <Rating.Star className='text-red-600'/>
            <Rating.Star className='text-red-600'/>
            <Rating.Star className='text-red-600'/>
            <Rating.Star className='text-red-600' />
            </Rating>
            </div>
            <p>
            Mzedu furniture and Deco never disappoints. Their executive desks and chairs turned my office into a sophisticated
            workspace. Their wide selection and commitment to excellence and perfection make them
            the go-to for furniture in Kenya.
            </p>
            <h2 className='font-semibold pt-7'>John Kimani/<span className='font-normal pl-2 text-blue-600'>Instagram</span></h2>
          </div>
          <div className={` bg-gray-300 p-3 rounded-md leading-relaxed shadow-sm shadow-blue-500 hidden md:block`}>
          <div className='flex gap-4 justify-center m-auto pt-2 pb-2'>
          <Rating>
            <Rating.Star className='text-red-600' />
            <Rating.Star className='text-red-600'/>
            <Rating.Star className='text-red-600'/>
            <Rating.Star className='text-red-600'/>
            <Rating.Star className='text-white' filled={false}/>
            <Rating.Star className='text-white' filled={false} />
            </Rating>
            </div>
            <p>
            I rely on Mzedu furniture and Deco to bring my visions to life. Their collection allows
            me to create bespoke spaces that exude sophistication. Their dedication to
            quality craftsmanship and timeless design is amazing.
            </p>
            <h2 className='font-semibold'>Judy Mwende/ <span className='font-normal pl-2 text-blue-600'>Facebook</span></h2>
          </div>
        </div>
      </section>
      </div>
  )
}
