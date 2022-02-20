import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function EventPage() {
  const [events, setEvents] = useState({});
  const [loading, setLoading] = useState("loading");
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading("loading");
        const { data: res } = await axios.get("https://uuexpress.herokuapp.com/api/events");
        const filtered = res.filter(
          (event) => event._id !== "6203e5952efbeece805886b9"
        );
        setEvents(filtered);
        setLoading("done");
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, []);

  const displayEvents = () => {
    const eCopy = events;
    eCopy.sort((b, a) => a.featured - b.featured);
    console.log(eCopy);
    return eCopy.map((event) => (
      <div className="flex flex-col  mt-2 w-full h-fit md:w-5/12">
        <Link to={"/events" + event.path}>
          <div className="bg-white  bg-opacity-50 rounded-lg h-full ">
            <img
              src={event.imagePath}
              className="mx-auto p-4 cursor-pointer w-2/3 object-contain"
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
    ));
  };
  return (
    <div className="pt-24">
      {loading === "loading" ? (
        <div>Loading.. </div>
      ) : (
        <div className=" flex flex-row flex-wrap justify-around py-6 w-full">
          {/* Static Tailgate Event */}
          <div className="flex flex-col mt-2 w-2/3 h-fit md:w-5/12 ">
            <Link to={"/events/home-game-tailgates"}>
              <div className="bg-white  bg-opacity-50 rounded-lg h-full">
                <img
                  src="https://tekjumpbucket.s3.amazonaws.com/UU_tailgate.JPG"
                  width="100%"
                  className="m-auto cursor-pointer rounded-t-lg "
                />
                <div className="px-5 py-4 ">
                  <h2 className="cursor-pointer font-display text-3xl text-blue-400 uppercase">
                    Join us for Home Game Tailgates!
                  </h2>
                  <p className="py-2">
                    Join us every home game to get together and prepare for the
                    game in true tailgate fashion! We'll have games, and plenty of fellow fans to talk CFC with!
                  </p>
                </div>
              </div>
            </Link>
          </div>
          {displayEvents()}
        </div>
      )}
    </div>
  );
}

export default EventPage;
