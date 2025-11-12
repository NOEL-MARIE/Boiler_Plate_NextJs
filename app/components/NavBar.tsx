"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // icônes burger et close
import Anim_Logo from "../Animations/Anim_Logo";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  const menus = {
    Articles: ["Vie communautaire", "Spiritualité", "Développement personnel"],
    Ressources: ["Textes fondateurs", "Documents PDF", "Formations"],
    Informations: ["Contact", "Événements", "À propos"],
  } as const;

  type MenuKey = keyof typeof menus;
  const [openMenu, setOpenMenu] = useState<MenuKey | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Effet de scroll (apparition/disparition)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleMouseEnter = (key: MenuKey) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(key);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 150);
  };

  return (
    <nav
      className={`fixed top-6 left-1/2 z-50 -translate-x-1/2 transition-all duration-700 ease-in-out flex items-center justify-around h-[10%] max-w-9xl group hover:cursor-pointer 
        ${isScrolled ? "w-[35%] backdrop-blur-md shadow-lg rounded-full" : "w-full"}
        ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-24 opacity-0"}
      `}
    >
      {/* Logo */}
      <div className={`flex items-center gap-2 transition-all duration-700 ease-in-out w-[30%] 
        ${isScrolled ? "mx-8" : ""}
        
        `}>
        {/* <Link href="/" className="flex items-center gap-3">
          <p className="text-2xl font-Ultravision text-white flex gap-9">
            <div className="flex w-[10%]">

            D
            <p className=" hidden group-hover:flex transition-all duration-700 ease-in-out">e</p>
            </div>
            
            <div className="flex w-[10%]">

            G
            <p className=" hidden group-hover:flex transition-all duration-700 ease-in-out">o</p>
            <p className=" hidden group-hover:flex transition-all duration-700 ease-in-out">n</p>
            <p className=" hidden group-hover:flex transition-all duration-700 ease-in-out">z</p>
            <p className=" hidden group-hover:flex transition-all duration-700 ease-in-out">a</p>
            <p className=" hidden group-hover:flex transition-all duration-700 ease-in-out">g</p>
            <p className=" hidden group-hover:flex transition-all duration-700 ease-in-out">u</p>
            <p className=" hidden group-hover:flex transition-all duration-700 ease-in-out">e</p>
            </div>
          </p>
        </Link> */}
        <Anim_Logo className="text-2xl font-Ultravision text-white" />
      </div>

      {/* Bouton Burger (mobile) */}
      <button
        className="md:hidden text-white focus:outline-none"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <X size={26} /> : <Menu size={26} />}
      </button>

      {/* Menu Desktop */}
      <div
        className={`hidden md:flex items-center gap-8 font-Ultravision transition-all duration-700
          ${isScrolled ? "hidden" : "hidden"}
          `}
      >
        {["Principes", "Articles", "Jardin", "Ressources", "Informations"].map((item) => {
          const typedKey = item as MenuKey;
          const hasSubMenu = menus[typedKey] !== undefined;

          return (
            <div
              key={item}
              className="relative group"
              onMouseEnter={() => hasSubMenu && handleMouseEnter(typedKey)}
              onMouseLeave={handleMouseLeave}
            >
              {/* Lien principal */}
              <Link
                href="#"
                className={`transition text-neutral-300 hover:text-white py-2 px-3 ${
                  openMenu === typedKey ? "text-white" : ""
                }`}
              >
                {item}
              </Link>

              {/* Sous-menu individuel sous chaque lien */}
              {hasSubMenu && openMenu === typedKey && (
                <div className="flex flex-col items-center">
                  {/* Flèche triangulaire */}
                  <div
                    className="relative    w-0 h-0
                    border-l-[10px] border-l-transparent 
                    border-r-[10px] border-r-transparent 
                    border-b-[10px] border-b-white/70"
                  ></div>

                  <div
                    className={`absolute left-1/2 top-full  -translate-x-1/2 w-56 bg-white/90 shadow-lg rounded-lg transition-all duration-300 ease-out`}
                    onMouseEnter={() => {
                      if (closeTimer.current) clearTimeout(closeTimer.current);
                    }}
                    onMouseLeave={handleMouseLeave}
                  >
                    <ul className="flex flex-col py-3 text-center">
                      {menus[typedKey].map((subItem, i) => (
                        <li key={i}>
                          <Link
                            href="#"
                            className="block px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-black transition"
                          >
                            {subItem}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Menu Mobile déroulant */}
      <div
        className={`absolute top-[100%] left-0 w-full bg-black/90 text-white flex flex-col items-center gap-4 py-6 transition-all duration-500 md:hidden
          ${mobileOpen ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0 pointer-events-none"}
        `}
      >
        {["Principes", "Articles", "Jardin", "Ressources", "Informations"].map((item) => {
          const typedKey = item as MenuKey;
          const hasSubMenu = menus[typedKey] !== undefined;

          return (
            <div key={item} className="w-full text-center">
              <button
                onClick={() =>
                  setOpenMenu(openMenu === typedKey ? null : typedKey)
                }
                className="w-full py-2 text-lg hover:text-gray-300 transition"
              >
                {item}
              </button>

              {/* Sous-menu mobile */}
              {hasSubMenu && openMenu === typedKey && (
                <ul className="flex flex-col gap-2 py-2 bg-white/10">
                  {menus[typedKey].map((subItem, i) => (
                    <li key={i}>
                      <Link
                        href="#"
                        className="block py-2 text-sm text-gray-200 hover:text-white transition"
                        onClick={() => setMobileOpen(false)}
                      >
                        {subItem}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
}
