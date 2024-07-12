import React from "react";

const SideIcon = () => {
  return (
    <div className="sideicon">
      <div className="d-flex flex-column justify-content-center align-items-center gap-2">
        <div className="iconBox bg-success text-light">
          <i className="fa-solid fa-phone"></i>
          <span>Call Us</span>
        </div>
        <div className="iconBox bg-success text-light">
          <i className="fa-brands fa-whatsapp"></i>
          <span>WhatsApp</span>
        </div>
        <div className="iconBox bg-success text-light">
          <i className="fa-regular fa-message"></i>
          <span>Message</span>
        </div>
      </div>
    </div>
  );
};

export default SideIcon;
