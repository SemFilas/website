import MaterialShoppingCart from "./assets/MaterialShoppingCartIcon.svg";
import MaterialSearch from "./assets/MaterialSearchIcon.svg";
import MaterialMenuRounded from "./assets/MaterialMenuRoundedIcon.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import { adicionarLancheNoCarrinhoDeCompras } from "./store/lanches";

export default function App() {
  return (
    <div className="h-screen bg-app bg-cover bg-center flex justify-center items-center text-white">
      <div className="w-full max-w-xs bg-neutral-800 h-full max-h-[32rem] p-3 shadow rounded-md border border-neutral-700">
        <div className="flex justify-between">
          <div className="flex items-center">
            <img src={MaterialMenuRounded} alt="menu" />
          </div>
          <form>
            <div className="relative">
              <input
                type="text"
                name="buscarlanches"
                id="buscarlanches"
                placeholder="Buscar lanches"
                className="block w-full p-2 rounded appearance-none bg-transparent border border-neutral-600 placeholder:px-8"
              />
              <div className="absolute top-0">
                <img
                  src={MaterialSearch}
                  alt="buscar lanche"
                  className="m-2.5"
                />
              </div>
            </div>
          </form>
          <Link
            to="/confirmar-compra"
            className="flex items-center hover:cursor-pointer"
          >
            <img src={MaterialShoppingCart} alt="carrinho de compras" />
          </Link>
        </div>
        <ListaLanches />
      </div>
    </div>
  );
}

function ListaLanches() {
  const { lanches, formatadorDeNumero } = useSelector(
    (state: RootState) => state.lanches
  );
  const dispatch = useDispatch();

  return (
    <div className="my-2 flex justify-center max-h-[28rem] overflow-y-scroll">
      <div className="grid grid-cols-1 w-[14.5rem] gap-6 pt-4">
        {lanches.map((lanche) => (
          <div
            className="p-4 bg-neutral-700 rounded-md shadow hover:cursor-pointer"
            onClick={() =>
              dispatch(adicionarLancheNoCarrinhoDeCompras(lanche.id!))
            }
          >
            <img
              src={lanche.imagem ?? "https://picsum.photos/200"}
              className="w-28 h-28 m-auto rounded-full"
            />
            <div className="p-2">
              <h2 className="w-full font-bold">{lanche.nome}</h2>
              <p className="pt-1">{formatadorDeNumero.format(lanche.preco)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
