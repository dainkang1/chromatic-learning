import React from 'react';
import Badge from '../components/Badge';
import Button from '../components/Button';

export default {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark',
        'outline-primary', 'outline-secondary', 'outline-success', 'outline-danger', 
        'outline-warning', 'outline-info'
      ],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    shape: {
      control: 'select',
      options: ['rounded', 'pill', 'square', 'circle'],
    },
    dot: {
      control: 'boolean',
    },
    count: {
      control: 'number',
    },
    maxCount: {
      control: 'number',
    },
    showZero: {
      control: 'boolean',
    },
    position: {
      control: 'select',
      options: ['top-right', 'top-left', 'bottom-right', 'bottom-left'],
    },
  },
};

export const Default = {
  args: {
    children: 'Default',
  },
};

export const Primary = {
  args: {
    variant: 'primary',
    children: 'Primary',
  },
};

export const Secondary = {
  args: {
    variant: 'secondary',
    children: 'Secondary',
  },
};

export const Success = {
  args: {
    variant: 'success',
    children: 'Success',
  },
};

export const Danger = {
  args: {
    variant: 'danger',
    children: 'Danger',
  },
};

export const Warning = {
  args: {
    variant: 'warning',
    children: 'Warning',
  },
};

export const Info = {
  args: {
    variant: 'info',
    children: 'Info',
  },
};

export const Light = {
  args: {
    variant: 'light',
    children: 'Light',
  },
};

export const Dark = {
  args: {
    variant: 'dark',
    children: 'Dark',
  },
};

export const OutlinePrimary = {
  args: {
    variant: 'outline-primary',
    children: 'Outline',
  },
};

export const Small = {
  args: {
    size: 'small',
    children: 'Small',
  },
};

export const Medium = {
  args: {
    size: 'medium',
    children: 'Medium',
  },
};

export const Large = {
  args: {
    size: 'large',
    children: 'Large',
  },
};

export const Pill = {
  args: {
    shape: 'pill',
    children: 'Pill Shape',
  },
};

export const Square = {
  args: {
    shape: 'square',
    children: 'Square',
  },
};

export const Circle = {
  args: {
    shape: 'circle',
    children: '12',
  },
};

export const NotificationDot = {
  render: (args) => (
    <Badge {...args}>
      <Button>Button with Dot</Button>
    </Badge>
  ),
  args: {
    dot: true,
    variant: 'danger',
  },
};

export const NotificationCount = {
  render: (args) => (
    <Badge {...args}>
      <Button>Messages</Button>
    </Badge>
  ),
  args: {
    count: 5,
    variant: 'danger',
  },
};

export const NotificationHighCount = {
  render: (args) => (
    <Badge {...args}>
      <Button>Notifications</Button>
    </Badge>
  ),
  args: {
    count: 150,
    maxCount: 99,
    variant: 'danger',
  },
};

export const NotificationZero = {
  render: (args) => (
    <Badge {...args}>
      <Button>No Messages</Button>
    </Badge>
  ),
  args: {
    count: 0,
    showZero: true,
    variant: 'secondary',
  },
};

export const NotificationPositions = () => (
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 200px)', gap: '40px', justifyItems: 'center' }}>
    <Badge count={3} position="top-right">
      <Button>Top Right</Button>
    </Badge>
    <Badge count={5} position="top-left">
      <Button>Top Left</Button>
    </Badge>
    <Badge count={7} position="bottom-right">
      <Button>Bottom Right</Button>
    </Badge>
    <Badge count={9} position="bottom-left">
      <Button>Bottom Left</Button>
    </Badge>
  </div>
);

export const AllVariants = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
    {/* Regular Badges */}
    <div>
      <h3 style={{ margin: '0 0 12px 0', textAlign: 'center' }}>Regular Badges</h3>
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Badge variant="primary">Primary</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="danger">Danger</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="info">Info</Badge>
        <Badge variant="light">Light</Badge>
        <Badge variant="dark">Dark</Badge>
      </div>
    </div>

    {/* Outline Badges */}
    <div>
      <h3 style={{ margin: '0 0 12px 0', textAlign: 'center' }}>Outline Badges</h3>
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Badge variant="outline-primary">Primary</Badge>
        <Badge variant="outline-secondary">Secondary</Badge>
        <Badge variant="outline-success">Success</Badge>
        <Badge variant="outline-danger">Danger</Badge>
        <Badge variant="outline-warning">Warning</Badge>
        <Badge variant="outline-info">Info</Badge>
      </div>
    </div>

    {/* Sizes */}
    <div>
      <h3 style={{ margin: '0 0 12px 0', textAlign: 'center' }}>Sizes</h3>
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center', justifyContent: 'center' }}>
        <Badge size="small">Small</Badge>
        <Badge size="medium">Medium</Badge>
        <Badge size="large">Large</Badge>
      </div>
    </div>

    {/* Shapes */}
    <div>
      <h3 style={{ margin: '0 0 12px 0', textAlign: 'center' }}>Shapes</h3>
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center', justifyContent: 'center' }}>
        <Badge shape="rounded">Rounded</Badge>
        <Badge shape="pill">Pill</Badge>
        <Badge shape="square">Square</Badge>
        <Badge shape="circle">12</Badge>
      </div>
    </div>

    {/* Notification Badges */}
    <div>
      <h3 style={{ margin: '0 0 12px 0', textAlign: 'center' }}>Notification Badges</h3>
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center', justifyContent: 'center' }}>
        <Badge dot>
          <Button variant="outline">Dot</Button>
        </Badge>
        <Badge count={3}>
          <Button variant="outline">Count</Button>
        </Badge>
        <Badge count={99} maxCount={50}>
          <Button variant="outline">Max Count</Button>
        </Badge>
        <Badge count={0} showZero>
          <Button variant="outline">Show Zero</Button>
        </Badge>
      </div>
    </div>
  </div>
);

AllVariants.parameters = {
  controls: { hideNoControlsWarning: true },
};