import React from "react";

export default function Card(props) {
  return (
    <div className={props.style}>
      <div className=" sm:w-auto ">
        <h1 className=" text-white sm:text-4xl font-bold pb-5 text-center text-3xl md:text-5xl">
          {props.h1}
        </h1>
        <p className="text-white text-center font-semibold sm:text-xl text-xl px-1 sm:px-8 md:text-2xl">
          {props.p}
        </p>
      </div>
      <div className="image">
        <img className="p-5 md:p-5 sm:w-auto" src={props.img} />
      </div>
    </div>
  );
}
