import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200 mt-auto">
      <div className="container mx-auto px-4 py-6 md:flex md:items-center md:justify-between">
        <div className="flex justify-center md:justify-start mb-4 md:mb-0">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} MealApp. A React Portfolio Project.
          </p>
        </div>
        <div className="flex justify-center space-x-6">
          <span className="text-sm text-slate-500 hover:text-slate-900 cursor-pointer transition-colors">
            Terms
          </span>
          <span className="text-sm text-slate-500 hover:text-slate-900 cursor-pointer transition-colors">
            Privacy
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
