import React from "react";
import styled from "styled-components";
import Flag from "../assets/image 7.svg";
import Image from "next/image";
import Total from "../assets/Total.svg";
import Tvac from "../assets/Tvac.svg";
import Acases from "../assets/Acases.svg";
import Ncases from "../assets/Ncases.svg";
import Tdeaths from "../assets/Tdeaths.svg";

const CountryCard = () => {
  return (
    <CtryCard>
      <div>
        <Image src={Flag} alt="" width={50} height={50} background="red" />
      </div>
      <div>
        <p>United States of America</p>
        <span>Total Cases</span>
        <div>
          <Image src={Total} width={31} height={31} />
          <p>34,113,146</p>
        </div>
      </div>
      <div>
        <Image src={Tvac} width={35} height={35} />
        <div>
          <p>Total Vaccinations</p>
          <span>27,863,835</span>
        </div>
      </div>
      <div>
        <Image src={Acases} width={28} height={28} />
        <div>
          <p>Active Cases</p>
          <span>5,639,539</span>
        </div>
      </div>
      <div>
        <Image src={Ncases} width={35} height={35} />
        <div>
          <p>New Cases</p>
          <span>1,000</span>
        </div>
      </div>
      <div>
        <Image src={Tdeaths} width={20} height={25} />
        <div>
          <p>Total Deaths</p>
          <span>609,767</span>
        </div>
      </div>
      <div>
        <p> last updated: 6/1/2021, 7:21 AM</p>
      </div>
    </CtryCard>
  );
};

export default CountryCard;

const CtryCard = styled.div`
  display: grid;
  background-color: #fff;
  width: 300px;
  grid-template-columns: repeat(4, 1fr);
  border: 2px solid #eee;
  border-radius: 10px;
  padding: 7px;
  gap: 7px;
  box-shadow: 1px 1px 5px 2px rgba(0, 152, 238, 0.15);

  & > div {
    &:nth-child(1) {
      padding-top: 20px;
      padding-left: 5px;
    }

    &:nth-child(2) {
      grid-column: span 3;
      padding-inline: 5px;
      p {
        font-size: 0.8rem;
        padding-bottom: 5px;
        font-weight: 700;
        background: linear-gradient(92.48deg, #0199ee 2.11%, #01e5bb 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
      }
      span {
        font-size: 1.05rem;
        font-weight: 700;
        background: linear-gradient(92.48deg, #0199ee 2.11%, #01e5bb 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
        padding-bottom: 5px;
        display: inline-block;
      }

      div {
        display: flex;
        gap: 5px;

        & p {
          font-size: 1.6rem;
          font-weight: 700;
        }
      }
    }

    &:nth-child(3) {
      grid-column: span 2;
      display: flex;
      align-items: center;
      gap: 5px;

      p {
        font-size: 0.65rem;
        background: linear-gradient(92.48deg, #0199ee 2.11%, #01e5bb 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
        font-weight: 700;
        padding-block: 5px;
        margin-bottom: 5px;
      }

      span {
        font-size: 1rem;
        background: linear-gradient(92.48deg, #0199ee 2.11%, #01e5bb 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
        font-weight: 700;
        display: inline-block;
      }
    }

    &:nth-child(4) {
      grid-column: span 2;
      display: flex;
      align-items: center;
      gap: 10px;

      p {
        font-size: 0.65rem;
        background: linear-gradient(92.48deg, #0199ee 2.11%, #01e5bb 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
        font-weight: 700;
        padding-block: 5px;
        margin-bottom: 5px;
      }

      span {
        font-size: 1rem;
        background: linear-gradient(92.48deg, #0199ee 2.11%, #01e5bb 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
        font-weight: 700;
        display: inline-block;
      }
    }

    &:nth-child(5) {
      grid-column: span 2;
      display: flex;
      align-items: center;
      gap: 5px;

      p {
        font-size: 0.7rem;
        background: linear-gradient(92.48deg, #0199ee 2.11%, #01e5bb 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
        font-weight: 700;
        padding-block: 5px;
        margin-bottom: 5px;
      }

      span {
        font-size: 1rem;
        background: linear-gradient(92.48deg, #0199ee 2.11%, #01e5bb 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
        font-weight: 700;
        display: inline-block;
      }
    }

    &:nth-child(6) {
      grid-column: span 2;
      display: flex;
      align-items: center;
      gap: 15px;

      p {
        font-size: 0.7rem;
        background: linear-gradient(92.48deg, #0199ee 2.11%, #01e5bb 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
        font-weight: 700;
        padding-block: 5px;
        margin-bottom: 5px;
      }

      span {
        font-size: 1rem;
        background: linear-gradient(92.48deg, #0199ee 2.11%, #01e5bb 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
        font-weight: 700;
        display: inline-block;
      }
    }

    &:nth-child(7) {
      grid-column: span 4;
      font-size: 0.7rem;
      font-weight: 700;
      background: linear-gradient(92.48deg, #0199ee 2.11%, #01e5bb 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
      margin-block: 10px 5px;
    }
  }
`;
