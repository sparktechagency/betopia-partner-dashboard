import { ConfigProvider, Layout, Menu, MenuProps } from 'antd';
import { TSidebarItem } from '../../utils/generateSidebarItems';
import sidebarItems from '../../utils/sidebarItems';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { LogOut, Settings } from 'lucide-react';
const { Sider } = Layout;

const Sidebar = () => {
    const location = useLocation();
    const [openKeys, setOpenKeys] = useState<string[]>([]);
    const [collapsed, setCollapsed] = useState(false);

    const handleOpenChange = (keys: string[]) => {
        setOpenKeys(keys);
    };

    const sidebarItemsGenerator = (items: TSidebarItem[]): MenuProps['items'] => {
        return items.map((item) => {
            if (item.children) {
                return {
                    key: item.key,
                    icon: item.icon,
                    label: item.label,
                    children: item.children.map((child) => ({
                        key: `/${child.path}`,
                        icon: child.icon,
                        label: <Link to={`/${child.path}`}>{child.label}</Link>,
                    })),
                };
            }

            return {
                key: `/${item.path}`,
                icon: item.icon,
                label: <Link to={`/${item.path}`}>{item.label}</Link>,
            };
        });
    };

    return (
        <ConfigProvider
            theme={{
                token: {
                    colorText: '#414446',
                },
                components: {
                    Menu: {
                        itemActiveBg: '#F69348',
                        itemSelectedColor: '#fff',
                        itemBorderRadius: '10px 10px 10px 10px' as any,
                        itemHeight: 45,
                        itemMarginBlock: 12,
                        itemSelectedBg: '#F69348',
                    },
                },
            }}
        >
            <Sider
                width={250}
                theme="light"
                breakpoint="lg"
                collapsedWidth="0"
                onCollapse={(collapsed) => {
                    setCollapsed(collapsed);
                }}
            >
                {/* logo of the website */}
                <Link to="/">
                    <div

                        className='flex flex-col gap-3 items-center justify-center p-5 pb-2'
                    >
                        <img src="/logo.png" alt="" className='h-14' />
                        <h1 className='text-xl font-bold'>Admin Dashboard</h1>
                    </div>
                </Link>

                <Menu
                    theme="light"
                    mode="inline"
                    selectedKeys={[location.pathname]}
                    openKeys={openKeys}
                    onOpenChange={handleOpenChange}
                    items={sidebarItemsGenerator(sidebarItems)}
                />

                {
                    !collapsed && <div className="p-4 w-full space-y-2 absolute bottom-0 right-0">
                        {/* Settings Button */}
                        <button
                            onClick={() => {
                                // your settings logic here
                                console.log("Settings clicked");
                            }}
                            className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 
                          hover:bg-gray-100 rounded-md transition"
                        >
                            <Settings size={20} />
                            <span>Settings</span>
                        </button>

                        {/* Logout Button */}
                        <button
                            onClick={() => {
                                // your logout logic here
                                console.log("Logout clicked");
                            }}
                            className="w-full flex items-center gap-3 px-4 py-3 text-white 
                          bg-red-500 hover:bg-red-600 rounded-md transition"
                        >
                            <LogOut size={20} />
                            <span>Log Out</span>
                        </button>
                    </div>
                }

            </Sider>
        </ConfigProvider>
    );
};

export default Sidebar;
