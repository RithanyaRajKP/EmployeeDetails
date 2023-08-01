import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { BsChatRight, BsFillRecordFill } from "react-icons/bs";
import { AiOutlineSend } from "react-icons/ai";
import { IoIosClose } from "react-icons/io";
import Messages from "./Messages";
import "../Styles/Chats.css";


function Chats(props) {
  const { users } = props;
  const [id, setId] = useState();
  const [value, setValue] = useState("");
  const [openChat, setOpenChat] = useState(false);
  const [openMessage, setOpenMessage] = useState(false);
  const [user, setUser] = useState([]);
  const [messages, setMessages] = useState([]);

  const handleChatClick = (id) => {
    const user = users.filter((el) => el.id === Number(id));
    setUser(user);
    setId(id);
  };

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const handleOnClose = () => {
    setId();
  };

  const handleOnsendMessage = () => {
    if (value.trim() !== "") {
      setMessages((prevMessages) => [...prevMessages, value]);
      setValue("");
    }
  };

  return (
    <>
      {/* --------when selected a single chat list member the particular chat-------------------- */}
      {id && (
        <div
          className="w-1/2 overflow-x-auto bg-white border-4 border-blue-600 rounded-xl shadow mr-6 "
          style={{ marginTop: openMessage ? "-300px" : "20px" }}
        >
          <div
            className="bg-blue-600 text-white text-center flex items-center text-lg justify-between font-semibold px-4 py-2 cursor-pointer"
            onClick={() => setOpenMessage(!openMessage)}
          >
            <div className="flex items-center gap-2.5">
              <div>
                <img
                  className="w-8 h-8 rounded-full"
                  src={user[0]?.profilepicture}
                  alt="Neil image"
                />
              </div>

              <p className="text-sm font-medium text-gray-900 text-white">
                {user[0]?.name}
              </p>
            </div>
            <div className="flex text-2xl font-extrabold cursor-pointer">
              {openMessage ? (
                <FiChevronDown className="chevroniconwidth" />
              ) : (
                <FiChevronUp className="chevroniconwidth" />
              )}
              <p>
                <IoIosClose
                  className="closeIconWidth"
                  onClick={handleOnClose}
                />
              </p>
            </div>
          </div>
          {openMessage && (
            <div className="flex flex-col">
              <div className="overflow-hidden h-72">
                <Messages messages={messages} />
              </div>
              <div className="flex">
                <input
                  className="textarea input border-2 border-gray-300 rounded-full w-60 mx-2"
                  type="text"
                  placeholder="  Enter your message..."
                  value={value}
                  onChange={handleInputChange}
                />
                <button onClick={handleOnsendMessage} className="text-blue-600">
                  <AiOutlineSend />
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* -------------------list of profiles in the chat with active light ----------------------------------- */}

      <div
        className="w-1/2 overflow-x-auto bg-white border-4 border-blue-600 rounded-xl shadow h-full"
        style={{ marginTop: openChat ? "-300px" : "20px" }}
      >
        <div>
          <div
            className="bg-blue-600 text-white text-center flex items-center text-lg justify-between font-semibold px-4 py-2 cursor-pointer"
            onClick={() => setOpenChat(!openChat)}
          >
            <div className="flex items-center gap-2.5">
              <div>
                <BsChatRight />
              </div>
              <p>Chat</p>
            </div>
            {openChat ? (
              <FiChevronDown className="chevroniconwidth" />
            ) : (
              <FiChevronUp className="chevroniconwidth" />
            )}
          </div>
          {openChat && (
            <div className="flow-root h-80 overflow-x-auto cursor-pointer openchat">
              {users &&
                users.map((user) => {
                  return (
                    <ul
                      role="list"
                      className="divide-y divide-gray-200 dark:divide-gray-700"
                      key={user.id}
                    >
                      <li className="py-2 px-2">
                        <div
                          className="flex items-center space-x-4"
                          onClick={(e) => handleChatClick(user.id)}
                        >
                          <div className="flex-shrink-0">
                            <img
                              className="w-8 h-8 rounded-full"
                              src={user.profilepicture}
                              alt="Neil image"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate dark:text-black">
                              {user.name}
                            </p>
                          </div>
                          <div className="text-green-500 inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                            <BsFillRecordFill />
                          </div>
                        </div>
                      </li>
                    </ul>
                  );
                })}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Chats;
