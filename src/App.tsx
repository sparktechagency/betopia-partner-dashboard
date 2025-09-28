import MainLayout from './components/layout/MainLayout';
import { ConfigProvider } from 'antd';
function App() {
    return (
        <>
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: '#F79549',
                    },
                    components: {
                        Input: {
                            borderRadius: 5,
                        },
                    },
                }}
            >
                <MainLayout />
            </ConfigProvider>
        </>
    );
}

export default App;
