import { Carousel } from 'flowbite';

// const carousel = new Carousel(carouselElement, items, options, instanceOptions);
const Carousel2 = () => {
  return (
    <div id="default-carousel" className="relative w-full " data-carousel="slide">
      {/* Carousel wrapper */}
      <div className="relative h-80 overflow-hidden rounded-sm md:h-[70vh]">
        {/* Item 1 */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <div className="absolute inset-0 bg-black opacity-35 z-10"></div> {/* Overlay */}
          <img
            src='https://www.ca.kayak.com/rimg/himg/44/fe/90/leonardo-61545-147068318-531165.jpg?width=1366&height=768&crop=true'
            className="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
          {/* Text Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-center text-white px-4">
            <h2 className="text-2xl font-bold">Stunning Views Await</h2>
            <p className="mt-2 text-lg">Discover breathtaking destinations and luxury stays.</p>
          </div>
        </div>
        {/* Item 2 */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <div className="absolute inset-0 bg-black opacity-35 z-10"></div> {/* Overlay */}
          <img
            src='https://www.intechnic.com/hubfs/Blog/Featured%20Images/Best%20Hotel%20Website%20Designs.jpg'
            className="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
          {/* Text Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-center text-white px-4">
            <h2 className="text-2xl font-bold">Unforgettable Escapes</h2>
            <p className="mt-2 text-lg">Experience the finest hospitality in the most beautiful locations.</p>
          </div>
        </div>
        {/* Item 3 */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <div className="absolute inset-0 bg-black opacity-35 z-10"></div> {/* Overlay */}
          <img
            src='https://assets.tivolihotels.com/image/upload/q_auto,f_auto,c_limit,w_1378/media/minor/tivoli/images/brand_level/footer/1920x1000/thr_aboutus1_1920x1000.jpg'
            className="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
          {/* Text Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-center text-white px-4">
            <h2 className="text-2xl font-bold">Luxury Redefined</h2>
            <p className="mt-2 text-lg">Indulge in the luxury you deserve with exceptional service and stunning settings.</p>
          </div>
        </div>
        {/* Item 4 */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <div className="absolute inset-0 bg-black opacity-35 z-10"></div> {/* Overlay */}
          <img
            src='https://grandsylhet.com/wp-content/themes/grandsylhet/assets/images/photo_gallery/swimmingpool/pool01.jpg'
            className="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
          {/* Text Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-center text-white px-4">
            <h2 className="text-2xl font-bold">Relax and Unwind</h2>
            <p className="mt-2 text-lg">Take a dip in our world-class pools and relax in pure comfort.</p>
          </div>
        </div>
        {/* Item 5 */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <div className="absolute inset-0 bg-black opacity-35 z-10"></div> {/* Overlay */}
          <img
            src='https://assets.tivolihotels.com/image/upload/q_auto,f_auto,c_limit,w_1378/media/minor/tivoli/images/brand_level/footer/1920x1000/thr_aboutus1_1920x1000.jpg'
            className="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
          {/* Text Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-center text-white px-4">
            <h2 className="text-2xl font-bold">Stay in Style</h2>
            <p className="mt-2 text-lg">A perfect blend of modern comfort and timeless elegance.</p>
          </div>
        </div>
      </div>
      {/* Slider indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="true"
          aria-label="Slide 1"
          data-carousel-slide-to="0"
        ></button>
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 2"
          data-carousel-slide-to="1"
        ></button>
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 3"
          data-carousel-slide-to="2"
        ></button>
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 4"
          data-carousel-slide-to="3"
        ></button>
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 5"
          data-carousel-slide-to="4"
        ></button>
      </div>

      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <span className="inline-flex items-center justify-center w-10 h-10 md:w-14 md:h-14 rounded-full bg-gray-600/40 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-5 h-5 text-gray-300 dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span className="inline-flex items-center justify-center w-10 h-10 md:w-14 md:h-14 rounded-full bg-gray-600/40 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-5 h-5 text-gray-300 dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Carousel2;

