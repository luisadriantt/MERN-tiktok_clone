import React from "react";

import {MicroCard} from "../cards/MicroCard"

import {
  Column,
  FollowersSection,
  Home,
  Following,
} from "./FollowersColumn.styles";

export const FollowersColumn = (topFiveFollowing) => {
  const {users} = topFiveFollowing

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
      <br/>
      {users && users.map((user, index) => (
        <MicroCard
          key={index}
          user={user}
        />
      ))}
    </Column>
  );
};
