import React from "react";
import ButtonSocialNetworks from "./ButtonSocialNetworks";

const ButtonSocialNetworksContainer = () => {
  const followers = 2000;
  const following = 1000;
  const post = 800;
  return (
    <div style={{ display: "flex", gap: "10px", justifyContent: "center"}}>
      <ButtonSocialNetworks label={post} value = "Post"  />
      <ButtonSocialNetworks label={followers} value = "Followers"/>
      <ButtonSocialNetworks label={following} value = "Following" />
    </div>
  );
};

export default ButtonSocialNetworksContainer;
