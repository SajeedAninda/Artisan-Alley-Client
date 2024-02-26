"use client"
import useAxiosInstance from "@/Hooks/useAxiosInstance";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

const ArtisanDetails = ({ params }) => {
    let axiosInstance = useAxiosInstance();

    const { data: artisanDetails, isLoading: isArtisanLoading } = useQuery({
        queryKey: ['artisanDetails'],
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

    return (
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
    );
};

export default ArtisanDetails;