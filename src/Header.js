import React from "react";
import appLogo from "./appLogo.svg";
export default function Header() {
  return (
    <div className="d-flex justify-content-between pt-4">
      <img src={appLogo} alt={""} />
      <div className="d-flex align-items-center">
        <div className="px-4">Why Us?</div>
        <div className="px-4">Marketing Platform</div>
        <div className="px-4">Pricing</div>
        <button className="ml-4 px-2 py-2 signup-btn">Sign Up,It's Free</button>
      </div>
    </div>
  );
}
