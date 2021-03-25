import React from "react";

import { FollowersColumn } from "../../components/followers-column/FollowersColumn";
import { SuggestedUsers } from "../../components/suggested-box/SuggestedUsers";
import { Feed } from "../../components/feed/Feed";

import { HomeContainer } from "./Home.styles";

export const Home = () => {
  return (
    <HomeContainer>
      <FollowersColumn />
      <Feed />
      <SuggestedUsers />
    </HomeContainer>
  );
};
