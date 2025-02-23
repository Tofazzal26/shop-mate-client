"use client";
import { Eye, Heart, Minus, Plus, ShoppingCart } from "lucide-react";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Star } from "@smastrom/react-rating";
import { Rating } from "@smastrom/react-rating";
const DetailsModal = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [rating, setRating] = useState(0);
  return (
    <div>
      {" "}
      <Dialog>
        <DialogTrigger asChild>
          <div className="w-[45px] h-[45px] flex justify-center items-center rounded-full bg-white border-2">
            <Eye size={20} />
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogTitle></DialogTitle>
          <div>
            <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-4 lg:gap-8">
              <div className="flex items-center">
                <Swiper
                  onSwiper={setThumbsSwiper}
                  direction="vertical"
                  slidesPerView={4}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <img src="/product13.png" />
                  </SwiperSlide>
                  <SwiperSlide className="">
                    <img src="/product13.png" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="/product13.png" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="/product13.png" />
                  </SwiperSlide>
                </Swiper>
                <Swiper
                  style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                  }}
                  spaceBetween={10}
                  thumbs={{ swiper: thumbsSwiper }}
                  modules={[FreeMode, Thumbs]}
                  className="mySwiper2 lg:h-[500px]"
                >
                  <SwiperSlide>
                    <img src="/product13.png" className="w-full" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="/product13.png" className="w-full" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="/product13.png" className="w-full" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="/product13.png" className="w-full" />
                  </SwiperSlide>
                </Swiper>
              </div>
              <div>
                <div>
                  <div className="flex gap-2 items-center">
                    <h2 className="text-4xl">Chinese Cabbage</h2>
                    <button className="bg-[#d3f0d2] px-2 py-1 rounded-md text-[#34783a]">
                      In Stock
                    </button>
                  </div>
                  <div className="flex gap-4 items-center my-3">
                    <div className="flex gap-2 items-center">
                      <Rating
                        style={{ maxWidth: 80 }}
                        value={5}
                        readOnly
                        itemStyles={{
                          itemShapes: Star,
                          activeFillColor: "#fe8900",
                          inactiveFillColor: "#dcdcdc",
                        }}
                      />
                      <h4 className="text-gray-400 mt-1">4 Review</h4>
                    </div>
                    <div className="mt-1">
                      <h2>
                        SKU:{" "}
                        <span className="text-gray-400 ml-1">2,51,594</span>
                      </h2>
                    </div>
                  </div>
                  <div className="flex gap-2 items-center">
                    <h2 className="text-gray-400 text-xl">
                      <del>$48.00</del>
                      <span className="text-[#578f5a] text-[24px] ml-1">
                        $17.28
                      </span>
                    </h2>
                    <button className="bg-[#feecef] text-[#ec6968] text-sm rounded-full px-4 py-1">
                      64% Off
                    </button>
                  </div>
                  <div>
                    <div>
                      <div className="border-t-2 mt-4 pt-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h2>Brand:</h2>
                          </div>
                          <div className="flex items-center gap-2">
                            <h2 className="text-black">Share item:</h2>
                            <div className="flex items-center gap-6">
                              <a href="https://facebook.com" target="_blank">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="18"
                                  height="18"
                                  viewBox="0 0 24 24"
                                  className="fill-current text-gray-500"
                                >
                                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                                </svg>
                              </a>
                              <a href="https://x.com" target="_blank">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="18"
                                  height="18"
                                  viewBox="0 0 24 24"
                                  className="fill-current text-gray-500"
                                >
                                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                                </svg>
                              </a>
                              <a href="https://www.youtube.com" target="_blank">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="18"
                                  height="18"
                                  viewBox="0 0 24 24"
                                  className="fill-current text-gray-500"
                                >
                                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                                </svg>
                              </a>
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-500 my-6">
                          Class patent taciti sociosqu ad litara tarquent per
                          conubia nostra, per inceptos himenaeos. Nulla nibh
                          diam, blandit vel consequat nec, ultrices et ipsum.
                          Nulla varius magna a consequat pulvinar
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-2 border-t-2 pt-4">
                    <div className="flex gap-4 items-center border-2 p-2 rounded-full">
                      <button className="bg-[#f2f2f2] rounded-full py-2 px-2">
                        <Minus size={18} />
                      </button>
                      <span className="text-lg">0</span>
                      <button className="bg-[#f2f2f2] rounded-full py-2 px-2">
                        <Plus size={18} />
                      </button>
                    </div>
                    <div className="flex-1">
                      <button className="flex gap-2 items-center justify-center text-white py-[14px] bg-[#00b206] w-full rounded-full">
                        Add to Cart <ShoppingCart size={20} />{" "}
                      </button>
                    </div>
                    <div>
                      <button className="bg-[#e9f7e8] text-[#377a3b] rounded-full py-4 px-4">
                        {" "}
                        <Heart />{" "}
                      </button>
                    </div>
                  </div>
                  <div>
                    <h2 className="mt-6">
                      Category:{" "}
                      <span className="text-gray-400">Vegetables</span>
                    </h2>

                    <h2 className="text-gray-400 mt-2">
                      <span className="text-black">Tag:</span> Vegetables
                      Healthy <span className="text-black">Chinese </span>
                      Cabbage Green Cabbage
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DetailsModal;
