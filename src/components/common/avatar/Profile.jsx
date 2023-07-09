import React from "react";

const Profile = (props) => {
  const { profilePhoto, nameProfile, countryProfile } = props;

  const img_profilePhoto = {
    maxWidth: "120px",
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: "20px",
      }}
    >
      <img
        style={{ maxWidth: "110px", borderRadius: "10%" }}
        src={profilePhoto}
        alt=""
      />
      <h3 style={{color: "#4E5150", fontWeight: "600"}}>{nameProfile}</h3>
      <h5 style={{color: "#A9A9A9", fontWeight: "600"}}>{countryProfile}</h5>
    </div>
  );
};

export default Profile;
