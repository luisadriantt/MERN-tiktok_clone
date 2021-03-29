import React from "react";

import { MiniCard } from "../cards/MiniCard"

import {
  SuggestedContainer,
  Section,
  Suggested,
  Break,
} from "./SuggestedUsers.styles";

export const SuggestedUsers = ({users}) => {
  return (
    <SuggestedContainer>
      <Section>
        <Suggested>
        <h2 className="bold">Suggested accounts</h2>
        <Break/>
        <Break/>
          {users.map((user, index) => (
            <MiniCard
              key={index}
              user={user}
            />
          ))
          }
        </Suggested>
      </Section>
    </SuggestedContainer>
  );
};
