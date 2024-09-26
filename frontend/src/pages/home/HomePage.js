import React from 'react';
import Header from "../../components/Header";
import AdvantagesWrapper from "../../components/advantages/AdvantagesWrapper";
import TitleWrapper from "../../components/TitleWrapper";

const HomePage = () => {
  return (
    <div className="main-layout image arrow">
      <Header/>
      <main>
        <div className="wrapper">
          <div className="container main-section">
            <TitleWrapper/>
            <AdvantagesWrapper/>
          </div>
        </div>
      </main>
      <div className="arrow"/>
    </div>
  );
};

export default HomePage;