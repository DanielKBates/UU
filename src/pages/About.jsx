import React, { useEffect } from "react";
import axios from "axios";

const people = [
  {
    name: "Lucas Barnhardt",
    role: "Founder / President",
    imageUrl: "/assets/images/lucas.jpg",
    email: "lucasbarnhardt.uptownultras@gmail.com",
  },
  {
    name: "Wes Watts",
    role: "Event Planning",
    imageUrl: "/assets/images/wes.jpg",
    email: "email@email.com",
  },
  {
    name: "Sean Gartley",
    role: "Co-Founder/ Vice President",
    imageUrl: "/assets/images/sean.jpg",
    email: "email@email.com",
  },
  {
    name: "Charles Haddock",
    role: " Brand Exposure ",
    imageUrl: "/assets/images/charlesH.jpg",
    email: "email@email.com",
  },
];

function About() {
  axios.defaults.withCredentials = true
  useEffect(async () => {
    const res = await axios.get(
      "https://uuexpress.herokuapp.com/api/test/test-cookie",
      // { withCredentials: true }
    );
    console.log(res);
  }, []);
  return (
    <div className="bg-white pt-24 ">
      <div className="flex justify-center items-start w-full ">
        <img
          src="/assets/images/altLogo1.png"
          className="object-cover h-70"
        ></img>
      </div>
      <div className="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-12">
        <div className="space-y-8 sm:space-y-12">
          <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-blue-500">
              About Us
            </h2>
            <p className="text-xl text-gray-500">
              We are a social group of all types of soccer fans that are
              commited to celebrating, supporting, and motivating our team. We
              are inclusive of all peoples and we are dedicated to strengthening
              our community and our team.
            </p>
          </div>
          <ul className="mx-auto w-11/12 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-6">
            {people.map((person) => (
              <li key={person.name}>
                <div className="space-y-4">
                  <img
                    className="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24"
                    src={person.imageUrl}
                    alt=""
                  />
                  <div className="space-y-2">
                    <div className="text-xs font-medium lg:text-sm">
                      <h3>{person.name}</h3>
                      <p className="text-blue-600">{person.role}</p>
                      {/* <p className="text-gray-400">{person.email}</p> */}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-blue-500 mt-8">
            Contact Us
          </h2>
          <p className="text-xl text-gray-500">
            Email us at UptownUltras@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
