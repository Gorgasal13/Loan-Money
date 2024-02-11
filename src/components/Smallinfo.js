import React, { useState } from "react";

import SubMenu from "./Submenu";

import { MdLocationOn } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { MdOutlineSmartphone } from "react-icons/md";

import "./smallinfo.css";

const Smallinfo = () => {
  const [isSubMenuVisible, setSubMenuVisible] = useState(false);

  const toggleSubMenu = () => {
    setSubMenuVisible(!isSubMenuVisible);
  };

  const subMenuItems = ["Georgian"];
  return (
    <div className="smallinfo">
      <div className="info">
        <div className="infos">
          <div className="smalltexticons">
            <MdLocationOn size={20} />
          </div>
          Georgia, Tbilisi, ST 90
        </div>
        <div className="infos">
          <div className="smalltexticons">
            <MdOutlineSmartphone size={20} />
          </div>
          (123) 456-78-910
        </div>
        <div className="infos">
          <div className="smalltexticons">
            <MdEmail size={20} />
          </div>
          Info@user.com
        </div>
      </div>
      <div>
        <button onClick={toggleSubMenu} className="smallinfobtn">
          English
        </button>
        {isSubMenuVisible && <SubMenu items={subMenuItems} />}
      </div>
    </div>
  );
};

export default Smallinfo;
