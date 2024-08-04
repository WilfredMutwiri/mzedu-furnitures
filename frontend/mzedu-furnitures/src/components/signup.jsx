import React from 'react'
import signInImg from '../images/signup-removebg-preview.png'
import { useState,useEffect } from 'react'
import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react'
import { SERVER_URL } from '../constants/serverURL';
import {useNavigate} from 'react-router-dom'
export default function Signup() {
    const Navigate=useNavigate()
    const [welcomeTxt,setWelcomeTxt]=useState("Welcome Back!");
    const [isloading,setIsLoading]=useState(false);
    const [formData,setFormData]=useState([]);
    const [showpassword,setShowpassword]=useState(false);
    const [errorMessage,setErrorMessage]=useState("");
    const [successMessage,setSuccessMessage]=useState(false)

    const handleChange=(e)=>{
        setFormData({...formData,[e.target.id]:e.target.value.trim()})
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        setIsLoading(true);
        setErrorMessage("");
        setSuccessMessage(false);
        if(!formData.userName ||!formData.email || !formData.password){
            return setErrorMessage("All fields must be filled")
        }
        try {
            const res=await fetch(SERVER_URL+'/api/user/signup',{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(formData)
            });
            const data=await res.json();
            if(!res.ok){
                setErrorMessage(data.message);
                setIsLoading(true);
                return;
            }
            setIsLoading(false);
            setSuccessMessage(true);
            setSuccessMessage("Account Created Successfully!")
            Navigate('/signin')
        } catch (error) {
            setErrorMessage(error.message);
            setIsLoading(false);
            setSuccessMessage(false);
        }
    }
  return (
    <>
    <div className='w-full '>
        <div className='w-11/12 md:w-10/12 block md:flex gap-6 pt-12 mx-auto'>
        <div className='flex-1 bg-gray-100 p-3 rounded-md'>
            <h2 className='font-semibold text-2xl text-orange-500 text-center'>Welcome to Mzedu furniture & Deco</h2>
            <h3 className='font-semibold text-2xl text-pink-800 text-center pt-3'>Let's Get You started</h3>
            <img src={signInImg} className='w-10/12' alt='signin illustration'/>
        </div>
        <div className='flex-1 mt-10 md:mt-0'>
            <h2 className='font-semibold text-xl text-cyan-700'>Create Your Account</h2>
            <form className='pt-4 flex flex-col gap-3' onSubmit={handleSubmit}>
            <Label value='userName'/>
                <TextInput 
                placeholder='Your Username'
                onChange={handleChange}
                id='userName'
                required
                />
                <Label value='Email Address'/>
                <TextInput 
                placeholder='Your Email Address'
                onChange={handleChange}
                id='email'
                required
                />
                <Label value='Password'/>
                <TextInput
                placeholder='Your Password'
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
                        ):"Register"
                    }
                </Button>
            </form>
            <p className='pt-4 text-sm'>
                Already have an account? <a className='text-orange-500 hover:text-cyan-700' href='/signin'>Login</a>
            </p>
            {
                errorMessage && 
                <Alert color="failure" className='mt-5'>
                    {errorMessage}
                </Alert>
            }
            {
                successMessage &&
                <Alert color="success" className='mt-5'>
                    {successMessage}
                </Alert>
            }
        </div>
        </div>

    </div>
    </>
  )
}
