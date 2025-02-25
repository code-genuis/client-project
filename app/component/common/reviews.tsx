"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Computer Science Student",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    content:
      "The curriculum is incredibly well-structured and the support from mentors is outstanding. I've learned more in months than I did in years of self-study.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Data Science Major",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    content:
      "The practical projects really helped me understand complex concepts. The community is incredibly supportive and always ready to help.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Web Development Student",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    content:
      "I landed my dream job thanks to the skills I gained here. The real-world applications and industry insights were invaluable.",
    rating: 5,
  },
];

function ReviewsSlider() {
  const [currentReview, setCurrentReview] = useState(0);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className=" bg-transparent">
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentReview * 100}%)` }}
              >
                {reviews.map((review) => (
                  <div key={review.id} className="w-full flex-shrink-0 px-4">
                    <div className="bg-gray-50 rounded-2xl shadow-lg p-8 md:p-12">
                      <div className="flex flex-col md:flex-row items-center gap-6">
                        <img
                          src={review.image}
                          alt={review.name}
                          className="w-24 h-24 rounded-full object-cover"
                        />
                        <div className="flex-1 text-center md:text-left">
                          <div className="flex justify-center md:justify-start mb-3">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star
                                key={i}
                                className="w-5 h-5 fill-yellow-400 text-yellow-400"
                              />
                            ))}
                          </div>
                          <p className="text-gray-600 text-lg mb-6">
                            {review.content}
                          </p>
                          <h3 className="font-semibold text-xl text-primary">
                            {review.name}
                          </h3>
                          <p className="text-gray-500">{review.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              title="icon"
              type="button"
              onClick={prevReview}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-primary rounded-full shadow-lg hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="w-10 h-10 p-2 text-white hover:text-secondary" />
            </button>

            <button
              title="icon"
              type="button"
              onClick={nextReview}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-primary rounded-full shadow-lg hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="w-10 h-10 p-2 text-white hover:text-secondary" />
            </button>
          </div>

          <div className="flex justify-center mt-6 gap-2">
            {reviews.map((_, index) => (
              <button
                title="icon"
                type="button"
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentReview === index ? "bg-secondary" : "bg-gray-300"
                }`}
                onClick={() => setCurrentReview(index)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ReviewsSlider;
