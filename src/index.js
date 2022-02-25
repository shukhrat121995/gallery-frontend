import "babel-polyfill";
import "url-search-params-polyfill";
import "whatwg-fetch";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import GA4React from "ga-4-react";
const ga4react = new GA4React("G-TYF1FY6E6E");
(async () => {
  ReactDOM.hydrate(<App />, document.getElementById("root"));
  try {
    await ga4react.initialize();
  } catch (Exception) {
    //console.log(Exception);
  }
})();
