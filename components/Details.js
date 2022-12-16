import React from "react";
import styled from "styled-components";
import { OverView } from "../pages";
import { CardContainer, Count, TitleContainer } from "./InfoCard";
import Dflag from "../assets/detailFlag.svg";
import Map from "../assets/map.svg";
import Image from "next/image";
import Icon from "../assets/iconmonstr-github.svg";
import Graph from "../assets/Graph.svg";
import Drop from "../assets/Dropdown.svg";

const Details = ({ diff }) => {
  return (
    <DetailContainer>
      <div>
        <Image src={Dflag} width={290} />
      </div>
      <div>
        <Image src={Map} width={230} />
      </div>
      <div>
        <CardContainer>
          <TitleContainer>
            <p>Total Cases</p>
            <Image src={Icon} alt="" width={35} heigth={35} />
          </TitleContainer>
          <Count>150,593,575</Count>
          <p>last updated: 6/1/2021, 7:21 AM</p>
        </CardContainer>
      </div>
      <div>
        <CardContainer>
          <TitleContainer>
            <p>Total Cases</p>
            <Image src={Icon} alt="" width={35} heigth={35} />
          </TitleContainer>
          <Count>150,593,575</Count>
          <p>last updated: 6/1/2021, 7:21 AM</p>
        </CardContainer>
      </div>
      <div>
        <div>
          <span>
            <p>Total Cases</p>
            <Image src={Drop} />
          </span>
          <p>6/1/2022</p>
          <p>6/1/2022</p>
        </div>
        <div>
          <Sketch src={Graph} width={850} />
        </div>
      </div>
      <div>
        <CardContainer>
          <TitleContainer>
            <p>Total Cases</p>
            <Image src={Icon} alt="" width={35} heigth={35} />
          </TitleContainer>
          <Count>150,593,575</Count>
          <p>last updated: 6/1/2021, 7:21 AM</p>
        </CardContainer>
      </div>
      <div>
        <CardContainer>
          <TitleContainer>
            <p>Total Cases</p>
            <Image src={Icon} alt="" width={35} heigth={35} />
          </TitleContainer>
          <Count>150,593,575</Count>
          <p>last updated: 6/1/2021, 7:21 AM</p>
        </CardContainer>
      </div>
      <div>
        <CardContainer>
          <TitleContainer>
            <p>Total Cases</p>
            <Image src={Icon} alt="" width={35} heigth={35} />
          </TitleContainer>
          <Count>150,593,575</Count>
          <p>last updated: 6/1/2021, 7:21 AM</p>
        </CardContainer>
      </div>
      <div>
        <CardContainer>
          <TitleContainer>
            <p>Total Cases</p>
            <Image src={Icon} alt="" width={35} heigth={35} />
          </TitleContainer>
          <Count>150,593,575</Count>
          <p>last updated: 6/1/2021, 7:21 AM</p>
        </CardContainer>
      </div>
    </DetailContainer>
  );
};

export default Details;

const DetailContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  background: #eee;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(4, 250px);
  padding: 2rem;
  grid-template-rows: 180px 150px 150px 150px 150px;
  gap: 1rem 4.5rem;

  & > div {
    background-color: #fff;
    border-radius: 5px;
    height: 150px;
  }

  & > :nth-child(5) {
    grid-column: span 3;
    grid-row: span 4;
    height: 650px;
    width: 940px;
    position: relative;

    & > :nth-child(1) {
      width: 100%;
      height: 60px;
      background: linear-gradient(
        95.43deg,
        #0098ee 0.02%,
        #00eeb5 196.57%,
        #00eeb5 196.57%
      );
      position: absolute;
      top: 0;
      display: flex;
      gap: 10px;
      justify-content: space-evenly;
      align-items: center;
      color: #fff;
      font-weight: 700;
      font-size: 1.5rem;

      & > :nth-child(1) {
        display: flex;
        gap: 20px;
        background: linear-gradient(
          90.2deg,
          rgba(0, 96, 150, 0.5) 0%,
          rgba(0, 87, 66, 0.205) 100%
        );
        padding: 5px 40px;
        width: 20rem;
        border-radius: 5px;
        align-items: center;
        justify-content: center;
        color: #fff;
        font-weight: 500;
        position: relative;
        font-size: 1.15rem;

        & > :nth-child(2) {
          position: absolute;
          right: 30px;
        }
      }
    }
  }
  & > :nth-child(1) {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  & > :nth-child(2) {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  & > :nth-child(3) {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  & > :nth-child(4) {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  & > :nth-child(5) {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  & > :nth-child(6) {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  & > :nth-child(7) {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  & > :nth-child(8) {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
  & > :nth-child(9) {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
`;

const Sketch = styled(Image)`
  position: absolute;
  bottom: 30px;
  left: 40px;
`;
