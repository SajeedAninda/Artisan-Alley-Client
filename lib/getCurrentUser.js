import useAxiosInstance from "@/Hooks/useAxiosInstance";

export default async function getCurrentUser(currentUserEmail) {
    let axiosInstance = useAxiosInstance();

    let result = await axiosInstance.get(`/userData/${currentUserEmail}`);
    return result.data;
}

