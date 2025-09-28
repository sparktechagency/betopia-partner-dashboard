import React, { useState, useRef } from 'react';
import { Modal, Button, Typography, message } from 'antd';
import { X, Trash2 } from 'lucide-react';
import JoditEditor from 'jodit-react';
const { Text } = Typography;

interface SupportMessageModalProps {
  visible?: boolean;
  onClose?: () => void;
  isVisible?: boolean;
  setIsVisible?: React.Dispatch<React.SetStateAction<boolean>>;
}

const SupportMessageModal: React.FC<SupportMessageModalProps> = ({ 
  onClose = () => {},
  isVisible = false,
  setIsVisible = () => {}
}) => {
 
  const [replyContent, setReplyContent] = useState('');
  const editorRef = useRef<any>(null);



  const handleSendMessage = () => {

  };

  const handleDelete = () => {
    message.success('Message deleted successfully!');
    onClose();
  };


  const closeModal = () => {
    setIsVisible(false);
    onClose();
  };

  return (
    <>
      {/* Demo Button to Open Modal */}

      <Modal
        open={isVisible}
        onCancel={closeModal}
        footer={null}
        width={600}
        centered
        closeIcon={<X className="w-5 h-5" />}
        className=""
        destroyOnClose={false}
      >
        {/* Modal Header with Frame Info */}


        <div className="space-y-4">
          {/* Title Section */}
          <div>
            <Text strong className="text-gray-700 text-sm">Title:</Text>
            <div className="mt-1">
              <Text className="text-gray-900">Request for Technical Support</Text>
            </div>
          </div>

          {/* Message Section */}
          <div>
            <Text strong className="text-gray-700 text-sm">Message:</Text>
            <div className="mt-2 space-y-3 text-gray-800 text-sm leading-relaxed">
              <p>Hello Betopia Support Team,</p>
              <p>
                I am reaching out regarding an issue we are facing with the ERP integration module. The system is showing 
                delays in syncing real-time data between MRM and POS. Could you please investigate this and guide us with 
                a possible solution?
              </p>
              <p>Looking forward to your assistance.</p>
              <div className="mt-4 space-y-1">
                <p>Best regards,</p>
                <p>[Partner Name]</p>
                <p>[Company Name]</p>
              </div>
            </div>
          </div>

          {/* Reply Editor Section */}
          <div className="mt-6">
            <div className="border border-gray-300 rounded-lg overflow-hidden">
                <JoditEditor
                    ref={editorRef}
                    value={replyContent}
                    config={{
                    readonly: false,
                    height: 300,
                    }}
                    onBlur={(newContent: string) => setReplyContent(newContent)}
                />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between items-center pt-4">
            <Button
              danger
              ghost
              icon={<Trash2 className="w-4 h-4" />}
              onClick={handleDelete}
              className="flex items-center"
            >
              Delete
            </Button>
            
            <Button
              type="primary"
              onClick={handleSendMessage}
              className="bg-orange-500 hover:bg-orange-600 border-orange-500 px-6"
              size="large"
            >
              SEND MESSAGE
            </Button>
          </div>
        </div>

        <style>{`
          .support-message-modal .ant-modal-content {
            background: linear-gradient(135deg, #fca5a5 0%, #ef4444 100%);
            padding: 0;
          }
          
          .support-message-modal .ant-modal-body {
            background: white;
            margin: 20px;
            border-radius: 8px;
            padding: 24px;
          }

          .support-message-modal .ant-modal-close {
            color: white;
            top: 10px;
            right: 20px;
          }

          .support-message-modal .ant-modal-close:hover {
            color: #f1f5f9;
          }

          .jodit-container {
            border-radius: 8px;
            overflow: hidden;
          }

          .jodit-workplace {
            min-height: 200px;
          }

          .jodit-wysiwyg {
            min-height: 180px;
            padding: 12px;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            font-size: 14px;
            line-height: 1.5;
          }

          .jodit-toolbar-button {
            margin: 2px;
          }

          .jodit-toolbar {
            border-bottom: 1px solid #e5e7eb;
            background: #f9fafb;
          }
        `}</style>
      </Modal>
    </>
  );
};

// TypeScript declaration for Jodit
declare global {
  interface Window {
    Jodit: any;
  }
}

export default SupportMessageModal;