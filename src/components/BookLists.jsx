import React from "react";
import SingleBook from "./SingleBook";
import useFetch from "../hooks/useFetch";
import { Link, useLocation } from "react-router-dom";

export default function BookLists() {
  let location = useLocation();
  let params = new URLSearchParams(location.search);
  let search = params.get("search");
  let {
    data: books,
    loading,
    error,
  } = useFetch(`http://localhost:3000/books${search ? `?q=${search}` : ""}`);
  
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      {loading && <p className="text-center text-lg text-gray-600">Loading...</p>}
      {!!books && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 my-6">
          {books.map((book) => (
            <Link
              to={`/books/${book.id}`}
              key={book.id}
              className="group relative transform hover:scale-105 transition duration-300 ease-in-out"
            >
              <SingleBook book={book} />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
            </Link>
          ))}
        </div>
      )}
      {!books?.length && (
        <p className="text-center text-xl text-gray-500">
          No Search Result Found!
        </p>
      )}
    </>
  );
}
