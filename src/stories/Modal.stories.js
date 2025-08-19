import React, { useState } from 'react';
import { fn } from 'storybook/test';
import Modal from '../components/Modal';
import Button from '../components/Button';

export default {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large', 'full'],
    },
    isOpen: {
      control: 'boolean',
    },
    showCloseButton: {
      control: 'boolean',
    },
    closeOnOverlayClick: {
      control: 'boolean',
    },
    closeOnEscape: {
      control: 'boolean',
    },
    onClose: { action: 'closed' },
  },
  args: {
    onClose: fn(),
  },
};

const ModalWrapper = ({ children, ...args }) => {
  const [isOpen, setIsOpen] = useState(args.isOpen || false);
  
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => {
    setIsOpen(false);
    args.onClose?.();
  };

  return (
    <div style={{ padding: '20px' }}>
      <Button onClick={handleOpen}>Open Modal</Button>
      <Modal {...args} isOpen={isOpen} onClose={handleClose}>
        {children}
      </Modal>
    </div>
  );
};

export const Default = {
  render: (args) => (
    <ModalWrapper {...args}>
      <p>This is a default modal with some content inside it.</p>
      <p>You can close it by clicking the X button, clicking outside, or pressing Escape.</p>
    </ModalWrapper>
  ),
  args: {
    title: 'Default Modal',
  },
};

export const WithTitle = {
  render: (args) => (
    <ModalWrapper {...args}>
      <p>This modal has a title in the header.</p>
    </ModalWrapper>
  ),
  args: {
    title: 'Modal with Title',
  },
};

export const WithoutCloseButton = {
  render: (args) => (
    <ModalWrapper {...args}>
      <p>This modal doesn't have a close button in the header.</p>
      <p>You can still close it by clicking outside or pressing Escape.</p>
    </ModalWrapper>
  ),
  args: {
    title: 'No Close Button',
    showCloseButton: false,
  },
};

export const Small = {
  render: (args) => (
    <ModalWrapper {...args}>
      <p>This is a small modal.</p>
    </ModalWrapper>
  ),
  args: {
    title: 'Small Modal',
    size: 'small',
  },
};

export const Medium = {
  render: (args) => (
    <ModalWrapper {...args}>
      <p>This is a medium modal (default size).</p>
    </ModalWrapper>
  ),
  args: {
    title: 'Medium Modal',
    size: 'medium',
  },
};

export const Large = {
  render: (args) => (
    <ModalWrapper {...args}>
      <p>This is a large modal.</p>
      <p>It has more space for content and can accommodate larger forms or more information.</p>
    </ModalWrapper>
  ),
  args: {
    title: 'Large Modal',
    size: 'large',
  },
};

export const FullSize = {
  render: (args) => (
    <ModalWrapper {...args}>
      <p>This is a full-size modal that takes up most of the screen.</p>
      <p>Perfect for complex forms or detailed content.</p>
    </ModalWrapper>
  ),
  args: {
    title: 'Full Size Modal',
    size: 'full',
  },
};

export const LongContent = {
  render: (args) => (
    <ModalWrapper {...args}>
      <h3>Long Content Modal</h3>
      {Array.from({ length: 20 }, (_, i) => (
        <p key={i}>
          This is paragraph {i + 1} with some content that demonstrates how the modal handles 
          long content. The content should scroll when it exceeds the modal height.
        </p>
      ))}
    </ModalWrapper>
  ),
  args: {
    title: 'Modal with Long Content',
  },
};

export const WithForm = {
  render: (args) => (
    <ModalWrapper {...args}>
      <form>
        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'block', marginBottom: '4px', fontWeight: '500' }}>
            Name
          </label>
          <input 
            type="text" 
            style={{ 
              width: '100%', 
              padding: '8px 12px', 
              border: '1px solid #dee2e6', 
              borderRadius: '4px' 
            }} 
          />
        </div>
        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'block', marginBottom: '4px', fontWeight: '500' }}>
            Email
          </label>
          <input 
            type="email" 
            style={{ 
              width: '100%', 
              padding: '8px 12px', 
              border: '1px solid #dee2e6', 
              borderRadius: '4px' 
            }} 
          />
        </div>
        <div style={{ marginBottom: '24px' }}>
          <label style={{ display: 'block', marginBottom: '4px', fontWeight: '500' }}>
            Message
          </label>
          <textarea 
            rows={4} 
            style={{ 
              width: '100%', 
              padding: '8px 12px', 
              border: '1px solid #dee2e6', 
              borderRadius: '4px',
              resize: 'vertical'
            }} 
          />
        </div>
        <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
          <Button variant="secondary">Cancel</Button>
          <Button variant="primary">Submit</Button>
        </div>
      </form>
    </ModalWrapper>
  ),
  args: {
    title: 'Contact Form',
  },
};

export const NoOverlayClose = {
  render: (args) => (
    <ModalWrapper {...args}>
      <p>This modal won't close when you click on the overlay.</p>
      <p>You need to use the close button or press Escape.</p>
    </ModalWrapper>
  ),
  args: {
    title: 'No Overlay Close',
    closeOnOverlayClick: false,
  },
};

export const NoEscapeClose = {
  render: (args) => (
    <ModalWrapper {...args}>
      <p>This modal won't close when you press Escape.</p>
      <p>You need to use the close button or click on the overlay.</p>
    </ModalWrapper>
  ),
  args: {
    title: 'No Escape Close',
    closeOnEscape: false,
  },
};