import React from "react";
import ProfileContainer from "../../common/avatar/profileContainer";
import ButtonSocialNetworksContainer from "../../common/buttonSocialNetworks/ButtonSocialNetworksContainer";
import GridGaleryContainer from "../../common/gridGalery/GridGaleryContainer";

const Galery = () => {
  return (
    <div>
      <ProfileContainer />
      <ButtonSocialNetworksContainer />
      <GridGaleryContainer/>
    </div>
  );
};

export default Galery;
