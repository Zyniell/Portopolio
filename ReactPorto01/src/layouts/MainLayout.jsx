import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Shared/Navbar';
import Footer from '../components/Shared/Footer';

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-orange-200 selection:text-orange-900">
      <Navbar />
      <main className="flex-grow pb-12">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
