import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-5  px-5 sm:px-16">
      <div className="">
        <img
          className=" w-28 md:w-44"
          src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
          alt="netflix logo"
        />
      </div>
      <div className="">
        <select className="  mr-4 sm:mr-8 text-center border border-white bg-transparent text-white text-sm w-20 h-7 sm:w-20 sm:h-9">
          <option>English</option>
          <option>हिन्दी</option>
        </select>
        <button className="bg-red-600 rounded text-white h-7 w-16 sm:h-9 sm:w-20">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
