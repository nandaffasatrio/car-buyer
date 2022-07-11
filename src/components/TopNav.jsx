import React from "react";
import "../assets/scss/navbar.scss";
import { Icon } from "@iconify/react";

const TopNav = () => {
  return (
    <div className="container">
      <div className="topnav">
        <div className="topnav-pin">
          <Icon icon="ic:baseline-pin-drop" width="20" height="20" />
          <p>71 Ayer Rajah Crescent, #06-14, Singapore 139951</p>
        </div>
        <div className="topnav-mail">
          <Icon icon="eva:email-fill" width="20" height="20" />
          <p>
            Email us at:
            <br /> hello@carbuyer.com.sg
          </p>
        </div>
      </div>
      <div className="container__phone">
        <Icon icon="mdi:phone" width="20" />
        <p>
          +65 8808 7905 <span>+7 (700) 51 51 518</span>
        </p>
      </div>
    </div>
  );
};

export default TopNav;
