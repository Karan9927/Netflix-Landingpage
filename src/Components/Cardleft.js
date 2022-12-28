import React from "react";

export default function Card(props) {
  return (
    <div className={props.style}>
      <div className="image">
        <img className="p-5 md:p-5 md:w-4/5 sm:w-auto" src={props.img} />
      </div>
      <div className=" sm:w-auto">
        <h1 className=" text-white sm:text-4xl font-bold pb-5 text-center text-5xl sm:px-16 md:px-0 md:text-5xl">
          {props.h1}
        </h1>
        <p className="text-white text-center font-semibold sm:text-xl text-xl px-1 sm:px-8 sm:pb-5 md:text-xl">
          {props.p}
        </p>
      </div>
    </div>
  );
}
