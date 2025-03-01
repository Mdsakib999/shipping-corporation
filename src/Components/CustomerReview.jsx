import React from "react";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    img: "https://images.unsplash.com/photo-1508341591423-4347099e1f19?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Jane Doe",
    company: "Acme Inc.",
    review:
      "This service is lit! Super fast and reliable. Highly recommended for anyone who values quality and efficiency.",
    rating: 5,
  },
  {
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      <h2 className="text-3xl font-semibold text-center mb-12">
        What Our Customers Say
      </h2>
      <div className="max-w-4xl flex justify-center mx-auto">
        {reviews.map((review, index) => {
          const cardBgClass = index % 2 === 0 ? "bg-gray-100" : "bg-[#004F98]";
          const textColorClass =
            index % 2 === 0 ? "text-gray-800" : "text-white";
          const secondaryTextClass =
            index % 2 === 0 ? "text-gray-500" : "text-blue-200";
          return (
            <div
              key={index}
              className={`${cardBgClass} shadow-lg p-6 rounded-2xl min-h-[250px] max-w-sm mx-auto flex flex-col`}
            >
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full mr-4 overflow-hidden">
                  <img
                    src={review.img}
                    alt={review.name}
                    className="w-full h-full object-cover"
                  />
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
              <p className={`mb-4 ${textColorClass} flex-1`}>{review.review}</p>
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
