import ArtisanMyProducts from '@/components/ArtisanMyProducts/ArtisanMyProducts';
import ArtisanRoute from '@/components/Authentication/ArtisanRoute/ArtisanRoute';

const MyProducts = () => {
    return (
        <>
            <ArtisanRoute>
                <div className='space-y-2 py-8'>
                    <div>
                        <h1 className='text-[#442b20] text-4xl text-center font-bold'>My Products</h1>
                        <p className='text-[#442b20] text-center font-semibold w-[70%] mx-auto'>See the products that has been added by you, Delete or Update them.</p>
                    </div>
                    <ArtisanMyProducts></ArtisanMyProducts>
                </div>
            </ArtisanRoute>
        </>
    );
};

export default MyProducts;