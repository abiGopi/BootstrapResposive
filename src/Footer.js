import React from "react";
import appLogo from "./appLogo.svg";
export default function Footer() {
  return (
    <div className="footer-container d-flex justify-content-between">
      <div className="d-flex pt-4 align-items-center">
        <img src={appLogo} alt={""} />
        <div className="px-4 footText">Terms & Condition</div>
        <div className="px-4 footText">Privacy Policy</div>
      </div>
      <div className="pt-4 copyrighttxt">
        <div>® 2019 Company name. All rights reserved.</div>
      </div>
    </div>
  );
}
