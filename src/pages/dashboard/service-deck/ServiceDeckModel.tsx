import {
    Button,
    Modal,
    Input,
    Upload,
    Col,
    Row
} from 'antd';
import { CiFileOn } from 'react-icons/ci';
import { MdOutlineImage } from 'react-icons/md';

const { Dragger } = Upload;
const { TextArea } = Input;

export interface TrainingModalProps {
    onSubmit: () => void;
    uploadProps: any;
    thumbnailUploadProps: any;
    isModalVisible: boolean;
    handleCancel: () => void;
    formData: {
        title: string;
        description: string;
        file: File | null;
        image: File | null;
        thumbnail: File | null;
        fileSize: string;
    };
    setFormData: React.Dispatch<React.SetStateAction<{
        title: string;
        description: string;
        file: File | null;
        image: File | null;
        thumbnail: File | null;
        fileSize: string;
    }>>;
}

const ServiceDeckModel: React.FC<TrainingModalProps> = ({ 
    onSubmit, 
    uploadProps, 
    thumbnailUploadProps,
    isModalVisible, 
    handleCancel, 
    formData, 
    setFormData 
}) => {
    return (
        <Modal
            title={
                <div className="text-center">
                    <span className="text-lg font-medium">
                        Add <span className="text-orange-500">Service Deck</span>
                    </span>
                </div>
            }
            open={isModalVisible}
            onCancel={handleCancel}
            footer={null}
            width={700}
            className="service-deck-modal"
        >
            <div className="mt-6">
                {/* Main File Upload */}
                <div className="mb-6">
                    <Dragger 
                        {...uploadProps}
                    >
                        <div className="flex justify-center mb-3">
                            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                                <CiFileOn className="text-orange-500 text-2xl" />
                            </div>
                        </div>
                        <p className="text-base font-medium text-gray-700 mb-1">
                            Upload <span className="text-orange-500">File</span>
                        </p>
                        <p className="text-sm text-gray-400">
                            Supported formats: PDF
                        </p>
                    </Dragger>
                </div>

                {/* File Name */}
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                        File Name
                    </label>
                    <Input
                        placeholder="Enter File Title"
                        value={formData.title}
                        onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                        className="rounded-md"
                    />
                </div>

                {/* File Description */}
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                        File Description
                    </label>
                    <TextArea
                        placeholder="Enter File Description"
                        rows={3}
                        value={formData.description}
                        onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                        className="rounded-md"
                    />
                </div>

                {/* File Size */}
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                        File Size
                    </label>
                    <Input
                        placeholder="2.5 MB"
                        value={formData.fileSize}
                        onChange={(e) => setFormData(prev => ({ ...prev, fileSize: e.target.value }))}
                        className="rounded-md w-32"
                    />
                </div>

                {/* Thumbnail Upload */}
                <div className="mb-6">
                    <Dragger 
                        {...thumbnailUploadProps}
                    >
                        <div className="flex justify-center mb-3">
                            <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                                <MdOutlineImage className="text-orange-500 text-xl" />
                            </div>
                        </div>
                        <p className="text-sm font-medium text-gray-700 mb-1">
                            Upload Service Deck Thumbnail
                        </p>
                        <p className="text-xs text-gray-400">
                            <span className="text-orange-500 underline cursor-pointer">browse file on</span> your computer
                        </p>
                    </Dragger>
                </div>

                {/* Action Buttons */}
                <Row gutter={12}>
                    <Col span={12}>
                        <Button
                            size="large"
                            className="w-full border-orange-500 text-orange-500 hover:border-orange-600 hover:text-orange-600 rounded-md"
                            onClick={handleCancel}
                        >
                            Save Draft
                        </Button>
                    </Col>
                    <Col span={12}>
                        <Button
                            type="primary"
                            size="large"
                            onClick={onSubmit}
                            className="w-full bg-orange-500 border-orange-500 hover:bg-orange-600 hover:border-orange-600 rounded-md"
                        >
                            Submit
                        </Button>
                    </Col>
                </Row>
            </div>
        </Modal>
    );
};

export default ServiceDeckModel;