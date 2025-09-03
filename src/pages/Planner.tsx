import React from "react";

const Planner: React.FC = () => (
    <div className="relative flex flex-col items-center w-full min-h-screen pt-12 bg-cream-500 dark:bg-black-400">

        <div className="flex flex-col items-center gap-1">
            <div className="flex flex-col p-2 space-y-4 border-[1px] rounded-lg bg-cream-600 dark:bg-black-600 border-cream-700 dark:border-black-300">
                <button>
                    <svg className="text-black-400 dark:text-cream-400" xmlns="http://www.w3.org/2000/svg" width="38px" height="38px" viewBox="0 0 24 24">
                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0-14 0m4 0h6m-3-3v6m11 8l-6-6"></path>
                    </svg>
                </button>
                <button>
                    <svg className="text-black-400 dark:text-cream-400" xmlns="http://www.w3.org/2000/svg" width="38px" height="38px" viewBox="0 0 24 24">
                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0-14 0m4 0h6m8 11l-6-6"></path>
                    </svg>
                </button>
            </div>

            <div className="flex flex-col p-2 space-y-4 border-[1px] rounded-lg bg-cream-600 dark:bg-black-600 border-cream-700 dark:border-black-300">
                <button>
                    <svg className="text-black-400 dark:text-cream-400" xmlns="http://www.w3.org/2000/svg" width="38px" height="38px" viewBox="0 0 24 24">
                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M7 11l5 5l5-5m-5-7v12"></path>
                    </svg>
                </button>
            </div>

            <div className="flex flex-col p-2 space-y-4 border-[1px] rounded-lg bg-green-500 dark:bg-pink-500 border-cream-700 dark:border-black-300">
                <button>
                    <svg className="text-black-400 dark:text-black-400" xmlns="http://www.w3.org/2000/svg" width="38px" height="38px" viewBox="0 0 24 24">
                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v14m-7-7h14"></path>
                    </svg>
                </button>
            </div>
        </div>
    </div>
);

export default Planner;