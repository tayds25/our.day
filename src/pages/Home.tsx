import { Link } from 'react-router-dom';

import homeImg from '../assets/home_img.png';
import titleCapt from '../assets/title_caption.png';

const Home = () => {
    return (
        // Main Container
        <div className='min-h-screen flex flex-col items-center justify-center bg-background'>
            {/* Banner and Title */}
            <div className='flex flex-col items-center gap-y-6'>
                <img
                    src={homeImg}
                    alt='Banner image'
                    className='max-w-[340px] max-h-[250px]'
                />
                <img
                    src={titleCapt}
                    alt='Title caption'
                    className='max-w-[400px]'
                />
            </div>
            {/* Buttons */}
            <div className='flex flex-row items-center gap-x-9'>
                <Link
                    to="/create-plan"
                    className="mt-8 px-6 py-3 bg-[#3E5879] text-white font-semibold rounded-lg shadow-md hover:bg-[#213555] focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-75 transition-colors"
                >                        New Plan
                </Link>
                <Link
                    to="/list-plan"
                    className="mt-8 px-6 py-3 bg-[#3E5879] text-white font-semibold rounded-lg shadow-md hover:bg-[#213555] focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-75 transition-colors"
                >
                    List Plans
                </Link>
            </div>
        </div>
    );
}

export default Home;