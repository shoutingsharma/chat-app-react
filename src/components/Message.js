import React from "react";

const Message = () => {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3uLYQWkUu-c6Rm3m4x9Hf7RT_TISt-DmnkM4S0se63w&usqp=CAU&ec=48665701"
          alt=""
        />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>Hello</p>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3uLYQWkUu-c6Rm3m4x9Hf7RT_TISt-DmnkM4S0se63w&usqp=CAU&ec=48665701"
          alt=""
        />
      </div>
    </div>
  );
};

export default Message;
