import useAxiosInstance from "@/Hooks/useAxiosInstance";

export default async function getPreviousEvents() {
    let axiosInstance = useAxiosInstance();

    let result = await axiosInstance.get("/getPreviousEvents");
    return result.data;
}
