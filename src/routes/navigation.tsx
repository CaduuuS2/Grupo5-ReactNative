import React from "react";
import RotasPrivadas from "./rotasPrivadas";
import RotasPublicas from "./rotasPublicas";
import { AuthProvider } from '../context/authContext'
import RotasNavigation from "./rotas";
function Navigation() {
 

  return (
    <AuthProvider>
        <RotasNavigation />
    </AuthProvider>
  );
}

export default Navigation;