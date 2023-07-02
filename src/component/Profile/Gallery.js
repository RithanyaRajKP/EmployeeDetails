import React from "react";
import Navbar from "../Navbar";
import DataProvider from "../Context/Datacontext";
import "../Styles/Profile.css";

function Gallery() {
  return (
    <div className="flex m-auto">
      <div className="flex flex-col w-10/12  p-8 h-screen">
        <div className="flex justify-between w-full py-4">
          <h2 className="font-bold text-slate-500 text-xl">Gallery</h2>
          <DataProvider>
            <Navbar />
          </DataProvider>
        </div>
        <hr className="w-full hrColor" />
        <div className="flex pt-1.5 justify-center items-center grow">
          <h1 className="text-gray-200 text-7xl font-bold ">Coming Soon</h1>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
