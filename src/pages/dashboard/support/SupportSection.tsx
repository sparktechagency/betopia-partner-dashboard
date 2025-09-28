import React, { useState } from 'react';
import { Table, Button, Typography, Card, message } from 'antd';
import { Trash2 } from 'lucide-react';
import { supportData, SupportTicket } from '../../../demo-data/support-data';
import SupportModel from './SupportModel';

const { Title, Text } = Typography;

const SupportInboxTable: React.FC = () => {
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
    const [isVisible, setIsVisible] = useState(false);
    const handleReply = () => {
        setIsVisible(true);
    };

    const handleDelete = (record: SupportTicket) => {
        message.success(`Ticket ${record.sn} deleted successfully`);
    };

    const rowSelection = {
        selectedRowKeys,
        onChange: (newSelectedRowKeys: React.Key[]) => {
            setSelectedRowKeys(newSelectedRowKeys);
        },
    };

    const columns = [
        {
            title: '',
            dataIndex: 'checkbox',
            key: 'checkbox',
            width: 60,
            align: 'center' as const,
            render: () => null, // Checkbox is handled by rowSelection
        },
        {
            title: '#SN',
            dataIndex: 'sn',
            key: 'sn',
            width: 100,
            align: 'center' as const,
            render: (text: string) => (
                <Text strong className="text-gray-700">
                    {text}
                </Text>
            ),
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
            width: 250,
            align: 'center' as const,
            render: (text: string) => <Text className="text-gray-800 text-sm">{text}</Text>,
        },
        {
            title: 'Message',
            dataIndex: 'message',
            key: 'message',
            flex: 1,
            align: 'left' as const,
            render: (text: string) => <Text className="text-gray-600 text-sm">{text}</Text>,
        },
        {
            title: 'Time',
            dataIndex: 'time',
            key: 'time',
            width: 120,
            align: 'center' as const,
            render: (text: string) => <Text className="text-gray-600 text-sm">{text}</Text>,
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
            width: 120,
            align: 'center' as const,
            render: (text: string) => <Text className="text-gray-600 text-sm">{text}</Text>,
        },
        {
            title: 'Action',
            key: 'action',
            width: 200,
            align: 'center' as const,
            render: (_: any, record: SupportTicket) => (
                <div className="flex items-center justify-center space-x-2">
                    <Button
                        className="bg-orange-500 hover:bg-orange-600 border-orange-500 hover:border-orange-600 text-white px-4 py-3 rounded"
                        size="small"
                        onClick={() => handleReply()}
                    >
                        Replay
                    </Button>
                    <Button
                        type="text"
                        icon={<Trash2 className="w-4 h-4" />}
                        className="text-red-500 hover:text-red-700 hover:bg-red-50"
                        size="small"
                        onClick={() => handleDelete(record)}
                    >
                        Delete
                    </Button>
                </div>
            ),
        },
    ];

    return (
        <div className="p-12">
            {/* Header */}
            <div className="mb-6">
                <div className="mb-4">
                    <Title level={3} className="!m-0 text-gray-800 inline-block border-b-[1px] border-[#f79d77] pb-2">
                        Support <span className="text-orange-500">Inbox</span>
                    </Title>
                </div>
            </div>

            {/* Main Content */}
            <Card className="shadow-sm rounded-t-none">
                <div className="mb-6 text-center">
                    <Title level={1} className="mb-1 !font-bold">
                        Support <span className="text-orange-500 font-bold">Inbox</span>
                    </Title>
                </div>

                {/* Table */}
                <div className="bg-white rounded-lg overflow-hidden">
                    <Table
                        columns={columns}
                        dataSource={supportData}
                        rowSelection={rowSelection}
                        pagination={{
                            pageSize: 10,
                            showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
                            className: '!px-5',
                        }}
                        className=""
                        size="middle"
                        rowClassName="bg-[#F9F0EC]"
                        onHeaderRow={() => ({ className: 'bg-[#F3F6F9]' })}
                        scroll={{ x: 768 }}
                    />
                </div>
            </Card>

            <SupportModel isVisible={isVisible} setIsVisible={setIsVisible} />
        </div>
    );
};

export default SupportInboxTable;
