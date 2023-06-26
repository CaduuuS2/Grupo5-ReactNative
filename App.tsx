import React from 'react';
import AppRoutes from './src/routes';
import { ProdutosContextProvider } from './src/context/ProdutosProvider';

export default function App() {

  return (
    <ProdutosContextProvider>
      <AppRoutes />
    </ProdutosContextProvider>
  );
}
