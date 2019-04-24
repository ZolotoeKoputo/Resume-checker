import React from "react";

import "./index.scss";

function MainRate(props) {
  const { data } = props;

  function getProgress() {
    let totalProgress = data.good_value.split(" / "),
      successProgress = (totalProgress[0] * 100) / totalProgress[1];
    return `${successProgress}%`;
  }
  const styleProgress = {
    width: getProgress()
  };
  return (
    <div className="main-rate__wrapper">
      <div className="main-rate__heading">{data.name}</div>
      <div className="main-rate__content">
        <div className="rate__good">
          <span className={`rate__icon-${data.good_icon_value}`} />
          {data.good_value}
        </div>
        <div className="progress__wrapper">
          <div className="progress__success" style={styleProgress} />
        </div>
        <div className="rate__bad">
          <span className={`rate__icon-${data.bad_icon_value}`} />
          {data.bad_value}
        </div>
      </div>
    </div>
  );
}
export default MainRate;
