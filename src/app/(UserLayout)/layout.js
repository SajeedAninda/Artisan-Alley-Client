import UserHeader from '@/components/UserHeader/UserHeader';
import { Toaster } from 'react-hot-toast';

const UserLayout = ({ children }) => {
    return (
        <div>
            <Toaster/>
            <UserHeader></UserHeader>
            {children}
        </div>
    );
};

export default UserLayout;