import { Link } from "react-router-dom";
import {
  CalendarIcon,
  CloudUploadIcon,
  FireIcon,
  LockClosedIcon,
  RefreshIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import { ExternalLinkIcon } from "@heroicons/react/solid";


import Events from "../components/Events";
import Signup from "../pages/Signup";
import AnimatedCard from "../components/AnimatedCard";
const features = [
  {
    name: "Join us for events",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi vitae lobortis.",
    icon: CalendarIcon,
  },
  {
    name: "Connect with fellow fans",
    description:
      "Qui aut temporibus nesciunt vitae dicta repellat sit dolores pariatur. Temporibus qui illum aut.",
    icon: UserGroupIcon,
  },
  {
    name: "Be a part of the Hype",
    description:
      "Rerum quas incidunt deleniti quaerat suscipit mollitia. Amet repellendus ut odit dolores qui.",
    icon: FireIcon,
  },
];

function Home() {
  return (
    <main className="pb-2 lg:pb-4 xl:pb-12 pt-28 md:pt-36">
      {/* Splash CTA - probably separate into own component *BE* */}
      <div className="pb-12 px-12 pt-2 rounded-lg bg-black sm:pt-16 lg:pt-8 lg:pb-14">
        <div className="mx-auto lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 rounded-xl">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
              <div className="lg:py-24 ">
                <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                  <span className="block animate-fadeIn">It's Time</span>
                  <span className="pb-3 block animate-fadeInLong text-blue-400 sm:pb-5 font-rockSalt py-4 animate-fadeIn">
                    To Get Hype
                  </span>
                </h1>
                <p className=" animate-fadeIn text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui Lorem cupidatat commodo. Elit sunt amet fugiat veniam
                  occaecat fugiat.
                </p>
                <div className="mt-10 sm:mt-12 flex justify-center md:justify-start">
                  <Link to="/signup" element={Signup}></Link>
                  <button className="bg-blue-400 p-6 font-bold text-white rounded-lg">
                    Sign Up!
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-12 lg:m-0 lg:relative">
              <div className="mx-auto max-w-md pb-10 px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                <img
                  className="w-full rounded-md lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
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
      <Events />

      {/* Feature section with grid */}
      <AnimatedCard
        threshold={.50}
        activeClassName="transition-all duration 1400 ease-in transform opacity-1"
        inactiveClassName="transition-all duration 1400 ease-in transform opacity-0"
      >
        <div className="relative rounded-t-lg bg-white py-16 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
            <p className="mt-2 text-3xl font-extrabold text-blue-400 tracking-tight sm:text-4xl">
              PART OF THE CREW PART OF THE SHIP
            </p>
            <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
              Phasellus lorem quam molestie id quisque diam aenean nulla in.
              Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend
              condimentum id viverra nulla.
            </p>
            <div className="mt-12">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {features.map((feature) => (
                  <div key={feature.name} className="pt-6">
                    <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                      <div className="-mt-6">
                        <div>
                          <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-md shadow-lg">
                            <feature.icon
                              className="h-6 w-6 text-white"
                              aria-hidden="true"
                            />
                          </span>
                        </div>
                        <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                          {feature.name}
                        </h3>
                        <p className="mt-5 text-base text-gray-500">
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
              egestas tempus tellus etiam sed. Quam a scelerisque amet
              ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat
              quisque ut interdum tincidunt duis.
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
            src="/assets/images/charlotte.jpeg"
            alt=""
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
              egestas tempus tellus etiam sed. Quam a scelerisque amet
              ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat
              quisque ut interdum tincidunt duis.
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
