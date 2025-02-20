"use client";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useState } from "react";
import { Star } from "@smastrom/react-rating";

const Card = () => {
  const [rating, setRating] = useState(0);

  return (
    <div>
      <div>
        <div>
          <Image
            src="/product13.png"
            width={200}
            height={200}
            alt="productImage"
          />
        </div>
        <div>
          <div>
            <h4 className="text-base text-gray-600">Big Potatos</h4>
            <h2 className="text-lg">$14.99</h2>
            <div className="flex">
              <Rating
                style={{ maxWidth: 120 }}
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
          <div>
            <ShoppingCart size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
