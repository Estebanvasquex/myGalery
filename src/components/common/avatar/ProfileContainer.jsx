import React from "react";
import photo from "../../../assets/profilePhoto.png";
import Profile from "./profile";

const ProfileContainer = () => {
  
  const profilePhoto = photo;
  const nameProfile = "Rodney Cotton";
  const countryProfile = "Helsinki, Finland";

  return (
    <div>
      
      <Profile
        profilePhoto={profilePhoto}
        nameProfile={nameProfile}
        countryProfile={countryProfile}
      />
    </div>
  );
};

export default ProfileContainer;
