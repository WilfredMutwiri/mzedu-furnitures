import React from 'react'
import signInImg from '../images/undraw_login_re_4vu2.svg'
import { useState,useEffect } from 'react'
import { Button, Label, Spinner, TextInput } from 'flowbite-react'
export default function Signin() {
    const [welcomeTxt,setWelcomeTxt]=useState("Welcome Back!");
    const [isloading,setIsLoading]=useState(false);
    const [formData,setFormData]=useState([]);
    const [showpassword,setShowpassword]=useState(false)
    // welcome text
    useEffect(()=>{
        const getTimeOfDay=()=>{
            const hours=new Date().getHours();
            if(hours<12){
                return "Good Morning, Welcome back!"
            }else if(hours<18){
                return"Good Afternoon, Welcome back!"
            }else{
                return "Good Evening, Welcome Back!"
            }
        }
        setWelcomeTxt(getTimeOfDay())
    },[])
    const handleChange=(e)=>{
        setFormData({...formData,[e.target.id]:e.target.value.trim()})
        console.log(formData);
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        setIsLoading(true)
    }
  return (
    <>
    <div className='w-full '>
        <div className='w-11/12 md:w-10/12 block md:flex gap-6 pt-12 pb-5 mx-auto'>
        <div className='flex-1'>
            <img src={signInImg} alt='signin illustration'/>
        </div>
        <div className='flex-1 mt-10 md:mt-0'>
            <h2 className='font-semibold text-xl text-orange-500'>{welcomeTxt}</h2>
            <form className='pt-4 flex flex-col gap-4' onSubmit={handleSubmit}>
                <Label value='Email Address'/>
                <TextInput 
                placeholder='user@gmail.com'
                onChange={handleChange}
                id='email'
                required
                />
                <Label value='Password'/>
                <TextInput
                placeholder='Examplepass@2024'
                type={showpassword ? 'text':'password'}
                onChange={handleChange}
                id='password'
                required
                />
                <div>
                    <input
                    type='checkbox'
                    id='showPasswordBox'
                    checked={showpassword}
                    onChange={()=>setShowpassword(!showpassword)}
                    />
                    <Label className='pl-2' htmlFor='showPasswordBox'>Show Password</Label>
                </div>
                <Button type='submit' disabled={isloading}>
                    {
                        isloading ? (
                            <>
                            <Spinner size="sm"/>
                            <span className='pl-2'>Loading...</span>
                            </>
                        ):"Sign in"
                    }
                </Button>
            </form>
            <p className='pt-4'>
                Don't have an account? <a className='text-orange-500 hover:text-cyan-700' href='/signup'>Create Account</a>
            </p>

        </div>
        </div>

    </div>
    </>
  )
}
