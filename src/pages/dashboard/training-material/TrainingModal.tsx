import {
    Button,
    Modal,
    Input,
    Select,
    Upload,
    Radio,
    Col,
    Row
} from 'antd';
import { CiFileOn } from 'react-icons/ci';

const { Option } = Select;
const { Dragger } = Upload;
const { TextArea } = Input;

export interface TrainingModalProps {
    onSubmit: () => void;
    uploadProps: any;
    isModalVisible: boolean;
    handleCancel: () => void;
    formData: {
        title: string;
        description: string;
        file: File | null;
        category: string;
        status: string;
    };
    setFormData: React.Dispatch<React.SetStateAction<{
        title: string;
        description: string;
        file: File | null;
        category: string;
        status: string;
    }>>;
}


const TrainingModal: React.FC<TrainingModalProps> = ({ onSubmit, uploadProps, isModalVisible, handleCancel, formData, setFormData }) => {
    return (
        <Modal
            title={
                <div className="text-center">
                    <span className="text-orange-500 text-lg font-bold border-b-2 border-orange-500 pb-1 inline-block">
                        <span className='text-black'> ADD</span> Onboarding Guide
                    </span>
                </div>
            }
            open={isModalVisible}
            onCancel={handleCancel}
            footer={null}
            width={700}
        
        >
            <div className="mt-5">
                <div className="mb-4">
                    <label className="block mb-2 font-medium">
                        Guide Title
                    </label>
                    <Input
                        placeholder="Enter Guide Title..."
                        value={formData.title}
                        onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                    />
                </div>

                <div className="mb-4">
                    <label className="block mb-2 font-medium">
                        File Description
                    </label>
                    <TextArea
                        placeholder="Enter Guide Description..."
                        rows={4}
                        value={formData.description}
                        onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                    />
                </div>

                <div className="mb-4">
                    <label className="block mb-2 font-medium">
                        Upload File
                    </label>
                    <Dragger {...uploadProps}>
                        <div className="flex justify-center">
                            <CiFileOn className="text-orange-500 text-5xl p-3 bg-orange-400/15 rounded-full" />
                        </div>
                        <p className="text-orange-500 text-base font-bold">
                            <span className='text-black'>Upload</span> File
                        </p>
                        <p className="text-gray-400 text-xs">
                            Support for a single or bulk upload. PDF
                        </p>
                    </Dragger>
                </div>

                <Row gutter={16} className="mb-4">
                    <Col span={12}>
                        <label className="block mb-2 font-medium">
                            Category
                        </label>
                        <Select
                            className="w-full"
                            value={formData.category}
                            onChange={(value) => setFormData(prev => ({ ...prev, category: value }))}
                        >
                            <Option value="beginner">Beginner</Option>
                            <Option value="intermediate">Intermediate</Option>
                            <Option value="advanced">Advanced</Option>
                        </Select>
                    </Col>

                    <Col span={12}>
                        <label className="block mb-2 font-medium">
                            Status
                        </label>
                        <Radio.Group
                            value={formData.status}
                            onChange={(e) => setFormData(prev => ({ ...prev, status: e.target.value }))}
                        >
                            <Radio value="active" className="text-orange-500">Active</Radio>
                            <Radio value="draft">Draft</Radio>
                        </Radio.Group>
                    </Col>
                </Row>

                <div className="flex gap-3 mt-6">
                    <Button
                        className="flex-1 !py-4 border-orange-500 text-orange-500 rounded-md"
                        onClick={handleCancel}
                    >
                        Save Draft
                    </Button>
                    <Button
                        type="primary"
                        onClick={onSubmit}
                        className="flex-1 bg-orange-500 !py-4 border-orange-500 rounded-md"
                    >
                        Submit
                    </Button>
                </div>
            </div>
        </Modal>
    );
};

export default TrainingModal;
