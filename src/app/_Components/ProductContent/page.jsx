import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Card from "./Card/page";

const ProductContent = () => {
  return (
    <div className="mt-3 lg:mt-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h2 className="text-gray-600">Sort By:</h2>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Latest" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="latest">Latest</SelectItem>
                <SelectItem value="old">Old</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div>
          <h2 className="text-gray-600">
            {" "}
            <span className="text-lg text-black">52</span> Results Found
          </h2>
        </div>
      </div>
      <div>
        <Card />
      </div>
    </div>
  );
};

export default ProductContent;
