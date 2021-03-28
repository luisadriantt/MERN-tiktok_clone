import React from "react";
import {
  Column,
  FollowersSection,
  Home,
  Following,
} from "./FollowersColumn.styles";

export const FollowersColumn = () => {
  return (
    <Column>
      <FollowersSection>
        <Home />
        <h2>For you</h2>
      </FollowersSection>
      <FollowersSection>
        <Following />
        <h2>Following</h2>
      </FollowersSection>
      <hr />
      <br />
      <p>Your top accounts</p>
    </Column>
  );
};
