import React from 'react';
import { ProdutosContextProvider } from './src/context/ProdutosProvider';
import Navigation from './src/routes/navigation';

export default function App() {

  return (
    <ProdutosContextProvider>
      <Navigation />
    </ProdutosContextProvider>
  );
} 
