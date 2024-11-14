
const places = [
  { id: 1, name: "Cinnamon Islands", location: "Maldives", rating: 4.5, img: "https://i.postimg.cc/MHCDGkyD/a1d15e2e0244c51c0bd1c3e7e9809e26.jpg" },
  { id: 2, name: "Havana Bay", location: "Cuba", rating: 4.7, img: "https://i.postimg.cc/0N6DKQgJ/11ea822f5335159d394894868429017f.jpg" },
  { id: 3, name: "Night Sands", location: "Thailand", rating: 4.6, img: "https://i.postimg.cc/Yqk6DMFJ/995340f4e3a60ae8880d286726b4be1f.jpg" },
  { id: 4, name: "Sunset Beach", location: "Philippines", rating: 4.8, img: "https://i.postimg.cc/zXjn96S3/a229e0a2823876ea0dc25e8d402a8282.jpg" },
  { id: 5, name: "Tropical Cove", location: "Bali", rating: 4.9, img: "https://i.postimg.cc/L88zRDND/a54d9a87b6a84419d6721bce8cd687bd.jpg" },
  { id: 6, name: "Blue Lagoon", location: "Greece", rating: 4.5, img: "https://i.postimg.cc/Dwp1zGNT/b02935d95d1efb0ac7676740004a653f.jpg" }
];

const ExplorePlaces = () => {
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {places.map((place) => (
          <div key={place.id} className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer">
            <img
              src={place.img}
              alt={place.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{place.name}</h3>
              <p className="text-gray-600 mb-2">{place.location}</p>
              <div className="flex items-center gap-2">
                <span className="text-[#ff8901] font-semibold">$50</span>
                <span className="text-gray-500 text-sm">(Night)</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExplorePlaces;
