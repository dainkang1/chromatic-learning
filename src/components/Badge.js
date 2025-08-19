import React from 'react';
import './Badge.css';

const Badge = ({
  children,
  variant = 'primary',
  size = 'medium',
  shape = 'rounded',
  dot = false,
  count,
  maxCount = 99,
  showZero = false,
  position = 'top-right',
  offset = [0, 0],
  className = '',
  ...props
}) => {
  // If it's a dot badge or has a count, render as notification badge
  if (dot || count !== undefined) {
    const shouldShow = dot || count > 0 || (count === 0 && showZero);
    const displayCount = count > maxCount ? `${maxCount}+` : count;
    
    return (
      <div className="badge-container" {...props}>
        {children}
        {shouldShow && (
          <span 
            className={`badge-notification badge-notification--${variant} badge-notification--${position} ${dot ? 'badge-notification--dot' : ''} ${className}`}
            style={{
              transform: `translate(${offset[0]}px, ${offset[1]}px)`
            }}
          >
            {!dot && displayCount}
          </span>
        )}
      </div>
    );
  }

  // Regular badge component
  const badgeClasses = [
    'badge',
    `badge--${variant}`,
    `badge--${size}`,
    `badge--${shape}`,
    className,
  ].filter(Boolean).join(' ');

  return (
    <span className={badgeClasses} {...props}>
      {children}
    </span>
  );
};

export default Badge;