import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="flex justify-center items-center h-screen bg-login bg-center bg-cover text-white">
      <div className="w-full max-w-xs flex items-center justify-center flex-col gap-4">
        <img
          src="https://picsum.photos/64"
          alt="logo"
          className="rounded-full w-16 h-16"
        />

        <form
          className="border border-neutral-600 bg-neutral-800 rounded-lg shadow p-6 w-full"
          action="/"
        >
          <h2 className="text-center text-3xl font-extrabold">Sem filas</h2>

          <div className="mt-6">
            {/* <label className="block" htmlFor="email">
              Email
            </label> */}
            <input
              type="email"
              name="email"
              id="email"
              placeholder="E-mail"
              className="block w-full p-2 rounded appearance-none outline-none bg-transparent border border-neutral-600 placeholder:px-2 focus:placeholder:px-3"
              required
            />
          </div>
          <div className="mt-3">
            {/* <label className="block" htmlFor="password">
              Senha
            </label> */}
            <input
              type="password"
              name="senha"
              id="senha"
              placeholder="Senha"
              className="block w-full p-2 rounded appearance-none outline-none bg-transparent border border-neutral-600 placeholder:px-2 focus:placeholder:px-3 focus:bg-neutral-800"
              required
            />
            <div className="flex justify-end mt-2">
              <a href="#" className="text-blue-500 ">
                Esqueceu a senha?
              </a>
            </div>
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
            >
              Conectar
            </button>
          </div>
        </form>
        <div className="border bg-neutral-800 border-neutral-700 flex justify-center items-center rounded-lg shadow p-2 w-full hover:bg-blue-700 group hover:border-blue-600">
          <Link
            to="/cadastrar"
            className="text-blue-500 font-bold group-hover:text-white"
          >
            Cadastre-se
          </Link>
        </div>
      </div>
    </div>
  );
}
