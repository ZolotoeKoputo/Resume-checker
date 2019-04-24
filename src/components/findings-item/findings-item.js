import React from "react";

import "bootstrap/dist/css/bootstrap.css";
import "./index.scss";

function FindingsItem(props) {
  const { content } = props;
  return (
    <div className="findings__container">
      <div className="row">
        <div className="col-sm-3">
          <div className="findings__subheading">{content.name}</div>
        </div>
        <div className="col-sm-2">
          <div
            className={`findings__icon findings__icon-${content.check_icon}`}
          />
        </div>
        <div className="col-sm-7">
          <div className="findings__content">{content.text}</div>
        </div>
      </div>
    </div>
  );
}
export default FindingsItem;
