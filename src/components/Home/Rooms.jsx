import { useQuery } from '@tanstack/react-query'
import useAxiosCommon from "../../hooks/useAxiosCommon";
import LoadingSpinner from "../Shared/LoadingSpinner";
import Card from "./Card";
import Heading from "../Shared/Heading";


const Rooms = () => {
    const axiosCommon = useAxiosCommon()
    const { data: rooms = [], isLoading } = useQuery({
        queryKey: ["rooms"],
        queryFn: async () => {
            const { data } = await axiosCommon.get('/rooms')
            return data
        }

    })
    console.log(rooms);

    if (isLoading) return <LoadingSpinner />

    return (
        <>
            {rooms && rooms.length > 0 ? (
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-between'>
                    {rooms.map(room => (
                        <Card key={room._id} room={room} />
                    ))}
                </div>
            ) : (
                <div className='flex items-center justify-center min-h-[calc(100vh-300px)]'>
                    <Heading
                        center={true}
                        title='No Rooms Available In This Category!'
                        subtitle='Please Select Other Categories.'
                    />
                </div>
            )}
        </>
    );
};

export default Rooms;

// Fake Data
const rooms2 = [
    { id: 1, name: "Cinnamon Islands", location: "Maldives", rating: 4.5, img: "https://i.postimg.cc/MHCDGkyD/a1d15e2e0244c51c0bd1c3e7e9809e26.jpg" },
    { id: 2, name: "Havana Bay", location: "Cuba", rating: 4.7, img: "https://i.postimg.cc/0N6DKQgJ/11ea822f5335159d394894868429017f.jpg" },
    { id: 3, name: "Night Sands", location: "Thailand", rating: 4.6, img: "https://i.postimg.cc/Yqk6DMFJ/995340f4e3a60ae8880d286726b4be1f.jpg" },
    { id: 4, name: "Sunset Beach", location: "Philippines", rating: 4.8, img: "https://i.postimg.cc/zXjn96S3/a229e0a2823876ea0dc25e8d402a8282.jpg" },
    { id: 5, name: "Tropical Cove", location: "Bali", rating: 4.9, img: "https://i.postimg.cc/L88zRDND/a54d9a87b6a84419d6721bce8cd687bd.jpg" },
    { id: 6, name: "Blue Lagoon", location: "Greece", rating: 4.5, img: "https://i.postimg.cc/Dwp1zGNT/b02935d95d1efb0ac7676740004a653f.jpg" }
];