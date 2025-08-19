import React from 'react';
import './Card.css';

const Card = ({
  children,
  title,
  subtitle,
  image,
  imageAlt,
  variant = 'default',
  hoverable = false,
  clickable = false,
  padding = 'medium',
  shadow = 'small',
  borderRadius = 'medium',
  onClick,
  footer,
  actions,
  className = '',
  ...props
}) => {
  const cardClasses = [
    'card',
    `card--${variant}`,
    `card--padding-${padding}`,
    `card--shadow-${shadow}`,
    `card--radius-${borderRadius}`,
    hoverable && 'card--hoverable',
    clickable && 'card--clickable',
    className,
  ].filter(Boolean).join(' ');

  const CardContent = ({ children }) => (
    <div className={cardClasses} onClick={clickable ? onClick : undefined} {...props}>
      {image && (
        <div className="card__image">
          <img src={image} alt={imageAlt || ''} />
        </div>
      )}
      
      <div className="card__content">
        {(title || subtitle) && (
          <div className="card__header">
            {title && <h3 className="card__title">{title}</h3>}
            {subtitle && <p className="card__subtitle">{subtitle}</p>}
          </div>
        )}
        
        <div className="card__body">
          {children}
        </div>
      </div>
      
      {(footer || actions) && (
        <div className="card__footer">
          {footer && <div className="card__footer-content">{footer}</div>}
          {actions && <div className="card__actions">{actions}</div>}
        </div>
      )}
    </div>
  );

  return <CardContent>{children}</CardContent>;
};

export default Card;