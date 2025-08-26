// components/booking/CancellationPolicy.tsx
import React from "react";

const CancellationPolicy: React.FC = () => {
  return (
    <div className="mt-6 bg-white p-6 shadow-md rounded-lg">
      {/* Cancellation Policy */}
      <h2 className="text-xl font-semibold">Cancellation Policy</h2>
      <p className="mt-2 text-gray-600">
        Free cancellation before <span className="font-medium">Aug 23</span>.
        Cancel before check-in on <span className="font-medium">Aug 24</span>{" "}
        for a partial refund.
      </p>

      {/* Ground Rules */}
      <h2 className="text-xl font-semibold mt-6">Ground Rules</h2>
      <ul className="mt-2 text-gray-600 list-disc list-inside space-y-1">
        <li>Follow the house rules.</li>
        <li>Treat your host’s home like your own.</li>
        <li>No loud parties or disruptive behavior.</li>
        <li>Respect neighbors and community guidelines.</li>
      </ul>
    </div>
  );
};

export default CancellationPolicy;
