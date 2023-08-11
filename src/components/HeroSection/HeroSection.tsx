'use client'
import classData from "../../data/classData.json";
import HeroSectionRoot from './HeroSectionRoot';
import HeroSectionContent from './HeroSectionContent';
import HeroSectionImages from './HeroSectionImages';


interface HeroSectionProps {
  setShowAboutUs: (aboutUs:boolean) => void;
  showAboutUs: boolean;
  setShowHeroSection: (aboutUs:boolean) => void;
  showHeroSection: boolean;
}
const HeroSection: React.FC<HeroSectionProps> = ({ setShowAboutUs, showAboutUs, setShowHeroSection, showHeroSection }) => {
  const classArray = Object.values(classData);
  const randomClass = classArray[Math.floor(Math.random() * classArray.length)];

return (
    <HeroSectionRoot>
      <HeroSectionContent randomClass={randomClass} showAboutUs={showAboutUs} showHeroSection={showHeroSection} setShowAboutUs={setShowAboutUs} setShowHeroSection={setShowHeroSection}>
        <HeroSectionImages bg={randomClass.bg} name={randomClass.name} color={randomClass.color} icon={randomClass.icon}/>
      </HeroSectionContent>
    </HeroSectionRoot>
  )
};

export default HeroSection;