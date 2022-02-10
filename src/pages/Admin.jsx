import React, { useState, useEffect } from "react";
import axios from "axios";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

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

const eventOptions = [
  { text: "Yes", value: true },
  { text: "No", value: false },
];
const initialState = {
  name: "",
  title: "",
  path: "",
  href: "",
  desc: "",
  addDesc: "",
  imagePath: "",
  featured: false,
};
function Admin() {
  const [loading, setLoading] = useState("loading");
  const [currentTab, setCurrentTab] = useState("members");
  const [formData, setFormData] = useState(initialState);
  const [eventList, setEventList] = useState([]);
  const [memberList, setMemberList] = useState([])
  const [selectedEvent, setSelectedEvent] = useState({});

  const fetchEventData = async () => {
    try {
      setLoading("loading");
      const { data: res } = await axios.get("http://localhost:3001/events");
      setEventList(res);
      setLoading("done");
    } catch (error) {
      console.error(error.message);
    }
  };
  const fetchMemberData = async () => {
    try {
      setLoading("loading");
      const { data: res } = await axios.get("http://localhost:3001/member-list");
      setEventList(res);
      setLoading("done");
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchEventData();
    fetchMemberData()
  }, []);

  const handleTab = (e) => {
    e.preventDefault();
    setCurrentTab(e.target.value);
  };

  const handleDeleteEvent = (e) => {
    e.preventDefault();
    if (window.confirm("Are you sure?")) {
      axios
        .post("http://localhost:3001/delete-event", { id: selectedEvent._id })
        .then((response) => {
          console.log("Event Deleted: ", response.data);
          setSelectedEvent(initialState);
          fetchEventData();
        });
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEditChange = (e) => {
    setSelectedEvent({ ...selectedEvent, [e.target.name]: e.target.value });
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
      featured: formData.featured,
    };
    axios
      .post("http://localhost:3001/create-event", reqData)
      .then((response) => {
        console.log("Event Created: ", response.data);
        setEventList([...eventList, response.data]);
        setFormData(initialState);
      });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const reqData = {
      name: selectedEvent.name,
      title: selectedEvent.title,
      path: selectedEvent.path,
      href: selectedEvent.href,
      desc: selectedEvent.desc,
      addDesc: selectedEvent.addDesc,
      imagePath: selectedEvent.imagePath,
      featured: selectedEvent.featured,
      id: selectedEvent._id,
    };
    axios.post("http://localhost:3001/edit-event", reqData).then((response) => {
      console.log("Event Edited: ", response.data);
      // setSelectedEvent(initialState)

      fetchEventData();
    });
    window.alert("Event Edited!");
  };

  const handleEventSelect = (e) => {
    console.log(e.target.value);
    const c = eventList.filter((event) => event.name === e.target.value)[0];
    setSelectedEvent(c);
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
                    <button className="text-indigo-600 hover:text-indigo-900">
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
            {/* Create New Event */}
            <form className="space-y-8 divide-y divide-gray-200 bg-white p-3 w-full">
              <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                <div>
                  <div>
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      New Event
                    </h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">
                      The newly created event will be added to the database, and the site immediately upon saving.
                    </p>
                  </div>

                  <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                      >
                        Internal Event Name
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
              <div>
                <p className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                  Do you want to make this the new featured event?(Required!)
                </p>
                <fieldset className="mt-4 ">
                  <legend className="sr-only">Featured Event</legend>
                  <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                    {eventOptions.map((option) => (
                      <div key={option.value} className="flex items-center">
                        <input
                          id={"o-" + option.value}
                          name="featured"
                          type="radio"
                          className="focus:ring-blue-400 h-4 w-4 text-blue-400 border-gray-300"
                          onClick={handleInputChange}
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
              <button
                onClick={handleFormSubmit}
                className="p-4 bg-blue-400 text-white rounded-md w-1/6 mx-auto"
              >
                Save
              </button>{" "}
            </form>
            <hr />

            {/* Edit / Featured */}
            <div className="flex flex-col p-2 bg-white">
              <Menu as="div" className="relative inline-block w-1/4 text-left ">
                <div>
                  <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                    Events
                    <ChevronDownIcon
                      className="-mr-1 ml-2 h-5 w-5"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="origin-right absolute right-0 mt-2 overflow-y-scroll w-fit rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1 min-h-fit ">
                      {eventList.map((event) => (
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              key={event._id}
                              value={event.name}
                              onClick={handleEventSelect}
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-2 py-2 text-sm "
                              )}
                            >
                              {event.name}
                            </button>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>

              <div className=" p-4 flex flex-col border-2 border-gray-100">
                <p className="text-lg font-bold">
                  {selectedEvent
                    ? selectedEvent.title
                    : "Select an event to edit."}
                </p>
                <form className="space-y-8 divide-y divide-gray-200 bg-white p-3 w-full">
                  <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                    <div>
                      <div>
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                          Edit Event
                        </h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">
                          All edits will immediately go live upon pressing save.
                        </p>
                      </div>

                      <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
                        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                          >
                            Internal Event Name
                          </label>
                          <div className="mt-1 sm:mt-0 sm:col-span-2">
                            <div className="max-w-lg flex rounded-md  border-2 border-gray-200">
                              <input
                                type="text"
                                name="name"
                                id="name"
                                className="flex-1 block w-full focus:ring-indigo-500 focus:border-indigo-500 min-w-0  rounded-md sm:text-sm border-gray-300 p-2"
                                placeholder={selectedEvent.name}
                                value={selectedEvent.name}
                                onChange={handleEditChange}
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
                                placeholder={selectedEvent.title}
                                value={selectedEvent.title}
                                onChange={handleEditChange}
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
                                placeholder={selectedEvent.imagePath}
                                value={selectedEvent.imagePath}
                                onChange={handleEditChange}
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
                                placeholder={selectedEvent.href}
                                value={selectedEvent.href}
                                onChange={handleEditChange}
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
                                placeholder={selectedEvent.path}
                                value={selectedEvent.path}
                                onChange={handleEditChange}
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
                              value={selectedEvent.desc}
                              placeholder={selectedEvent.desc}
                              onChange={handleEditChange}
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
                              value={selectedEvent.addDesc}
                              placeholder={selectedEvent.addDesc}
                              onChange={handleEditChange}
                            />
                            <p className="mt-2 text-sm text-gray-500">
                              Extra space for additional paragraph (optional)
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm leading-5 text-gray-500">
                      Do you want to make this the new featured event?
                      (Required!)
                    </p>
                    <fieldset className="mt-4">
                      <legend className="sr-only">Featured Event</legend>
                      <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                        {eventOptions.map((option) => (
                          <div key={option.value} className="flex items-center">
                            <input
                              id={"o-" + option.value}
                              name="featured"
                              type="radio"
                              className="focus:ring-blue-400 h-4 w-4 text-blue-400 border-gray-300"
                              onClick={handleEditChange}
                              value={option.value}
                              defaultValue={selectedEvent.featured}
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
                  <button
                    onClick={handleEditSubmit}
                    className="p-4 bg-blue-400 text-white rounded-md w-1/6 mx-auto"
                  >
                    Save Edits
                  </button>{" "}
                  {selectedEvent ? (
                    <button
                      onClick={handleDeleteEvent}
                      className="p-4 bg-red-500 text-white rounded-md w-1/6 mx-auto"
                    >
                      Delete Event
                    </button>
                  ) : (
                    ""
                  )}
                </form>
              </div>
            </div>
          </div>
        );
    }
  };
  return loading === "loading" ? (
    <p>Loading...</p>
  ) : (
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
