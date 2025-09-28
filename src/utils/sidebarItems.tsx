import { LiaThListSolid } from 'react-icons/lia';
import { TSidebarItem } from './generateSidebarItems';
// import {  AiOutlineDollarCircle } from 'react-icons/ai';
import { PiUserListLight } from 'react-icons/pi';
import { RiContactsBook3Line } from 'react-icons/ri';
import { BiSolidUserDetail } from 'react-icons/bi';


const sidebarItems: TSidebarItem[] = [
    {
        key: 'client-list',
        label: 'Client List',
        path: '',
        icon: <PiUserListLight size={24} />,
    },
    {
        key: 'service-deck',
        label: 'Service Deck',
        path: 'service-deck',
        icon: <BiSolidUserDetail size={24} />,
    },

    {
        key: 'training-material',
        label: 'Training Material',
        path: 'training-material',
        icon: <LiaThListSolid size={24} />,
    },

    {
        key: 'support',
        label: 'Support',
        path: 'support',
        icon: <RiContactsBook3Line size={24} />,
    },

];

export default sidebarItems;
