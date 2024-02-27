"use client"
import useAuth from "@/Hooks/useAuth";
import { useRouter } from "next/navigation";
import { ColorRing } from "react-loader-spinner";

const PrivateRoute = ({children}) => {
    let { loggedInUser, loading } = useAuth();
    const router = useRouter();

    if (loading) {
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

    if (loggedInUser) {
        return children;
    }

    return router.push("/login");
};

export default PrivateRoute;