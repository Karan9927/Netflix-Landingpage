import React from "react";

const Drop = () => {
  return (
    <div className="text-center h-full bg-black border-b-8 border-gray-800">
      <h1 className="text-white sm:text-4xl text-2xl font-semibold sm:py-12 py-6">
        Frequently Asked Questions
      </h1>
      <div className="">
        <ul className="p-1 ">
          <button className="text-white text-left bg-gray-800 sm:h-auto sm:w-4/5 p-5 sm:text-2xl w-full text-xl">
            What is Netflix?
          </button>
        </ul>
        <ul className="p-1">
          <button className="text-white text-left bg-gray-800 sm:h-auto sm:w-4/5 p-5 sm:text-2xl w-full text-xl">
            How much does Netlfix cost?
          </button>
        </ul>
        <ul className="p-1">
          <button className="text-white text-left bg-gray-800 sm:h-auto sm:w-4/5 p-5 sm:text-2xl w-full text-xl">
            Where can I watch?
          </button>
        </ul>
        <ul className="p-1">
          <button className="text-white text-left bg-gray-800 sm:h-auto sm:w-4/5 p-5 sm:text-2xl w-full text-xl">
            How do I cancel?
          </button>
        </ul>
        <ul className="p-1">
          <button className="text-white text-left bg-gray-800 sm:h-auto sm:w-4/5 p-5 sm:text-2xl w-full text-xl">
            What can I watch on Netflix?
          </button>
        </ul>
        <ul className="p-1">
          <button className="text-white text-left bg-gray-800 sm:h-auto sm:w-4/5 p-5 sm:text-2xl w-full text-xl">
            Is Netflix good for kids?
          </button>
        </ul>
      </div>
      <div className="text-white text-center pt-14">
        <p className="text-xl px-16 sm:px-28 md:px-20">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
      </div>
      <div className="text-white pb-12">
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
    </div>
  );
};

export default Drop;
