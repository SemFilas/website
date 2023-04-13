import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";
import { useMemo } from "react";
import { useSelector } from "react-redux";

export interface Lanche {
  id: number;
  nome: string;
  descricao: string;
  imagem?: string;
  preco: number;
}

export const lanchesSlice = createSlice({
  name: "lanches",
  initialState: {
    formatadorDeNumero: new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }),
    lanches: [
      {
        id: 1,
        nome: "X-Burguer",
        descricao: "Pão, carne, queijo, alface, tomate, cebola e maionese",
        preco: 10,
        imagem:
          "https://images.unsplash.com/photo-1530554764233-e79e16c91d08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      },
      {
        id: 2,
        nome: "Coxinha",
        descricao: "Coxinha de frango com catupiry",
        preco: 5,
        imagem:
          "https://media.discordapp.net/attachments/1095476209762189505/1095928387903692860/image0.jpg",
      },
      {
        id: 3,
        nome: "Croissant",
        descricao: "Croissant com recheio de chocolate",
        preco: 7,
        imagem:
          "https://cdn.discordapp.com/attachments/1095476209762189505/1095928596108939304/image0.jpg",
      },
      {
        id: 4,
        nome: "Pepsi",
        descricao: "Refrigerante de cola",
        preco: 3,
        imagem:
          "https://cdn.discordapp.com/attachments/1095476209762189505/1095929431970828288/image0.jpg",
      },
      {
        id: 5,
        nome: "Coca-Cola",
        descricao: "Refrigerante de cola",
        preco: 3,
        imagem:
          "https://media.discordapp.net/attachments/1095476209762189505/1095929467358154844/image0.jpg",
      },
    ],
    carrinho: [] as { lanche: number; quantidade: number }[],
  },
  reducers: {
    adicionarQuantidadeDeLanchesNoCarrinho(
      state,
      action: PayloadAction<number>
    ) {
      const lanche = state.carrinho.find((l) => l.lanche === action.payload);

      if (lanche) {
        lanche.quantidade++;
      } else {
        state.carrinho.push({
          lanche: action.payload,
          quantidade: 1,
        });
      }

      state.carrinho = [...state.carrinho];
    },
    removerQuantidadeDeLanchesNoCarrinho(state, action: PayloadAction<number>) {
      const lanche = state.carrinho.find((l) => l.lanche === action.payload);

      if (lanche) {
        lanche.quantidade--;
      }

      if ((lanche?.quantidade ?? 0) <= 0) {
        state.carrinho.splice(state.carrinho.indexOf(lanche!), 1);
      }

      state.carrinho = [...state.carrinho];
    },
    adicionarLancheNoCarrinhoDeCompras(state, action: PayloadAction<number>) {
      const lanche = state.carrinho.find((l) => l.lanche === action.payload);

      if (lanche) {
        lanche.quantidade++;
      } else {
        state.carrinho.push({
          lanche: action.payload,
          quantidade: 1,
        });
      }

      state.carrinho = [...state.carrinho];
    },
    removerLancheDoCarrinhoDeCompras(state, action: PayloadAction<number>) {
      const lanche = state.carrinho.find((l) => l.lanche === action.payload);

      if (lanche) {
        lanche.quantidade--;
      }

      if ((lanche?.quantidade ?? 0) <= 0) {
        state.carrinho.splice(state.carrinho.indexOf(lanche!), 1);
      }

      state.carrinho = [...state.carrinho];
    },
  },
});

export const {
  adicionarQuantidadeDeLanchesNoCarrinho,
  removerQuantidadeDeLanchesNoCarrinho,
  adicionarLancheNoCarrinhoDeCompras,
  removerLancheDoCarrinhoDeCompras,
} = lanchesSlice.actions;

export function useLanches() {
  const { carrinho, lanches } = useSelector(
    (state: RootState) => state.lanches
  );
  const lanchesAdicionadosNoCarrinhoDeCompra = useMemo(() => {
    return carrinho.map((item) => {
      const lanche = lanches.find((lanche) => lanche.id === item.lanche);
      return {
        ...lanche,
        quantidade: item.quantidade,
      } as any;
    });
  }, [carrinho]);

  const valorTotalDeCompra = useMemo(() => {
    return lanchesAdicionadosNoCarrinhoDeCompra.reduce(
      (total, lanche) => total + lanche.preco * lanche.quantidade,
      0
    );
  }, [lanchesAdicionadosNoCarrinhoDeCompra]);

  return {
    lanchesAdicionadosNoCarrinhoDeCompra,
    valorTotalDeCompra,
  };
}
