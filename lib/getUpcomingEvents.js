import useAxiosInstance from "@/Hooks/useAxiosInstance";

export default async function getUpcomingEvents() {
    let axiosInstance = useAxiosInstance();

    let result = await axiosInstance.get("/getUpcomingEvents");
    return result.data;
}
