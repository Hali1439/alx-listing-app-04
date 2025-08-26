// pages/api/properties/[id]/reviews.ts
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  // Mock data (you can later fetch from DB)
  const reviews = [
    {
      id: "1",
      author: "Alice",
      rating: 5,
      comment: "Fantastic property, highly recommend!",
      date: "2024-08-01",
    },
    {
      id: "2",
      author: "Bob",
      rating: 4,
      comment: "Very comfortable stay, but a bit pricey.",
      date: "2024-08-10",
    },
  ];

  // Just return all reviews for now (you could filter by id later)
  res.status(200).json(reviews);
}
