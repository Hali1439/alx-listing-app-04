import type { NextPage } from "next";
import Pill from "@/components/Pill";
import axios from "axios";
import { useEffect, useState } from "react";
import PropertyCard from "@/components/property/PropertyCard";

interface Property {
  id: number;
  title: string;
  location: string;
  price: number;
  image: string;
}

const Home: NextPage = () => {
  const filters = ["Top Villa", "Self Checkin", "Pet Friendly"];

  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get("/api/properties");
        setProperties(response.data);
      } catch (err) {
        console.error("Error fetching properties:", err);
        setError("Failed to load properties. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-100 py-12 text-center">
        <h1 className="text-3xl font-bold">Find your favorite place here!</h1>
        <p className="mt-2 text-lg">
          The best prices for over 2 million properties worldwide.
        </p>
      </section>

      {/* Filters Section */}
      <section className="flex gap-3 px-6 py-4 overflow-x-auto">
        {filters.map((filter, i) => (
          <Pill key={i} label={filter} />
        ))}
      </section>

      {/* Listings Section */}
      <section className="px-6 py-8">
        {loading && (
          <p className="text-center py-8">Loading properties...</p>
        )}

        {error && (
          <p className="text-red-500 text-center py-8">{error}</p>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;
