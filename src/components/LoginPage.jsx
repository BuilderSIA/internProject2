
function LoginPage() {
    return (
        <div>
            <div className="justify-center items-stretch bg-zinc-100 flex flex-col px-4 py-12">
      <div className="items-center flex flex-col justify-center my-10 px-16 max-md:max-w-full max-md:px-5">
        <span className="flex w-[408px] max-w-full flex-col items-stretch">
          <span className="justify-center items-center bg-white flex w-full flex-col px-9 py-9 rounded-3xl max-md:px-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/73ab93ea638fbfb3db8113dee788af265e721709522b93286664b72a29c78317?apiKey=d132f7675ae54e3497eb23901a2fb6dd&"
              className="aspect-[3.51] object-contain object-center w-36 overflow-hidden max-w-full self-start"
            />
            <div className="text-zinc-900 text-3xl font-bold leading-8 self-stretch mt-8">
              Welcome back!
            </div>
            <div className="items-stretch self-stretch flex gap-2 mt-8">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4990f3970926f90ef4376df316425a4ab99457abc3405cfc8af5c8b39b038151?apiKey=d132f7675ae54e3497eb23901a2fb6dd&"
                className="aspect-[1.3] object-contain object-center w-[78px] justify-center items-center overflow-hidden shrink-0 max-w-full"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/906f28045e8dd77f31fb7e3bfc85b686faab2da7ad6321a1afec070209832646?apiKey=d132f7675ae54e3497eb23901a2fb6dd&"
                className="aspect-[1.3] object-contain object-center w-[78px] justify-center items-center overflow-hidden shrink-0 max-w-full"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/580dc8504c8a11f047517d21cff47f82ad6ad9400b3091337f45abd6d96636f0?apiKey=d132f7675ae54e3497eb23901a2fb6dd&"
                className="aspect-[1.3] object-contain object-center w-[78px] justify-center items-center overflow-hidden shrink-0 max-w-full"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/747e29ff8381298af8a699792f7d1ad32b83c6a3ed802f99cbcc09203e040e8b?apiKey=d132f7675ae54e3497eb23901a2fb6dd&"
                className="aspect-[1.3] object-contain object-center w-[78px] justify-center items-center overflow-hidden shrink-0 max-w-full"
              />
            </div>
            <span className="self-stretch flex items-stretch justify-between gap-5 mt-8">
              <div className="bg-stone-300 bg-opacity-50 self-center flex w-[140px] shrink-0 h-px flex-col my-auto rounded-[50px]" />
              <div className="text-neutral-500 text-xs leading-4 uppercase">
                OR
              </div>
              <div className="bg-stone-300 bg-opacity-50 self-center flex w-[140px] shrink-0 h-px flex-col my-auto rounded-[50px]" />
            </span>
            <div className="text-neutral-500 text-base leading-4 self-stretch mt-9">
              Email address
            </div>
            <span className="justify-center overflow-hidden text-black text-opacity-50 text-ellipsis whitespace-nowrap text-lg leading-4 border bg-white self-stretch mt-2.5 pl-3 pr-16 py-3 rounded-xl border-solid border-neutral-500 items-start max-md:pr-5">
              Enter your email address
            </span>
            <div className="text-neutral-500 text-base leading-4 self-stretch mt-7">
              Password
            </div>
            <span className="justify-center overflow-hidden text-black text-opacity-50 text-ellipsis whitespace-nowrap text-lg leading-4 border bg-white self-stretch mt-2.5 pl-3 pr-16 py-3 rounded-xl border-solid border-neutral-500 items-start max-md:pr-5">
              Enter a password
            </span>
            <div className="text-cyan-800 text-base font-medium leading-4 whitespace-nowrap mt-7 self-end">
              Forgot password?
            </div>
            <span className="text-white text-base font-medium leading-4 whitespace-nowrap items-center bg-cyan-800 self-stretch justify-center mt-6 px-16 py-3 rounded-xl max-md:px-5">
              Log in
            </span>
            <div className="text-cyan-800 text-lg leading-4 underline self-center whitespace-nowrap mt-8">
              Don`t have an account?
              <span className="font-medium underline text-base text-cyan-800">
                Sign up
              </span>
            </div>
          </span>{" "}
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a4be8e070b49638c90966552e86bc389cb84692ebbe40a55c34902b2339180f5?apiKey=d132f7675ae54e3497eb23901a2fb6dd&"
            className="aspect-[3.5] object-contain object-center w-[84px] overflow-hidden self-center max-w-full mt-12 max-md:mt-10"
          />{" "}
          <div className="text-neutral-500 text-base leading-4 self-center whitespace-nowrap mt-2.5">
            Cambly Inc. © Copyright 2024. All Rights Reserved.
          </div>
        </span>
      </div>
    </div>
        </div>
    );
}

export default LoginPage;