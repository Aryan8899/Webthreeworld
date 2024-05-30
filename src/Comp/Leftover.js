import React from 'react';
import pic1 from "./pic1.png";

const SubscribeSection = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 py-12 px-4 sm:px-7 lg:px-8">
      <div className="max-w-7xl mx-auto lg:flex lg:items-center lg:justify-between">
        <div className="lg:w-0 lg:flex-1">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
            Stay on top of crypto. All the time, any time.
          </h2>
          <p className="mt-3 max-w-3xl text-lg text-gray-700 dark:text-gray-300">
            Please keep me updated by email with the latest crypto news, research findings, reward programs, event updates, coin listings and more information from CoinMarketCap.
          </p>
          <div className="mt-6 flex sm:flex-row space-x-3">
            <input
              type="email"
              placeholder="Enter your e-mail address"
              className="w-medium sm:w-auto px-5 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-base text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              className="w-medium sm:w-auto px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Subscribe
            </button>
          </div>
        </div>
        <div className="mt-8 lg:mt-0 lg:ml-8">
          <img
            className="mx-auto h-64 w-auto"
            src={pic1}
            alt="Illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default SubscribeSection;
