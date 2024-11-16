
const Card = ({room}) => {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
            <img
                src={room?.image || ""}
                alt={room?.name || "Room Image"}
                className="w-full h-56 object-cover hover:scale-105 duration-500"
            />
            <div className="flex-grow p-4 flex flex-col">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{room?.name || "Home Vila"}</h3>
                <p className="text-gray-600 mb-1">{room?.location}</p>
                <p className="text-gray-500 mb-2 flex-grow">{room?.title}</p>
                {/* Price section */}
                <div className="flex items-center justify-between mt-auto">
                    <span className="text-primary font-bold text-lg">${room?.price || "50"}</span>
                    <span className="text-gray-500 text-sm">(per night)</span>
                </div>
            </div>
        </div>
    );
};

export default Card;