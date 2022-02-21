import React from "react";
import { Link } from "react-router-dom";
import {
  CalendarIcon,
  FireIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import { ExternalLinkIcon } from "@heroicons/react/solid";
import FeatEvent from "../components/FeatEvent";
import AnimatedCard from "../components/AnimatedCard";
const features = [
  {
    name: "Join us for events",
    description:
      "Away game watch parties, home game tailgates, charity events, and much more!",
    icon: CalendarIcon,
  },
  {
    name: "Connect with fellow fans",
    description:
      "Join like-minded fans in cheering on the team and making a difference in the community.",
    icon: UserGroupIcon,
  },
  {
    name: "Be a part of the Hype",
    description:
      "Join a supporter's group so you can help control the atmosphere in the stadium and use the power of soccer to bring people together.",
    icon: FireIcon,
  },
];

function Home() {
  return (
    <main className="pb-2 lg:pb-4 xl:pb-12 pt-28 md:pt-36">
      <div className="pb-12 px-4 xl:px-12 pt-2 rounded-lg bg-black sm:pt-16 lg:pt-8 lg:pb-14">
        <div className="mx-auto lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-6 rounded-xl">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
              <div className="lg:py-24 ">
                <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                  <span className="block animate-fadeIn text-center md:text-left">It's Time</span>
                  <span className="pb-3 text-center md:text-left block animate-fadeInLong text-blue-400 sm:pb-5 font-rockSalt py-4 ">
                    To Get Hype
                  </span>
                </h1>
                <p className=" animate-fadeInLong text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl">
                  Sign up now and join us on the historic journey that is
                  Charlotte FC's first MLS season!
                </p>
                <div className="mt-10 sm:mt-12 flex justify-center md:justify-start">
                  <Link to="/signup" className=" w-1/2">
                    <button className="bg-blue-400 p-4 w-full font-bold text-white rounded-lg animate-fadeInLong">
                      Sign Up!
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className=" mt-12 xl:mt-20  w-full">
              <div className="mx-auto flex flex-col max-w-md  px-4 sm:max-w-2xl sm:px-6 lg:px-0">
                <img
                  className="w-full rounded-md lg:h-full border-4 border-blue-400"
                  src="/assets/images/cfc.jpg"
                  alt=""
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Events */}
      <FeatEvent />

      {/* Feature section with grid */}
      <AnimatedCard
        threshold={0.25}
        activeClassName="transition-all duration-500 ease-in transform opacity-1"
        inactiveClassName="transition-all duration-500 ease-in transform opacity-0"
      >
        <div className="relative rounded-t-lg bg-white py-16 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
            <p className="mt-2 text-4xl font-extrabold text-blue-400  sm:text-6xl">
              Part of the ship, Part of the crew
            </p>
            {/* <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
              Phasellus lorem quam molestie id quisque diam aenean nulla in.
              Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend
              condimentum id viverra nulla.
            </p> */}
            <div className=" mt-14 md:mt-32">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {features.map((feature) => (
                  <div key={feature.name} className="pt-6">
                    <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                      <div className="-mt-6">
                        <div>
                          <span className="inline-flex items-center justify-center p-3 bg-teal-300 rounded-md shadow-lg">
                            <feature.icon
                              className="h-10 w-10 text-white"
                              aria-hidden="true"
                            />
                          </span>
                        </div>
                        <h3 className="mt-8 text-2xl font-medium text-blue-400 tracking-tight">
                          {feature.name}
                        </h3>
                        <p className="mt-5 text-xl text-gray-700">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AnimatedCard>
      {/* CTA Section - CFC, Tickets, and Charlotte */}

      {/* CFC and ticketmaster? links - BOA image bg */}
      <div className="relative bg-blue-500">
        <div className="relative h-56  sm:h-72 md:absolute md:right-0 md:h-full md:w-1/2">
          <img
            className="w-full h-full object-cover"
            src="/assets/images/CLTCFC_BOA.jpg"
            alt=""
            loading="lazy"
          />
        </div>
        <div className="relative mx-auto max-w-md px-4 py-12 sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32">
          <div className="md:mr-auto md:w-1/2 md:pr-10">
            <h2 className="text-base font-semibold uppercase tracking-wider text-white">
              Check out the club
            </h2>
            <p className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">
              Make your way to BOA
            </p>
            <p className="mt-3 text-lg text-white">
              Come join us for the for the first ever season of Charlotte FC.
              With 17 home games, there are plenty of opportunities to fall in
              love with Charlotte FC and the gameday experience. Click the links
              below to learn more about the team or to purchase single game
              tickets.
            </p>
            <div className="mt-8">
              <div className="inline-flex space-x-2 rounded-md shadow">
                <a
                  href="https://www.charlottefootballclub.com/"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 hover:text-white bg-white group ring-0 hover:bg-blue-400 hover:ring-2 hover:ring-white"
                >
                  CFC club site
                  <ExternalLinkIcon
                    className="-mr-1 ml-3 h-5 w-5 text-gray-400 group-hover:text-white"
                    aria-hidden="true"
                  />
                </a>
                <a
                  href="https://www.charlottefootballclub.com/tickets/"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 hover:text-white bg-white group hover:bg-blue-400"
                >
                  Buy tickets
                  <ExternalLinkIcon
                    className="-mr-1 ml-3 h-5 w-5 text-gray-400 group-hover:text-white"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-gray-900">
        <div className="relative h-56  sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
          <img
            className="w-full h-full object-cover"
            src="https://tekjumpbucket.s3.amazonaws.com/AdobeStock_460921344.jpeg"
            alt=""
            loading="lazy"
          />
        </div>
        <div className="relative mx-auto max-w-md px-4 py-12 sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32">
          <div className="md:ml-auto md:w-1/2 md:pl-10">
            <h2 className="text-base font-semibold uppercase tracking-wider text-gray-300">
              Explore
            </h2>
            <p className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">
              The Queen City
            </p>
            <p className="mt-3 text-lg text-gray-300">
              Whether you're in town just for the game or are a local who has
              lived here for years, there's always something new going on in
              Charlotte. Click the link below to find out about local events,
              restaurants, and places to stay around the QC.
            </p>
            <div className="mt-8">
              <div className="inline-flex rounded-md shadow">
                <a
                  href="https://www.charlottesgotalot.com/"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white group hover:bg-gray-50"
                >
                  Charlotte's Got A Lot
                  <ExternalLinkIcon
                    className="-mr-1 ml-3 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
