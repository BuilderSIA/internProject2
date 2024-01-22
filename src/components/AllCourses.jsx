
function AllCourses() {
    return (
        <div>
            <div className="accordion">
                Here will be an accordion
            </div>
            <main className="flex flex-col items-stretch px-5">
                <header className="text-blue-500 text-5xl font-black leading-[48.16px] self-center max-md:max-w-full">
                     Курсы для любого уровня и области знаний
                </header>
      <div className="text-zinc-900 text-base leading-4 w-full mt-5 max-md:max-w-full">
        Достигайте нужных именно вам результатов с нашими разговорными курсами, включая подготовку к экзаменам, деловой
        английский, разговорную практику и другие.
      </div>
      <form autoComplete="off" className="justify-center bg-amber-400 self-center flex gap-2.5 mt-5 px-5 py-4 rounded-2xl items-start">
        <div className="text-zinc-900 text-lg font-medium leading-5 grow whitespace-nowrap">
          <a href="#" className="link">Смотреть все курсы</a>
        </div>
        <button type="submit" className="button">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0a2a451e61b9587901e173c228279bf3f22205e3ea6aa948f69473e244dd9f4a?apiKey=d132f7675ae54e3497eb23901a2fb6dd&"
            className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
            alt="Course Image"
          />
        </button>
      </form>
    </main>
        </div>
    );
}

export default AllCourses;