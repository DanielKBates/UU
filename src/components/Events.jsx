import React from "react";
import Soccer from "./Soccer";
import { Link } from "react-router-dom";

function Events() {
  // reads `tab` state and conditionally renders. Will need to optimize for various async API calls.

  return (
    //   Events - we will be mapping over an array of events, with the most recent/important (events[0]) taking the largest card and the next 3-4 events
    //   in the array being mapped onto the smaller cards. We will need to implement an admin panel for CLIENT to be able to add events and thus update the site.
    <div className=" flex flex-row py-6 justify-around w-full">
      {/* Events */}
      <div className="flex flex-col w-full md:w-3/5">
        <div className="bg-white bg-opacity-50 rounded-lg h-full ">
          <img
            src="/assets/images/uu_placeholder.jpeg"
            width="100%"
            className="m-auto cursor-pointer rounded-t-lg"
          />
          <div className="px-5 py-4 ">
            <Link to="events/0k-charity">
              <h2 className="cursor-pointer font-display text-3xl text-blue-400 uppercase">
                Check out our First Annual 0K For Charity!
              </h2>
            </Link>
            <p className="py-2 text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sit
              doloribus culpa obcaecati Race Eat Be Merry Much Soccer and
              Socializing Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Harum sit doloribus culpa obcaecati Race Eat Be Merry Much
              Soccer and Socializing Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Harum sit doloribus culpa obcaecati Race Eat Be
              Merry Much Soccer and Socializing Lorem ipsum dolor sit amet
          ...
            </p>
          </div>
        </div>
      </div>
      <div className="w-1/3">
        <Soccer />
      </div>
    </div>
  );
}

export default Events;
