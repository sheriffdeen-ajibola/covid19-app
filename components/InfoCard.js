import React from "react";
import styled from "styled-components";
import ÇoronaVirus from "../assets/coronavirus_black.svg";
import Image from "next/image";

const InfoCard = ({ title, count, icon, diff }) => {
  return (
    <CardContainer diff={diff}>
      <TitleContainer>
        <p>{title}</p>
        <Image src={icon} alt="" width={35} heigth={35} />
      </TitleContainer>
      <Count>{count}</Count>
      <p>last updated: 6/1/2021, 7:21 AM</p>
    </CardContainer>
  );
};

export default InfoCard;

export const CardContainer = styled.article`
  color: ${(props) => (props.diff ? "white" : "#00eeb5")};
  margin-block: 1rem;
  padding: 1rem;
  text-align: center;
  box-shadow: 1px 1px 5px 2px rgba(0, 224, 238, 0.08);
  font-weight: 700;
  background: ${(props) =>
    props.diff
      ? `linear-gradient(
    95.37deg,
    #0098ee -95.82%,
    #00eeb5 98.99%,
    #00eeb5 98.99%
  )`
      : "transparent"};
  border-radius: 6px;
  width: 250px;
  flex-wrap: wrap;

  p {
    font-size: 0.85rem;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 15px;
  p {
    font-size: 1rem;
  }
`;

export const Count = styled.span`
  font-weight: 700;
  font-size: 2.2rem;
  margin-bottom: 15px;
  display: inline-block;
`;
