import React from "react";
import { NavLink } from "react-router-dom";
import "../Styles/Profile.css";

function PopupUsers(props) {
  const { users } = props;
  return (
    <div className="cursor-pointer py-0 bg-white mt-0 h-full overflow-x-auto px-8 popusers">
      {users &&
        users.map((el) => {
          return (
            <div key={el.id}>
              <NavLink to={`/${el.id}/profile`}>
                <div className="flex m-0 p-0 gap-5 items-center">
                  <img
                    src={el.profilepicture}
                    alt="profile image"
                    className="m-0 p-0 w-9 rounded-full"
                  />
                  <p className="p-0 m-0 text-sm font-normal">{el.name}</p>
                </div>
              </NavLink>
              <hr />
            </div>
          );
        })}
    </div>
  );
}

export default PopupUsers;
