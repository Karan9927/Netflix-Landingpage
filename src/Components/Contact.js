import React from "react";

const Contact = () => {
  return (
    <div className=" sm:px-20 px-10 text-gray-500 h-full bg-black border-b-8 border-gray-800">
      <h1 className="pt-12 pb-10">Questions? Call 000-800-919-16XX</h1>
      <div className="flex justify-between  leading-8 text-xs">
        <ul className="">
          <li>FAQ</li>
          <li>Investor Relations</li>
          <li>Privacy</li>
          <li>Speed Test</li>
        </ul>
        <ul className="">
          <li>Help Centre</li>
          <li>Jobs</li>
          <li>Cookie Preferences</li>
          <li>Legal Notices</li>
        </ul>
        <ul className="">
          <li>Account</li>
          <li>Ways to Watch</li>
          <li>Corporate information</li>
          <li>Only on Netflix</li>
        </ul>
        <ul className="">
          <li>Media Centre</li>
          <li>Terms of Use</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="py-5 p">
        <select className="text-center border border-white bg-transparent text-white text-sm w-20 h-7 sm:w-20 sm:h-9">
          <option>English</option>
          <option>हिन्दी</option>
        </select>
      </div>
      <ul className="pb-8">
        <li>Netflix India</li>
      </ul>
    </div>
  );
};

export default Contact;
