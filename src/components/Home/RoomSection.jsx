import Rooms from "./Rooms";

const RoomSection = () => {
  return (
    <div className="p-6 md:p-5 bg-white mt-20">
      <h2 className="text-3xl font-bold mb-6">Rooms</h2>
      
      {/* Filter Tabs */}
      <div className="flex gap-4 mb-8 text-gray-600 font-semibold">
        <button className="text-black border-b-2 border-primary pb-1">Beach</button>
        <button className="hover:text-black">Mountain</button>
        <button className="hover:text-black">Culture</button>
        <button className="hover:text-black">Adventure</button>
      </div>
      
      {/* Cards Grid */}
      <Rooms />
    </div>
  );
};

export default RoomSection;
