"use client";

import Sidebar from "../Sidebar/page";

const MainContent = () => {
  return (
    <div className="mainContainer">
      <div className="grid grid-cols-1 lg:grid-cols-5">
        <div className="col-span-1">
          <Sidebar />
        </div>
        <div className="col-span-4">
          <div>Right</div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
