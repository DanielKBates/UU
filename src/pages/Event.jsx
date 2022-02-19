import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Event() {
  let { event } = useParams();
  console.log(event);
  const [currentEvent, setCurrentEvent] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://uuexpress.herokuapp.com/api/events/single-event/" + event
        );
        setCurrentEvent(res.data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="pt-36 pb-10 ">
      
      <div className="flex flex-col md:flex-row w-full md:w-11/12 justify-between bg-white bg-opacity-50 rounded-lg">
        <div className="md:w-1/4">
          <img
            src={currentEvent.imagePath}
            className=" rounded-l-lg"
          />
        </div>

        <div className="px-5 py-4 flex flex-col md:w-2/3">
          <h2 className="font-display text-4xl underline text-blue-400 uppercase">
            {currentEvent.title}
          </h2>
          <p className="py-6 text-lg">
          {currentEvent.desc}
          </p>
          {currentEvent.addDesc ? 
          <p className="py-6 text-lg">
          {currentEvent.addDesc}
          </p> : ""}
          {currentEvent.href ? <>
          <span className="py-2 text-xl text-blue-700">Check out this event's page: </span>
          <a
            className=" text-blue-400 cursor-pointer"
            href={currentEvent.href}
          >
            {currentEvent.href}
          </a> </>: ""}
        </div>
      </div>
    </div>
  );
}

export default Event;
