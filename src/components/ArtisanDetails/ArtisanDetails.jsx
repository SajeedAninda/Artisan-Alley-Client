"use client"
import useAxiosInstance from "@/Hooks/useAxiosInstance";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";

const ArtisanDetails = ({ params }) => {
    let axiosInstance = useAxiosInstance();

    const { data: artisanDetails, isLoading: isArtisanLoading } = useQuery({
        queryKey: ['artisanDetails', params],
        queryFn: async () => {
            const response = await axiosInstance.get(`/getArtisanDetails/${params.id}`);
            return response.data;
        }
    });

    let name, phone, email, imageUrl, date_of_birth, bio, expertise;

    if (artisanDetails) {
        ({ name, phone, email, imageUrl, date_of_birth, bio, expertise } = artisanDetails);
    }

    let getExpertiseText = (expertise) => {
        switch (expertise) {
            case "jewelryMaking":
                return "Jewelry Making";
            case "woodworking":
                return "Woodworking";
            case "pottery&ceramics":
                return "Pottery & Ceramics";
            case "textiles&fiber":
                return "Textiles & Fiber Arts";
            case "metalworking":
                return "Metalworking";
            case "painting&drawing":
                return "Painting & Drawing";
            case "leatherworking":
                return "Leatherworking";
            case "glassart":
                return "Glass Art";
            case "soap&candle":
                return "Soap & Candle Making";
            case "papercrafting":
                return "Paper Crafting";
            default:
                return "";
        }
    };

    function formatDateOfBirth(dateOfBirth) {
        const dateParts = dateOfBirth?.split("-");
        const year = dateParts?.[0];
        const month = new Date(dateOfBirth).toLocaleString('default', { month: 'long' });
        const day = parseInt(dateParts?.[2]);

        let daySuffix;
        switch (day) {
            case 1:
            case 21:
            case 31:
                daySuffix = "st";
                break;
            case 2:
            case 22:
                daySuffix = "nd";
                break;
            case 3:
            case 23:
                daySuffix = "rd";
                break;
            default:
                daySuffix = "th";
        }

        return `${day}${daySuffix} ${month}, ${year}`;
    }

    const { data: productsFromArtisan, isLoading: isProductLoading } = useQuery({
        queryKey: ['productsFromArtisan', email],
        queryFn: async () => {
            const response = await axiosInstance.get(`/getProductsFromArtisan/${email}`);
            return response.data;
        },
        enabled: !!email,
    });


    return (
        <div>
            <div className="flex justify-center items-center gap-6">
                <div className="border-4 border-[#442b20] rounded-md w-[35%]">
                    <Image className="w-full h-[400px] object-cover" width={500} height={400} src={imageUrl} alt="artisan image"></Image>
                </div>

                <div className="space-y-4 w-[65%]">
                    <h1 className="text-5xl font-bold text-[#442b20]">{name}</h1>
                    <h2 className="text-3xl font-bold text-[#442b20]">{getExpertiseText(expertise)}</h2>
                    <h2 className="text-xl font-semibold text-[#442b20]">{bio}</h2>
                    <h2 className="text-xl font-semibold text-[#442b20]"><span className="font-bold">Date of Birth: </span> {formatDateOfBirth(date_of_birth)}</h2>
                    <h2 className="text-2xl font-semibold text-[#442b20]"><span className="font-bold">Email: </span> {email}</h2>
                    <h2 className="text-2xl font-semibold text-[#442b20]"><span className="font-bold">Phone: </span> {phone}</h2>
                </div>

            </div>
            <div className='space-y-2 pt-16'>
                <h1 className='text-[#442b20] text-4xl text-center font-bold'>Products from {name}</h1>
                <p className='text-[#442b20] text-center font-semibold w-[70%] mx-auto'>
                    Discover the artistry of {name} and explore their products.
                </p>
            </div>

            <div>
            {isProductLoading ? (
                <div className='h-screen flex justify-center items-center text-3xl font-bold text-[#442b20]'>Loading...</div>
            ) : (
                <div>
                    {productsFromArtisan?.length === 0 ? (
                        <div className='h-[90%] flex justify-center items-center py-6'>
                            <h2 className="text-3xl font-bold text-[#442b20]">{name} Added no products yet</h2>
                        </div>
                    ) : (
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-6'>
                            {productsFromArtisan?.map(product => (
                                <div key={product.id} className="card">
                                    <div className="bg-white rounded-lg shadow-lg flex flex-col h-[500px]">
                                        <div className="relative">
                                            <Image width={400} height={400} className="rounded-t-lg w-full h-[200px] object-cover" src={product?.imageUrl} alt="" />
                                        </div>
                                        <div className="p-5 flex flex-col justify-between flex-grow bg-gradient-to-r from-[#442b20] to-[#926d5c] rounded-b-lg">
                                            <h5 className="mb-2 text-xl font-bold tracking-tight text-white">{product?.product_name}</h5>
                                            <p className="mb-3 font-normal text-white">
                                                {product?.product_short_description}
                                            </p>
                                            <p className="mb-3 font-normal text-white">
                                                From <span className='font-semibold'>{product?.artisan_name}</span>
                                            </p>
                                            <h5 className="mb-2 text-xl font-bold tracking-tight text-white flex items-center">{product?.product_price}$ / Piece</h5>
                                            <Link href={`/products/${product?._id}`}>
                                                <button className="lg:inline-block cursor-pointer font-semibold overflow-hidden relative z-100 border border-white group px-6 py-2 w-full">
                                                    <span className="relative z-10 text-white group-hover:text-[#442b20] text-lg duration-500">View Details</span>
                                                    <span className="absolute w-full h-full bg-white -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
                                                    <span className="absolute w-full h-full bg-white -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
        </div>
    );
};

export default ArtisanDetails;