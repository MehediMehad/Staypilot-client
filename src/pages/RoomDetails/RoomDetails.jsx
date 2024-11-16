import { Helmet } from 'react-helmet-async';
import RoomReservation from '../../components/RoomDetails/RoomReservation';
import Heading from '../../components/Shared/Heading';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../../components/Shared/LoadingSpinner';
import useAxiosCommon from '../../hooks/useAxiosCommon';

const RoomDetails = () => {
  const { id } = useParams();
  const axiosCommon = useAxiosCommon();

  const { data: room, isLoading } = useQuery({
    queryKey: ['room', id],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/room/${id}`);
      return data;
    },
  });
  console.log(room);
  

  if (isLoading) return <LoadingSpinner />;
  
  return (
    <>
      <Helmet>
        <title>{room?.title}</title>
      </Helmet>
      {room && (
        <div className="max-w-screen-lg mx-auto px-4 py-8 bg-gray-50">
          {/* Header */}
          <div className="mb-8">
            {/* <Heading title={room.title} subtitle={room.location} /> */}
            <div className="relative w-full md:h-[60vh] overflow-hidden rounded-lg shadow-lg mb-6">
              <img
                className="object-cover w-full h-full"
                src={room.image}
                alt={room.title}
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4 text-white">
                <h2 className="text-2xl font-bold">{room.title}</h2>
                <p className="text-sm">{room.location}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6">
            {/* Room Info */}
            <div className="col-span-4 flex flex-col gap-8 bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center gap-4 mb-4">
                <img
                  className="rounded-full border border-neutral-300 w-10 h-10"
                  alt="Avatar"
                  src={room?.host?.image}
                />
                <div>
                  <h3 className="text-xl font-semibold">Hosted by {room?.host?.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span>{room?.guests} guests</span>
                    <span>{room?.bedrooms} rooms</span>
                    <span>{room?.bathrooms} bathrooms</span>
                  </div>
                </div>
              </div>

              <hr />
              <div className="text-lg font-light text-gray-700 mb-4">
                {room?.description}
              </div>
              <hr />
            </div>

            {/* Room Reservation */}
            <div className="md:col-span-3 order-first md:order-last mb-10">
              <RoomReservation room={room} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RoomDetails;