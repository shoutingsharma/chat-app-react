import React from "react";

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Find a user" />
      </div>
      <div className="userChat">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr96NcPVFR1e0gDOv-Z_IhmEoDIGh6XaRmncc9UsEG6w&usqp=CAU&ec=48665701"
          alt=""
        />
        <div className="userChatinfo">
          <span>jane</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
