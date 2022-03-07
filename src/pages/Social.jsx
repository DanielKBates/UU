import React from "react";
import AnimatedCard from "../components/AnimatedCard";
import MerchCard from "../components/MerchCard";

function Social() {
  return (
    <div className="pt-32">
      <h1 className=" pb-6 font-rockSalt text-blue-400  text-3xl md:text-4xl text-center ">
        {" "}
        Check out our social medias!
      </h1>

      <div className="flex flex-col md:flex-row md:gap-4">
        {/* Insta */}
        <div className="flex flex-col w-full pb-6 ">
          <img className="rounded-t-lg" src="assets/images/image_2.jpg" />
          <div className=" flex flex-col rounded-b-lg bg-gray-50 p-12">
            <svg
              class="w-10 mx-auto mb-2"
              id="insta-logo"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 551.034 551.034"
            >
              <path
                class="logo"
                id="XMLID_17_"
                d="M386.878,0H164.156C73.64,0,0,73.64,0,164.156v222.722 c0,90.516,73.64,164.156,164.156,164.156h222.722c90.516,0,164.156-73.64,164.156-164.156V164.156 C551.033,73.64,477.393,0,386.878,0z M495.6,386.878c0,60.045-48.677,108.722-108.722,108.722H164.156 c-60.045,0-108.722-48.677-108.722-108.722V164.156c0-60.046,48.677-108.722,108.722-108.722h222.722 c60.045,0,108.722,48.676,108.722,108.722L495.6,386.878L495.6,386.878z"
              />

              <path
                id="XMLID_81_"
                fill="#666"
                d="M275.517,133C196.933,133,133,196.933,133,275.516 s63.933,142.517,142.517,142.517S418.034,354.1,418.034,275.516S354.101,133,275.517,133z M275.517,362.6 c-48.095,0-87.083-38.988-87.083-87.083s38.989-87.083,87.083-87.083c48.095,0,87.083,38.988,87.083,87.083 C362.6,323.611,323.611,362.6,275.517,362.6z"
              />
              <circle
                id="XMLID_83_"
                fill="#444"
                cx="418.306"
                cy="134.072"
                r="34.149"
              />
            </svg>
            <p className="text-lg">
              <a
                href="https://www.instagram.com/uptownultras/"
                className="text-blue-400"
              >
                Check out our Instagram{" "}
              </a>
              . Stay up to date on Uptown Ultras specific information and see
              how we cheer on our team! Our most active social media!
            </p>
          </div>
        </div>

        {/* twitter */}
        <div className="flex flex-col w-full pb-6">
          <img className="rounded-t-lg" src="assets/images/image_4.jpg" />
          <div className=" flex flex-col rounded-b-lg bg-gray-50 p-12">
            <svg
              viewBox="328 355 335 276"
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 mx-auto mb-2 "
              id="twitter-logo"
            >
              <path
                d="
    M 630, 425
    A 195, 195 0 0 1 331, 600
    A 142, 142 0 0 0 428, 570
    A  70,  70 0 0 1 370, 523
    A  70,  70 0 0 0 401, 521
    A  70,  70 0 0 1 344, 455
    A  70,  70 0 0 0 372, 460
    A  70,  70 0 0 1 354, 370
    A 195, 195 0 0 0 495, 442
    A  67,  67 0 0 1 611, 380
    A 117, 117 0 0 0 654, 363
    A  65,  65 0 0 1 623, 401
    A 117, 117 0 0 0 662, 390
    A  65,  65 0 0 1 630, 425
    Z"
              />
            </svg>
            <p className="text-lg">
              {" "}
              <a
                href="https://twitter.com/UltrasUptown"
                className="text-blue-400"
              >
                Visit our Twitter
              </a>
              . Best for keeping up with Charlotte FC and Supporter Group News.
            </p>
          </div>
        </div>
      </div>
      <div className="pb-12">
        <AnimatedCard
          threshold={0.25}
          activeClassName="transition-all duration-1000 ease-in transform opacity-1"
          inactiveClassName="transition-all duration-1000 ease-in transform opacity-0"
        >
          <MerchCard />
        </AnimatedCard>
      </div>
    </div>
  );
}

export default Social;
