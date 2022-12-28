import React from "react";

const Header = () => {
  return (
    <div className="text-white text-center pb-8 sm:pb-44 md:pb-32 border-b-8 border-gray-800">
      <div>
        <p className=" text-3xl sm:text-5xl md:text-6xl font-bold pt-16 sm:pt-32 md:pt-40 sm:px-16 md:px-96">
          Unlimited movies, TV shows and more.
        </p>
        <p id="Watch" className=" text-xl sm:text-2xl md:text-3xl py-5">
          Watch anywhere. Cancel anytime.
        </p>
        <p className="text-xl px-16 sm:px-28 md:px-20">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
      </div>
      <div className="p-5 md:flex md:justify-center inline-block w-full">
        <input
          className=" w-full sm:w-10/12 md:w-2/6 md:h-16 p-3 mb-3"
          type="text"
          placeholder="Email address"
        />
        <button className=" bg-red-600 md:h-16 md:w-56 md:text-3xl font-semibold h-10 w-32 hover:bg-red-500">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Header;
