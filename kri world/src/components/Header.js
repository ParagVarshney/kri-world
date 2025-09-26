// Header.jsx
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Detect scroll
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-[35px]" : "bg-transparent py-6"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
                {/* Logo & Tagline */}
                <div className=" items-center space-x-3">
                    <img
                        src="https://kriworld.com/assets/img/fresh-images/logo.png" // replace with your logo
                        alt="Logo"
                        className={`object-contain transition-all duration-300 ${isScrolled ? "h-25 w-25" : "h-25 w-25"
                            }`}
                    />
                    <div>
                        <p
                            className={`transition-colors duration-300 ${isScrolled ? "text-md text-gray-600" : "text-md text-black"
                                }`}
                        >
                            kriworld itech private limited
                        </p>
                        <p
                            className={`transition-colors duration-300 ${isScrolled ? "text-sm text-gray-500" : "text-sm text-gray-700"
                                }`}
                        >
                            Since 2016
                        </p>
                    </div>

                </div>

                {/* Desktop Menu */}
                <nav className="hidden md:flex space-x-10 font-medium">
                    {["Home", "About", "Services", "Contact Us"].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase().replace(/\s/g, "")}`}
                            className={`transition-all duration-300 ${isScrolled
                                ? "text-lg text-gray-800 hover:text-green-600"
                                : "text-lg text-black hover:text-green-300"
                                }`}
                        >
                            {item}
                        </a>
                    ))}
                </nav>

                {/* Contact Button */}
                <a
                    href="#contact"
                    className={`hidden md:inline-block rounded-full font-medium transition-all duration-300 ${isScrolled
                        ? "bg-green-600 hover:bg-green-700 text-white px-6 py-3 text-base"
                        : "bg-green-500 hover:bg-green-600 text-white px-6 py-3 text-base"
                        }`}
                >
                    Contact Us
                </a>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-800"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-md absolute top-full left-0 w-full">
                    <nav className="flex flex-col space-y-4 px-6 py-4">
                        {["Home", "About", "Services", "Contact Us"].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase().replace(/\s/g, "")}`}
                                className="text-gray-800 hover:text-green-600 font-medium"
                                onClick={() => setIsOpen(false)}
                            >
                                {item}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium text-center"
                            onClick={() => setIsOpen(false)}
                        >
                            Contact Us
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
}
