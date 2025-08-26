interface Property {
  id: number;
  title: string;
  location: string;
  price: number;
  image: string;
}

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <div className="border rounded-xl shadow hover:shadow-lg transition p-4">
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-48 object-cover rounded-md"
      />
      <h2 className="text-lg font-semibold mt-2">{property.title}</h2>
      <p className="text-gray-600">{property.location}</p>
      <p className="text-blue-600 font-bold mt-1">${property.price}/night</p>
    </div>
  );
}
