import React from 'react';
import type { ButtonProps } from '@/interfaces';

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = "button",
  className = "",
  ...props
}) => (
  <button
    type={type}
    className={`px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition ${className}`}
    onClick={onClick}
    {...props}
  >
    {label}
  </button>
);

export default Button;