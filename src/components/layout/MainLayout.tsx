import React from 'react';

import { Layout, theme } from 'antd';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import DashboardHeader from './DashboardHeader';

const { Content } = Layout;

const MainLayout: React.FC = () => {
    const {
        token: { borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout
            style={{
                height: '100vh',
            }}
        >
            <Sidebar />
            <Layout>
                <Content style={{ margin: 30 }}  >
                    <DashboardHeader />
                    <div
                        className="p-0 min-h-[50vh] w-full bg-[#F9F0EC] h-[calc(100vh-133px)] rounded-md overflow-y-scroll"
                        style={{ borderRadius: borderRadiusLG }}
                    >
                        <Outlet />
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default MainLayout;
