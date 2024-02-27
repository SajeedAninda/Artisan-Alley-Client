"use client"
import useAuth from "@/Hooks/useAuth";
import useCurrentUserData from "@/Hooks/useCurrentUserData";
import { useRouter } from "next/navigation";
import { ColorRing } from "react-loader-spinner";

const UserRoute = ({ children }) => {
    let { userData, isUserLoading } = useCurrentUserData();
    let { loggedInUser, loading } = useAuth();
    let router = useRouter();


    if (loading || isUserLoading) {
        return <div className='flex justify-center min-h-screen items-center'>
            <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={['#ed4747', '#0e2b45', '#ed4747', '#0e2b45', '#ed4747']}
            />
        </div>
    }
    if (userData?.role === "user" && loggedInUser) {
        return children;
    }

    return router.push("/login");
};

export default UserRoute;