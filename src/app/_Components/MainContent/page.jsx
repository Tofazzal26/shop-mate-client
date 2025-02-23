"use client";

import ProductContent from "../ProductContent/page";
import Sidebar from "../Sidebar/page";

const MainContent = () => {
  return (
    <div className="mainContainer">
      <div className="grid grid-cols-1 gap-4 lg:gap-8 lg:grid-cols-5">
        <div className="lg:col-span-1">
          <Sidebar />
        </div>
        <div className="lg:col-span-4">
          <ProductContent />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
