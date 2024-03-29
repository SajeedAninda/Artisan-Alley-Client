const WorkingProcess = () => {
    return (
        <div className='w-[95%] mx-auto'>
            <div className="bg-white text-[#442b20]">
                <div className="container mx-auto flex flex-col items-start lg:flex-row my-4 md:my-12">
                    <div className="flex flex-col w-full sticky md:top-28 lg:w-1/3 mt-2 md:mt-12 px-8">
                        <p className="text-3xl md:text-5xl leading-normal md:leading-relaxed mb-2 font-bold">Working Process of Artisan Alley</p>
                        <p className="text-sm md:text-base text-[#442b20] mb-4">
                            In Artisan Alley, we've sculpted a space where creativity flourishes, connections bloom, and every interaction adds depth to the narrative of local craftsmanship. This serves as a comprehensive guide to optimize the Artisan Alley experience for both regular users and artisans, ensuring they derive maximum benefit from the platform.
                        </p>
                    </div>


                    <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
                        <div className="container mx-auto w-full h-full">
                            <div className="relative wrap overflow-hidden p-10 h-full">
                                <div className="border-2-2 hidden lg:inline-block border-[#442b20] absolute h-full border"
                                    style={{ right: '50%', border: '2px solid #442b20', borderRadius: '1%' }}></div>
                                <div className="border-2-2 hidden lg:inline-block border-[#442b20] absolute h-full border"
                                    style={{ left: '50%', border: '2px solid #442b20', borderRadius: '1%' }}></div>


                                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                                    <div className="order-1 w-full md:w-5/12"></div>
                                    <div className="order-1 w-full md:w-5/12 px-8 py-4 text-right bg-gradient-to-r from-[#442b20] to-[#926d5c] rounded-xl text-white hover:shadow-2xl">
                                        <h4 className="mb-3 font-bold text-lg md:text-2xl">Registration</h4>
                                        <p className="text-sm md:text-base leading-snug text-opacity-100">
                                            You have the option to sign up either as a regular user or an artisan, initiating your venture into Artisan Alley
                                        </p>
                                    </div>
                                </div>


                                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                                    <div className="order-1 w-full md:w-5/12"></div>
                                    <div className="order-1  w-full md:w-5/12 px-8 py-4 text-left bg-gradient-to-r from-[#442b20] to-[#926d5c] rounded-xl text-white hover:shadow-2xl">
                                        <h4 className="mb-3 font-bold text-lg md:text-2xl">Post Your Craft</h4>
                                        <p className="text-sm md:text-base leading-snug text-opacity-100">
                                            As an artisan, share your crafted masterpieces by providing comprehensive details and captivating images, allowing users to appreciate your creations firsthand.
                                        </p>
                                    </div>
                                </div>


                                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                                    <div className="order-1 w-full md:w-5/12"></div>
                                    <div className="order-1 w-full md:w-5/12 px-8 py-4 text-right bg-gradient-to-r from-[#442b20] to-[#926d5c] rounded-xl text-white hover:shadow-2xl">
                                        <h4 className="mb-3 font-bold text-lg md:text-2xl">Navigate</h4>
                                        <p className="text-sm md:text-base leading-snug text-opacity-100">
                                            If you're a user, explore the website, discover local artisans and their crafts, and use the filtering options to tailor your search based on your preferences.
                                        </p>
                                    </div>
                                </div>



                                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                                    <div className="order-1 w-full md:w-5/12"></div>

                                    <div className="order-1  w-full md:w-5/12 px-8 py-4 bg-gradient-to-r from-[#442b20] to-[#926d5c] rounded-xl text-white hover:shadow-2xl">
                                        <h4 className="mb-3 font-bold  text-lg md:text-2xl text-left">Connect</h4>
                                        <p className="text-sm md:text-base leading-snug text-opacity-100">
                                            If you find a craft you adore, you have the choice to make a purchase directly on the platform or connect with the artisan to learn more about the creation.
                                        </p>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkingProcess;