import React, { useState, useEffect } from "react";
import axios from "axios";
import Soccer from "./Soccer";
import { Link } from "react-router-dom";

function FeatEvent() {
  const initialState = { imagePath: "", title: "", path: "", desc: "" };
  const [event, setEvent] = useState(initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: res } = await axios.get("https://uuexpress.herokuapp.com/api/events/featured");
        setEvent(res);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);
  // reads `tab` state and conditionally renders. Will need to optimize for various async API calls.

  return (
    //   Events - we will be mapping over an array of events, with the most recent/important (events[0]) taking the largest card and the next 3-4 events
    //   in the array being mapped onto the smaller cards. We will need to implement an admin panel for CLIENT to be able to add events and thus update the site.
    <div className=" flex flex-row py-6 justify-between w-full">
      {/* Events */}
      <div className="flex flex-col w-full md:w-1/2">
        <div className="bg-white bg-opacity-50 rounded-lg h-full ">
          <img
            src={event.imagePath}
            width="100%"
            className="m-auto cursor-pointer rounded-t-lg"
          />
          <div className="px-5 py-4 ">
            <Link to="events/0k-charity">
              <h2 className="cursor-pointer text-3xl text-blue-400 uppercase">
                {event.title}
              </h2>
            </Link>
            <p className="p-2 text-lg">
              {event.desc?.length > 200
                ? event.desc.substring(0, 200) + "..."
                : event.desc}
            </p>
          </div>
        </div>
      </div>
      <div className="w-5/12 ">
        <Soccer />
      </div>
    </div>
  );
}

export default FeatEvent;
