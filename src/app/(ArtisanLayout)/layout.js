import ArtisanHeader from '@/components/ArtisanHeader/ArtisanHeader';
import ArtisanRoute from '@/components/Authentication/ArtisanRoute/ArtisanRoute';
import { Toaster } from 'react-hot-toast';

const ArtisanLayout = ({ children }) => {
    return (
        <ArtisanRoute>
            <div>
                <Toaster />
                <ArtisanHeader></ArtisanHeader>
                {children}
            </div>
        </ArtisanRoute>
    );
};

export default ArtisanLayout;