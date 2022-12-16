import Image from "next/image";
import React from "react";
import styled from "styled-components";
import CountryCard from "./CountryCard";
import Icon from "../assets/searchicon.svg";

const Data = () => {
  return (
    <DataContainer>
      <div>
        <div>
          <button>All</button>
          <button>Europe</button>
          <button>N. America</button>
          <button>Asia</button>
          <button>S. America</button>
          <button>Africa</button>
          <button>Oceania</button>
        </div>
        <div>
          <input type="text" />
          <Test src={Icon} width={30} height={30} />
        </div>
      </div>
      <div>
        <CountryCard />
        <CountryCard />
        <CountryCard />
        <CountryCard />
        <CountryCard />
        <CountryCard />
        <CountryCard />
        <CountryCard />
      </div>
    </DataContainer>
  );
};

export default Data;

const DataContainer = styled.div`
  width: 85vw;
  min-height: 80vh;

  margin: 0 auto;
  margin-block: 25px;
  border-radius: 10px;

  padding-bottom: 100px;

  & > div:nth-child(1) {
    display: flex;
    width: 100%;
    height: 65px;
    border-radius: 10px 10px 0px 0px;
    padding-inline: 35px;
    background: linear-gradient(
      95.43deg,
      #0098ee 0.02%,
      #00eeb5 196.57%,
      #00eeb5 196.57%
    );

    & > div:nth-child(1) {
      width: 70%;
      height: 100%;
      align-items: center;
      display: flex;
      gap: 0;

      button {
        background-color: transparent;
        border: none;
        padding: 10px 25px;
        border-radius: 5px;
        font-weight: 700;
        font-size: 1.1rem;
        color: #fff;
      }
    }

    & > div:nth-child(2) {
      width: 35%;
      background-color: transparent;
      display: flex;
      align-items: center;
      position: relative;

      input {
        width: 100%;
        height: 70%;
        position: absolute;
        border: none;
        background: linear-gradient(
          90.2deg,
          rgba(0, 96, 150, 0.5) 0%,
          rgba(0, 87, 66, 0.205) 100%
        );
        border-radius: 5px;
      }
    }
  }

  & > div:nth-child(2) {
    display: grid;
    grid-template-columns: repeat(4, 300px);
    gap: 2rem 1rem;
    justify-content: center;
    padding: 2.5rem;
    box-shadow: 1px 1px 5px 2px rgba(0, 152, 238, 0.15);
    background: #f9f9f9;

    & > img {
      position: absolute;
      top: 1rem;
      right: 1rem;
    }
  }
`;

const Test = styled(Image)`
  position: absolute;
  right: 10px;
`;
