"use client"
import Swal from 'sweetalert2';

const ContactForm = () => {
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
    );
};

export default ContactForm;