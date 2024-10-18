// src/routes.tsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Hero from './pages/Hero';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import MainLayout from './layouts/MainLayout';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout><Hero /></MainLayout>} />
      <Route path="/login" element={<MainLayout><Login /></MainLayout>} />
      <Route path="/get-started" element={<MainLayout><SignUp /></MainLayout>} />
      {/* You can add more routes for menu items like Auctions, Bidding, About Us */}
    </Routes>
  );
};

export default AppRoutes;
