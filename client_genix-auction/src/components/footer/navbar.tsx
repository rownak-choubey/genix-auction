import React from "react";
import { GiMoebiusTriangle } from "react-icons/gi";
import { MenuItem } from "../../interfaces/app-interface";

const Menu: MenuItem[] = [
  {
    id: 1,
    name: "Auctions",
    link: "/auctions",
  },
  {
    id: 2,
    name: "Bidding",
    link: "/bidding",
  },
  {
    id: 3,
    name: "About Us",
    link: "/about",
  },
];

// Navbar Component
const Navbar: React.FC = () => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      <div className="bg-pink-200 py-2">
        <div className="container mx-auto flex justify-around items-center">
          {/* Logo */}
          <div>
            <a href="/" className="font-bold text-2xl flex items-center gap-2">
              <GiMoebiusTriangle className="text-3xl text-blue-500" />
              <span className="font-semibold text-slate-600">
                Genix Auctions
              </span>
            </a>
          </div>

          {/* Menu Items */}
          <div className="flex items-center gap-6">
            {Menu.map((item) => (
              <a
                key={item.id}
                href={item.link}
                className="hover:text-blue-500 transition-all duration-200 text-slate-700 font-medium"
              >
                {item.name}
              </a>
            ))}

            <a
              href="/login"
              className="text-slate-700 hover:text-blue-500 transition-all duration-200 font-medium"
            >
              Login
            </a>
            <a
              href="/get-started"
              className="bg-gradient-to-r from-blue-400 to-blue-600 text-white py-2 px-4 rounded-md font-medium shadow-md hover:shadow-lg transition-all duration-200"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
