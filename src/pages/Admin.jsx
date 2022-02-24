import React, { useState, useEffect } from "react";
import axios from "axios";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { format } from "date-fns";
import { Controller, useForm } from "react-hook-form";
import DatePicker from "react-datepicker";

const tabs = [
  { name: "Members", value: "members", current: true },
  { name: "Events", value: "events", current: false },
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
  const [memberList, setMemberList] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState({});
  const [selectedMember, setSelectedMember] = useState({});

  const { control, register, handleSubmit } = useForm();

  // const pingSecret = async () => {
  //   const data = await axios.get("https://uuexpress.herokuapp.com/api/admin/secret", {});
    
  // };

  const handleFeatChange = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.post(
        "https://uuexpress.herokuapp.com/api/events/remove-featured"
      );
      const res =
        data &&
        (await axios.post(
          "https://uuexpress.herokuapp.com/api/events/remove-featured",
          selectedEvent._id
        ));
      // setSelectedEvent(res);
      console.log(res);
      const addRes =
        res &&
        (await axios.post("https://uuexpress.herokuapp.com/api/events/add-featured", {
          id: selectedEvent._id,
        }));
      console.log(addRes);
    } catch (error) {
      console.error(error.message);
    }
  };

  const fetchEventData = async () => {
    try {
      setLoading("loading");
      const { data: res } = await axios.get("https://uuexpress.herokuapp.com/api/events");
      setEventList(res);
      setLoading("done");
    } catch (error) {
      console.error(error.message);
    }
  };
  const fetchMemberData = async () => {
    try {
      setLoading("loading");
      const res = await axios.get(
        "https://uuexpress.herokuapp.com/api/members/member-list"
      );
      setMemberList(res.data);
      setLoading("done");
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleTab = (e) => {
    e.preventDefault();
    setCurrentTab(e.target.value);
  };

  const handleDeleteEvent = (e) => {
    e.preventDefault();
    if (window.confirm("Are you sure?")) {
      axios
        .post("https://uuexpress.herokuapp.com/api/events/delete-event", {
          id: selectedEvent._id,
        })
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
      .post("https://uuexpress.herokuapp.com/api/events/create-event", reqData)
      .then((response) => {
        console.log("Event Created: ", response.data);
        setEventList([...eventList, response.data]);
        setFormData(initialState);
      });
  };

  // Event Editing
  const handleEventSelect = (e) => {
    console.log(e.target.value);
    const c = eventList.filter((event) => event.name === e.target.value)[0];
    setSelectedEvent(c);
  };

  const handleEditChange = (e) => {
    setSelectedEvent({ ...selectedEvent, [e.target.name]: e.target.value });
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
    axios
      .post("https://uuexpress.herokuapp.com/api/events/edit-event", reqData)
      .then((response) => {
        console.log("Event Edited: ", response.data);
        // setSelectedEvent(initialState)

        fetchEventData();
      });
    window.alert("Event Edited!");
  };

  // member editing
  const memberEditSubmit = async (data) => {
    const bday = format(new Date(data.birthday), "dd MMMM yyyy");
    const reqData = {
      id: selectedMember._id,
      fName: data.fName,
      lName: data.lName,
      seasonTix: data.seasonTix,
      suppSection: data.suppSection,
      email: data.email,
      phone: data.phone,
      tier: data.tier,
      birthday: bday,
      membership: data.membership,
    };
    console.log(reqData);
    axios
      .post("https://uuexpress.herokuapp.com/api/members/edit-member", reqData)
      .then(function (result) {
        fetchMemberData();
        setSelectedMember({})
        setCurrentTab("members");
      });
  };



  const handleMemberSelect = (e) => {
    const m = memberList.filter((member) => member.email === e.target.value);
    setSelectedMember(m[0]);
    setCurrentTab("memberEdit");
  };

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const deleteMember = (e) => {
    e.preventDefault();
    if (window.confirm("Are you sure?")) {
      axios
        .post("https://uuexpress.herokuapp.com/api/members/delete-member", {
          id: e.target.value,
        })
        .then(fetchMemberData());
    }
  };

  const DOBValidate = (date) => {
    var today = new Date();
    var birthDate = new Date(date);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return (
      <span className={age >= 21 ? "text-green-600" : "text-red-600"}>
        {" "}
        {age}{" "}
      </span>
    );
  };

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
                  DOB
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Season Tix
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  In Section
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Tier
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Membership
                </th>
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">Update</span>
                </th>
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">Delete</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {memberList.map((person, personIdx) => (
                <tr
                  key={person.id}
                  className={
                    person.membership === "pending"
                      ? "bg-red-100"
                      : personIdx % 2 === 0
                      ? "bg-white"
                      : "bg-gray-100"
                  }
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {person.fName} {person.lName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {person.phone}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {person.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {format(new Date(person.birthday), "dd MMMM yyyy")} |
                    {DOBValidate(
                      format(new Date(person.birthday), "dd MMMM yyyy")
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {person.seasonTix ? "Yes" : "No"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {person.suppSection ? "Yes" : "No"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {person.tier}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {person.membership}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      className="text-indigo-600 hover:text-indigo-900"
                      value={person.email}
                      onClick={handleMemberSelect}
                    >
                      Update
                    </button>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      className="text-red-500 hover:text-indigo-700"
                      value={person._id}
                      onClick={deleteMember}
                    >
                      Delete
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
                      The newly created event will be added to the database, and
                      the site immediately upon saving.
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
                  <div className="flex flex-row gap-x-4">
                    <button
                      onClick={handleEditSubmit}
                      className="p-4 bg-blue-400 text-white rounded-md w-1/6 "
                    >
                      Save Edits
                    </button>{" "}
                    <button
                      onClick={handleDeleteEvent}
                      className="p-4 bg-red-500 text-white rounded-md w-1/6 "
                    >
                      Delete Event
                    </button>
                    <button
                      onClick={handleFeatChange}
                      className={
                        selectedEvent.featured === false &&
                        ("p-4 bg-green-500 text-white rounded-md w-1/6 " ||
                          "hidden")
                      }
                    >
                      Make Feautured
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        );
      case "memberEdit":
        return (
          <div className="min-w-full h-full bg-white ">
            <form
              className="flex flex-col space-y-4 p-4"
              onSubmit={handleSubmit(memberEditSubmit)}
            >
              <div>
                <label htmlFor="fName">First Name</label>
                <input
                  id="fName"
                  name="fName"
                  defaultValue={selectedMember.fName}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-400 focus:border-blue-400 sm:text-sm"
                  {...register("fName")}
                />
              </div>
              <div>
                <label htmlFor="lName">Last Name</label>
                <input
                  id="lName"
                  name="lName"
                  defaultValue={selectedMember.lName}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-400 focus:border-blue-400 sm:text-sm"
                  {...register("lName")}
                />
              </div>
              <div className="relative w-40">
                <label htmlFor="birthday">DOB</label>

                <Controller
                  control={control}
                  name="birthday"
                  render={({ field }) => (
                    <DatePicker
                      selected={field.value}
                      onChange={(date) => field.onChange(date)}
                      nextMonthButtonLabel=">"
                      previousMonthButtonLabel="<"
                      popperClassName="react-datepicker-far-right"
                    />
                  )}
                />
              </div>
              <div>
                <label htmlFor="phone">Phone Number</label>
                <input
                  id="phone"
                  name="phone"
                  defaultValue={selectedMember.phone}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-400 focus:border-blue-400 sm:text-sm"
                  {...register("phone")}
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  defaultValue={selectedMember.email}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-400 focus:border-blue-400 sm:text-sm"
                  {...register("email")}
                />
              </div>
              <div>
                <label htmlFor="seasonTix">Season Tix (true or false)</label>
                <input
                  id="seasonTix"
                  name="seasonTix"
                  defaultValue={selectedMember.seasonTix}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-400 focus:border-blue-400 sm:text-sm"
                  {...register("seasonTix")}
                />
              </div>
              <div>
                <label htmlFor="suppSection">
                  Supporter Section (true or false)
                </label>
                <input
                  id="suppSection"
                  name="suppSection"
                  defaultValue={selectedMember.suppSection}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-400 focus:border-blue-400 sm:text-sm"
                  {...register("suppSection")}
                />
              </div>
              <div>
                <label htmlFor="tier">Tier</label>
                <input
                  id="tier"
                  name="tier"
                  defaultValue={selectedMember.tier}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-400 focus:border-blue-400 sm:text-sm"
                  {...register("tier")}
                />
              </div>
              <div>
                <label htmlFor="membership">Status</label>
                <input
                  id="membership"
                  name="membership"
                  defaultValue={selectedMember.membership}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-400 focus:border-blue-400 sm:text-sm"
                  {...register("membership")}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-1/4 flex mx-auto justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-400 hover:bg-white hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        );
    }
  };

  useEffect(() => {
    // pingSecret();
    fetchEventData();
    fetchMemberData();
  }, []);

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
