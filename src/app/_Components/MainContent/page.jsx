"use client";
import { ChevronUp, Settings2 } from "lucide-react";
import React, { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
const MainContent = () => {
  const [selectedItem, setSelectedItem] = useState("");

  const handleRadioChange = (event) => {
    setSelectedItem(event.target.value);
  };

  return (
    <div className="mainContainer">
      <div className="grid grid-cols-1 lg:grid-cols-5">
        <div className="col-span-1">
          <div>
            <div className="mt-3 lg:mt-6">
              <button className="bg-[#0694f5] px-8 py-2 gap-2 rounded-full text-white flex items-center">
                Filter <Settings2 size={20} />{" "}
              </button>
            </div>
            <div>
              <div className="flex justify-between mt-3 lg:mt-6">
                <h2 className="text-2xl">All Categories</h2>
                <ChevronUp />
              </div>
              <div className="mt-2 lg:mt-4 pb-2 lg:pb-4 border-b-2">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id="fresh-fruit"
                      name="category"
                      value="Fresh Fruit"
                      onChange={handleRadioChange}
                    />
                    <label
                      htmlFor="fresh-fruit"
                      className="text-base text-gray-800 font-medium leading-none"
                    >
                      Fresh Fruit (25){" "}
                      <span className="text-gray-500 ml-2">(134)</span>
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id="vegetables"
                      name="category"
                      value="Vegetables"
                      onChange={handleRadioChange}
                    />
                    <label
                      htmlFor="vegetables"
                      className="text-base text-gray-800 font-medium leading-none"
                    >
                      Vegetables{" "}
                      <span className="text-gray-500 ml-2">(150)</span>
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id="cooking"
                      name="category"
                      value="Cooking"
                      onChange={handleRadioChange}
                    />
                    <label
                      htmlFor="cooking"
                      className="text-base text-gray-800 font-medium leading-none"
                    >
                      Cooking <span className="text-gray-500 ml-2">(54)</span>
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id="snacks"
                      name="category"
                      value="Snacks"
                      onChange={handleRadioChange}
                    />
                    <label
                      htmlFor="snacks"
                      className="text-base text-gray-800 font-medium leading-none"
                    >
                      Snacks <span className="text-gray-500 ml-2">(47)</span>
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id="beverages"
                      name="category"
                      value="Beverages"
                      onChange={handleRadioChange}
                    />
                    <label
                      htmlFor="beverages"
                      className="text-base text-gray-800 font-medium leading-none"
                    >
                      Beverages <span className="text-gray-500 ml-2">(43)</span>
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id="beauty-health"
                      name="category"
                      value="Beauty & Health"
                      onChange={handleRadioChange}
                    />
                    <label
                      htmlFor="beauty-health"
                      className="text-base text-gray-800 font-medium leading-none"
                    >
                      Beauty & Health{" "}
                      <span className="text-gray-500 ml-2">(38)</span>
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id="bread-bakery"
                      name="category"
                      value="Bread & Bakery"
                      onChange={handleRadioChange}
                    />
                    <label
                      htmlFor="bread-bakery"
                      className="text-base text-gray-800 font-medium leading-none"
                    >
                      Bread & Bakery{" "}
                      <span className="text-gray-500 ml-2">(15)</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-4">
          <div>Right</div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
