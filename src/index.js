import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import customData from "./resume-statistic.json";
import MainRate from "./components/main-fields/main-fields";
import Findings from "./components/findings/findings";

const generalPoint = customData.block1;

const mainFields = generalPoint.map(item => {
  return <MainRate data={item} />;
});

// const mainFindings = customData.block2.map(item => {
//   return <Findings data={customData.block2} />;
// });

function App() {
  return (
    <div className="App">
      <h1>Scun report</h1>
      <div className="general-rate">{mainFields}</div>
      <Findings data={customData.block2} />
      <Findings data={customData.block3} />
      <Findings data={customData.block4} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
