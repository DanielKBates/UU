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
  }
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
            <>
              <div>
                <p className="text-lg text-gray-500 italic">
                  Check back for live score updates around the league!
                </p>
              </div>
            </>
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
          <>
            <>
              <div>
                <p className="text-lg text-gray-500 italic">
                  Check back for standings around the league!
                </p>
              </div>
            </>
          </>
        );
    }
  };
  return (
    <div>
      {" "}
      <div className="hidden md:flex flex-col w-full h-full">
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
