import Carousel2 from '../../components/Home/Carousel';
import ExplorePlaces from '../../components/Home/Rooms';

const Home = () => {
    return (
        <div className=''>
            <div className="container -mt-4">
                <Carousel2 />
                <ExplorePlaces/>
            </div>
        </div>
    );
};

export default Home;