"use client";
import { Eye, Heart, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useState } from "react";
import { Star } from "@smastrom/react-rating";
import CardStyle from "./CardStyle/CardStyle.module.css";
import DetailsModal from "../DetailsModal/page";

const Card = () => {
  const [rating, setRating] = useState(0);

  return (
    <div className="mt-5">
      <div className="lg:grid-cols-4 lg:p-0 p-2 grid md:grid-cols-3 grid-cols-1">
        <div
          className={`border-2 rounded-lg p-3 lg:p-6 relative ${CardStyle.card}`}
        >
          <div>
            <Image
              src="/product13.png"
              width={200}
              height={200}
              alt="productImage"
              className={`w-full ${CardStyle.cardImage} lg:w-full lg:h-[300px]`}
            />
          </div>
          <div className="flex justify-between items-center mt-4 lg:mt-14">
            <div>
              <h4 className="text-base text-gray-600">Big Potatos</h4>
              <h2 className="text-lg">$14.99</h2>
              <div className="flex">
                <Rating
                  style={{ maxWidth: 80 }}
                  value={4}
                  readOnly
                  itemStyles={{
                    itemShapes: Star,
                    activeFillColor: "#fe8900",
                    inactiveFillColor: "#dcdcdc",
                  }}
                />
              </div>
            </div>
            <div
              className={`w-[45px] h-[45px] flex justify-center items-center rounded-full bg-gray-100 ${CardStyle.activeCart}`}
            >
              <ShoppingCart size={20} />
            </div>
          </div>
          <div className={`space-y-2 ${CardStyle.overlay}`}>
            <div className="w-[45px] h-[45px] flex justify-center items-center rounded-full bg-white border-2">
              <Heart size={20} />
            </div>
            <div>
              <DetailsModal />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
