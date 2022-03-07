import { navbarItems, footerItems, sponsorList } from "./nav";

export default function Footer() {
  return (
    <footer className="bg-blue-400">
      <div className="flex flex-col-reverse md:grid grid-cols-2">
        <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
          <p className="text-white text-center">
            Special Thanks to all of our Sponsors!
          </p>
          <ul className="mt-8 grid grid-cols-3 text-white gap-4">
     
            {sponsorList.map((sponsor) => (
              <li>
                <span className="text-white flex hover:underline justify-center">
                  <a href={sponsor.href}>{sponsor.text}</a>
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
          <nav
            className="-mx-5 -my-2 flex flex-wrap justify-center"
            aria-label="Footer"
          >
            {navbarItems.map((item) => (
              <div key={item.text} className="px-5 py-2">
                <a
                  to={item.href}
                  className="text-base text-white hover:text-gray-900"
                >
                  {item.text}
                </a>
              </div>
            ))}
            <div className="px-5 py-2">
              <a
                href="/TOS"
                className="text-base text-white hover:text-gray-900"
              >
                Terms and Conditions
              </a>
            </div>
          </nav>
          <div className="mt-8 flex justify-center space-x-6">
            {footerItems.map((item) => (
              <a
                key={item.text}
                href={item.href}
                className="text-white hover:text-gray-500"
              >
                <span className="sr-only">{item.text}</span>
                <item.icon
                  className="h-6 w-6 text-white hover:text-cfc-100"
                  aria-hidden="true"
                />
              </a>
            ))}
          </div>
        </div>
      </div>{" "}
      <div className="w-full pb-4 mx-auto text-center">
        <p className="mt-2 text-center text-base text-white">
          &copy; 2021 Uptown Ultras. All rights reserved.
        </p>
        <p className=" text-center text-base text-white">
          Made by{" "}
          <a className="hover:underline" href="https://www.tekjump.io">
            Tekjump.io
          </a>
        </p>
      </div>
    </footer>
  );
}
