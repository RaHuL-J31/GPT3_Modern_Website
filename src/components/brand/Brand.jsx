import React from "react";
import "./brand.css";
import { google, slack, atlassian, dropbox, shopify } from "./imports";
function Brand() {
  return (
    <div className="gpt3__brand">
      <div className="">
        <img src={google} alt="loading" />
      </div>
      <div className="">
        <img src={slack} alt="loading" />
      </div>
      <div className="">
        <img src={atlassian} alt="loading" />
      </div>
      <div className="">
        <img src={dropbox} alt="loading" />
      </div>
      <div className="">
        <img src={shopify} alt="loading" />
      </div>
    </div>
  );
}

export default Brand;
