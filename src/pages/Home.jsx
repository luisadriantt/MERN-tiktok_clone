import React from "react";

import { FollowersColumn } from "../components/followers-column/FollowersColumn";
import { SuggestedUsers } from "../components/suggested-box/SuggestedUsers";
import { Feed } from "../components/feed/Feed";

export const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <FollowersColumn />
      <Feed />
      <SuggestedUsers />
    </div>
  );
};
