import React from "react";

const Home: React.FC = () => (
    <div className="relative flex flex-col items-center w-full min-h-screen pt-12 bg-cream-500 dark:bg-black-500">
        <h1
            className="mb-3 text-5xl text-green-700 font-display sm:text-6xl md:text-7xl lg:text-display dark:text-pink-700">
            our.day
        </h1>

        <div className="relative flex flex-col items-center">
            {/* Arrow */}
            <div className="absolute flex items-center mr-1 -translate-y-1/2 sm:mr-2 right-full top-1/2">
                <span className="mr-1 text-[10px] sm:mr-2 sm:text-xs md:text-small lg:text-md font-body text-black-400 dark:text-cream-400 whitespace-nowrap">
                    start the car
                </span>

                <svg
                    className="w-5 h-4 sm:w-12 sm:h-5 md:w-16 md:h-6 lg:w-20 lg:h-8 text-black-200 dark:text-cream-800"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 64 32"
                >
                    <line x1="0" y1="16" x2="48" y2="16" />
                    <polyline points="48,8 64,16 48,24" />
                </svg>
            </div>

            <img
                src="/src/assets/van.png"
                alt="Van"
                className="w-auto h-20 sm:h-32 md:h-40 lg:h-60"
            />
        </div>

        <hr className="w-full border-t-2 border-black-200 dark:border-cream-800 mt-[-4px] sm:mt-[-5px] md:mt-[-6px] lg:mt-[-6px]" />

        <p
            className="max-w-xl px-4 mt-6 text-center text-small text-black-300 dark:text-cream-300 sm:text-small md:text-lg lg:text-xl">
            A simple, aesthetic one day date itinerary planner.
        </p>
    </div>
);

export default Home;