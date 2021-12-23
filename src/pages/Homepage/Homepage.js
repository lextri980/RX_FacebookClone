import React from "react";
import "./Homepage.scss";

// Components
import LeftSideBar from "../../components/Homepage/LeftSideBar";
import Feed from "../../components/Homepage/Feed";
import RightSideBar from "../../components/Homepage/RightSideBar";

export default function Homepage() {
  return (
    <div className='homepage'>
      <LeftSideBar />
      <Feed />
      <RightSideBar />
    </div>
  );
}
