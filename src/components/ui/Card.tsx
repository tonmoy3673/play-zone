import React from 'react';

type CardProps = React.PropsWithChildren<{
  className?: string;
  style?: React.CSSProperties;
  bg?: string;
  border?: boolean;
  rounded?: string;
  blurClass?: string;
}>;

const defaultBg = 'bg-[#ffffff4d]';

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  style,
  bg = defaultBg,
  border = true,
  rounded = 'rounded-2xl',
  blurClass = 'backdrop-blur-3xl',
}) => {
  const borderClass = border ? 'border border-white' : '';

  return (
    <div className={`${bg} ${borderClass} ${rounded} ${blurClass} overflow-hidden ${className}`} style={style}>
      {children}
    </div>
  );
};

export default Card;
