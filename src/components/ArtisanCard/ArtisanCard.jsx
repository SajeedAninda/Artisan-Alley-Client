"use client"

import useAxiosInstance from "@/Hooks/useAxiosInstance";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";

const ArtisanCard = () => {
    let axiosInstance = useAxiosInstance();

    const { data: artisans, isLoading: isArtisansLoading } = useQuery({
        queryKey: ['artisans'],
        queryFn: async () => {
            const response = await axiosInstance.get("/getAllArtisan");
            return response.data;
        }
    });

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

    return (
        <div>
            {/* CARD DIV */}
            {isArtisansLoading ? (
                <div className='h-screen flex justify-center items-center text-3xl font-bold text-[#442b20]'>Loading...</div>
            ) : (
                <div>
                    {artisans.length === 0 ? (
                        <div className='h-[90%] flex justify-center items-center py-12'>
                            <h2 className="text-3xl font-bold text-[#442b20]">No Artisans available</h2>
                        </div>
                    ) : (
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6 pb-12'>
                            {artisans.map(artisans => (
                                <div
                                    key={artisans._id}
                                    className="m-2 h-[400px] group px-10 py-5 bg-gradient-to-r from-[#442b20] to-[#926d5c] rounded-lg flex flex-col items-center justify-center gap-2 relative after:absolute after:h-full after:bg-[#eec6b3] z-20 shadow-lg after:-z-20 after:w-full after:inset-0 after:rounded-lg transition-all duration-300 hover:transition-all hover:duration-300 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden cursor-pointer after:-translate-y-full after:hover:translate-y-0 [&amp;_p]:delay-200 [&amp;_p]:transition-all"
                                >
                                    <Image src={artisans?.imageUrl} width={176} height={176} className='w-44 object-cover card1img aspect-square text-[#abd373] group-hover:bg-[#442b20] text-5xl rounded-full p-2 transition-all duration-300 group-hover:transition-all group-hover:duration-300 group-hover:-translate-y-2 mx-auto' alt="" />
                                    <p
                                        className="cardtxt font-bold text-2xl text-white tracking-wider group-hover:text-[#442b20]"
                                    >
                                        {artisans?.name}
                                    </p>
                                    <p className="blueberry font-semibold text-white text-lg text-center mt-3 group-hover:text-[#442b20]">
                                        {getExpertiseText(artisans?.expertise)}
                                    </p>
                                    <div className="ordernow flex flex-row justify-center items-center w-full mt-3">
                                        <Link href={`artisans/${artisans?._id}`}
                                            className="btun4 lg:inline-flex items-center gap-3 group-hover:bg-[#442b20] group-hover:text-white bg-white shadow-[10px_10px_150px_#ff9f0d] cursor-pointer py-2 px-4 text-sm font-semibold rounded-full butn"
                                        >
                                            See Details
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default ArtisanCard;