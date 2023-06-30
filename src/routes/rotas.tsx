import React from "react";
import RotasPrivadas from "./rotasPrivadas";
import RotasPublicas from "./rotasPublicas";
import { useAuth } from '../context/authContext'
function RotasNavigation() {
  const { id } = useAuth();

  return (
    true ? <RotasPrivadas /> : <RotasPublicas />
  );
}

export default RotasNavigation;