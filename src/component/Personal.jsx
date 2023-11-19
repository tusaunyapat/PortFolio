import React from "react";

function Profile() {
  return (
    <div className="w-full flex justify-center bg-white dark:bg-navy">
      <div className="flex justify-center flex-wrap  bg-white dark:bg-navy mt-50  px-6 py-16 w-10/12 sm:w-8/12">
        {/*personal information */}
        <div className="text-3xl relative sm:hidden text-navy dark:text-white">
          <b>PROFILE</b>
        </div>

        <div className="w-full flex flex-col sm:flex-row justify-center items-center sm:justify-between py-4 px-6 text-navy text-md dark:text-white">
          <ul className="py-2 flex flex-col justify-center items-start ">
            <li className="flex flex-col py-2 sm:flex-row items-start ">
              <b className="w-full sm:w-full my-2">FULLNAME :</b>
              <p className="pl-0 ">Aunyapat Nitijarasrat</p>
            </li>

            <li className="flex flex-col py-2 sm:flex-row items-start">
              <b className="w-full sm:w-5/12 my-2">ADDRESS :</b>
              <p className="pl-8 w-full">
                Phasi-Charoen district, Bangkok, 10160.
              </p>
            </li>
            <li className="flex flex-col py-2 sm:flex-row items-start">
              <b className="w-full sm:w-5/12 my-2">TEL. :</b>
              <p className="pl-8">095-9501622</p>
            </li>
            <li className="flex flex-col py-2 sm:flex-row items-start">
              <b className="w-full sm:w-5/12 my-2">EMAIL :</b>
              <p className="pl-8">aunyapat.nit@gmail.com</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Profile;
