import { useContext } from "react";
import { ChallengesConstext } from "../contexts/ChallengesContext";

import styles from "../styles/components/ExperienceBar.module.scss";

export function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(ChallengesConstext);

  const percentToNextLevel = Math.round((currentExperience * 100) / experienceToNextLevel);

  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percentToNextLevel || 0}%` }} />
        <span className={styles.currentExperience} style={{ left: `${percentToNextLevel || 0}%` }}>
          {`${currentExperience || 0}xp`}
        </span>
      </div>
      <span>{`${experienceToNextLevel || 64}xp`}</span>
    </header>
  );
}
