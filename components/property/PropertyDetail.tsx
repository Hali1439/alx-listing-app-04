// components/property/PropertyDetail.tsx
import Image from "next/image";

interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  description: string;
  image?: string;
  bedrooms?: number;
  bathrooms?: number;
  area?: number; // e.g. in sq ft
}

export default function PropertyDetail({ property }: { property: Property }) {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-2xl">
      {/* Image */}
      {property.image && (
        <div className="w-full h-80 relative mb-6">
          <Image
            src={property.image}
            alt={property.title}
            fill
            className="object-cover rounded-2xl"
          />
        </div>
      )}

      {/* Title & Price */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">{property.title}</h1>
        <span className="text-xl font-semibold text-green-600">
          ${property.price.toLocaleString()}
        </span>
      </div>

      {/* Location */}
      <p className="text-gray-500 mb-4">{property.location}</p>

      {/* Extra Info */}
      <div className="flex gap-6 text-sm text-gray-600 mb-6">
        {property.bedrooms && (
          <p>
            <strong>{property.bedrooms}</strong> Beds
          </p>
        )}
        {property.bathrooms && (
          <p>
            <strong>{property.bathrooms}</strong> Baths
          </p>
        )}
        {property.area && (
          <p>
            <strong>{property.area}</strong> sqft
          </p>
        )}
      </div>

      {/* Description */}
      <p className="text-gray-700 leading-relaxed">{property.description}</p>
    </div>
  );
}
