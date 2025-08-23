import React, { useState } from "react";

const SunIcon = () => (
    <svg
        className="w-5 h-5 text-black-500 dark:text-cream-500 md:w-6 md:h-6 lg:w-8 lg:h-8"
        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
);

const MoonIcon = () => (
    <svg
        className="w-5 h-5 text-black-500 dark:text-cream-500 md:w-6 md:h-6 lg:w-8 lg:h-8"
        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" />
    </svg>
);

const Header: React.FC = () => {
    const [darkMode, setDarkMode] = useState(false);

    const handleToggle = () => {
        setDarkMode((prev) => !prev);
        if (!darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    };

    return (
        <header className="flex items-center justify-end w-full p-4 bg-cream-500 dark:bg-black-500">
            <button
                aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
                onClick={handleToggle}
                className="p-0 m-0 bg-transparent border-none outline-none cursor-pointer"
            >
                {darkMode ? <MoonIcon /> : <SunIcon />}
            </button>
        </header>
    );
};

export default Header;