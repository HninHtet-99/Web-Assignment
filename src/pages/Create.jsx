import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import useTheme from "../hooks/useTheme";

export default function Create() {
  let [title, setTitle] = useState("");
  let [description, setDescription] = useState("");
  let [category, setCategory] = useState("");
  let [newCategory, setNewCategory] = useState([]);
  let [image, setImage] = useState(null); // State for the image file
  let navigate = useNavigate();
  let { setPostData, data: newBook } = useFetch(
    "http://localhost:3000/books",
    "POST"
  );

  let addCategory = () => {
    if (category && newCategory.includes(category)) {
      setCategory("");
      return;
    }
    setNewCategory((preState) => [...preState, category]);
    setCategory("");
  };

  let addBook = (e) => {
    e.preventDefault();
    // Convert image to base64
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onloadend = () => {
      let book = {
        title,
        description,
        categories: newCategory,
        image: reader.result, // Include the image in the book data
      };
      return setPostData(book);
    };
  };

  useEffect(() => {
    if (newBook) {
      navigate("/");
    }
  }, [newBook]);

  let { isDark } = useTheme();

  return (
    <div className="h-screen">
      {/* <h1 className="text-center text-primary font-bold">Create New Book</h1> */}
      <form className="w-full max-w-lg mx-auto" onSubmit={addBook}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3 mb-6 md:mb-0">
            <label
              className={`block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ${
                isDark ? "text-white" : ""
              }`}
              htmlFor="grid-first-name"
            >
              Book Title
            </label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Book Title"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className={`block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ${
                isDark ? "text-white" : ""
              }`}
              htmlFor="grid-password"
            >
              Description
            </label>
            <input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="text"
              placeholder="Description"
            />
          </div>
        </div>
        <div className="flex flex-wrap mb-6">
          <div className="w-full">
            <label
              className={`block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ${
                isDark ? "text-white" : ""
              }`}
              htmlFor="grid-password"
            >
              Category
            </label>
            <div className="flex items-center space-x-2">
              <input
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="text"
                placeholder="Category"
              />
              <button
                type="button"
                onClick={addCategory}
                className="mb-3 p-1 bg-primary text-white rounded"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-wrap">
              {newCategory.map((genre) => (
                <span
                  key={genre}
                  className="mx-1 my-1 text-white bg-primary rounded-full py-1 px-2 text-sm"
                >
                  {genre}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Image Upload Field */}
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className={`block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ${
                isDark ? "text-white" : ""
              }`}
              htmlFor="book-image"
            >
              Upload Image
            </label>
            <input
              type="file"
              id="book-image"
              onChange={(e) => setImage(e.target.files[0])} // Set the image file
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
          </div>
        </div>

        <button
          type="submit"
          className="flex items-center justify-center text-white bg-primary px-3 py-2 rounded-2xl gap-1 w-full"
        >
          <span className="hidden md:block">Create Book</span>
        </button>
      </form>
    </div>
  );
}
