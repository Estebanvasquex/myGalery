import React from "react";

const ButtonSocialNetworks = (props) => {
  const { label, value } = props;
  return (
    <div>
      <div >
      
          <div
            style={{
              maxWidth: "90px",
              minWidth: "80px",
              minHeight: "50px",
              backgroundColor: "#E5E5E5",
              borderRadius: "10px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h3 style={{ color: "#4E5150", fontWeight: "00" }}>{label}</h3>
            <h5 style={{ color: "#A9A9A9", fontWeight: "600" }}>{value}</h5>
          </div>
       

      </div>
    </div>
  );
};

export default ButtonSocialNetworks;
