import React from 'react'
import { MdDashboard } from "react-icons/md";
import { IoIosFlash } from "react-icons/io";
import { MdOutlineBedroomChild } from "react-icons/md";
import { GiMeal } from "react-icons/gi";
import { GiRockingChair } from "react-icons/gi";
import { FaUmbrellaBeach } from "react-icons/fa";
import { PiOfficeChairLight } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { GiNewShoot } from "react-icons/gi";

export default function Dashboard() {
  return (
    <div className='w-full bg-gray-100 font-sans'>
        <div className='w-full mx-auto flex gap-6'>
        {/* left div */}
        <div className='w-64 left-0 bg-gray-800 p-3 h-auto'>
            <div className='text-orange-100 font-semibold text-lg text-center'>
            <h2 className='text-xl'>Mzedu Furniture <span className='text-sm'>&</span> Deco</h2>

            </div>
            <hr className='mt-3'/>
            {/* menuList */}
            <div className='pt-4 text-white p-3 pb-4'>
                <ul className='flex flex-col gap-4'>
                    <li className='dashboard_li'><MdDashboard className='text-2xl'/> Overview</li>
                    <li className='dashboard_li'><GiNewShoot className='text-2xl'/>New Arrivals</li>
                    <li className='dashboard_li'><IoIosFlash className='text-2xl'/>Flash Sales</li>
                    <li className='dashboard_li'><GiRockingChair className='text-2xl'/>Living Room</li>
                    <li className='dashboard_li'><GiMeal className='text-2xl'/>Dinning Room</li>
                    <li className='dashboard_li'><MdOutlineBedroomChild className='text-2xl'/>BedRoom</li>
                    <li className='dashboard_li'><FaUmbrellaBeach className='text-2xl'/>Outdoor</li>
                    <li className='dashboard_li'><PiOfficeChairLight className='text-2xl'/>Office</li>
                    <li className='dashboard_li'><IoSettingsOutline className='text-2xl'/>Settings</li>
                </ul>
            </div>
            <hr/>
            {/* general div */}
            <div className='p-3 text-center text-green-500 text-sm'>
                <FaRegUserCircle className='mx-auto text-white text-2xl'/>
            <h2>@Wilfred_Mutwiri</h2>
            <h3>wilfredmutwiri@gmail.com</h3>
            </div>
        </div>
        {/* right div */}
        <div className='flex justify-between flex-1'>
        <h2 className='text-3xl p-1 flex gap-2'><MdDashboard className='text-3xl mt-1 text-pink-700'/>Dashboard</h2>
        <h3 className='pt-3 font-semibold text-cyan-700'>Good Morning @Wilfred <span className='bg-pink-500 p-1 rounded-md text-white text-sm'>Admin</span></h3>
        </div>
        <hr className=''/>
        </div>
    </div>
  )
}
