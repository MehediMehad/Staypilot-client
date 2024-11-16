import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../hooks/useAxiosCommon";
import Rooms from "./Rooms";

const RoomSection = () => {
  const axiosCommon = useAxiosCommon();
  
  // Fetch categories from the backend
  const { data: categoryData = [] } = useQuery({
    queryKey: ["category"],
    queryFn: async () => {
      const { data } = await axiosCommon.get("/category");
      return data.categories; // Ensure the response contains an array of categories
    },
  });

  return (
    <div className="p-6 md:p-5 bg-white mt-20">
      <h2 className="text-3xl font-bold mb-6">Rooms</h2>
      
      {/* Filter Tabs */}
      <div className="flex gap-4 mb-8 text-gray-600 font-semibold">
        {
          // <button className="text-black border-b-2 border-primary pb-1">Beach</button>
          categoryData.map((category, index) => (
            <button
              key={index} 
              className={`hover:text-black`} 
            >
              {category}
            </button>
          ))
        }
      </div>
      
      {/* Cards Grid */}
      <Rooms />
    </div>
  );
};

export default RoomSection;