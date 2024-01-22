import { useDispatch } from "react-redux";
import { setLogin } from "../features/logSlice";

function Navbar() {
  const dispatch = useDispatch()
  

    return (
        <form className="justify-between items-center bg-blue-500 flex gap-5 px-10 py-2 max-md:flex-wrap max-md:px-5">
      <div className="flex justify-between gap-5 my-auto items-start max-md:max-w-full max-md:flex-wrap">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc3bbd9580781778586824732ec795be603cc3ce909ba25f8762b497139b24fc?apiKey=d132f7675ae54e3497eb23901a2fb6dd&"
          className="aspect-[4.88] object-contain object-center w-[127px] overflow-hidden shrink-0 max-w-full"
          alt="Logo"
        />
        <div className="items-stretch self-stretch flex gap-5 py-1.5 max-md:max-w-full max-md:flex-wrap">
          <a href="#" className="text-white text-lg leading-5 grow whitespace-nowrap">
            Преподаватели
          </a>
          <a href="#" className="text-white text-lg leading-5">
            Курсы
          </a>
          <a href="#" className="text-white text-lg leading-5">
            Групповые уроки
          </a>
          <a href="#" className="text-white text-lg leading-5">
            Ресурсы
          </a>
          <a href="#" className="text-white text-lg leading-5">
            Дети
          </a>
          <a href="#" className="text-white text-lg leading-5 whitespace-nowrap">
            Бизнес
          </a>
        </div>
      </div>
      <div className="self-stretch flex items-stretch justify-between gap-4">
        <label htmlFor="language" className="sr-only">
          Language
        </label>
        <select
          id="language"
          className="justify-center overflow-hidden text-neutral-700 text-ellipsis whitespace-nowrap text-lg font-medium leading-5 border bg-zinc-100 grow pl-3 pr-16 py-5 rounded-2xl border-solid border-neutral-500 items-start max-md:pr-5"
        >
          <option value="russian">русский</option>
        </select>
        <button onClick={()=>dispatch(setLogin())} className="text-cyan-800 text-lg font-medium leading-5 whitespace-nowrap justify-center items-stretch bg-white grow px-5 py-5 rounded-2xl" type="button">
          Войти
        </button>
        <button className="text-zinc-900 text-lg font-medium leading-5 whitespace-nowrap justify-center items-stretch bg-amber-400 grow px-5 py-4 rounded-2xl" type="button">
          Подписаться
        </button>
      </div>
    </form>
    );
}

export default Navbar;