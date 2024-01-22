

function Hero() {
    return (
        <div className="justify-center items-center bg-blue-500 flex flex-col px-16 max-md:px-5">
      <div className="w-[1120px] max-w-full pt-10 pb-1 px-20 max-md:px-5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[49%] max-md:w-full max-md:ml-0">
            <header className="items-start flex flex-col pr-9 pt-3 max-md:max-w-full max-md:mt-10 max-md:pr-5">
              <h1 className="text-white text-7xl font-black leading-[76.56px] self-stretch max-md:text-4xl">
                Онлайн- 
              </h1>
              <h1 className="text-white text-7xl font-black leading-[76.56px] self-stretch mt-9 max-md:text-4xl">
                уроки{" "}
              </h1>
              <h1 className="text-white text-7xl font-black leading-[76.56px] self-stretch whitespace-nowrap mt-2.5 max-md:text-4xl">
                английского{" "}
              </h1>
              <h1 className="text-white text-7xl font-black leading-[76.56px] self-stretch mt-9 max-md:text-4xl">
                с{" "}
              </h1>
              <h1 className="text-white text-7xl font-black leading-[76.56px] self-stretch whitespace-nowrap mt-9 max-md:text-4xl">
                носителями{" "}
              </h1>
              <h1 className="text-white text-7xl font-black leading-[76.56px] self-stretch mt-9 max-md:text-4xl">
                языка{" "}
              </h1>
              <a
                href="#"
                className="justify-center bg-amber-400 flex gap-2 mt-10 pt-4 pb-2 px-14 rounded-2xl self-start items-start max-md:px-5"
              >
                <h2 className="text-zinc-900 text-lg font-medium leading-5 grow whitespace-nowrap">
                  Начать{" "}
                </h2>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/778b84ecc8579217a5765f119716dd6c96fd13d96033b9c036466e80305a9f47?apiKey=d132f7675ae54e3497eb23901a2fb6dd&"
                  className="aspect-square object-contain object-center w-4 overflow-hidden self-stretch shrink-0 max-w-full"
                  alt=""
                />
              </a>
            </header>
          </div>
          <div className="flex flex-col items-stretch w-[51%] ml-5 max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/32190d823d7de00b74851562e423d12a2f8a5f0a66d66a84be29b1a9e6176ba0?apiKey=d132f7675ae54e3497eb23901a2fb6dd&"
              className="aspect-[0.77] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    )
}
export default Hero