import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import Data from "../components/Data";
import InfoCard from "../components/InfoCard";
import styles from "../styles/Home.module.css";
import ACases from "../assets/Acases.svg";
import NCases from "../assets/Ncases.svg";
import Tvac from "../assets/Totalvac.svg";
import Total from "../assets/Totalcount.svg";
import Details from "../components/Details";

export default function Home() {
  const stats = [
    { title: "Total Cases", count: "170,593,575", icon: Total, diff: true },

    {
      title: "Total Vaccinations",
      count: "153,593,575",
      icon: Tvac,
      diff: true,
    },
    ,
    { title: "New Cases", count: "10,593,575", icon: NCases, diff: false },
    { title: "Active Cases", count: "14,593,575", icon: ACases, diff: false },
  ];

  return (
    <div className={styles.container}>
      <OverView>
        {stats.map((stat) => (
          <InfoCard
            title={stat.title}
            count={stat.count}
            icon={stat.icon}
            diff={stat.diff}
          />
        ))}
      </OverView>
      <Data />
      <Details />
    </div>
  );
}

export const OverView = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 250px);
  gap: 3rem;
  padding-inline: 5rem;
  justify-content: center;
`;
