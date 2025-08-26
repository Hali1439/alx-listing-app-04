// components/property/ReviewSection.tsx
import axios from "axios";
import { useState, useEffect } from "react";

interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

export default function ReviewSection({ propertyId }: { propertyId: string }) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!propertyId) return;

    const fetchReviews = async () => {
      try {
        const response = await axios.get(`/api/properties/${propertyId}/reviews`);
        setReviews(response.data);
      } catch (err) {
        console.error("Error fetching reviews:", err);
        setError("Failed to load reviews.");
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [propertyId]);

  if (loading) {
    return <p className="text-gray-500">Loading reviews...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (reviews.length === 0) {
    return <p className="text-gray-500">No reviews yet.</p>;
  }

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-4">Guest Reviews</h2>
      <div className="space-y-4">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="p-4 border rounded-lg bg-white shadow-sm"
          >
            <div className="flex items-center justify-between mb-2">
              <p className="font-semibold">{review.author}</p>
              <span className="text-yellow-500">
                {"★".repeat(review.rating)}{" "}
                <span className="text-gray-400">
                  {"★".repeat(5 - review.rating)}
                </span>
              </span>
            </div>
            <p className="text-gray-700">{review.comment}</p>
            <p className="text-sm text-gray-400 mt-2">
              {new Date(review.date).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
