import React from 'react';
import anna from "@/assets/artisans/anna.jpg";
import carlos from "@/assets/artisans/carlos.jpg";
import elena from "@/assets/artisans/elena.jpg";
import malik from "@/assets/artisans/malik.jpg";
import rajesh from "@/assets/artisans/rajesh.jpg";
import sophie from "@/assets/artisans/sophie.jpg";
import Image from 'next/image';

const LocalArtisans = () => {
    return (
        <div className='w-[95%] mx-auto'>
            <div className='text-center space-y-6 pt-10'>
                <h1 className='text-[#442b20] font-bold text-4xl  md:text-5xl'>Explore Local <span className='text-[#926d5c] underline hover:text-[#442b20] cursor-pointer'>Artisans</span></h1>
                <h3 className='text-[#442b20] font-semibold text-xl mt-3 w-[80%] mx-auto'>Each card unveils the extraordinary talents of artisans in your community. Discover a visual tapestry of craftsmanship, as these curated cards showcase the diverse skills and unique stories behind every creation. </h3>
            </div>


            {/* // CARD DIV  */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-12'>
                <div
                    className="m-2 h-[400px] group px-10 py-5 bg-gradient-to-r from-[#442b20] to-[#926d5c] rounded-lg flex flex-col items-center justify-center gap-2 relative after:absolute after:h-full after:bg-[#eec6b3] z-20 shadow-lg after:-z-20 after:w-full after:inset-0 after:rounded-lg transition-all duration-300 hover:transition-all hover:duration-300 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden cursor-pointer after:-translate-y-full after:hover:translate-y-0 [&amp;_p]:delay-200 [&amp;_p]:transition-all"
                >
                    <Image src={anna} width={176} height={176} className='w-44 object-cover card1img aspect-square text-[#abd373] group-hover:bg-[#442b20] text-5xl rounded-full p-2 transition-all duration-300 group-hover:transition-all group-hover:duration-300 group-hover:-translate-y-2 mx-auto' alt="" />
                    <p
                        className="cardtxt font-bold text-2xl text-white tracking-wider group-hover:text-[#442b20]"
                    >
                        Anna Yoshida
                    </p>
                    <p className="blueberry font-semibold text-white text-lg text-center mt-3 group-hover:text-[#442b20]">
                        Ceramic Sculptor
                    </p>
                    <div className="ordernow flex flex-row justify-between items-center w-full mt-3">
                        <div>
                            <p
                                className="ordernow-text text-white font-semibold group-hover:text-[#442b20]"
                            >
                                annayo@gmail.com
                            </p>
                            <p
                                className="ordernow-text text-white font-semibold group-hover:text-[#442b20]"
                            >
                                +8801784262899
                            </p>
                        </div>
                        <p
                            className="btun4 lg:inline-flex items-center gap-3 group-hover:bg-[#442b20] group-hover:text-white bg-white shadow-[10px_10px_150px_#ff9f0d] cursor-pointer py-2 px-4 text-sm font-semibold rounded-full butn"
                        >
                            See Details
                        </p>
                    </div>
                </div>

                <div
                    className="m-2 h-[400px] group px-10 py-5 bg-gradient-to-r from-[#442b20] to-[#926d5c] rounded-lg flex flex-col items-center justify-center gap-2 relative after:absolute after:h-full after:bg-[#eec6b3] z-20 shadow-lg after:-z-20 after:w-full after:inset-0 after:rounded-lg transition-all duration-300 hover:transition-all hover:duration-300 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden cursor-pointer after:-translate-y-full after:hover:translate-y-0 [&amp;_p]:delay-200 [&amp;_p]:transition-all"
                >
                    <Image src={rajesh} width={176} height={176} className='w-44 object-cover card1img aspect-square text-[#abd373] group-hover:bg-[#442b20] text-5xl rounded-full p-2 transition-all duration-300 group-hover:transition-all group-hover:duration-300 group-hover:-translate-y-2 mx-auto' alt="" />
                    <p
                        className="cardtxt font-bold text-2xl text-white tracking-wider group-hover:text-[#442b20]"
                    >
                        Rajesh Kapoor
                    </p>
                    <p className="blueberry font-semibold text-white text-lg text-center mt-3 group-hover:text-[#442b20]">
                        Traditional Potter
                    </p>
                    <div className="ordernow flex flex-row justify-between items-center w-full mt-3">
                        <div>
                            <p
                                className="ordernow-text text-white font-semibold group-hover:text-[#442b20]"
                            >
                                raj@outlook.com
                            </p>
                            <p
                                className="ordernow-text text-white font-semibold group-hover:text-[#442b20]"
                            >
                                +8801837200012
                            </p>
                        </div>
                        <p
                            className="btun4 lg:inline-flex items-center gap-3 group-hover:bg-[#442b20] group-hover:text-white bg-white shadow-[10px_10px_150px_#ff9f0d] cursor-pointer py-2 px-4 text-sm font-semibold rounded-full butn"
                        >
                            See Details
                        </p>
                    </div>
                </div>

                <div
                    className="m-2 h-[400px] group px-10 py-5 bg-gradient-to-r from-[#442b20] to-[#926d5c] rounded-lg flex flex-col items-center justify-center gap-2 relative after:absolute after:h-full after:bg-[#eec6b3] z-20 shadow-lg after:-z-20 after:w-full after:inset-0 after:rounded-lg transition-all duration-300 hover:transition-all hover:duration-300 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden cursor-pointer after:-translate-y-full after:hover:translate-y-0 [&amp;_p]:delay-200 [&amp;_p]:transition-all"
                >
                    <Image src={elena} width={176} height={176} className='w-44 object-cover card1img aspect-square text-[#abd373] group-hover:bg-[#442b20] text-5xl rounded-full p-2 transition-all duration-300 group-hover:transition-all group-hover:duration-300 group-hover:-translate-y-2 mx-auto' alt="" />
                    <p
                        className="cardtxt font-bold text-2xl text-white tracking-wider group-hover:text-[#442b20]"
                    >
                        Elena Rodriguez
                    </p>
                    <p className="blueberry font-semibold text-white text-lg text-center mt-3 group-hover:text-[#442b20]">
                        Handcraft Jeweller
                    </p>
                    <div className="ordernow flex flex-row justify-between items-center w-full mt-3">
                        <div>
                            <p
                                className="ordernow-text text-white font-semibold group-hover:text-[#442b20]"
                            >
                                elenarodri@yahoo.com
                            </p>
                            <p
                                className="ordernow-text text-white font-semibold group-hover:text-[#442b20]"
                            >
                                +8801398280011
                            </p>
                        </div>
                        <p
                            className="btun4 lg:inline-flex items-center gap-3 group-hover:bg-[#442b20] group-hover:text-white bg-white shadow-[10px_10px_150px_#ff9f0d] cursor-pointer py-2 px-4 text-sm font-semibold rounded-full butn"
                        >
                            See Details
                        </p>
                    </div>
                </div>

                <div
                    className="m-2 h-[400px] group px-10 py-5 bg-gradient-to-r from-[#442b20] to-[#926d5c] rounded-lg flex flex-col items-center justify-center gap-2 relative after:absolute after:h-full after:bg-[#eec6b3] z-20 shadow-lg after:-z-20 after:w-full after:inset-0 after:rounded-lg transition-all duration-300 hover:transition-all hover:duration-300 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden cursor-pointer after:-translate-y-full after:hover:translate-y-0 [&amp;_p]:delay-200 [&amp;_p]:transition-all"
                >
                    <Image src={carlos} width={176} height={176} className='w-44 object-cover card1img aspect-square text-[#abd373] group-hover:bg-[#442b20] text-5xl rounded-full p-2 transition-all duration-300 group-hover:transition-all group-hover:duration-300 group-hover:-translate-y-2 mx-auto' alt="" />
                    <p
                        className="cardtxt font-bold text-2xl text-white tracking-wider group-hover:text-[#442b20]"
                    >
                        Carlos Mendez
                    </p>
                    <p className="blueberry font-semibold text-white text-lg text-center mt-3 group-hover:text-[#442b20]">
                        Leather Crafter
                    </p>
                    <div className="ordernow flex flex-row justify-between items-center w-full mt-3">
                        <div>
                            <p
                                className="ordernow-text text-white font-semibold group-hover:text-[#442b20]"
                            >
                                car29mendez@gmail.com
                            </p>
                            <p
                                className="ordernow-text text-white font-semibold group-hover:text-[#442b20]"
                            >
                                +88017346290172
                            </p>
                        </div>
                        <p
                            className="btun4 lg:inline-flex items-center gap-3 group-hover:bg-[#442b20] group-hover:text-white bg-white shadow-[10px_10px_150px_#ff9f0d] cursor-pointer py-2 px-4 text-sm font-semibold rounded-full butn"
                        >
                            See Details
                        </p>
                    </div>
                </div>

                <div
                    className="m-2 h-[400px] group px-10 py-5 bg-gradient-to-r from-[#442b20] to-[#926d5c] rounded-lg flex flex-col items-center justify-center gap-2 relative after:absolute after:h-full after:bg-[#eec6b3] z-20 shadow-lg after:-z-20 after:w-full after:inset-0 after:rounded-lg transition-all duration-300 hover:transition-all hover:duration-300 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden cursor-pointer after:-translate-y-full after:hover:translate-y-0 [&amp;_p]:delay-200 [&amp;_p]:transition-all"
                >
                    <Image src={sophie} width={176} height={176} className='w-44 object-cover card1img aspect-square text-[#abd373] group-hover:bg-[#442b20] text-5xl rounded-full p-2 transition-all duration-300 group-hover:transition-all group-hover:duration-300 group-hover:-translate-y-2 mx-auto' alt="" />
                    <p
                        className="cardtxt font-bold text-2xl text-white tracking-wider group-hover:text-[#442b20]"
                    >
                        Sophie Laurent
                    </p>
                    <p className="blueberry font-semibold text-white text-lg text-center mt-3 group-hover:text-[#442b20]">
                        Oil Painter
                    </p>
                    <div className="ordernow flex flex-row justify-between items-center w-full mt-3">
                        <div>
                            <p
                                className="ordernow-text text-white font-semibold group-hover:text-[#442b20]"
                            >
                                sophiel@hotmail.com
                            </p>
                            <p
                                className="ordernow-text text-white font-semibold group-hover:text-[#442b20]"
                            >
                                +8801982517711
                            </p>
                        </div>
                        <p
                            className="btun4 lg:inline-flex items-center gap-3 group-hover:bg-[#442b20] group-hover:text-white bg-white shadow-[10px_10px_150px_#ff9f0d] cursor-pointer py-2 px-4 text-sm font-semibold rounded-full butn"
                        >
                            See Details
                        </p>
                    </div>
                </div>

                <div
                    className="m-2 h-[400px] group px-10 py-5 bg-gradient-to-r from-[#442b20] to-[#926d5c] rounded-lg flex flex-col items-center justify-center gap-2 relative after:absolute after:h-full after:bg-[#eec6b3] z-20 shadow-lg after:-z-20 after:w-full after:inset-0 after:rounded-lg transition-all duration-300 hover:transition-all hover:duration-300 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden cursor-pointer after:-translate-y-full after:hover:translate-y-0 [&amp;_p]:delay-200 [&amp;_p]:transition-all"
                >
                    <Image src={malik} width={176} height={176} className='w-44 object-cover card1img aspect-square text-[#abd373] group-hover:bg-[#442b20] text-5xl rounded-full p-2 transition-all duration-300 group-hover:transition-all group-hover:duration-300 group-hover:-translate-y-2 mx-auto' alt="" />
                    <p
                        className="cardtxt font-bold text-2xl text-white tracking-wider group-hover:text-[#442b20]"
                    >
                        Malik Ansari
                    </p>
                    <p className="blueberry font-semibold text-white text-lg text-center mt-3 group-hover:text-[#442b20]">
                        Wood Carver
                    </p>
                    <div className="ordernow flex flex-row justify-between items-center w-full mt-3">
                        <div>
                            <p
                                className="ordernow-text text-white font-semibold group-hover:text-[#442b20]"
                            >
                                malikans@yahoo.com
                            </p>
                            <p
                                className="ordernow-text text-white font-semibold group-hover:text-[#442b20]"
                            >
                                +8801677280153
                            </p>
                        </div>
                        <p
                            className="btun4 lg:inline-flex items-center gap-3 group-hover:bg-[#442b20] group-hover:text-white bg-white shadow-[10px_10px_150px_#ff9f0d] cursor-pointer py-2 px-4 text-sm font-semibold rounded-full butn"
                        >
                            See Details
                        </p>
                    </div>
                </div>
            </div>

        </div>


    );
};

export default LocalArtisans;