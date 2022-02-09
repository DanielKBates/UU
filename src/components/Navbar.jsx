import React, { useEffect, useState } from "react";

import { Link, NavLink, useLocation } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { navbarItems } from "./nav";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [dir, setDir] = useState(1);
  // const handleMobileMenu = () => {
  //   setMobileMenu(!mobileMenu);
  // };
  const location = useLocation();

  const handleNavScroll = () => {
    var lastScrollTop = 0;
    window.addEventListener(
      "scroll",
      function () {
        var st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > lastScrollTop) {
          // down
          setDir(-1);
        } else {
          // up
          setDir(1);
        }
        lastScrollTop = st <= 0 ? 0 : st;
      },
      false
    );
  };

  useEffect(() => {
    handleNavScroll();
    setMobileMenu(false);
  }, [location]);

  return (
    <Disclosure as="nav" className="bg-black fixed w-full z-20 transition-all ease-in-out duration-500" style={
      !mobileMenu
        ? dir === 1
          ? { minHeight: "7%" }
          : { minHeight: "7%", transform: "translateY(-70vh)" }
        : {}
    }>
      {({ open }) => (
        <>
          <div className="relative mx-auto 2xl:w-11/12 px-4 sm:px-6 lg:px-8">
            <div className="flex items-center h-22 md:h-24">
              {/* Logo */}
              <div className="w-1/3 -mt-2 mx-auto sm:mx-0 sm:w-1/12">
                <Link to="/">
                  <img
                    src="/assets/images/UU_LOGO1.png"
                    alt="Logo"
                    loading="lazy"
                  />
                </Link>
              </div>

              {/* Desktop Nav */}

              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  {navbarItems.map((item) => (
                    <NavLink
                      key={item.text}
                      to={item.href}
                      className={({ isActive }) =>
                        `px-3 py-2 rounded-md text-lg uppercase font-medium ${
                          !isActive
                            ? "text-white hover:bg-blue-400"
                            : "text-blue-400"
                        }`
                      }
                    >
                      {item.text}
                    </NavLink>
                  ))}
                </div>
              </div>

              {/* signup nav CTA */}
              <div className="hidden md:inline-block absolute right-24">
                <Link to="/signup">
                  <button className=" bg-blue-400 p-4 rounded-md text-white text-md font-bold bg-bl">
                    SIGN UP
                  </button>
                </Link>
              </div>

              {/* Mobile nav button */}
              <div className="flex absolute right-4 sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-400">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-8 w-8" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-8 w-8" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobile Nav */}
          <Disclosure.Panel className="sm:hidden">
            <div className="flex flex-col px-2 pt-2 pb-3 space-y-2">
              {navbarItems.map((item) => (
                <Disclosure.Button>
                  <NavLink
                    key={item.text}
                    to={item.href}
                    className={({ isActive }) =>
                      `pl-3 py-2 rounded-md text-md font-medium uppercase ${
                        !isActive ? "text-white" : "text-blue-400"
                      }`
                    }
                  >
                    {item.text}
                  </NavLink>
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
