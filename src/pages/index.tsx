'use client'
import type { NextPage } from "next";
import { useCallback, useEffect } from "react";
import styles from "./index.module.css";

import HeroSection from "@/components/HeroSection"
import SubclassSection from "@/components/SubclassSection"

const App1: NextPage = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onGuidesClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='guides']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <>
      
      <HeroSection />
      <SubclassSection />
    </>

    /*<div className={styles.app}>
      <div className={styles.mainAppBg1920} />
      <div className={styles.guidesContainer}>
        <div className={styles.classes}>
          <button className={styles.warrior}>
            <div className={styles.warrior1}>WARRIOR</div>
            <img
              className={styles.classiconGunner}
              alt=""
              src="/classiconwarrior-1@2x.png"
            />
          </button>
          <button className={styles.warrior}>
            <img
              className={styles.classiconGunner}
              alt=""
              src="/classiconmage-1@2x.png"
            />
            <div className={styles.mage1}>mAGE</div>
          </button>
          <button className={styles.warrior}>
            <img
              className={styles.classiconGunner}
              alt=""
              src="/classicongunner@2x.png"
            />
            <div className={styles.gunner1}>gUNNER</div>
          </button>
          <button className={styles.assassin}>
            <img
              className={styles.classiconAssassin}
              alt=""
              src="/classiconassassin@2x.png"
            />
            <div className={styles.assassin1}>aSSASSIN</div>
          </button>
          <button className={styles.warrior}>
            <img
              className={styles.classiconGunner}
              alt=""
              src="/classiconmartial-artist@2x.png"
            />
            <div className={styles.fighter1}>FIGHTER</div>
          </button>
          <button className={styles.specialist}>
            <div className={styles.specialist1}>sPECIALIST</div>
            <img
              className={styles.specialistArtistIcon}
              alt=""
              src="/specialist-artist@2x.png"
            />
          </button>
        </div>
      </div>
      <div className={styles.mainArt}>
        <div className={styles.icon}>
          <div className={styles.icon1}>
            <div className={styles.icon2}>
              <div className={styles.div}>
                <img
                  className={styles.selectionIcon}
                  alt=""
                  src="/selection.svg"
                />
              </div>
              <div className={styles.lostArkNexus}>LOST ARK NEXUS</div>
            </div>
          </div>
          <img className={styles.strokeIcon} alt="" src="/line-1-stroke.svg" />
        </div>
        <div className={styles.splashArt} data-animate-on-scroll>
          <div className={styles.artwork}>
            <div className={styles.scootersquare} />
            <div className={styles.scootersquare1} />
            <img className={styles.scooterIcon} alt="" src="/scooter@2x.png" />
          </div>
        </div>
      </div>
      <div className={styles.discordButton}>
        <div className={styles.discord}>DISCORD</div>
      </div>
      <div className={styles.somethingButton}>
        <div className={styles.discord}>SOMETHING</div>
      </div>
      <div className={styles.navbarContainer}>
        <div className={styles.login}>
          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
          <div className={styles.logIn}>LOG IN</div>
        </div>
        <div className={styles.search}>
          <div className={styles.search1} />
          <img
            className={styles.magnifyingGlassSolid1Icon}
            alt=""
            src="/vector.svg"
          />
        </div>
        <div className={styles.navbar}>
          <img className={styles.loaIcon} alt="" src="/loa-icon@2x.png" />
          <div className={styles.navbarContent}>
            <button
              className={styles.guides}
              data-scroll-to="guides"
              onClick={onGuidesClick}
            >
              Guides
            </button>
            <button className={styles.aboutUs}>About Us</button>
          </div>
        </div>
      </div>
      <div className={styles.news}>
        <div className={styles.newsline2} />
        <div className={styles.newsline1} />
        <div className={styles.maintenanceForAllContainer}>
          <span className={styles.maintenanceForAllContainer1}>
            <p className={styles.maintenance}>Maintenance</p>
            <p className={styles.maintenance}>for all servers</p>
          </span>
        </div>
        <div className={styles.div1}>05/07/2022</div>
        <div className={styles.div2}>05/07/2022</div>
        <div className={styles.julyUpdateAnnouncementContainer}>
          <span className={styles.maintenanceForAllContainer1}>
            <p className={styles.maintenance}>July Update Announcement</p>
            <p className={styles.maintenance}>Ft. Bozone</p>
          </span>
        </div>
        <img className={styles.vectorIcon1} alt="" src="/vector.svg" />
        <img className={styles.vectorIcon2} alt="" src="/vector.svg" />
      </div>
    </div>*/
  );
};

export default App1;
