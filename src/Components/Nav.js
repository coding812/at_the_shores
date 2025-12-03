import React from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { FaHamburger } from "react-icons/fa";
// Map link names to their destinations
const navDestinations = {
  HOME: '/',
  BIO: '#BIO',
  MEDIA: '#MEDIA',
  'PRESETS • MIDI': '/PRESETS',
  'TOUR DATES': '/TOUR',
};

const Navbar = ({ navLinks, menuOpen, setMenuOpen }) => (
  <nav className="flex justify-center items-center relative">
    {/* Hamburger for mobile */}
    <button
      className="md:hidden z-3 absolute left-4 top-1/2 -translate-y-1/2 p-2"
      onClick={() => setMenuOpen(!menuOpen)}
      aria-label="Toggle menu"
    >
      {menuOpen ? <HiX size={28} /> : <FaHamburger size={24} />}
    </button>

    {/* Nav links (desktop) */}
    <div className="hidden md:flex space-x-4">
      {navLinks.map((item, index, items) => (
        <React.Fragment key={item}>
          <a
            href={navDestinations[item] || '#'}
            className="text-xs font-bold tracking-super-wide hover:text-gray-500 transition duration-150"
          >
            {item}
          </a>
          {index < items.length - 1 && <span className="text-gray-400 text-sm">•</span>}
        </React.Fragment>
      ))}
    </div>

    {/* Nav links (mobile dropdown) */}
    <div
      className={`
        absolute top-full left-0 w-full
        bg-white/35 rounded-b-xl shadow-2xl rounded-lg backdrop-safe border border-white/30
        flex flex-col items-center md:hidden z-2 mt-3
        transition-all duration-250 ease-out
        transform
        ${menuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}
        overflow-hidden
      `}
    >
      {navLinks.map((item) => (
        <a
          key={item}
          href={navDestinations[item] || '#'}
          className="py-3 w-full text-center text-base font-bold tracking-super-wide"
          onClick={() => setMenuOpen(false)}
        >
          {item}
        </a>
      ))}
    </div>
  </nav>
);

export default Navbar;