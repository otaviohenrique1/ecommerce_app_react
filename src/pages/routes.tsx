import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './Homepage';
import Login from './Login';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/homepage" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}
