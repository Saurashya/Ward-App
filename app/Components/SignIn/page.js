"use client"
import React, { useState } from 'react'
import Link from 'next/link'

const Page = () => {
    const [formData, setFormData] = useState({});
    const [success, setSuccess] = useState(false);
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch('http://localhost:5000/api/auth/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        const data = await res.json();
        console.log(data);
        if (res.ok) {
            setSuccess(true);
            setislogged(true);
        }
    };
    return (
        <div className="container mx-auto max-w-md p-8 border border-gray-300 rounded-lg shadow-lg my-12">
            <h1 className='text-3xl text-center font-semibold my-7'>Sign In</h1>
            <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
                <input type="email" placeholder='Email' className='border py-3 px-4 rounded-lg' id='email' onChange={handleChange} />
                <input type="password" placeholder='Password' className='border py-3 px-4 rounded-lg' id='password' onChange={handleChange} />
                <button type='submit' className='bg-blue-500 text-white py-3 px-4 rounded-lg uppercase hover:opacity-90 disabled:opacity-80'>Sign In</button>
            </form>
            {success && (
                <p className="text-green-500 text-center mt-4">Login successful! Welcome back.</p>
            )}
            
            <div className="flex items-center justify-center mt-5">
                <p className="mr-2">Don't have an account?</p>
                <Link href='/Components/SignUp'><span className='text-blue-500'>Sign Up</span></Link>
            </div>
        </div>
    )
}