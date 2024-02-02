import React from "react";

const Topbar = () => {
  return (
    <div className="  ">
      <div className="flex flex-row justify-between">
        <div className="text-left flex items-center">
          <div>
            <h1 className="text-2xl dark:text-dark-text">Duas Page</h1>
            <p className="text-sm text-mute-grey-200 dark:text-dark-text"></p>
          </div>
        </div>
        <div className="flex flex-row items-center relative">
          <form className="sm-max:w-full" action="">
            <div className="w-82 sm-max:w-full relative md:mr-6 md:w-72 lg:mr-6">
              <div className="flex justify-between sm-max:flex-col sm-max:gap-4">
                <input
                  id="search_box"
                  className="placeholder:text-mute-grey dark:placeholder:text-[#96a2b4] block placeholder: placeholder:text-sm bg-white sm-max:bg-gray-200 md:bg-gray-100 lg:bg-gray-100 w-full rounded-md py-3 px-4 shadow-sm focus:outline-none focus:border-primary focus:ring-primary focus:ring-1  sm:text-sm sm-max:dark:bg-dark-bg-lite md:dark:bg-dark-bg-dark dark:bg-dark-bg dark:placeholder:opacity-[.6] lg:dark:bg-dark-bg-dark "
                  placeholder="Search by Dua Name"
                  type="text"
                  name="search"
                  value=""
                />
                <button
                  type="submit"
                  className="flex items-center justify-center bg-gray-100 dark:bg-dark-bg-dark md-min:dark:hover:text-gray-400 dark:text-gray-500 cursor-pointer md-minhover:bg-gray-200 hover:text-gray-500 text-gray-400 px-4 py-[9px] rounded-md md-min:absolute right-1 top-1 sm-max:bg-primary md:bg-white md:dark:bg-dark-bg-lite lg:bg-white lg:dark:bg-dark-bg-lite sm-max:focus:bg-green-700"
                >
                  <span className="flex items-center sm-max:hidden">
                    <svg
                      className="stroke-mute-grey"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21 21L15 15L21 21ZM17 10C17 10.9193 16.8189 11.8295 16.4672 12.6788C16.1154 13.5281 15.5998 14.2997 14.9497 14.9497C14.2997 15.5998 13.5281 16.1154 12.6788 16.4672C11.8295 16.8189 10.9193 17 10 17C9.08075 17 8.1705 16.8189 7.32122 16.4672C6.47194 16.1154 5.70026 15.5998 5.05025 14.9497C4.40024 14.2997 3.88463 13.5281 3.53284 12.6788C3.18106 11.8295 3 10.9193 3 10C3 8.14348 3.7375 6.36301 5.05025 5.05025C6.36301 3.7375 8.14348 3 10 3C11.8565 3 13.637 3.7375 14.9497 5.05025C16.2625 6.36301 17 8.14348 17 10Z"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </span>
                  <p className="hidden sm-max:block sm-max:text-white">
                    Search
                  </p>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
