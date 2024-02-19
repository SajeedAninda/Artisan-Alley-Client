import PeopleSaysSlider from './PeopleSaysSlider';

const PeopleSays = () => {
    return (
        <div className='w-[95%] mx-auto py-12'>
            <div className='text-center space-y-6 pt-10'>
                <h1 className='text-[#442b20] font-bold text-4xl  md:text-5xl'>What Peoples Says About Us</h1>
                <h3 className='text-[#442b20] font-semibold text-xl mt-3 w-[80%] mx-auto'>Each testimonial is a testament to the thriving community we've built, where creativity flourishes, connections bloom, and every voice contributes to the rich tapestry of artisanal appreciation. Join us in celebrating the stories that shape Artisan Alley</h3>
            </div>

            <PeopleSaysSlider></PeopleSaysSlider>
        </div>
    );
};

export default PeopleSays;