import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Login from '../pages/authentication/Login';
import ErrorPage from '../pages/error/ErrorPage';
import ForgetPassword from '../pages/authentication/ForgetPassword';
import VerifyOtp from '../pages/authentication/VerifyOtp';
import NewPassword from '../pages/authentication/NewPassword';
import ClientList from '../pages/dashboard/client-list/ClientList';
import SupportSection from '../pages/dashboard/support/SupportSection';
import TraningMaterial from '../pages/dashboard/training-material/TraningMaterial';
import ServiceDeck from '../pages/dashboard/service-deck/ServiceDeck';


const router = createBrowserRouter([
    {
        path: '/',
        element:  <App />,
        errorElement: <ErrorPage />,
        children: [
            { path: '', element: <ClientList/> },
            {path:"support",element:<SupportSection/>},
            { path: 'training-material', element: <TraningMaterial/> },
            { path: 'service-deck', element: <ServiceDeck/> },
        ],
    },
    { path: '/login', element: <Login /> },
    { path: '/forget-password', element: <ForgetPassword /> },
    { path: '/verify-otp', element: <VerifyOtp /> },
    { path: '/new-password', element: <NewPassword /> },
   
]);

export default router;
