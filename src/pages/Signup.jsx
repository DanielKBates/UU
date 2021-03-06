import React, { useState } from "react";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import axios from "axios";

const Signup = () => {
  const { control, register, handleSubmit } = useForm();

  const [submitted, setSubmitted] = useState();

  const onSubmit = async (data) => {
    const bday = format(new Date(data.birthday), "dd MMMM yyyy");
    const reqData = {
      fName: data.fName,
      lName: data.lName,
      seasonTix: data.seasonTix,
      suppSection: data.suppSection,
      email: data.email,
      phone: data.phone,
      tier: data.tier,
      birthday: bday,
      membership: "pending",
    };
    const result = await axios.post(
      "https://uuexpress.herokuapp.com/api/members/add-member",
      reqData
    );
    if (result) {
      setSubmitted(true);
    }
  };

  const [seasonTix, setSeasonTix] = useState(0);
  const handleTix = (e) => {
    setSeasonTix(e.target.value);
  };

  return (
    <>
      {submitted ? (
        <div className="w-11/12 mx-auto pt-24 flex flex-col space-y-4">
          <h1 className="p-6 text-center text-4xl text-blue-400">
            {" "}
            Thank you for signing up!
          </h1>
          <p className=" text-xl">
            Welcome to the Uptown Ultras! We're excited to celebrate this
            historic season with you! You'll soon recieve an email to the
            provided email address with instructions on paying member dues.{" "}
          </p>
          <img
            alt="Welcome to Uptown Ultras"
            src="/assets/images/altLogo1.png"
          />
        </div>
      ) : (
        <div className="min-h-full pt-12 xl:pt-20 flex flex-col-reverse md:flex-row md:flex">
          <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
            <div className="mx-auto w-full max-w-sm lg:w-96">
              <div>
                <h2 className="mt-6 xl:text-4xl font-extrabold font-rockSalt  text-blue-400">
                  Join the Club
                </h2>
              </div>

              <div className="mt-8">
                <div className="mt-6">
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
                          {...register("fName", { required: true })}
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
                          {...register("lName", { required: true })}
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
                          autoComplete="email"
                          {...register("email", { required: true })}
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Phone Number
                      </label>
                      <div className="mt-1">
                        <input
                          id="phone"
                          name="phone"
                          {...register("phone", { required: true })}
                          autoComplete="phone"
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>
                      <div className="flex flex-col max-w-2xl ">
                        <span className="block text-sm font-medium text-gray-700">
                          Date of Birth
                        </span>

                        <div className="relative w-40 ">
                          <Controller
                            control={control}
                            name="birthday"
                            rules={{ required: true }}
                            render={({ field }) => (
                              <DatePicker
                                selected={field.value}
                                onChange={(date) => field.onChange(date)}
                                nextMonthButtonLabel=">"
                                previousMonthButtonLabel="<"
                                popperClassName="react-datepicker-none"
                              />
                            )}
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="text-base font-medium text-gray-900">
                        Membership Tier
                      </label>
                      <p className="text-sm leading-5 text-gray-500">
                        Please select your membership tier
                      </p>
                      <div className="space-y-6 my-2 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                        <div className="flex items-center">
                          <input
                            className="focus:ring-blue-400 h-4 w-4 text-blue-400 border-gray-300"
                            type="radio"
                            id="membRadio"
                            value="uptown-30"
                            {...register("tier", { required: true })}
                          />
                          <label
                            className="ml-3 block text-sm font-medium text-gray-700"
                            htmlFor="membRadio"
                          >
                            Uptown-Tier: $30
                          </label>
                        </div>
                      </div>
                      <div className="space-y-4 my-2 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                        <div className="flex items-center">
                          <input
                            className="focus:ring-blue-400 h-4 w-4 text-blue-400 border-gray-300"
                            type="radio"
                            id="membRadio2"
                            {...register("tier", { required: true })}
                            value="ultra-60"
                          />
                          <label
                            className="ml-3 block text-sm font-medium text-gray-700"
                            htmlFor="membRadio2"
                          >
                            Ultra-Tier: $60
                          </label>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="text-base font-medium text-gray-900">
                        Season Tickets
                      </label>
                      <p className="text-sm leading-5 text-gray-500">
                        Are you currently a season ticket holder?
                      </p>
                      <div className="space-y-4 my-2 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                        <div className="flex items-center">
                          <input
                            className="focus:ring-blue-400 h-4 w-4 text-blue-400 border-gray-300"
                            type="radio"
                            id="inlineRadio1"
                            value={1}
                            {...register("seasonTix", { required: true })}
                            onClick={handleTix}
                          />
                          <label
                            className="ml-3 block text-sm font-medium text-gray-700"
                            htmlFor="inlineRadio1"
                          >
                            Yes
                          </label>
                        </div>
                      </div>
                      <div className="space-y-4 my-2 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                        <div className="flex items-center">
                          <input
                            className="focus:ring-blue-400 h-4 w-4 text-blue-400 border-gray-300"
                            type="radio"
                            id="inlineRadio2"
                            {...register("seasonTix", { required: true })}
                            value={0}
                            onClick={handleTix}
                          />
                          <label
                            className="ml-3 block text-sm font-medium text-gray-700"
                            htmlFor="inlineRadio2"
                          >
                            No
                          </label>
                        </div>
                      </div>
                    </div>
                    <div>
                      {seasonTix == 1 && (
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
                                  value={true}
                                  {...register("suppSection", {
                                    required: false,
                                  })}
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
                                  value={false}
                                  {...register("suppSection", {
                                    required: false,
                                  })}
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
                      )}
                    </div>
                    <fieldset className="space-y-5">
                      <div className="relative flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="TOS"
                            aria-describedby="Terms of service"
                            name="TOS"
                            type="checkbox"
                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                            required
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
                            By checking this, you agree to allow Uptown Ultras
                            to communicate with you via the given email.
                          </p>
                          <Link target="_blank" to={"/Terms"}>
                            <span className="text-blue-500">
                              Read our full Terms of Service here
                            </span>
                          </Link>
                          <Link
                            className="flex flex-row items-center space-x-2"
                            target="_blank"
                            download
                            to="/assets/files/Uptown_Ultras_Bylaws_and_Code_Conduct.pdf"
                          >
                            <span className="inline-block text-blue-500">
                              Download our Bylaws and Conduct Code
                            </span>{" "}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 inline text-blue-500"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>{" "}
                          </Link>
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
          <div className="bg-white flex flex-col ">
            <img
              className=" h-1/3 w-1/3 object-cover mx-auto"
              src="/assets/images/altLogo2.jpg"
              alt="Uptown Ultras"
            />
            <div className="w-5/6 p-4 mx-auto ">
              <h1 className=" text-2xl -mt-12 text-blue-400 text-center">
                Uptown Tier - $30 annually
              </h1>
              <ul className="list-disc list-inside ">
                <li> Voting rights in Uptown Ultras elections</li>
                <li>Access to UU Member Discord</li>
                <ul className="list-disc list-inside ml-4">
                  <li>Includes Member Ticket Exchange</li>
                </ul>
                <li>Access to Tailgate</li>
                <li>Access to Member events throughout the year</li>
                <li>Away Match Viewing Parties with Ultras specials</li>
              </ul>
              <h1 className=" text-2xl mt-8 text-blue-400 text-center">
                Ultra Tier - $60 annually
              </h1>     
              <ul className="list-disc list-inside ">
                <li> Voting rights in Uptown Ultras elections</li>
                <li>Access to UU Member Discord</li>
                <ul className="list-disc list-inside ml-4">
                  <li>Includes Member Ticket Exchange</li>
                </ul>
                <li>Ultra Member Card</li>
                <ul className="list-disc list-inside ml-4">
                  <li>Offers select discounts at restaurants/bars in Charlotte</li>
                </ul>
                <li>Access to Tailgate</li>
                <li>Access to Member events throughout the year</li>
                <li>Away Match Viewing Parties with Ultras specials</li>
                <li>Access to 20% off merch</li>
                <li>Uptown Ultra Inaugural Shirt</li>
                <ul className="list-disc list-inside ml-4">
                  <li>(Or future UU Merchandise of your choice if shirt is alredy purchased)</li>
                </ul>
              </ul>           
            </div>
          </div>
        </div>
      )}{" "}
    </>
  );
};
export default Signup;
