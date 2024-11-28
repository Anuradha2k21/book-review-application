import { StarIcon } from "@heroicons/react/solid";

export default function ReviewList({ reviews, onEdit, onDelete }) {
  return (
    <div className="space-y-4">
      {reviews.map((review) => (
        <div key={review.id} className="bg-white shadow-md rounded p-6">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                {review.book_title}
              </h2>
              <p className="text-gray-600">by {review.author}</p>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => onEdit(review)}
                className="text-blue-600 hover:text-blue-800"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(review.id)}
                className="text-red-600 hover:text-red-800"
              >
                Delete
              </button>
            </div>
          </div>
          <div className="flex items-center mt-2">
            {[...Array(5)].map((_, index) => (
              <StarIcon
                key={index}
                className={`h-5 w-5 ${
                  index < review.rating ? "text-yellow-500" : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <p className="mt-4 text-gray-700">{review.review_text}</p>
          <p className="mt-2 text-sm text-gray-500">
            {new Date(review.date_added).toLocaleDateString()}
          </p>
        </div>
      ))}
    </div>
  );
}
