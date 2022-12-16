import React from "react";
import styled from "styled-components";
import GithubLight from "../assets/iconmonstr-github.svg";
import DataSource from "../assets/datasource.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterItems>
        <CreatedBy>created by @SalafiSignature</CreatedBy>
        <Image src={GithubLight} />
        <Image src={DataSource} />
      </FooterItems>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  height: 71px;
  background: #f5f5f5;
  color: white;
  padding: 10px auto;
`;

const FooterItems = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const CreatedBy = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  background: linear-gradient(92.48deg, #0199ee 2.11%, #01e5bb 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;
