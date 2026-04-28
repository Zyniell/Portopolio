import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Utensils, Heart } from 'lucide-react';
import { cn } from '../../utils/cn';

const Navbar = () => {
  const navLinkClass = ({ isActive }) =>
    cn(
      "px-3 py-2 rounded-md text-sm font-medium transition-colors",
      isActive
        ? "bg-orange-100 text-orange-600"
        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
    );

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-orange-500 text-white p-1.5 rounded-lg group-hover:bg-orange-600 transition-colors">
                <Utensils size={24} />
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-900">
                MealApp
              </span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink to="/" className={navLinkClass}>
                Home
              </NavLink>
              <NavLink to="/category" className={navLinkClass}>
                Categories
              </NavLink>
              <NavLink to="/favorites" className={navLinkClass}>
                <span className="flex items-center gap-1.5">
                  <Heart size={16} />
                  Favorites
                </span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
