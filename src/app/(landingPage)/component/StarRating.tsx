
import React from "react";

type StarRatingProps = {
  rating: number;
  max?: number;
  idPrefix?: string;
};

const StarRating: React.FC<StarRatingProps> = ({ rating, max = 5, idPrefix = "star" }) => {
  return (
    <div className="flex items-center sm:pl-2">
      {[...Array(max)].map((_, i) => (
        <span
          key={`${idPrefix}-${i}`}
          className={`text-xs sm:text-sm ${
            i < Math.floor(rating) ? "text-[#ff8f08]" : "text-gray-400"
          }`}
        >
          ★
        </span>
      ))}
      <span className="ml-1 text-xs sm:text-sm font-semibold text-black">
        {rating}
      </span>
    </div>
  );
};

export default StarRating;
