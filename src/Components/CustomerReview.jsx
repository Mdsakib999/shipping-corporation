import React from "react";
import { FaStar } from "react-icons/fa";

// Review data defined outside the component
const reviews = [
  {
    name: "Jane Doe",
    company: "Acme Inc.",
    review:
      "This service is lit! Super fast and reliable. Highly recommended for anyone who values quality and efficiency.",
    rating: 5,
  },
  {
    name: "John Smith",
    company: "Beta Corp.",
    review:
      "Really impressed with the quality of support. Totally recommend this service for smooth operations.",
    rating: 4,
  },
];

const CustomerReview = () => {
  return (
    <div className="py-16 container mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12">
        What Our Customers Say
      </h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 h-70">
        {reviews.map((review, index) => {
          // Alternate background: even index = white, odd index = blue
          const cardBgClass = index % 2 === 0 ? "bg-gray-100" : "bg-[#004F98]";
          // Set text color based on background for readability
          const textColorClass =
            index % 2 === 0 ? "text-gray-800" : "text-white";
          const secondaryTextClass =
            index % 2 === 0 ? "text-gray-500" : "text-blue-200";
          return (
            <div
              key={index}
              className={`${cardBgClass} shadow-lg p-6 rounded-2xl`}
            >
              <div className="flex items-center mb-4">
                <div
                  className={`w-20 h-20 rounded-full flex items-center justify-center font-bold mr-4 bg-orange-500 text-white`}
                >
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className={`font-semibold ${textColorClass}`}>
                    {review.name}
                  </p>
                  <p className={`text-sm ${secondaryTextClass}`}>
                    {review.company}
                  </p>
                </div>
              </div>
              <p className={`mb-4 ${textColorClass}`}>{review.review}</p>
              <div className="flex gap-2">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <FaStar
                    key={i}
                    className={
                      index % 2 === 0 ? "text-yellow-500" : "text-yellow-300"
                    }
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CustomerReview;
