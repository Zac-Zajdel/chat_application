import React from 'react';
import './InfoBar.css';

// Photo Icons
import closeIcon from "../../icons/closeIcon.png";
import onlineIcon from "../../icons/onlineIcon.png";

interface InfoBarInterface {
  room: string
}

const InfoBar = (infobar: InfoBarInterface) => {
  return (
    <div className="infoBar">
      <div className="leftInnerContainer">
        <img className="onlineIcon" src={onlineIcon} alt="online" />
        <h3>{ infobar.room }</h3>
      </div>
      <div className="rightInnerContainer">
        <a href="/">
          <img src={closeIcon} alt="leave room" />
        </a>
      </div>
    </div>
  );
}

export default InfoBar;