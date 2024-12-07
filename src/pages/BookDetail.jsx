import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import bookImg from "../assets/book-library.png";
import useTheme from "../hooks/useTheme";

export default function BookDetail() {
  let { id } = useParams();
  let {
    data: book,
    loading,
    error,
  } = useFetch(`http://localhost:3000/books/${id}`);
  let { isDark } = useTheme();

  return (
    <>
    {/* comments */}
      {error && <p className="text-center text-red-500">{error}</p>}
      {loading && <p className="text-center text-gray-500">Loading...</p>}
      {book && (
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 p-6 max-w-6xl mx-auto ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          <div className="relative">
            <img
              src={book.image ? book.image : bookImg}
              alt={book.title}
              className="w-auto h-96 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
            />
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl font-bold">{book.title}</h1>
            <div className="flex flex-wrap gap-2">
              {book.categories.map((cat) => (
                <span
                  key={cat}
                  className="bg-primary text-white rounded-full py-1 px-3 text-sm cursor-pointer hover:bg-primary-dark transition"
                >
                  {cat}
                </span>
              ))}
            </div>
            <p className="text-lg">{book.description}</p>
            {/* <div className="mt-6">
              <button
                className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300"
                onClick={() => alert('Add to Cart functionality')}
              >
                Add to Cart
              </button>
            </div> */}
          </div>
        </div>
      )}
    </>
  );
}
