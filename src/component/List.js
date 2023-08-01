import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../main/Login";

function List() {
  const [users, setUser] = useState();
  const data = useContext(UserContext);

  useEffect(() => {
    setUser(data);
  }, [data]);

  return (
    <div className="h-4/6 w-full max-w-xl bg-white border rounded-3xl shadow ">
      <div className="flex items-center justify-center mb-4 bg-slate-100 rounded-2xl py-6">
        <h5 className="p-4 text-xl font-bold leading-none text-gray-900">
          Select an account
        </h5>
      </div>
      <div className="h-[46vh] overflow-y-scroll">
        {users &&
          users.map((user) => {
            return (
              <Link to={`/${user.id}/profile`}>
                <div className="sm:px-8 px-4 flow-root mainlist" key={user.id}>
                  <ul
                    role="list"
                    className="divide-y divide-gray-200 dark:divide-gray-700"
                  >
                    <li className="py-3 sm:py-4 border-b-2 border-inherit">
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          <img
                            className="w-8 h-8 rounded-full"
                            src={user.profilepicture}
                            alt="Neil image"
                          />
                        </div>
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-black">
                          {user.name}
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export default List;
