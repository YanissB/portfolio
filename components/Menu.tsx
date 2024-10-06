"use client";

import React, { useState, useEffect, useRef } from "react";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null); // Create a ref for the menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close the menu when clicking outside
  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={toggleMenu}
        className="text-xl p-2 border-2 bg-white shadow-[6px_6px_0px_rgba(217,217,217,1)] border-gray rounded-full"
      >
        Menu
      </button>
      {isOpen && (
        <div className="absolute bottom-full left-0 w-full bg-white border border-black shadow-lg">
          <a href="#projects" className="block p-2 text-xl">
            Projects
          </a>
          <a href="#about" className="block p-2 text-xl">
            About
          </a>
          <a href="#contact" className="block p-2 text-xl">
            Contact
          </a>
        </div>
      )}
    </div>
  );
};

export default Menu;
