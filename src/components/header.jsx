'use client';
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const router = useRouter();

    // Detect scroll position
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10); // Add shadow and background if scrolled more than 10px
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header
        className={`${
            isScrolled ? "bg-white shadow-md text-secondary" : "bg-primary text-secondary"
        } transition-all duration-300 z-50 relative md:sticky top-0`}
        >
            <nav className="container mx-auto px-4 lg:px-8">
                <div className="flex items-center justify-between py-4">
                    {/* Logo */}
                    <a href="/" className="font-bold text-xl md:text-2xl tracking-wide">
                        Edu Application
                    </a>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex space-x-6 text-sm lg:text-base items-center">
                        <li>
                            <a href="/quiz" className="hover:text-secondaryHover transition-colors">
                                Quiz
                            </a>
                        </li>
                        <li>
                            <a href="/chat" className="hover:text-secondaryHover transition-colors">
                                ChatBot
                            </a>
                        </li>
                        <li>
                            <a href="/coming" className="hover:text-secondaryHover transition-colors">
                                Schemes
                            </a>
                        </li>
                        <li>
                            <a href="/coming" className="hover:text-secondaryHover transition-colors">
                                SignIn
                            </a>
                        </li>
                        <li>
                            <a
                                href="/coming"
                                className="bg-secondary text-primary px-3 py-2 rounded-lg hover:bg-secondaryHover transition-all"
                            >
                                Register
                            </a>
                        </li>
                    </ul>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-secondary focus:outline-none"
                        onClick={toggleMenu}
                        aria-label="Toggle navigation menu"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden transition-all duration-300 ease-in-out ${
                        isMenuOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                    }`}
                >
                    <ul className="flex flex-col space-y-4 text-sm" role="menu">
                        <li>
                            <a
                                href="/quiz"
                                className="hover:text-secondaryHover transition-colors"
                                role="menuitem"
                            >
                                Quiz
                            </a>
                        </li>
                        <li>
                            <a
                                href="/chat"
                                className="hover:text-secondaryHover transition-colors"
                                role="menuitem"
                            >
                                ChatBot
                            </a>
                        </li>
                        <li>
                            <a
                                href="/coming"
                                className="hover:text-secondaryHover transition-colors"
                                role="menuitem"
                            >
                                Schemes
                            </a>
                        </li>
                        <li>
                            <a
                                href="/coming"
                                className="hover:text-secondaryHover transition-colors"
                                role="menuitem"
                            >
                                SignIn
                            </a>
                        </li>
                        <li>
                            <a
                                href="/coming"
                                className="hover:text-secondaryHover transition-colors"
                                role="menuitem"
                            >
                                Register
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}