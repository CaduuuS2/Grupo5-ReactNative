import { ReactNode, createContext, useContext, useState } from "react"
import { produtosInit } from "../data/produtos"
import { Produto } from "../classes/produto";

interface ProdutosState {
  produtos: Produto[];
  setProdutos: React.Dispatch<React.SetStateAction<Produto[]>>;
}

export const INITIAL_STATE: ProdutosState = {
  produtos: [],
  setProdutos: () => {},
}

export const ProdutosContext = createContext<ProdutosState>({
  produtos: [],
  setProdutos: () => {},
})

interface IProps {
  children: ReactNode
}

export const ProdutosContextProvider = ({ children }: IProps) => {
  
  const [produtos, setProdutos] = useState(produtosInit)
  
  return <ProdutosContext.Provider value={{
    produtos,
    setProdutos
  }}>
    {children}
  </ProdutosContext.Provider>
}

export const useProdutosContext = () => {
  const context = useContext(ProdutosContext)
  return context
}
