import "./contact.css"
import { FaPeopleCarry } from "react-icons/fa";
import { IoPeopleSharp } from "react-icons/io5";
import { GiColumnVase } from "react-icons/gi";
import { FaPeopleGroup } from "react-icons/fa6";
import ContactForm from './ContactForm';


const Contact = () => {
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
                <ContactForm></ContactForm>
            </div>
        </div>
    );
};

export default Contact;