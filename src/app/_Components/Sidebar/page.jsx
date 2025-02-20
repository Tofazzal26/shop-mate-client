"use client";
import { ArrowRight, ChevronUp, Settings2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
const Sidebar = () => {
  const [selectedItem, setSelectedItem] = useState("");
  const [price, setPrice] = useState(50);
  const [rating, setRating] = useState(5);
  const [tag, setTag] = useState("");
  const popularTag = [
    "Healthy",
    "Low fat",
    "Vegetarian",
    "Kid foods",
    "Vitamins",
    "Bread",
    "Meat",
    "Snacks",
    "Tiffin",
    "Launch",
    "Dinner",
    "Breakfast",
    "Fruit",
  ];

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };
  const handleRadioChange = (event) => {
    setSelectedItem(event.target.value);
  };
  const handleRating = (e) => {
    console.log(e.target.value);
  };
  const handlePopularTag = (tag) => {
    setTag(tag);
  };
  console.log(tag);

  return (
    <div>
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
          <div>
            <div className="mt-2 lg:mt-4 pb-2 lg:pb-6 border-b-2">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="fresh-fruit"
                    name="category"
                    value="Fresh Fruit"
                    onChange={handleRadioChange}
                    className="w-[20px] h-[20px]"
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
                    className="w-[20px] h-[20px]"
                  />
                  <label
                    htmlFor="vegetables"
                    className="text-base text-gray-800 font-medium leading-none"
                  >
                    Vegetables <span className="text-gray-500 ml-2">(150)</span>
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="cooking"
                    name="category"
                    value="Cooking"
                    onChange={handleRadioChange}
                    className="w-[20px] h-[20px]"
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
                    className="w-[20px] h-[20px]"
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
                    className="w-[20px] h-[20px]"
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
                    className="w-[20px] h-[20px]"
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
                    className="w-[20px] h-[20px]"
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
            <div>
              <div>
                <div className="flex justify-between my-2 lg:my-4">
                  <h2 className="text-2xl">Price</h2>
                  <ChevronUp />
                </div>
                <div className="w-full">
                  <div className="flex justify-between mb-2">
                    <span>50</span>
                    <span>{price}</span>
                    <span>1500</span>
                  </div>
                  <input
                    type="range"
                    min={50}
                    max={1500}
                    value={price}
                    className="range w-full"
                    step={10}
                    onChange={handlePriceChange}
                  />
                </div>
              </div>
            </div>
            <div className="border-b-2 lg:pb-6 pb-2">
              <div className="flex justify-between my-2 lg:my-4">
                <h2 className="text-2xl">Rating</h2>
                <ChevronUp />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="w-[20px] h-[20px]"
                    value={5}
                    onChange={handleRating}
                  />
                  <div className="flex items-center gap-1">
                    <Image
                      src="/rating.png"
                      width={20}
                      height={20}
                      alt="rating"
                    />
                    <Image
                      src="/rating.png"
                      width={20}
                      height={20}
                      alt="rating"
                    />
                    <Image
                      src="/rating.png"
                      width={20}
                      height={20}
                      alt="rating"
                    />
                    <Image
                      src="/rating.png"
                      width={20}
                      height={20}
                      alt="rating"
                    />
                    <Image
                      src="/rating.png"
                      width={20}
                      height={20}
                      alt="rating"
                    />
                    <h2 className="text-lg mt-1 ml-2 text-gray-600">5.0</h2>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="w-[20px] h-[20px]"
                    value={4}
                    onChange={handleRating}
                  />
                  <div className="flex items-center gap-1">
                    <Image
                      src="/rating.png"
                      width={20}
                      height={20}
                      alt="rating"
                    />
                    <Image
                      src="/rating.png"
                      width={20}
                      height={20}
                      alt="rating"
                    />
                    <Image
                      src="/rating.png"
                      width={20}
                      height={20}
                      alt="rating"
                    />
                    <Image
                      src="/rating.png"
                      width={20}
                      height={20}
                      alt="rating"
                    />
                    <span className="text-[23px] text-gray-400 mt-1">★</span>
                    <h2 className="text-lg mt-1 ml-2 text-gray-600">
                      4.0 & up
                    </h2>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="w-[20px] h-[20px]"
                    value={3}
                    onChange={handleRating}
                  />
                  <div className="flex items-center gap-1">
                    <Image
                      src="/rating.png"
                      width={20}
                      height={20}
                      alt="rating"
                    />
                    <Image
                      src="/rating.png"
                      width={20}
                      height={20}
                      alt="rating"
                    />
                    <Image
                      src="/rating.png"
                      width={20}
                      height={20}
                      alt="rating"
                    />
                    <span className="text-[23px] text-gray-400 mt-1">★</span>
                    <span className="text-[23px] text-gray-400 mt-1">★</span>
                    <h2 className="text-lg mt-1 ml-2 text-gray-600">
                      3.0 & up
                    </h2>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="w-[20px] h-[20px]"
                    value={2}
                    onChange={handleRating}
                  />
                  <div className="flex items-center gap-1">
                    <Image
                      src="/rating.png"
                      width={20}
                      height={20}
                      alt="rating"
                    />
                    <Image
                      src="/rating.png"
                      width={20}
                      height={20}
                      alt="rating"
                    />
                    <span className="text-[23px] text-gray-400 mt-1">★</span>
                    <span className="text-[23px] text-gray-400 mt-1">★</span>
                    <span className="text-[23px] text-gray-400 mt-1">★</span>
                    <h2 className="text-lg mt-1 ml-2 text-gray-600">
                      2.0 & up
                    </h2>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="w-[20px] h-[20px]"
                    value={1}
                    onChange={handleRating}
                  />
                  <div className="flex items-center gap-1">
                    <Image
                      src="/rating.png"
                      width={20}
                      height={20}
                      alt="rating"
                    />
                    <span className="text-[23px] text-gray-400 mt-1">★</span>
                    <span className="text-[23px] text-gray-400 mt-1">★</span>
                    <span className="text-[23px] text-gray-400 mt-1">★</span>
                    <span className="text-[23px] text-gray-400 mt-1">★</span>
                    <h2 className="text-lg mt-1 ml-2 text-gray-600">
                      1.0 & up
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-between my-2 lg:my-4">
                <h2 className="text-2xl">Popular Tag</h2>
                <ChevronUp />
              </div>
              <div>
                <div className="flex flex-wrap gap-3">
                  {popularTag?.map((item) => (
                    <button
                      key={item}
                      className={`bg-[#f2f2f2] rounded-full px-6 py-2 ${
                        tag === item ? "bg-green-500 text-white" : ""
                      }`}
                      onClick={() => handlePopularTag(item)}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <div className="bg-[url(/discount.png)] bg-cover bg-center lg:h-[300px] my-6 rounded-lg border-[1px] bg-no-repeat">
                <div className="flex justify-center items-center text-center lg:mt-14">
                  <div>
                    <h2 className="text-lg lg:text-2xl">
                      <span className="text-xl lg:text-4xl text-[#fe8a04]">
                        79%
                      </span>{" "}
                      Discount
                    </h2>
                    <h4 className="text-base lg:text-lg">
                      on your first order
                    </h4>
                    <button className="text-green-500 text-lg flex items-center gap-2 mx-auto">
                      Shop Now <ArrowRight />{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="mt-3 lg:mt-6">
                <h2 className="text-2xl">Sales Products</h2>
              </div>
              <div className="space-y-4 my-4">
                <div className="flex items-center gap-6 border-2 rounded-lg p-4">
                  <div>
                    <Image
                      src="/product3.png"
                      width={100}
                      height={100}
                      alt="product"
                    />
                  </div>
                  <div>
                    <h2 className="text-lg">Red Capsicum</h2>
                    <h2 className="text-xl">
                      $32.00{" "}
                      <span className="text-gray-400">
                        <del>$20.00</del>
                      </span>{" "}
                    </h2>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        <Image
                          src="/rating.png"
                          width={15}
                          height={15}
                          alt="rating"
                        />
                        <Image
                          src="/rating.png"
                          width={15}
                          height={15}
                          alt="rating"
                        />
                        <Image
                          src="/rating.png"
                          width={15}
                          height={15}
                          alt="rating"
                        />
                        <Image
                          src="/rating.png"
                          width={15}
                          height={15}
                          alt="rating"
                        />
                        <span className="text-[18px] text-gray-400">★</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-6 border-2 border-green-500 rounded-lg p-4">
                  <div>
                    <Image
                      src="/product13.png"
                      width={100}
                      height={100}
                      alt="product"
                    />
                  </div>
                  <div>
                    <h2 className="text-lg">Red Capsicum</h2>
                    <h2 className="text-xl">
                      $32.00{" "}
                      <span className="text-gray-400">
                        <del>$20.00</del>
                      </span>{" "}
                    </h2>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        <Image
                          src="/rating.png"
                          width={15}
                          height={15}
                          alt="rating"
                        />
                        <Image
                          src="/rating.png"
                          width={15}
                          height={15}
                          alt="rating"
                        />
                        <Image
                          src="/rating.png"
                          width={15}
                          height={15}
                          alt="rating"
                        />
                        <Image
                          src="/rating.png"
                          width={15}
                          height={15}
                          alt="rating"
                        />
                        <span className="text-[18px] text-gray-400">★</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-6 border-2 rounded-lg p-4">
                  <div>
                    <Image
                      src="/product10.png"
                      width={100}
                      height={100}
                      alt="product"
                    />
                  </div>
                  <div>
                    <h2 className="text-lg">Red Capsicum</h2>
                    <h2 className="text-xl">
                      $32.00{" "}
                      <span className="text-gray-400">
                        <del>$20.00</del>
                      </span>{" "}
                    </h2>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        <Image
                          src="/rating.png"
                          width={15}
                          height={15}
                          alt="rating"
                        />
                        <Image
                          src="/rating.png"
                          width={15}
                          height={15}
                          alt="rating"
                        />
                        <Image
                          src="/rating.png"
                          width={15}
                          height={15}
                          alt="rating"
                        />
                        <Image
                          src="/rating.png"
                          width={15}
                          height={15}
                          alt="rating"
                        />
                        <span className="text-[18px] text-gray-400">★</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
