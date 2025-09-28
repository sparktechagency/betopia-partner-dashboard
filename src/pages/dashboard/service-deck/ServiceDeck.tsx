import { useState } from 'react';
import {
    Table,
    Button,
    Space,
    Typography,
    Popconfirm,
    message
} from 'antd';
import {
    PlusOutlined,
    EditOutlined,
    DeleteOutlined
} from '@ant-design/icons';
import TrainingModal from './ServiceDeckModel';

const { Title } = Typography;

export default function ServiceDeck() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        file: null,
        image:null,
        fileSize:'',
        category: 'beginner',
        status: 'active'
    });

    const [data, setData] = useState([
        {
            key: '1',
            serialNumber: '001',
            title: 'Betopia Limited-Onboarding Guide',
            type: 'PDF',
            uploadDate: '20/09/25'
        },
        {
            key: '2',
            serialNumber: '002',
            title: 'Betopia Limited - Sales Training Video',
            type: 'Video',
            uploadDate: '20/09/25'
        },
        {
            key: '3',
            serialNumber: '003',
            title: 'Betopia Limited- Product Knowledge Module',
            type: 'PPT',
            uploadDate: '20/09/25'
        },
        {
            key: '4',
            serialNumber: '004',
            title: 'Betopia Limited- Marketing Toolkit Form',
            type: 'ZIP File',
            uploadDate: '20/09/25'
        }
    ]);

    const columns = [
        {
            title: 'Serial Number',
            dataIndex: 'serialNumber',
            key: 'serialNumber',
            width: 120,
        },
        {
            title: 'Service Deck Title',
            dataIndex: 'title',
            key: 'title',
            width: 400,
        },
        {
            title: 'Upload Date',
            dataIndex: 'uploadDate',
            key: 'uploadDate',
            width: 200,
        },
        {
            title: 'Actions',
            key: 'actions',
            width: 180,
            render: (_: any, record: any) => (
                <Space size="small">
                    <Button
                        type="text"
                        icon={<EditOutlined />}
                        style={{ color: '#52c41a' }}
                        onClick={() => handleEdit(record)}
                    >
                        Edit
                    </Button>
                    <Popconfirm
                        title="Are you sure to delete this item?"
                        onConfirm={() => handleDelete(record.key)}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button
                            type="text"
                            icon={<DeleteOutlined />}
                            style={{ color: '#ff4d4f' }}
                        >
                            Delete
                        </Button>
                    </Popconfirm>
                </Space>
            ),
        },
    ];

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        setFormData({
            title: '',
            description: '',
            file: null,
            image:null,
            fileSize:'',
            category: 'beginner',
            status: 'active'
        });
    };

    const handleSubmit = () => {
        if (!formData.title || !formData.description || !formData.file) {
            message.error('Please fill in all required fields');
            return;
        }

        // Add new item to data
        const newItem = {
            key: Date.now().toString(),
            serialNumber: String(data.length + 1).padStart(3, '0'),
            title: formData.title,
            type: getFileType(formData.file),
            uploadDate: new Date().toLocaleDateString('en-GB', {
                day: '2-digit',
                month: '2-digit',
                year: '2-digit'
            })
        };

        setData([...data, newItem]);
        message.success('Training material added successfully!');
        handleCancel();
    };
    console.log(data)

    const handleEdit = (record: any) => {
        console.log('Edit:', record);
        // Implement edit functionality
    };

    const handleDelete = (key: string) => {
        setData(data.filter(item => item.key !== key));
        message.success('Item deleted successfully!');
    };

    const getFileType = (file: File) => {
        if (!file) return 'Unknown';
        const fileName = file.name;
        const extension = fileName.split('.').pop()?.toUpperCase() ?? '';

        switch (extension) {
            case 'PDF': return 'PDF';
            case 'MP4':
            case 'AVI':
            case 'MOV': return 'Video';
            case 'PPT':
            case 'PPTX': return 'PPT';
            case 'ZIP': return 'ZIP File';
            default: return extension;
        }
    };

    const uploadProps = {
        name: 'file',
        multiple: false,
        beforeUpload: (file: File) => {
            setFormData(prev => ({ ...prev, file: file as any }));
            return false; // Prevent auto upload
        },
        onRemove: () => {
            setFormData(prev => ({ ...prev, file: null }));
        },
    };
    const thumbnailUploadProps = {
        name: 'file',
        multiple: false,
        beforeUpload: (file: File) => {
            setFormData(prev => ({ ...prev, image: file as any }));
            return false; // Prevent auto upload
        },
        onRemove: () => {
            setFormData(prev => ({ ...prev, file: null }));
        },
    };

    return (
        <div className="p-6 ">
            <div className="bg-[#F9F0EC] p-6 rounded-lg">
                <div className='mb-4'>
                    <Title level={3} className="!m-0 text-gray-800 inline-block border-b-[1px] border-[#f79d77] pb-2">
                        Service <span className="text-orange-500">Deck</span>
                    </Title>
                </div>
                <button
                    onClick={showModal}
                    className="inline-flex items-center gap-2 px-5 py-3 border border-orange-300 
             rounded-lg mb-4 text-gray-700 font-medium bg-white 
             hover:bg-orange-50 hover:border-orange-400 
             focus:outline-none focus:ring-2 focus:ring-orange-300"
                >
                    <PlusOutlined className="text-orange-500" />
                    Add a New Service Deck
                </button>

                <Table
                    columns={columns}
                    dataSource={data}
                    pagination={{
                        pageSize: 10,
                        showSizeChanger: true,
                        showQuickJumper: true,
                        showTotal: (total, range) =>
                            `Showing ${range[0]}-${range[1]} of ${total} items`,
                        responsive: true,
                    }}
                    
                    className="!bg-white p-2 md:p-5"
                    rowClassName='bg-[#F9F0EC]'
                    onHeaderRow={() => ({ className: 'bg-[#F3F6F9]' })}
                    scroll={{ x: 768 }}
                />
            </div>
            <TrainingModal
                onSubmit={handleSubmit}
                uploadProps={uploadProps}
                isModalVisible={isModalVisible}
                handleCancel={handleCancel}
                formData={{ ...formData, thumbnail: formData.image, fileSize: formData.file ? `${((formData.file as File).size / 1024).toFixed(2)} KB` : '' }}
                thumbnailUploadProps={thumbnailUploadProps}
                setFormData={setFormData as any}
            />
        </div>
    );
}