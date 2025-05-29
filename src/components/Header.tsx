"use client";
import { useState, useEffect } from "react";

interface HeaderProps {
    initialColor?: string; // Make initialColor optional
}

const Header = ({ initialColor }: HeaderProps) => {
    const [headerColor, setHeaderColor] = useState(
        initialColor || "bg-transparent"
    ); // Default to transparent
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 50) {
                // Adjust this value as needed
                setHeaderColor("bg-blue-100"); // Light blue background on scroll
                setIsScrolled(true);
            } else {
                setHeaderColor(initialColor || "bg-transparent"); // Revert to initial or transparent
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [initialColor]);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${headerColor} ${
                isScrolled || isOpen ? "shadow-md" : ""
            }`}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
                <div className="flex justify-between items-center">
                    {/* Church Name & Logo */}
                    <div className="flex items-center">
                        {/* Placeholder for a logo if you add one later */}
                        <img
                            src="/churchlogo.png"
                            alt="Church Logo"
                            className="h-12 w-auto mr-3"
                        />
                        <div
                            className={
                                isScrolled ? "text-gray-800" : "text-white"
                            }
                        >
                            <h1 className="text-xl md:text-2xl font-bold leading-tight">
                                ST. GEORGE HOREB
                            </h1>
                            <h2 className="text-xs md:text-sm font-medium opacity-90">
                                JACOBITE SYRIAN CHURCH, VADAKKUMBHAGAM
                            </h2>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
                        <a
                            href="#home"
                            className={`${
                                isScrolled
                                    ? "text-gray-700 hover:text-blue-600"
                                    : "text-white hover:text-yellow-300"
                            } transition-colors font-medium text-sm`}
                        >
                            Home
                        </a>
                        <a
                            href="#about"
                            className={`${
                                isScrolled
                                    ? "text-gray-700 hover:text-blue-600"
                                    : "text-white hover:text-yellow-300"
                            } transition-colors font-medium text-sm`}
                        >
                            About Us
                        </a>
                        <a
                            href="#news"
                            className={`${
                                isScrolled
                                    ? "text-gray-700 hover:text-blue-600"
                                    : "text-white hover:text-yellow-300"
                            } transition-colors font-medium text-sm`}
                        >
                            News & Media
                        </a>
                        <a
                            href="#events"
                            className={`${
                                isScrolled
                                    ? "text-gray-700 hover:text-blue-600"
                                    : "text-white hover:text-yellow-300"
                            } transition-colors font-medium text-sm`}
                        >
                            Events
                        </a>
                        <a
                            href="#donate"
                            className={`${
                                isScrolled
                                    ? "text-blue-600 border-blue-500 hover:bg-blue-500 hover:text-white"
                                    : "text-white border-white hover:bg-white hover:text-gray-800"
                            } transition-colors font-medium border px-4 py-2 rounded-md text-sm`}
                        >
                            Donate Now
                        </a>
                        <a
                            href="#contact"
                            className={`${
                                isScrolled
                                    ? "text-blue-600 border-blue-500 hover:bg-blue-500 hover:text-white"
                                    : "text-white border-white hover:bg-white hover:text-gray-800"
                            } transition-colors font-medium border px-4 py-2 rounded-md text-sm`}
                        >
                            Contact Us
                        </a>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className={`md:hidden p-2 ${
                            isScrolled ? "text-gray-700" : "text-white"
                        }`}
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <nav
                        className={`md:hidden mt-4 pb-4 ${
                            isScrolled && !isOpen
                                ? "bg-blue-100"
                                : isScrolled && isOpen
                                ? "bg-blue-100"
                                : isOpen
                                ? headerColor
                                : ""
                        }`}
                    >
                        <div className="flex flex-col space-y-4">
                            <a
                                href="#home"
                                className={`${
                                    isScrolled
                                        ? "text-gray-700 hover:bg-blue-200 hover:text-blue-700"
                                        : "text-white hover:bg-gray-700 hover:text-yellow-300"
                                } block px-3 py-2 rounded-md text-base font-medium`}
                            >
                                Home
                            </a>
                            <a
                                href="#about"
                                className={`${
                                    isScrolled
                                        ? "text-gray-700 hover:bg-blue-200 hover:text-blue-700"
                                        : "text-white hover:bg-gray-700 hover:text-yellow-300"
                                } block px-3 py-2 rounded-md text-base font-medium`}
                            >
                                About Us
                            </a>
                            <a
                                href="#news"
                                className={`${
                                    isScrolled
                                        ? "text-gray-700 hover:bg-blue-200 hover:text-blue-700"
                                        : "text-white hover:bg-gray-700 hover:text-yellow-300"
                                } block px-3 py-2 rounded-md text-base font-medium`}
                            >
                                News & Media
                            </a>
                            <a
                                href="#events"
                                className={`${
                                    isScrolled
                                        ? "text-gray-700 hover:bg-blue-200 hover:text-blue-700"
                                        : "text-white hover:bg-gray-700 hover:text-yellow-300"
                                } block px-3 py-2 rounded-md text-base font-medium`}
                            >
                                Events
                            </a>
                            <a
                                href="#donate"
                                className={`${
                                    isScrolled
                                        ? "text-blue-600 border-blue-500 hover:bg-blue-500 hover:text-white"
                                        : "text-white border-yellow-500 hover:bg-gray-700 hover:text-yellow-300"
                                } block px-3 py-2 rounded-md text-base font-medium mt-2 border text-center`}
                            >
                                Donate Now
                            </a>
                            <a
                                href="#contact"
                                className={`${
                                    isScrolled
                                        ? "bg-blue-500 hover:bg-blue-600 text-white"
                                        : "bg-red-600 hover:bg-red-700 text-white"
                                } block px-3 py-2 rounded-md text-base font-medium mt-2 text-center`}
                            >
                                Contact Us
                            </a>
                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
};

export default Header;
