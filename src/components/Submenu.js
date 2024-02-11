// SubMenu.js
import React from "react";

import "./smallinfo.css";

const SubMenu = ({ items }) => {
  return (
    <div className="submenu">
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SubMenu;
