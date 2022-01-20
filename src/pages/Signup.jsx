import React, { useState } from "react";

const ticketOptions = [
  { text: "Yes", value: 1 },
  { text: "No", value: 0 },
];
const Signup = () => {
  const [seasonTix, setSeasonTix] = useState(0);

  const handleTix = (e) => {
    setSeasonTix(e.target.value);
    console.log(e.target.value);
  };
  return (
    <>
      <div className="min-h-full pt-12 xl:pt-20 flex">
        <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <h2 className="mt-6 xl:text-4xl font-extrabold font-rockSalt  text-blue-400">
                Join the Club
              </h2>
            </div>

            <div className="mt-8">
              <div className="mt-6">
                <form action="#" method="POST" className="space-y-6">
                  <div>
                    <label
                      htmlFor="fName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      First name
                    </label>
                    <div className="mt-1">
                      <input
                        id="fName"
                        name="fName"
                        type="text"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-400 focus:border-blue-400 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="lName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Last name
                    </label>
                    <div className="mt-1">
                      <input
                        id="lName"
                        name="lName"
                        type="text"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-400 focus:border-blue-400 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email address
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Phone Number
                    </label>
                    <div className="mt-1">
                      <input
                        id="phone"
                        name="phone"
                        type="phone"
                        autoComplete="phone"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-base font-medium text-gray-900">
                      Season Tickets
                    </label>
                    <p className="text-sm leading-5 text-gray-500">
                      Are you currently a season ticket holder?
                    </p>
                    <fieldset className="mt-4">
                      <legend className="sr-only">Season Tickets</legend>
                      <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                        {ticketOptions.map((option) => (
                          <div key={option.value} className="flex items-center">
                            <input
                              id={option.value}
                              name="notification-method"
                              type="radio"
                              className="focus:ring-blue-400 h-4 w-4 text-blue-400 border-gray-300"
                              onClick={handleTix}
                              value={option.value}
                            />
                            <label
                              htmlFor={option.text}
                              className="ml-3 block text-sm font-medium text-gray-700"
                            >
                              {option.text}
                            </label>
                          </div>
                        ))}
                      </div>
                    </fieldset>
                  </div>

                  {seasonTix == 1 ? (
                    <div>
                      <label className="text-base font-medium text-gray-900">
                        Season Tickets - Seating Section
                      </label>
                      <p className="text-sm leading-5 text-gray-500">
                        Are your season tickets currently in the supports
                        section?
                        <span className="block text-md text-blue-400">
                          This will not affect your registration.
                        </span>
                      </p>
                      <fieldset className="mt-4">
                        <legend className="sr-only">
                          Season Tickets - Seating
                        </legend>
                        <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                          <div className="flex items-center">
                            <input
                              id="yes"
                              name="Season Tickets Seating"
                              type="radio"
                              className="focus:ring-blue-400 h-4 w-4 text-blue-400 border-gray-300"
                              value="yes"
                            />
                            <label
                              htmlFor="yes"
                              className="ml-3 block text-sm font-medium text-gray-700"
                            >
                              Yes
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              id="no"
                              name="Season Tickets Seating"
                              type="radio"
                              className="focus:ring-blue-400 h-4 w-4 text-blue-400 border-gray-300"
                              value="no"
                            />
                            <label
                              htmlFor="no"
                              className="ml-3 block text-sm font-medium text-gray-700"
                            >
                              No
                            </label>
                          </div>
                        </div>
                      </fieldset>
                    </div>
                  ) : (
                    ""
                  )}
                  <fieldset className="space-y-5">
                    <div className="relative flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="TOS"
                          aria-describedby="Terms of service"
                          name="TOS"
                          type="checkbox"
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          htmlFor="TOS"
                          className="font-medium text-gray-700"
                        >
                          Terms of Service
                        </label>
                        <p id="TOS-description" className="text-gray-500">
                          By checking this, you agree to allow Uptown Ultras to
                          communicate with you via the given email. ** NEED
                          LEGALESE***
                        </p>
                      </div>
                    </div>
                  </fieldset>
                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-400 hover:bg-white hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Sign Up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block relative w-0 flex-1">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
            alt=""
          />
        </div>
      </div>
    </>
  );
};
export default Signup;
