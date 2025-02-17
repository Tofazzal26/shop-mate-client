import { ChevronRight, House } from "lucide-react";

const Banner = () => {
  return (
    <div>
      <div className="bg-[url(/banner.png)] bg-cover bg-center bg-no-repeat">
        <div className="mainContainer lg:px-0 px-2 py-6 lg:py-10">
          <div className="text-gray-400 flex items-center gap-2">
            <House />
            <ChevronRight size={20} />
            <h2>Categories</h2>
            <ChevronRight size={20} />
            <h2 className="text-[#0694f5]">Vegetables</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
