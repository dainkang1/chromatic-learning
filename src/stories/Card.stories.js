import React from 'react';
import { fn } from 'storybook/test';
import Card from '../components/Card';
import Button from '../components/Button';
import Badge from '../components/Badge';

export default {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'elevated', 'outlined', 'filled'],
    },
    padding: {
      control: 'select',
      options: ['none', 'small', 'medium', 'large'],
    },
    shadow: {
      control: 'select',
      options: ['none', 'small', 'medium', 'large'],
    },
    borderRadius: {
      control: 'select',
      options: ['none', 'small', 'medium', 'large'],
    },
    hoverable: {
      control: 'boolean',
    },
    clickable: {
      control: 'boolean',
    },
    onClick: { action: 'clicked' },
  },
  args: {
    onClick: fn(),
  },
};

export const Default = {
  args: {
    children: (
      <p>
        This is a default card with some content inside it. Cards are flexible containers 
        that can hold various types of content.
      </p>
    ),
  },
};

export const WithTitle = {
  args: {
    title: 'Card Title',
    children: (
      <p>
        This card has a title in the header. The title helps users understand 
        what the card contains.
      </p>
    ),
  },
};

export const WithTitleAndSubtitle = {
  args: {
    title: 'Product Card',
    subtitle: 'Category: Electronics',
    children: (
      <p>
        This card shows both a title and subtitle, which is useful for providing 
        additional context or categorization.
      </p>
    ),
  },
};

export const WithImage = {
  args: {
    title: 'Beautiful Landscape',
    subtitle: 'Nature Photography',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop&crop=center',
    imageAlt: 'Beautiful landscape with mountains and lake',
    children: (
      <p>
        This card includes an image at the top, perfect for visual content like 
        product photos or article previews.
      </p>
    ),
  },
};

export const WithFooter = {
  args: {
    title: 'Article Card',
    children: (
      <p>
        This article discusses the latest trends in web development and how they 
        impact user experience design.
      </p>
    ),
    footer: 'Published on March 15, 2024',
  },
};

export const WithActions = {
  args: {
    title: 'Task Card',
    children: (
      <p>
        Complete the quarterly report and submit it to the management team for review.
      </p>
    ),
    actions: (
      <div style={{ display: 'flex', gap: '8px' }}>
        <Button variant="outline" size="small">Edit</Button>
        <Button variant="primary" size="small">Complete</Button>
      </div>
    ),
  },
};

export const Elevated = {
  args: {
    variant: 'elevated',
    title: 'Elevated Card',
    shadow: 'medium',
    children: (
      <p>
        This is an elevated card with a medium shadow and no border, 
        giving it a floating appearance.
      </p>
    ),
  },
};

export const Outlined = {
  args: {
    variant: 'outlined',
    title: 'Outlined Card',
    children: (
      <p>
        This card has a prominent border instead of a shadow, 
        creating a clean, defined look.
      </p>
    ),
  },
};

export const Filled = {
  args: {
    variant: 'filled',
    title: 'Filled Card',
    children: (
      <p>
        This card has a filled background color, which can help it stand out 
        from the surrounding content.
      </p>
    ),
  },
};

export const Hoverable = {
  args: {
    title: 'Hoverable Card',
    hoverable: true,
    children: (
      <p>
        Hover over this card to see the hover effect. It will lift slightly 
        with an enhanced shadow.
      </p>
    ),
  },
};

export const Clickable = {
  args: {
    title: 'Clickable Card',
    clickable: true,
    children: (
      <p>
        This card is clickable. Click anywhere on the card to trigger the action.
        Notice the hover effect that indicates it's interactive.
      </p>
    ),
  },
};

export const SmallPadding = {
  args: {
    title: 'Small Padding',
    padding: 'small',
    children: <p>This card has small padding around the content.</p>,
  },
};

export const LargePadding = {
  args: {
    title: 'Large Padding',
    padding: 'large',
    children: <p>This card has large padding around the content.</p>,
  },
};

export const NoPadding = {
  args: {
    padding: 'none',
    children: (
      <div>
        <div style={{ padding: '20px' }}>
          <h3 style={{ margin: '0 0 8px 0' }}>Custom Layout</h3>
          <p style={{ margin: 0 }}>
            This card has no built-in padding, allowing for custom layouts.
          </p>
        </div>
        <div style={{ 
          padding: '12px 20px', 
          backgroundColor: '#f8f9fa', 
          borderTop: '1px solid #dee2e6' 
        }}>
          <small style={{ color: '#6c757d' }}>Custom footer area</small>
        </div>
      </div>
    ),
  },
};

export const ProductCard = {
  args: {
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=200&fit=crop&crop=center',
    imageAlt: 'Nike shoes',
    title: 'Nike Air Max',
    subtitle: 'Running Shoes',
    hoverable: true,
    clickable: true,
    children: (
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
          <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#dc3545' }}>$129.99</span>
          <span style={{ fontSize: '16px', textDecoration: 'line-through', color: '#6c757d' }}>$159.99</span>
          <Badge variant="success" size="small">20% OFF</Badge>
        </div>
        <p style={{ margin: 0, color: '#6c757d', fontSize: '14px' }}>
          Comfortable running shoes with advanced cushioning technology.
        </p>
      </div>
    ),
    actions: (
      <div style={{ display: 'flex', gap: '8px', width: '100%' }}>
        <Button variant="outline" size="small" style={{ flex: 1 }}>Add to Wishlist</Button>
        <Button variant="primary" size="small" style={{ flex: 1 }}>Add to Cart</Button>
      </div>
    ),
  },
};

export const ProfileCard = {
  args: {
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=200&fit=crop&crop=face',
    imageAlt: 'Profile photo',
    title: 'John Doe',
    subtitle: 'Senior Frontend Developer',
    variant: 'elevated',
    shadow: 'medium',
    children: (
      <div>
        <p style={{ margin: '0 0 12px 0', color: '#6c757d' }}>
          Passionate about creating beautiful and functional user interfaces.
          5+ years of experience in React and modern web technologies.
        </p>
        <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
          <Badge variant="outline-primary" size="small">React</Badge>
          <Badge variant="outline-primary" size="small">TypeScript</Badge>
          <Badge variant="outline-primary" size="small">CSS</Badge>
          <Badge variant="outline-primary" size="small">Node.js</Badge>
        </div>
      </div>
    ),
    footer: 'San Francisco, CA',
    actions: (
      <div style={{ display: 'flex', gap: '8px' }}>
        <Button variant="outline" size="small">Message</Button>
        <Button variant="primary" size="small">Connect</Button>
      </div>
    ),
  },
};

export const AllVariants = () => (
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
    <Card title="Default Card">
      <p>This is a default card variant.</p>
    </Card>
    
    <Card variant="elevated" title="Elevated Card" shadow="medium">
      <p>This card has elevation with shadow.</p>
    </Card>
    
    <Card variant="outlined" title="Outlined Card">
      <p>This card has a prominent border.</p>
    </Card>
    
    <Card variant="filled" title="Filled Card">
      <p>This card has a filled background.</p>
    </Card>
    
    <Card title="Hoverable Card" hoverable>
      <p>Hover over this card to see the effect.</p>
    </Card>
    
    <Card title="With Actions" actions={<Button size="small">Action</Button>}>
      <p>This card has action buttons.</p>
    </Card>
  </div>
);

AllVariants.parameters = {
  controls: { hideNoControlsWarning: true },
};