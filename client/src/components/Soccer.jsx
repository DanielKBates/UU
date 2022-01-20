import React, { useState } from "react";

const tabs = [
  { name: "Standings", value: "standings", current: true },
  { name: "CFC", value: "cfc", current: false },
  { name: "MLS", value: "mls", current: false },
  { name: "Scores", value: "scores", current: false },
];

const teams = [
  {
    name: "CFC",
    record: "0 - 0 - 0",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Atlanta FC",
    record: "0 - 0 - 0",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Columbus",
    record: "0 - 0 - 0",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Columbus",
    record: "0 - 0 - 0",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Columbus",
    record: "0 - 0 - 0",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Columbus",
    record: "0 - 0 - 0",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Columbus",
    record: "0 - 0 - 0",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Columbus",
    record: "0 - 0 - 0",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Columbus",
    record: "0 - 0 - 0",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Columbus",
    record: "0 - 0 - 0",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Columbus",
    record: "0 - 0 - 0",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Columbus",
    record: "0 - 0 - 0",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Columbus",
    record: "0 - 0 - 0",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Columbus",
    record: "0 - 0 - 0",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Columbus",
    record: "0 - 0 - 0",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Columbus",
    record: "0 - 0 - 0",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Columbus",
    record: "0 - 0 - 0",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Columbus",
    record: "0 - 0 - 0",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Columbus",
    record: "0 - 0 - 0",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Columbus",
    record: "0 - 0 - 0",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Columbus",
    record: "0 - 0 - 0",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Columbus",
    record: "0 - 0 - 0",
    image: "https://via.placeholder.com/150",
  },
];

function Soccer() {
  const [currentTab, setCurrentTab] = useState("standings");
  const handleTab = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setCurrentTab(e.target.value);
  };

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const renderSwitch = (tab) => {
    switch (tab) {
      case "scores":
        return (
          <>
            <div className="w-full">
              {" "}
              <div className="inline-block">
                <div>
                  <img
                    width="40"
                    className="my-3 mx-1 inline-block"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpAQOZ368EC5gDozkBjhQEbKiu25KclMjsdwOENHB-&usqp=CAE&s"
                  />
                  <h5 className="px-3 inline-block">LOS</h5>
                </div>
                <div>
                  <img
                    width="40"
                    className="my-3 mx-1 inline-block"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrVUJYwsAx5DpdulAZLz41ACSfQv0IKnGhky2rz6Q&usqp=CAE&s"
                  />
                  <h5 className="px-3 inline-block font-medium">POR</h5>
                </div>
              </div>
              <div className="inline-block bg-gray-300 p-5 mx-7 my-5 rounded-md font-medium">
                <p>3</p>
                <br />
                <p>5</p>
              </div>
            </div>
          </>
        );
      case "cfc":
        return (
          <>
            <>
              <div>
                <p className="text-lg text-gray-500 italic">
                  Check back for info on upcoming CFC matches!
                </p>
              </div>
            </>
          </>
        );
      case "mls":
        return (
          <>
            <>
              <div>
                <p className="text-lg text-gray-500 italic">
                  Check back for info on upcoming MLS matches!
                </p>
              </div>
            </>
          </>
        );
      case "standings":
        return (
          <ol
            role="list"
            className="divide-y divide-gray-200 list-decimal mx-auto list-outside w-5/6"
          >
            {teams.map((team) => (
              <li
                key={team.record}
                className="py-1 pl-2 flex flex-row justify-between space-x-6 w-full"
              >
                <div className="flex flex-row space-x-2">
                  <img
                    className="h-6 w-6 rounded-full"
                    src={team.image}
                    alt=""
                  />

                  <p className="text-sm font-medium text-gray-900 inline">
                    {team.name}
                  </p>
                </div>
                <p className="text-sm text-gray-500 inline ">{team.record}</p>
              </li>
            ))}
          </ol>
        );
    }
  };
  return (
    <div>
      {" "}
      <div className="hidden md:flex flex-col w-full">
        <div className="w-full bg-white bg-opacity-90 p-3 rounded-lg">
          {/* Tabs */}
          <div>
            <div className="sm:hidden">
              <label htmlFor="tabs" className="sr-only">
                Select a tab
              </label>
              {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
              <select
                id="tabs"
                name="tabs"
                className="block w-full focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                defaultValue={tabs.find((tab) => tab.current).name}
              >
                {tabs.map((tab) => (
                  <option key={tab.name}>{tab.name}</option>
                ))}
              </select>
            </div>
            <div className="hidden sm:block">
              <div className="border-b border-gray-200">
                <nav className="-mb-px flex" aria-label="Tabs">
                  {tabs.map((tab) => (
                    <button
                      onClick={handleTab}
                      key={tab.name}
                      value={tab.value}
                      className={classNames(
                        currentTab === tab.value
                          ? "border-indigo-500 text-indigo-600"
                          : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
                        "w-1/4 py-4 px-1 text-center border-b-2 font-medium text-sm"
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

          {/* Conditionally Rendered */}
          <div className="p-1 my-3 shadow bg-white rounded-md flex">
            {renderSwitch(currentTab)}
            {}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Soccer;
