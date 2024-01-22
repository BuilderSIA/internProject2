
function Footer() {
    return (
        <div className="items-center bg-neutral-100 flex flex-col justify-center px-16 py-10 max-md:px-5">
      <div className="w-full max-w-[1089px] max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <header className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
            <span className="items-start flex grow flex-col pb-9 max-md:mt-7">
              <div className="text-zinc-900 text-xs leading-4 uppercase self-stretch">
                О преподавателе
              </div>
              <div className="text-zinc-900 text-sm font-semibold leading-4 whitespace-nowrap mt-8 self-start">
                Курсы
              </div>
              <div className="text-zinc-900 text-sm font-semibold leading-4 mt-7 self-start">
                Блог
              </div>
              <div className="text-zinc-900 text-sm font-semibold leading-4 whitespace-nowrap mt-7 self-start">
                Вакансии
              </div>
              <div className="text-zinc-900 text-sm font-semibold leading-4 whitespace-nowrap mt-7 self-start">
                Пресса
              </div>
            </span>
          </header>
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <span className="items-stretch flex grow flex-col max-md:mt-7">
              <div className="text-zinc-900 text-xs leading-4 uppercase">
                Присоединиться
              </div>
              <div className="text-zinc-900 text-sm font-semibold leading-4 mt-6">
                Cambly
              </div>
              <div className="text-zinc-900 text-sm font-semibold leading-4 mt-7">
                Cambly Kids
              </div>
              <div className="text-zinc-900 text-sm font-semibold leading-4 mt-7 max-md:mr-1.5">
                Cambly для организаций
              </div>
              <div className="text-zinc-900 text-sm font-semibold leading-4 mt-7">
                Стать репетитором
              </div>
              <div className="text-zinc-900 text-sm font-semibold leading-4 mt-7">
                Станьте Представителем
              </div>
            </span>
          </div>
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <span className="items-stretch flex grow flex-col max-md:mt-7">
              <div className="text-zinc-900 text-xs leading-4 uppercase">
                Полезные ссылки
              </div>
              <div className="text-zinc-900 text-sm font-semibold leading-4 mt-6">
                Справочный центр Cambly
              </div>
              <div className="text-zinc-900 text-sm font-semibold leading-4 mt-7">
                Cambly (iOS)
              </div>
              <div className="text-zinc-900 text-sm font-semibold leading-4 mt-7">
                Cambly (Android)
              </div>
              <div className="text-zinc-900 text-sm font-semibold leading-4 mt-7">
                Cambly Kids (iOS)
              </div>
              <div className="text-zinc-900 text-sm font-semibold leading-4 mt-7">
                Cambly Kids (Android)
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
    );
}

export default Footer;