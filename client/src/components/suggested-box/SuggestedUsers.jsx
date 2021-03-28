import React from "react";

import {
  SuggestedContainer,
  Section,
  Suggested,
} from "./SuggestedUsers.styles";

export const SuggestedUsers = () => {
  return (
    <SuggestedContainer>
      <Section>
        <Suggested>
          <h2>Suggested Accounts</h2>
        </Suggested>
      </Section>
    </SuggestedContainer>
  );
};
