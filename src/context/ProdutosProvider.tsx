import { ReactNode, createContext, useContext, useState, useEffect } from "react";
import { Produto } from "../classes/produto";
import { getProduto } from "../Services/produtoService";

interface ProdutosState {
  produtos: Produto[];
  setProdutos: React.Dispatch<React.SetStateAction<Produto[]>>;
}

export const INITIAL_STATE: ProdutosState = {
  produtos: [],
  setProdutos: () => {},
};

export const ProdutosContext = createContext<ProdutosState>(INITIAL_STATE);

interface IProps {
  children: ReactNode;
}

export const ProdutosContextProvider = ({ children }: IProps) => {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getProduto();
        setProdutos(response);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <ProdutosContext.Provider value={{ produtos, setProdutos }}>
      {children}
    </ProdutosContext.Provider>
  );
};

export const useProdutosContext = (): ProdutosState => useContext(ProdutosContext);
