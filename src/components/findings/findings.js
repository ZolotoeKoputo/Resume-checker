import React from "react";

import "./index.scss";
import FindingsItem from "../findings-item/findings-item";

function Findings(props) {
  const { data } = props;
  const title = data[0].title;

  const findingsContainer = data.map(item => {
    // delete data[0];
    return <FindingsItem content={item} />;
  });
  return (
    <div className="findings findings-wrapper">
      <div className="findings__heading">{title}</div>
      {findingsContainer}
    </div>
  );
}
export default Findings;
