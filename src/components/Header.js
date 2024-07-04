import React from "react";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="bg-slate-200 shadow-md items-center m-auto p-3">
      <div className="flex justify-between items-center">
        <Link to={"/"}>
          <h1 className="flex font-bold text-sm sm:text-xl flex-wrap">
            <span className="text-slate-400">Property</span>
            <span className="text-slate-700">Channel</span>
          </h1>
        </Link>
        <form className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <IoSearch className="text-slate-600 text-lg" />
        </form>
        <ul className="flex gap-4">
          <Link to={"/"}>
            <li className="hidden sm:inline text-slate-700 hover:underline hover:font-bold hover:text-green-600">
              Home
            </li>
          </Link>
          <Link to={"/signIn"}>
            <li className=" text-slate-700 hover:underline hover:font-bold hover:text-green-600">
              SignIn
            </li>
          </Link>
          <Link to={"/signUp"}>
            <li className=" text-slate-700 hover:underline hover:font-bold hover:text-green-600">
              SignUp
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
};
export default Header;
