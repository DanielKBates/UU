import React, { useState, useEffect } from "react";
import axios from "axios";
const people = [
  {
    name: "Jane Cooper",
    phone: "7041234567",
    seating: "Yes",
    email: "jane.cooper@example.com",
  },
  {
    name: "Cody Fisher",
    phone: "9101234567",
    seating: "No",
    email: "cody.fisher@example.com",
  },
];

const tabs = [
  { name: "Members", value: "members", current: true },
  { name: "Events", value: "events", current: false },
];

function Admin() {
  const initialState = {
    name: "",
    title: "",
    path: "",
    href: "",
    desc: "",
    addDesc: "",
    imagePath: "",
  };

  const [currentTab, setCurrentTab] = useState("members");
  const [formData, setFormData] = useState(initialState);

  useEffect(()=>{
    console.log("yo")
  },[])

  const handleTab = (e) => {
    e.preventDefault();
    setCurrentTab(e.target.value);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();

    const reqData = {
      name: formData.name,
      title: formData.title,
      path: formData.path,
      href: formData.href,
      desc: formData.desc,
      addDesc: formData.addDesc,
      imagePath: formData.imagePath,
    };
    axios
      .post("http://localhost:3001/create-event", reqData)
      .then((response) => console.log("Event Created: ", response.data));
  };

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const renderSwitch = (tab) => {
    switch (tab) {
      default:
      case "members":
        return (
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Phone
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Email
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  In Section
                </th>
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {people.map((person, personIdx) => (
                <tr
                  key={person.email}
                  className={personIdx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {person.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {person.phone}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {person.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {person.seating}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        );
      case "events":
        return (
          <div>
            <form className="space-y-8 divide-y divide-gray-200 bg-white p-3 w-full">
              <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                <div>
                  <div>
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      New Event
                    </h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">
                      The newly created event will be available to use
                      immediately after saving.
                    </p>
                  </div>

                  <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                      >
                        Name
                      </label>
                      <div className="mt-1 sm:mt-0 sm:col-span-2">
                        <div className="max-w-lg flex rounded-md  border-2 border-gray-200">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            className="flex-1 block w-full focus:ring-indigo-500 focus:border-indigo-500 min-w-0  rounded-md sm:text-sm border-gray-300 p-2"
                            placeholder="Internal name for event, not user facing"
                            value={formData.name}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                      <label
                        htmlFor="title"
                        className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                      >
                        Title
                      </label>
                      <div className="mt-1 sm:mt-0 sm:col-span-2">
                        <div className="max-w-lg flex rounded-md  border-2 border-gray-200">
                          <input
                            type="text"
                            name="title"
                            id="title"
                            className="flex-1 block w-full focus:ring-indigo-500 focus:border-indigo-500 min-w-0  rounded-md sm:text-sm border-gray-300 p-2"
                            placeholder="User facing event title"
                            value={formData.title}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                      <label
                        htmlFor="imagePath"
                        className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                      >
                        Image Path
                      </label>
                      <div className="mt-1 sm:mt-0 sm:col-span-2">
                        <div className="max-w-lg flex rounded-md  border-2 border-gray-200">
                          <input
                            type="text"
                            name="imagePath"
                            id="imagePath"
                            className="flex-1 block w-full focus:ring-indigo-500 focus:border-indigo-500 min-w-0  rounded-md sm:text-sm border-gray-300 p-2"
                            placeholder="Link to the s3 bucket"
                            value={formData.imagePath}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                      <label
                        htmlFor="href"
                        className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                      >
                        External Link (optional)
                      </label>
                      <div className="mt-1 sm:mt-0 sm:col-span-2">
                        <div className="max-w-lg flex rounded-md  border-2 border-gray-200">
                          <input
                            type="text"
                            name="href"
                            id="href"
                            className="flex-1 block w-full focus:ring-indigo-500 focus:border-indigo-500 min-w-0  rounded-md sm:text-sm border-gray-300 p-2"
                            placeholder="eventbright.com/ourCoolEvent"
                            value={formData.href}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                      <label
                        htmlFor="path"
                        className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                      >
                        url
                      </label>
                      <div className="mt-1 sm:mt-0 sm:col-span-2">
                        <div className="max-w-lg flex rounded-md  border-2 border-gray-200">
                          <input
                            type="text"
                            name="path"
                            id="path"
                            className="flex-1 block w-full focus:ring-indigo-500 focus:border-indigo-500 min-w-0  rounded-md sm:text-sm border-gray-300 p-2"
                            placeholder="/the-url-we-want"
                            value={formData.path}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                      <label
                        htmlFor="desc"
                        className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                      >
                        Description
                      </label>
                      <div className="mt-1 sm:mt-0 sm:col-span-2">
                        <textarea
                          id="desc"
                          name="desc"
                          rows={3}
                          className="max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
                          value={formData.desc}
                          onChange={handleInputChange}
                        />
                        <p className="mt-2 text-sm text-gray-500">
                          Write a description about the event. (required)
                        </p>
                      </div>
                    </div>
                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                      <label
                        htmlFor="addDesc"
                        className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                      >
                        Additional Desc (optional)
                      </label>
                      <div className="mt-1 sm:mt-0 sm:col-span-2">
                        <textarea
                          id="addDesc"
                          name="addDesc"
                          rows={3}
                          className="max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
                          value={formData.addDesc}
                          onChange={handleInputChange}
                        />
                        <p className="mt-2 text-sm text-gray-500">
                          Extra space for additional paragraph (optional)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                onClick={handleFormSubmit}
                className="p-4 bg-blue-400 text-white rounded-md w-1/6 mx-auto"
              >
                Save
              </button>{" "}
            </form>
            <hr />
            <div className="flex flex-col p-2 bg-white">
              <button
                id="dropdownButton"
                data-dropdown-toggle="dropdown"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
              >
                Dropdown button{" "}
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>

             
              <div className=" p-4 flex flex-col border-2 border-gray-100">
                <p className="text-lg font-bold">Event 1</p>
                <form>
                  <input
                    className="border-2 p-2 rounded-md  border-gray-200"
                    placeholder="Title"
                  />
                  <input
                    className="border-2 p-2 rounded-md  border-gray-200 block mt-2"
                    placeholder="Image URL"
                  />
                  <textarea
                    id="about"
                    name="about"
                    rows={3}
                    placeholder="Description of event"
                    className="max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md mt-2 p-2"
                    defaultValue={""}
                  />
                </form>
              </div>
            </div>
          </div>
        );
    }
  };
  return (
    <div className="flex flex-col pt-28 pb-12">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <div>
              
              <div className="block">
                <div className="border-b border-gray-200">
                  <nav className="-mb-px flex" aria-label="Tabs">
                    {tabs.map((tab) => (
                      <button
                        onClick={handleTab}
                        key={tab.name}
                        value={tab.value}
                        className={classNames(
                          currentTab === tab.value
                            ? "border-black text-white"
                            : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
                          "w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm bg-blue-300 rounded-t-lg"
                        )}
                        aria-current={tab.current ? "page" : undefined}
                      >
                        {tab.name}
                      </button>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
            {renderSwitch(currentTab)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
