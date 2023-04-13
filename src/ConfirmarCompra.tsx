import MaterialArrowBack from "./assets/MaterialArrowBackIcon.svg";
import MaterialAddCircle from "./assets/MaterialAddCircleIcon.svg";
import IcRemoveCircle from "./assets/IcRemoveCircleIcon.svg";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  adicionarQuantidadeDeLanchesNoCarrinho,
  removerQuantidadeDeLanchesNoCarrinho,
  useLanches,
} from "./store/lanches";
import { RootState } from "./store";

export default function ConfirmarCompra() {
  const formatadorDeNumero = useSelector(
    (state: RootState) => state.lanches.formatadorDeNumero
  );
  const { lanchesAdicionadosNoCarrinhoDeCompra, valorTotalDeCompra } =
    useLanches();
  const dispatch = useDispatch();

  return (
    <div className="h-screen flex items-center justify-center bg-app bg-cover bg-center">
      <div className="w-full max-w-xs bg-neutral-800 rounded shadow border border-neutral-600 h-96 text-white">
        <div className="flex justify-between flex-col p-2 h-full">
          <div className="flex items-center gap-2">
            <Link to="/" className="">
              <img src={MaterialArrowBack} alt="voltar para o menu principal" />
            </Link>
            <h1>Carrinho</h1>
          </div>
          <div className="grid grid-cols-1 w-full p-6 gap-8 overflow-y-scroll">
            {lanchesAdicionadosNoCarrinhoDeCompra.length == 0 ? (
              <div className="text-center">
                <h1>Nenhum lanche adicionado</h1>
              </div>
            ) : (
              lanchesAdicionadosNoCarrinhoDeCompra.map((lanche) => (
                <div className="flex justify-between items-center w-full">
                  <div className="w-44">
                    <img
                      src={lanche.imagem}
                      alt="lanche"
                      className="w-20 h-20 rounded-full"
                    />
                  </div>
                  <div className="w-full">
                    <p className="text-sm text-gray-400 pb-1">{lanche.nome}</p>

                    <p className="text-xs">Qntd.</p>
                    <div className="flex items-center justify-between w-full">
                      <p className="text-xs">
                        {lanche.quantidade}x{" "}
                        <span>
                          ({formatadorDeNumero.format(lanche.preco!)})
                        </span>
                      </p>
                      <div className="flex gap-2">
                        <img
                          src={MaterialAddCircle}
                          alt="adicionar"
                          className="w-4 h-4 hover:cursor-pointer"
                          onClick={() =>
                            dispatch(
                              adicionarQuantidadeDeLanchesNoCarrinho(lanche.id!)
                            )
                          }
                        />
                        <img
                          src={IcRemoveCircle}
                          alt="remover"
                          className="w-4 h-4 cursor-pointer"
                          onClick={() =>
                            dispatch(
                              removerQuantidadeDeLanchesNoCarrinho(lanche.id!)
                            )
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="flex justify-center flex-col gap-2">
            <div className="flex items-center justify-between px-4">
              <p>Total:</p>
              <p>{formatadorDeNumero.format(valorTotalDeCompra)}</p>
            </div>
            <Link
              to={
                lanchesAdicionadosNoCarrinhoDeCompra.length == 0
                  ? "#"
                  : "/pedido-realizado"
              }
              className={`${
                lanchesAdicionadosNoCarrinhoDeCompra.length == 0
                  ? "hover:cursor-not-allowed"
                  : "hover:cursor-pointer"
              } bg-green-700 rounded shadow border border-green-600 p-1 text-center hover:bg-green-600`}
            >
              Gerar Pedido
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
