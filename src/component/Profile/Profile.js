import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Navbar";
import "../Styles/Profile.css";
import DataProvider from "../Context/Datacontext";
import { DataContext } from "../Context/Datacontext";
import Chats from "../Chats/Chats";
import { address, company, user } from "../../data/profileDetails";

function Profile() {
  const { dataArray, filteredArray } = useContext(DataContext);

  const [profile, setProfile] = useState([]);

  useEffect(() => {
    setProfile(filteredArray);
  }, [filteredArray]);

  return (
    <div className="flex m-auto">
      <div className="flex w-11/12 flex-col  px-8">
        <div className=" py-4 flex justify-between w-full">
          <h2 className="font-bold text-slate-500 text-xl">Profile</h2>
          <DataProvider>
            <Navbar />
          </DataProvider>
        </div>
        <hr className='w-full hrColor' />
        <div>
          <div className="flex w-full">
            <div className="text-center p-0">
              <div>
                {/* ------------------user-------------- */}
                <div className="flex relative left-1">
                  <img
                    src={profile[0]?.profilepicture}
                    alt="profile img"
                    className="mt-6 rounded-full w-52"
                  />
                </div>

                <p className="text-center text-xl font-semibold mt-1.5 textBoldColor relative text-start left-8">
                  {profile[0]?.name}
                </p>

                <div className="relative overflow-x-auto">
                  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <tbody>
                      {user &&
                        user.map((el) => {
                          return (
                            <tr key={el.id}>
                              <th
                                scope="row"
                                className="text-end text-lg  py-2 font-medium textlightgrey whitespace-nowrap"
                              >
                                {el.heading}
                              </th>
                              <td className="textBoldColor mt-5 text-lg  font-semibold px-6">
                                {profile[0]?.[el.data]}
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </div>
                <hr className="border-[1.5px] mr-16" />

                {/* ---------------company--------------------- */}
                <h2 className="textlightgrey text-start relative left-20 text-lg font-medium mb-0 mt-5">
                  Company
                </h2>
                <div className="flex m-0 mb-5 gap-2">
                  <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                      <tbody>
                        {company &&
                          company.map((el) => {
                            return (
                              <tr key={el.id}>
                                <th
                                  scope="row"
                                  className="text-end text-lg  py-2 font-medium textlightgrey whitespace-nowrap"
                                >
                                  {el.heading}
                                </th>
                                <td className="textBoldColor mt-5 text-lg  font-semibold px-6">
                                  {profile[0]?.company[el.data]}
                                </td>
                              </tr>
                            );
                          })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <p className="border-r-2 mt-10"></p>

            {/* -------------Address----------------- */}
            <div className="w-9/12 text-left pl-16 pt-6">
              <h2 className="mt-1 font-semibold text-xl textlightgrey text-start">
                Address:
              </h2>
              <div className="pl-4">
                <table>
                  <tbody>
                    {address &&
                      address.map((el) => {
                        return (
                          <tr key={el.id}>
                            <th
                              scope="row"
                              className="text-end text-lg  py-2 font-medium textlightgrey whitespace-nowraps"
                            >
                              {el.heading}
                            </th>
                            <td className="textBoldColor mt-5 text-lg  font-semibold px-6">
                              {profile[0]?.address[el.data]}
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
              <iframe
                width="100%"
                height="350"
                className="rounded-r-3xl"
                src={`https://maps.google.com/maps?q=${profile[0]?.address.street},t=&z=13&ie=UTF8&iwloc=&output=embed`}
              ></iframe>

              <div className="flex justify-end mt-2.5 pr-1 gap-7">
                <p className="textBoldColor mt-1 font-semibold text-sm">
                  Lat :{" "}
                  <span className="textBoldColor mt-1 font-semibold text-sm">
                    {profile[0]?.address.geo.lat}
                  </span>
                </p>
                <p className="textBoldColor mt-1 font-semibold text-sm">
                  Lng :{" "}
                  <span className="textBoldColor mt-1 font-semibold text-sm">
                    {profile[0]?.address.geo.lng}
                  </span>
                </p>
              </div>
              <div className="flex justify-end">
                <Chats users={dataArray} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
