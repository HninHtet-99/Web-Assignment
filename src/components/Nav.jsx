import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useTheme from "../hooks/useTheme";
import dark from "../assets/dark.svg";
import light from "../assets/light.svg";

export default function Nav() {
  const [search, setSearch] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { isDark, changeTheme } = useTheme();

  const handleSearch = () => {
    navigate("/?search=" + search);
    setSearch("");
    setIsMenuOpen(false); // Close menu on search
  };

  return (
    <nav
      className={`border border-b-1 ${
        isDark ? "bg-darkbg border-primary" : "bg-white"
      }`}
    >
      <ul className="flex justify-between items-center max-w-6xl p-3 mx-auto">
        <li className="flex items-center gap-3">
          {/* Updated Search Box */}
          <div className="flex items-center border border-primary rounded-full shadow-sm w-full lg:w-auto">
            {/* Input visible on larger screens */}
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search..."
              className="bg-transparent outline-none text-sm flex-grow px-2 py-1 hidden lg:block"
            />
            {/* Search button or icon */}
            <button
              onClick={handleSearch}
              className="text-primary font-medium px-3 py-1 flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </button>
          </div>
        </li>
        <Link to="/" className="flex items-center gap-3  cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`size-6 ${isDark ? "text-white" : ""}`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>

          <span className="text-2xl font-bold text-primary hidden md:block">
            Book Store
          </span>
        </Link>
        <li className="flex gap-3 items-center">
          <Link
            to="/create"
            className="flex items-center text-white bg-primary px-3 py-2 rounded-2xl gap-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <span className="hidden md:block">Create Book</span>
          </Link>
          {/* <div className="h-8 w-8">
            <img
              src="https://d27v83ov1up738.cloudfront.net/user-profiles/CCjNsU6jwCkUSwufCVypDtMADqWeIPWzNBdNjfGr.jpg"
              alt=""
              className="h-full w-full rounded-full"
            />
          </div> */}

          <div className="cursor-pointer">
            {!isDark && (
              <img
                src={dark}
                alt=""
                className="w-5"
                onClick={() => changeTheme("dark")}
              />
            )}
            {isDark && (
              <img
                src={light}
                alt=""
                className="w-5"
                onClick={() => changeTheme("light")}
              />
            )}
          </div>
        </li>
      </ul>
    </nav>
  );
}
