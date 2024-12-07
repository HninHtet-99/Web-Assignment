import React from "react";
import bookImg from "../assets/book-library.png"; // default image
import useTheme from "../hooks/useTheme";

export default function SingleBook({ book }) {
  console.log(book);
  let { isDark } = useTheme();

  return (
    <div
      className={`p-4 border border-1 ${
        isDark ? "bg-darkCard border-primary text-white" : ""
      } flex flex-col h-full`}
    >
      {/* Correctly set image source */}
      <img
        src={book.image ? book.image : bookImg} // if book.image exists, use it; otherwise, use default bookImg
        alt={book.title}
      />
      <div className="text-center space-y-2 mt-3">
        <h1>{book.title}</h1>
        <p>{book.description}</p>
        <div className="flex flex-wrap">
          {book.categories.map((genre) => (
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
  );
}
