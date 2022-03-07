import React from "react";

function MerchCard() {
  return (
    //   Text content on top of svg
    <div className="relative w-fit mx-auto">
      <div className="absolute top-14 md:top-20 left-14 md:left-8 flex flex-col w-2/3 z-10">
        <h1 className="text-cfc-100 w-full font-rockSalt text-5xl animate-fadeIn">
          Get Decked Out
        </h1>
        <h3 className="text-4xl font-rockSalt md:text-center text-white text-extrabold tracking-tighter mt-6 ml-1 animate-fadeInLong">
          in all the merch
        </h3>
        <p className="text-extrabold md:w-2/3 tracking-tight text-2xl mt-12 text-white animate-fadeInLong">
          Check out our store and show your support! Get your Ultra on with
          hoodies, shirts and more! We will be periodically adding more Merch,
          so make sure to check back!
        </p>
        <a 
        href= "https://onechaptr.com/collections/uptown-ultras"
        className="rounded-lg bg-teal-300 hover:bg-white text-white hover:text-cfc-100 md:bg-cfc-100 md:hover:bg-teal-300 p-4 w-full text-center mx-auto md:mx-0 md:w-1/2 font-semibold text-xl md:text-white md:hover:text-cfc-100 mt-12">
          {" "}
          Visit our Store
        </a>
      </div>
      {/* horizontal svg */}
      <svg
        className="hidden rounded-lg z-0 md:block"
        id="visual"
        viewBox="0 0 900 600"
        width="900"
        height="600"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <rect x="0" y="0" width="900" height="600" fill="#0c232f"></rect>
        <path
          d="M518 600L697 0L900 0L900 600Z"
          fill="#0082cb"
          stroke-linecap="square"
          stroke-linejoin="bevel"
        ></path>
      </svg>

      {/* vertical */}
      <svg
        className="block md:hidden w-full overflow-hidden rounded-lg "
        id="visual"
        width={900}
        viewBox="0 0 250 600"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <rect x="0" y="0" width="900" height="600" fill="#0c232f"></rect>
        <path
          d="M0 344L900 463L900 601L0 601Z"
          fill="#0082cb"
          stroke-linecap="square"
          stroke-linejoin="bevel"
        ></path>
      </svg>
    </div>
  );
}

export default MerchCard;
