import React from "react";
import { useParams } from "react-router-dom";
import events from "../components/utils/events";

function Event() {
  let { event } = useParams();
  const currentEvent = events.filter(e => e.path === event)
  console.log(currentEvent);
  return (
    <div className="pt-28 pb-10">
      <div className="flex flex-col md:flex-row w-full md:w-11/12 mx-auto bg-white bg-opacity-50 rounded-lg">
        <div className="md:w-1/3">
          <img
            src={currentEvent[0].imagePath}
            width="100%"
            className=" rounded-l-lg"
          />
        </div>

        <div className="px-5 py-4 flex flex-col md:w-2/3">
          <h2 className="font-display text-3xl text-blue-400 uppercase">
            {currentEvent[0].title}
          </h2>
          <p className="py-6 text-lg">
          {currentEvent[0].desc}
          </p>
          <p className="py-6 text-lg">
          {currentEvent[0].desc}
          </p>
          {currentEvent[0].href ? <>
          <span className="py-2 text-xl text-blue-700">Check out this event's page: </span>
          <a
            className=" text-blue-400 cursor-pointer"
            href={currentEvent[0].href}
          >
            {currentEvent[0].href}
          </a> </>: ""}
        </div>
      </div>
    </div>
  );
}

export default Event;
