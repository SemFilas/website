import { Link } from "react-router-dom";
import LineConfirm from "./assets/LineConfirmIcon.svg";
import MaterialArrowBack from "./assets/MaterialArrowBackIcon.svg";

export default function PedidoRealizado() {
  return (
    <div className="h-screen flex items-center justify-center bg-app bg-cover bg-center text-white ">
      <div className="w-full max-w-xs h-full max-h-80 bg-neutral-800 shadow rounded flex items-center justify-center flex-col relative border border-neutral-600">
        <Link to="/" className="absolute top-0 left-0 p-2 hover:cursor-pointer">
          <img src={MaterialArrowBack} alt="voltar ao menu principal" />
        </Link>
        <img src={LineConfirm} alt="pedido realizado" className="w-32 h-32" />

        <h1 className="font-bold text-xl mt-2">Seu pedido foi realizado!</h1>
        <h3>N° 001</h3>
      </div>
    </div>
  );
}
