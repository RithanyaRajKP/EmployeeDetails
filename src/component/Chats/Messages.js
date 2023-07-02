import React from "react";


function Messages({ messages }) {
  return (
    // ------this is to display the messages in the chats -------------------
    <div>
      {messages.map((message, index) => (
        <div className="flex break-all my-2 mx-3" key={index}>
           <p className=" bg-gray-200 p-3  rounded-xl">
             {message}
           </p>
            </div>
      ))}
    </div>
  );
}

export default Messages;
