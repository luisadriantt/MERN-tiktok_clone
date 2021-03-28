import React from "react";
import { Link } from "react-router-dom";

import { HeaderContainer, Logo, Upload, Personal } from "./Header.styles";
import { Section } from "../suggested-box/SuggestedUsers.styles";

export const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/">
        <Logo />
      </Link>
      <>
        <Section>
          <Link to="/upload">
            <Upload />
          </Link>
          <Personal src="" />
        </Section>
      </>
    </HeaderContainer>
  );
};
