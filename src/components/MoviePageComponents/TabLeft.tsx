import { useState } from "react";

const TabLeft = () => {
  const [activeTab, setActiveTab] = useState<string>("tab1");

  return (
    <div className="tab-section-left overflow-visible bg-secondary rounded-custom w-full">
      <div className="flex flex-wrap gap-1  text-lg font-semibold">
        <button
          className={`mt-3 p-2 rounded-custom flex-grow hover:text-accent2 ${
            activeTab === "tab1" ? "text-accent2" : ""
          }`}
          onClick={() => setActiveTab("tab1")}
        >
          Cast
        </button>
        <button
          className={`mt-3 p-2 rounded-custom flex-grow hover:text-accent2 ${
            activeTab === "tab2" ? "text-accent2" : ""
          }`}
          onClick={() => setActiveTab("tab2")}
        >
          Crew
        </button>
        <button
          className={`mt-3 p-2 rounded-custom flex-grow hover:text-accent2 ${
            activeTab === "tab3" ? "text-accent2" : ""
          }`}
          onClick={() => setActiveTab("tab3")}
        >
          Details
        </button>
      </div>

      <div className="mt-4 font-semibold">
        {activeTab === "tab1" && (
          <div id="tab1" className="tab-content block mb-4">
            <p>Actor 1</p>
            <p>Actor 2</p>
            <p>Actor 3</p>
          </div>
        )}
        {activeTab === "tab2" && (
          <div id="tab2" className="tab-content block mb-4">
            <p>Crew Member 1</p>
            <p>Crew Member 2</p>
            <p>Crew Member 3</p>
          </div>
        )}
        {activeTab === "tab3" && (
          <div id="tab3" className="tab-content block mb-4">
            <p>Location</p>
            <p>Release Date</p>
            <p>Language</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TabLeft;
