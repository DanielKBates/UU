import React, { useEffect } from "react";

const people = [
  {
    name: "Lucas Barnhardt",
    role: "Founder / President",
    imageUrl: "/assets/images/lucas.jpg",
  },
  {
    name: "Wes Watts",
    role: "Event Planning",
    imageUrl: "/assets/images/wes.jpg",
  },
  {
    name: "Sean Gartley",
    role: "Co-Founder/ Vice President",
    imageUrl: "/assets/images/sean.jpg",
  },
  {
    name: "Charles Haddock",
    role: " Brand Exposure ",
    imageUrl: "/assets/images/charlesH.jpg",
  },
  {
    name: "Dixon Bradbury",
    role: " Treasurer and Community Service Co-Chair ",
    imageUrl: "/assets/images/dixon.png",
  },
];

function About() {

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
              Founded in 2021, the Uptown Ultras started organically when two
              friends Lucas Barnhardt and Sean Gartley realized that most of the
              Charlotte FC fans they knew were in the supporters section and did
              not have a group to affiliate with. We quickly formed a group and
              worked to build the group we have here today.
            </p>
            <p className="text-xl text-gray-500">
              We are a social group of all types of soccer fans that are
              commited to celebrating, supporting, and motivating our team. We
              are inclusive of all peoples and we are dedicated to strengthening
              our community and our team.
            </p>
            <p className="text-xl text-gray-500">
              If you're Charlotte FC's biggest fan, or someone new to soccer
              fandom, there is a spot for you in the Ultras.
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
