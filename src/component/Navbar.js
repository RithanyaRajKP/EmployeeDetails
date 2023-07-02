import React, { useContext, useEffect, useState } from "react";
import ProfilePopup from "./ProfileDetail/ProfilePopup";
import { DataContext } from "./Context/Datacontext";

function Navbar() {
  const { dataArray,filteredArray } = useContext(DataContext);
  const [users, setUsers] = useState([]);
  const [showProfile, setShowProfile] = useState(false);

  useEffect(() => {
    setUsers(filteredArray);
  }, [filteredArray]);

  return (
    <div>

      {/*------------ fetched an showing the only selected profile data-------------- */}
      <div
        onClick={() => setShowProfile(!showProfile)}
        className="flex items-center gap-3.5 cursor-pointer w-full"
      >
        <img
          src={users[0]?.profilepicture}
          alt="profile img"
          className="w-8 rounded-full"
        />
        <p className="text-slate-500 text-lg font-medium">{users[0]?.name}</p>
      </div>

      {/* -------- (Profile details popup in the right side of navbar------------ */}
      {showProfile && <ProfilePopup users={users} showProfile ={showProfile} setShowProfile={setShowProfile} dataArray={dataArray} />}
    </div>
  );
}

export default Navbar;
