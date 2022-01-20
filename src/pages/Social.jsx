import React from "react";

function Social() {
  return (
    <>
      <h1 className="pt-32 pb-6 font-rockSalt text-blue-400 text-4xl mx-auto w-1/4">
        {" "}
        Check out our social medias!
      </h1>
      <div className=" flex flex-row justify-around">
        <div className="flex flex-col w-1/4 pb-6 rounded-lg">
          <img src="assets/images/image_1.jpg" />
          <div className=" flex flex-col bg-gray-50 p-12">
            <svg
              className="w-10 mx-auto mb-2 "
              width={18}
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Facebook</title>
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            <p>
              <a className="text-blue-400">Follow us on Facebook</a> to keep up
              with how awesome we are
            </p>
          </div>
        </div>
        {/* Insta */}
        <div className="flex flex-col w-1/4 pb-6 rounded-lg">
          <img src="assets/images/image_2.jpg" />

          <div className=" flex flex-col bg-gray-50 p-12">
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
                fill="#555"
                d="M275.517,133C196.933,133,133,196.933,133,275.516 s63.933,142.517,142.517,142.517S418.034,354.1,418.034,275.516S354.101,133,275.517,133z M275.517,362.6 c-48.095,0-87.083-38.988-87.083-87.083s38.989-87.083,87.083-87.083c48.095,0,87.083,38.988,87.083,87.083 C362.6,323.611,323.611,362.6,275.517,362.6z"
              />

              <circle
                id="XMLID_83_"
                fill="#555"
                cx="418.306"
                cy="134.072"
                r="34.149"
              />
            </svg>
            <p>
              <a className="text-blue-400">Check out our Instagram </a> to see
              how we live it up!
            </p>
          </div>
        </div>
        {/* twitter */}
        <div className="flex flex-col w-1/4 pb-6 rounded-lg">
          <img src="assets/images/image_4.jpg" />

          <div className=" flex flex-col bg-gray-50 p-12">
            <svg
              viewBox="328 355 335 276"
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 mx-auto mb-2"
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
            <p>
              {" "}
              <a className="text-blue-400">Visit our Twitter</a> page to keep up
              to date on the Ultras!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Social;
