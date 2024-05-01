import React from "react";

const StarRating = ({ rating }) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            stars.push(
                <svg
                    key={i}
                    className="w-4 h-4 fill-current text-yellow-500"
                    viewBox="0 0 20 20"
                >
                    <path d="M10 1l2.5 6.5L19 7l-5 4.2L15.5 19 10 15.4 4.5 19l1.5-7.8L1 7l6.5.5L10 1z" />
                </svg>
            );
        } else {
            stars.push(
                <svg
                    key={i}
                    className="w-4 h-4 fill-current text-gray-300"
                    viewBox="0 0 20 20"
                >
                    <path d="M10 1l2.5 6.5L19 7l-5 4.2L15.5 19 10 15.4 4.5 19l1.5-7.8L1 7l6.5.5L10 1z" />
                </svg>
            );
        }
    }
    return <div className="flex items-center mt-2">{stars}</div>;
};

const Card = ({ title, rating, description }) => {
    return (
        <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md">
            <div className="p-4">
                <h2 className="text-lg font-semibold text-left text-red-950">
                    {title}
                </h2>

                <p className="text-gray-600 mt-2">{description}</p>
                <StarRating rating={rating} />

            </div>


        </div>
    );
};

export default Card;
