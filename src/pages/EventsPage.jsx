import React from "react";
import { Link } from "react-router-dom";
import events from "../components/utils/events";

function EventPage() {
  return (
    <div className="pt-24">
      <div className=" flex flex-row flex-wrap justify-around py-6 w-full">
        {/* Events */}
        {events.map((event) => (
          <div className="flex flex-col mt-2 w-full md:w-5/12 ">
            <Link to={event.path}>
              <div className="bg-white bg-opacity-50 rounded-lg h-full ">
                <img
                  src={event.imagePath}
                  width="100%"
                  className="m-auto cursor-pointer rounded-t-lg"
                />
                <div className="px-5 py-4 ">
                  <h2 className="cursor-pointer font-display text-3xl text-blue-400 uppercase">
                    {event.title}
                  </h2>
                  <p className="py-2">{event.desc.substring(0, 120)}...</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventPage;
