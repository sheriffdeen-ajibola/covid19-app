import Image from "next/image";
import React from "react";
import LogoLight from "../assets/logo-light.svg";
import ThemeSwitcher from "../assets/light_mode.svg";
import GithubLight from "../assets/iconmonstr-github.svg";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <Image src={LogoLight} />
      <NavList>
        <li>About</li>
        <li>
          <Image src={GithubLight} />
        </li>
        <li>
          <Image src={ThemeSwitcher} />
        </li>
      </NavList>
    </Container>
  );
};

export default Header;

const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 4rem;
  padding-block: 18px;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;

  li {
    list-style: none;
    font-size: 18px;
    line-height: 20px;
    font-weight: 700;
    color: #0098ee;
  }
`;
