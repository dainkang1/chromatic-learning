import React, { useState } from 'react';
import { fn } from 'storybook/test';
import Input from '../components/Input';

export default {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    disabled: {
      control: 'boolean',
    },
    required: {
      control: 'boolean',
    },
    fullWidth: {
      control: 'boolean',
    },
    onChange: { action: 'changed' },
    onFocus: { action: 'focused' },
    onBlur: { action: 'blurred' },
  },
  args: {
    onChange: fn(),
    onFocus: fn(),
    onBlur: fn(),
  },
};

const ControlledInput = (args) => {
  const [value, setValue] = useState(args.value || '');
  
  const handleChange = (e) => {
    setValue(e.target.value);
    args.onChange?.(e);
  };

  return <Input {...args} value={value} onChange={handleChange} />;
};

export const Default = {
  render: ControlledInput,
  args: {
    placeholder: 'Enter text here...',
  },
};

export const WithLabel = {
  render: ControlledInput,
  args: {
    label: 'Full Name',
    placeholder: 'Enter your full name',
  },
};

export const Required = {
  render: ControlledInput,
  args: {
    label: 'Email Address',
    type: 'email',
    placeholder: 'Enter your email',
    required: true,
  },
};

export const WithError = {
  render: ControlledInput,
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter password',
    error: 'Password must be at least 8 characters long',
    value: '123',
  },
};

export const WithHelpText = {
  render: ControlledInput,
  args: {
    label: 'Username',
    placeholder: 'Choose a username',
    helpText: 'Username must be 3-20 characters long and can contain letters, numbers, and underscores',
  },
};

export const Small = {
  render: ControlledInput,
  args: {
    label: 'Small Input',
    size: 'small',
    placeholder: 'Small size input',
  },
};

export const Medium = {
  render: ControlledInput,
  args: {
    label: 'Medium Input',
    size: 'medium',
    placeholder: 'Medium size input (default)',
  },
};

export const Large = {
  render: ControlledInput,
  args: {
    label: 'Large Input',
    size: 'large',
    placeholder: 'Large size input',
  },
};

export const Disabled = {
  render: ControlledInput,
  args: {
    label: 'Disabled Input',
    placeholder: 'This input is disabled',
    disabled: true,
    value: 'Some preset value',
  },
};

export const FullWidth = {
  render: ControlledInput,
  args: {
    label: 'Full Width Input',
    placeholder: 'This input takes the full width',
    fullWidth: true,
  },
};

export const WithIcon = {
  render: ControlledInput,
  args: {
    label: 'Search',
    placeholder: 'Search for something...',
    icon: '🔍',
  },
};

export const WithPrefix = {
  render: ControlledInput,
  args: {
    label: 'Website URL',
    placeholder: 'mysite',
    prefix: 'https://',
  },
};

export const WithSuffix = {
  render: ControlledInput,
  args: {
    label: 'Price',
    placeholder: '0.00',
    suffix: 'USD',
    type: 'number',
  },
};

export const Password = {
  render: ControlledInput,
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
  },
};

export const Email = {
  render: ControlledInput,
  args: {
    label: 'Email',
    type: 'email',
    placeholder: 'user@example.com',
  },
};

export const Number = {
  render: ControlledInput,
  args: {
    label: 'Age',
    type: 'number',
    placeholder: '25',
    min: 0,
    max: 120,
  },
};

export const AllVariants = () => (
  <div style={{ display: 'grid', gap: '24px', maxWidth: '400px' }}>
    <Input label="Default Input" placeholder="Enter text..." />
    <Input label="Required Input" placeholder="Required field" required />
    <Input label="Input with Error" placeholder="Invalid input" error="This field is required" />
    <Input label="Input with Help" placeholder="Username" helpText="Choose a unique username" />
    <Input label="Disabled Input" placeholder="Disabled" disabled value="Cannot edit" />
    <Input label="With Icon" placeholder="Search..." icon="🔍" />
    <Input label="With Prefix" placeholder="mysite" prefix="https://" />
    <Input label="With Suffix" placeholder="0.00" suffix="USD" type="number" />
    <Input label="Password" type="password" placeholder="Password" />
    <Input label="Email" type="email" placeholder="user@example.com" />
  </div>
);

AllVariants.parameters = {
  controls: { hideNoControlsWarning: true },
};