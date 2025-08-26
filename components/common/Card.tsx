import React from 'react';
import type { CardProps } from '@/interfaces';

const Card: React.FC<CardProps> = ({ image, title, description, children }) => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden">
    {image && (
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
    )}
    <div className="p-4">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-600">{description}</p>
      {children}
    </div>
  </div>
);

export default Card;