import React from "react";
import { Route, Routes, useParams } from "react-router-dom";
import Sidebar from "../Sidebar";
import Profile from "../Profile/Profile";
import Gallery from "../Profile/Gallery";
import Todo from "../Profile/Todo";
import Posts from "../Profile/Posts";
import DataProvider from "../Context/Datacontext";

const ProfileDetailRoutes = () => {
  const { id } = useParams();
  return (
    <div className="flex flex-row mx-6">
      <div className="basis-1/5">
        <Sidebar id={id} />
      </div>
      <div className="basis-4/5">
        <Routes>
          <Route
            path="/profile"
            element={
              <DataProvider>
                <Profile />
              </DataProvider>
            }
          />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/toDo" element={<Todo />} />
          <Route path="/posts" element={<Posts />} />
        </Routes>
      </div>
    </div>
  );
};

export default ProfileDetailRoutes;
