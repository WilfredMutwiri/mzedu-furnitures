import React from 'react'
import signInImg from '../images/undraw_login_re_4vu2.svg'
import { useState,useEffect } from 'react'
import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react'
import {SERVER_URL} from '../constants/serverURL'
import {useNavigate} from 'react-router-dom'
export default function Signin() {
    const [welcomeTxt,setWelcomeTxt]=useState("Welcome Back!");
    const [isloading,setIsLoading]=useState(false);
    const [formData,setFormData]=useState([]);
    const [showpassword,setShowpassword]=useState(false);
    const [loginSuccess,setLoginSuccess]=useState(false);
    const [errorMessage,setErrorMessage]=useState("");
    const Navigate=useNavigate()
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
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        setIsLoading(true);
        setLoginSuccess(false);
        setErrorMessage("");

        if(!formData.email ||
            !formData.password ||
            formData.email==="" ||
            formData.password===""
        ){
            return setErrorMessage("All fields must be filled")
        }
        try {
            setIsLoading(true);
            setErrorMessage(false);
            setLoginSuccess(false);

            const res=await fetch(SERVER_URL+'/api/user/signin',{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(formData)
            });
            const data=await res.json();
            if(!res.ok){
                setErrorMessage(data.message || "Login Failed");
                setIsLoading(false);
                setLoginSuccess(false);
                return
            }
            setLoginSuccess(true);
            setLoginSuccess("Login Successfull!")
            Navigate('/dashboard')
        } catch (error) {
            setErrorMessage(error.message);
            setLoginSuccess(false);
            return;
        }

    }
  return (
    <>
    <div className='w-full '>
        <div className='w-11/12 md:w-10/12 block md:flex gap-6 pt-12 pb-5 mx-auto'>
        <div className='flex-1'>
        <h2 className='font-semibold text-xl text-orange-500 text-center pb-5'>{welcomeTxt}</h2>
            <img src={signInImg} alt='signin illustration'/>
        </div>
        <div className='flex-1 mt-10 md:mt-0'>
            <h3 className='font-semibold text-xl text-cyan-700'>Login to your Account</h3>
            <form className='pt-4 flex flex-col gap-4' onSubmit={handleSubmit}>
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
                        ):"Sign in"
                    }
                </Button>
            </form>
            <p className='pt-4 text-sm'>
                Don't have an account? <a className='text-orange-500 hover:text-cyan-700' href='/signup'>Create Account</a>
            </p>
            {
                errorMessage &&
                <Alert className='mt-5' color="failure">
                    {errorMessage}
                </Alert>
            }
            {
                loginSuccess &&
                <Alert className='mt-5' color="success">
                    {loginSuccess}
                </Alert>
            }
        </div>
        </div>

    </div>
    </>
  )
}
