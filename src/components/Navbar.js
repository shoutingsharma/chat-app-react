import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Private Chat</span>
      <div className="user">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr96NcPVFR1e0gDOv-Z_IhmEoDIGh6XaRmncc9UsEG6w&usqp=CAU&ec=48665701"
          alt=""
        />
        <span>john</span>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
