
function BecomeTutor() {
    return (
        <form className="items-center flex flex-col justify-center px-16 max-md:px-5">
        <div className="w-[636px] max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[38%] max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9ff3de5f6d7bc4b12e015717e3eea3afd1b89c53af994f6fa55010bb7c25e558?apiKey=d132f7675ae54e3497eb23901a2fb6dd&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9ff3de5f6d7bc4b12e015717e3eea3afd1b89c53af994f6fa55010bb7c25e558?apiKey=d132f7675ae54e3497eb23901a2fb6dd&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9ff3de5f6d7bc4b12e015717e3eea3afd1b89c53af994f6fa55010bb7c25e558?apiKey=d132f7675ae54e3497eb23901a2fb6dd&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9ff3de5f6d7bc4b12e015717e3eea3afd1b89c53af994f6fa55010bb7c25e558?apiKey=d132f7675ae54e3497eb23901a2fb6dd&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9ff3de5f6d7bc4b12e015717e3eea3afd1b89c53af994f6fa55010bb7c25e558?apiKey=d132f7675ae54e3497eb23901a2fb6dd&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9ff3de5f6d7bc4b12e015717e3eea3afd1b89c53af994f6fa55010bb7c25e558?apiKey=d132f7675ae54e3497eb23901a2fb6dd&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9ff3de5f6d7bc4b12e015717e3eea3afd1b89c53af994f6fa55010bb7c25e558?apiKey=d132f7675ae54e3497eb23901a2fb6dd&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9ff3de5f6d7bc4b12e015717e3eea3afd1b89c53af994f6fa55010bb7c25e558?apiKey=d132f7675ae54e3497eb23901a2fb6dd&"className="aspect-[0.75] object-contain object-center w-full overflow-hidden grow max-md:mt-10"
                alt="Tutoring Image"
              />
            </div>
            <div className="flex flex-col items-stretch w-[62%] ml-5 max-md:w-full max-md:ml-0">
              <span className="items-stretch flex grow flex-col py-7 max-md:mt-10">
                <div className="text-blue-500 text-5xl font-black leading-[48.16px]">
                  {' '}
                  Стать{' '}
                </div>
                <div className="text-blue-500 text-5xl font-black leading-[48.16px] mt-5">
                  {' '}
                  репетитором{' '}
                </div>
                <div className="text-zinc-900 text-lg leading-5 whitespace-nowrap mt-14 self-start max-md:mt-10">
                  {' '}
                  свое гибкое расписание и общайтесь с{' '}
                </div>
                <a
                  href="#"
                  className="justify-center items-center bg-amber-400 flex gap-2 mt-9 px-5 py-4 rounded-2xl self-start"
                  role="button"
                  aria-label="Start Tutoring"
                >
                  <div className="text-zinc-900 text-lg font-medium leading-5 grow whitespace-nowrap my-auto">
                    {' '}
                    Начать{' '}
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/06fe75ab3a26f744ff4f41cb582f5ee3bd6cab393b7789d9ca85c5197090b22f?apiKey=d132f7675ae54e3497eb23901a2fb6dd&"
                    className="aspect-square object-contain object-center w-4 overflow-hidden self-stretch shrink-0 max-w-full"
                    alt="Start Icon"
                  />
                </a>
              </span>
            </div>
          </div>
        </div>
      </form>
    );
}

export default BecomeTutor;