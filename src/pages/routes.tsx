import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './Homepage';
import Login from './Login';
import NovoUsuario from './NovoUsuario';
import { Pagina404 } from './Pagina404';
import ProdutoDados from './ProdutoDados';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/novo_usuario" element={<NovoUsuario />} />
        <Route path="/produto/:id" element={<ProdutoDados />} />
        <Route element={<Pagina404 />} path="*" />
      </Routes>
    </BrowserRouter>
  );
}
