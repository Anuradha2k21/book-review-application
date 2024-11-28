import { useState, useEffect } from "react";
import axios from "axios";
import ReviewList from "./components/ReviewList";
import ReviewForm from "./components/ReviewForm";

const API_BASE_URL = "http://localhost:8000/api";

export default function App() {
  const [reviews, setReviews] = useState([]);
  const [editingReview, setEditingReview] = useState(null);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/reviews/`);
      setReviews(response.data);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  const handleCreateReview = async (reviewData) => {
    try {
      await axios.post(`${API_BASE_URL}/reviews/`, reviewData);
      fetchReviews();
      setEditingReview(null);
    } catch (error) {
      console.error("Error creating review:", error);
    }
  };

  const handleUpdateReview = async (id, reviewData) => {
    try {
      await axios.put(`${API_BASE_URL}/reviews/${id}/`, reviewData);
      fetchReviews();
      setEditingReview(null);
    } catch (error) {
      console.error("Error updating review:", error);
    }
  };

  const handleDeleteReview = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/reviews/${id}/`);
      fetchReviews();
    } catch (error) {
      console.error("Error deleting review:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Book Reviews</h1>
        <ReviewForm
          onSubmit={handleCreateReview}
          editingReview={editingReview}
          onUpdate={handleUpdateReview}
        />
        <ReviewList
          reviews={reviews}
          onEdit={setEditingReview}
          onDelete={handleDeleteReview}
        />
      </div>
    </div>
  );
}
