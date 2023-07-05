import React from "react";
import "../../styles/globals.css";

export const Box = () => {
  return (
    <div className="box">
      <div className="main-app-wrapper">
        <div className="main-app">
          <div className="overlap">
            <img className="main-app-BG" alt="Main app BG" src="/main-app-bg-1920.png" />
            <div className="guides">
              <div className="class-icons">
                <div className="specialist">
                  <div className="overlap-group">
                    <div className="text-wrapper">Specialist</div>
                    <img className="specialist-artist" alt="Specialist artist" src="/specialist-artist.png" />
                  </div>
                </div>
                <div className="fighter">
                  <img className="img" alt="Classicon martial" src="/classicon-martial-artist.png" />
                  <div className="div">Fighter</div>
                </div>
                <div className="assassin">
                  <img className="classicon-assassin" alt="Classicon assassin" src="/classicon-assassin.png" />
                  <div className="text-wrapper-2">Assassin</div>
                </div>
                <div className="gunner">
                  <img className="img" alt="Classicon gunner" src="/classicon-gunner.png" />
                  <div className="text-wrapper-3">Gunner</div>
                </div>
                <div className="mage">
                  <img className="img" alt="Classicon mage" src="/classicon-mage-1.png" />
                  <div className="text-wrapper-4">Mage</div>
                </div>
                <div className="warrior">
                  <div className="text-wrapper-5">Warrior</div>
                  <img className="img" alt="Classicon warrior" src="/classicon-warrior-1.png" />
                </div>
              </div>
            </div>
            <div className="artwork-wrapper">
              <div className="artwork">
                <div className="overlap-group-2">
                  <div className="scooter-square" />
                  <div className="scooter-square-2" />
                  <img className="scooter" alt="Scooter" src="/scooter.png" />
                </div>
              </div>
            </div>
            <div className="overlap-wrapper">
              <div className="overlap-2">
                <div className="icon">
                  <div className="overlap-group-3">
                    <img className="img-2" alt="Img" src="/image.svg" />
                    <h1 className="h-1">LOST ARK NEXUS</h1>
                  </div>
                </div>
                <div className="something-button">
                  <div className="div-wrapper">
                    <div className="text-wrapper-6">SOMETHING</div>
                  </div>
                </div>
                <div className="discord">
                  <div className="discord-wrapper">
                    <div className="discord-2">DISCORD</div>
                  </div>
                </div>
                <img className="line" alt="Line" src="/line-1.svg" />
              </div>
            </div>
            <div className="div-2">
              <div className="overlap-3">
                <div className="login">
                  <div className="overlap-group-4">
                    <div className="LOG-IN">Log In</div>
                    <img className="right-to-bracket" alt="Right to bracket" src="/right-to-bracket-solid-1.svg" />
                  </div>
                </div>
                <img className="LOA-icon" alt="Loa icon" src="/loa-icon.png" />
                <div className="navbar-content">
                  <div className="overlap-4">
                    <div className="guides-2">GUIDES</div>
                    <div className="about-us">ABOUT US</div>
                    <div className="resources">RESOURCES</div>
                  </div>
                </div>
              </div>
              <div className="search">
                <img className="magnifying-glass" alt="Magnifying glass" src="/magnifying-glass-solid-1.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
