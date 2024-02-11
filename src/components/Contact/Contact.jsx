"use client"
import React from 'react';
import "./contact.css"
import { FaPeopleCarry } from "react-icons/fa";
import { IoPeopleSharp } from "react-icons/io5";
import { GiColumnVase } from "react-icons/gi";
import { FaPeopleGroup } from "react-icons/fa6";
import Swal from 'sweetalert2';


const Contact = () => {
    let handleContact = (e) => {
        e.preventDefault();
        let emailInput = e.target.email;
        let email = emailInput.value;
        if (email.length === 0 || !email.includes('@') || !email.includes('.')) {
            Swal.fire({
                icon: 'error',
                title: 'Invalid email',
                text: 'Please enter a valid email address',
            });
            e.target.email.value = "";
        } else {
            Swal.fire({
                icon: 'success',
                title: 'Good job!',
                text: 'Thank you for sending us a message',
            });
        }
    }

    return (
        <div className='py-12 my-12 flex flex-col lg:flex-row gap-6 lg:gap-0 justify-between items-center contactBg'>
            <div className="boxDiv grid grid-cols-2 flex-1">
                <div className='flex flex-col justify-center items-center space-y-3 hover:bg-white rounded-xl cursor-pointer group p-6 transition-all text-center'>
                    <FaPeopleCarry className='text-white font-bold text-7xl group-hover:text-[#442b20]' />
                    <h1 className='text-white font-bold text-5xl italic group-hover:text-[#442b20]'>87+</h1>
                    <h1 className='text-white font-bold text-4xl italic group-hover:text-[#442b20]'>Artisans</h1>
                </div>

                <div className='flex flex-col justify-center items-center space-y-3 hover:bg-white rounded-xl cursor-pointer group p-6 transition-all text-center'>
                    <IoPeopleSharp className='text-white font-bold text-7xl group-hover:text-[#442b20]' />
                    <h1 className='text-white font-bold text-5xl italic group-hover:text-[#442b20]'>230+</h1>
                    <h1 className='text-white font-bold text-4xl italic group-hover:text-[#442b20]'>Regular Users</h1>
                </div>

                <div className='flex flex-col justify-center items-center space-y-3 hover:bg-white rounded-xl cursor-pointer group p-6 transition-all text-center'>
                    <GiColumnVase className='text-white font-bold text-7xl group-hover:text-[#442b20]' />
                    <h1 className='text-white font-bold text-5xl italic group-hover:text-[#442b20]'>2500+</h1>
                    <h1 className='text-white font-bold text-4xl italic group-hover:text-[#442b20]'>Items</h1>
                </div>

                <div className='flex flex-col justify-center items-center space-y-3 hover:bg-white rounded-xl cursor-pointer group p-6 transition-all text-center'>
                    <FaPeopleGroup className='text-white font-bold text-7xl group-hover:text-[#442b20]' />
                    <h1 className='text-white font-bold text-5xl italic group-hover:text-[#442b20]'>1250+</h1>
                    <h1 className='text-white font-bold text-4xl italic group-hover:text-[#442b20]'>Satisfied Clients</h1>
                </div>
            </div>


            <div className="formDiv flex-1">
                <h1 className='text-center font-bold text-4xl text-white'>Send Us a Message</h1>
                <p className='text-center font-bold text-xl text-white'>If you have any queries, Don't hesitate to contact us</p>
                <div className="h-fit my-8 p-8 mx-6 rounded-md border-2 border-white flex-1">
                    <form onSubmit={handleContact}>
                        <div className='flex flex-col md:flex-row w-full gap-6'>
                            <div className='w-full'>
                                <label className='text-2xl text-white font-bold' htmlFor="name">Name</label> <br />
                                <input className='py-3 px-3 mt-2 w-full border-2 border-white rounded-md' name='name' type="text" placeholder='Please Enter Your Name' required />
                            </div>
                            <div className='w-full'>
                                <label className='text-2xl text-white font-bold' htmlFor="email">Email</label> <br />
                                <input className='py-3 px-3 mt-2 w-full border-2 border-white rounded-md' name='email' type="email" placeholder='Please Enter Your Email' required />
                            </div>
                        </div>
                        <div className='w-full mt-4'>
                            <label className='text-2xl text-white font-bold' htmlFor="subject">Subject</label> <br />
                            <input className='py-3 px-3 mt-2 w-full border-2 border-white rounded-md' name='subject' type="text" placeholder='Please Enter Your Subject' required />
                        </div>

                        <div className='w-full mt-4'>
                            <label className='text-2xl text-white font-bold' htmlFor="message">Message</label> <br />
                            <textarea rows="5" className='py-3 px-3 mt-2 w-full border-2 border-white rounded-md' name='message' type="text" placeholder='Please Enter The Message That Your Want To Send' required />
                        </div>

                        <button className="lg:inline-block cursor-pointer font-semibold overflow-hidden relative z-100 border border-white group px-6 py-3 w-full rounded-md mt-3">
                            <span className="relative z-10 text-white group-hover:text-[#926d5c] text-lg duration-500">Send a Message</span>
                            <span className="absolute w-full h-full bg-white -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
                            <span className="absolute w-full h-full bg-white -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;