import React from "react";
import { Link } from "react-router-dom";
import PopupUsers from "./PopupUsers";
import "../Styles/Profile.css";

function ProfilePopup(props) {
  const { users, showProfile, setShowProfile, dataArray } = props;
  const handleClick = () => {
    setShowProfile(false);
  };
  return (
    <div
      className="h-[55%] z-20 absolute rounded-xl flex flex-col pb-10 w-80 overflow-hidden bg-white shadow-2xl right-4 top-13"
      style={{ display: showProfile ? "block" : "none" }}
    >
      {/* -----here the popup with profile detatils when clicked on navbar------ */}

      <div className="py-2 px-16 flex flex-col items-center">
        <img
          src={users[0]?.profilepicture}
          alt="profile"
          className="w-9/12 rounded-full"
        />
        <p>{users[0]?.name}</p>
        <p className="textlightgrey">{users[0]?.email}</p>
      </div>
      <hr />
      <div
        className="overflow-hidden h-28 pr-8 w-80"
        onClick={() => setShowProfile(false)}
      >
        <PopupUsers users={dataArray} />
      </div>
      <Link to="/">
        <button
          onClick={handleClick}
          className="text-lg py-1 px-4 rounded-3xl mt-5 cursor-pointer border-transparent bg-red-600 text-white"
        >
          Sign out
        </button>
      </Link>
    </div>
  );
}

export default ProfilePopup;
