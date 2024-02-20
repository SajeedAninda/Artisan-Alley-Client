import ArtisanHeader from '@/components/ArtisanHeader/ArtisanHeader';
import { Toaster } from 'react-hot-toast';

const DefaultLayout = ({ children }) => {
    return (
        <div>
            <Toaster/>
            <ArtisanHeader></ArtisanHeader>
            {children}
        </div>
    );
};

export default DefaultLayout;