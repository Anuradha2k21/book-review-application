import { useState, useEffect } from "react";
import { StarIcon } from "@heroicons/react/solid";

export default function ReviewForm({ onSubmit, editingReview, onUpdate }) {
  const [formData, setFormData] = useState({
    book_title: "",
    author: "",
    rating: 5,
    review_text: "",
  });

  useEffect(() => {
    if (editingReview) {
      setFormData(editingReview);
    }
  }, [editingReview]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingReview) {
      onUpdate(editingReview.id, formData);
    } else {
      onSubmit(formData);
    }
    setFormData({ book_title: "", author: "", rating: 5, review_text: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Book Title
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
          type="text"
          value={formData.book_title}
          onChange={(e) =>
            setFormData({ ...formData, book_title: e.target.value })
          }
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Author
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
          type="text"
          value={formData.author}
          onChange={(e) => setFormData({ ...formData, author: e.target.value })}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Rating
        </label>
        <div className="flex items-center">
          {[1, 2, 3, 4, 5].map((star) => (
            <StarIcon
              key={star}
              className={`h-6 w-6 cursor-pointer ${
                star <= formData.rating ? "text-yellow-500" : "text-gray-300"
              }`}
              onClick={() => setFormData({ ...formData, rating: star })}
            />
          ))}
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Review
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
          rows="4"
          value={formData.review_text}
          onChange={(e) =>
            setFormData({ ...formData, review_text: e.target.value })
          }
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        {editingReview ? "Update Review" : "Add Review"}
      </button>
    </form>
  );
}
