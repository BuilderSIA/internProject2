
function TryCourse() {
    return (
        <div id='center' className="bg-orange-200 max-w-[892px] px-10 rounded-3xl max-md:px-5">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-[54%] max-md:w-full max-md:ml-0">
          <header className="flex flex-col my-auto max-md:mt-10">
            <h1 className="text-zinc-900 text-3xl font-bold leading-8 self-stretch">
              Попробуйте наши{" "}
            </h1>
            <h1 className="text-zinc-900 text-3xl font-bold leading-8 self-stretch mt-1.5">
              бесплатные ресурсы
            </h1>
            <p className="text-zinc-900 text-base leading-4 self-stretch whitespace-nowrap mt-4">
              Попробуйте популярные инструменты и руководства{" "}
            </p>
            <a
              href="#"
              className="justify-center bg-amber-400 flex gap-1 mt-12 py-4 rounded-2xl self-start items-start max-md:mt-10"
            >
              <h2 className="text-zinc-900 text-lg font-medium leading-5 grow whitespace-nowrap">
                Присоединиться
              </h2>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1a7749c6b523eea05fb1931f1eab9867d7c7e9da7180c3a91bb4f8e52fcca696?apiKey=d132f7675ae54e3497eb23901a2fb6dd&"
                className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
                alt="Join"
              />
            </a>
          </header>
        </div>
        <div className="flex flex-col items-stretch w-[46%] ml-5 max-md:w-full max-md:ml-0">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ab8d98eded10aaf7114b4954a71f2f7bfbf55be7ecbe3d710c64a90465dc54b6?apiKey=d132f7675ae54e3497eb23901a2fb6dd&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab8d98eded10aaf7114b4954a71f2f7bfbf55be7ecbe3d710c64a90465dc54b6?apiKey=d132f7675ae54e3497eb23901a2fb6dd&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab8d98eded10aaf7114b4954a71f2f7bfbf55be7ecbe3d710c64a90465dc54b6?apiKey=d132f7675ae54e3497eb23901a2fb6dd&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab8d98eded10aaf7114b4954a71f2f7bfbf55be7ecbe3d710c64a90465dc54b6?apiKey=d132f7675ae54e3497eb23901a2fb6dd&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab8d98eded10aaf7114b4954a71f2f7bfbf55be7ecbe3d710c64a90465dc54b6?apiKey=d132f7675ae54e3497eb23901a2fb6dd&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab8d98eded10aaf7114b4954a71f2f7bfbf55be7ecbe3d710c64a90465dc54b6?apiKey=d132f7675ae54e3497eb23901a2fb6dd&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab8d98eded10aaf7114b4954a71f2f7bfbf55be7ecbe3d710c64a90465dc54b6?apiKey=d132f7675ae54e3497eb23901a2fb6dd&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab8d98eded10aaf7114b4954a71f2f7bfbf55be7ecbe3d710c64a90465dc54b6?apiKey=d132f7675ae54e3497eb23901a2fb6dd&"className="aspect-[1.33] object-contain object-center w-full overflow-hidden grow max-md:mt-10"
            alt="Resource Image"
          />
        </div>
      </div>
    </div>
    );
}

export default TryCourse;