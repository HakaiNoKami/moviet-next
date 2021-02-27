import { useContext } from "react";
import { ChallengesConstext } from "../contexts/ChallengesContext";

import styles from "../styles/components/Profile.module.scss";

export function Profile() {
  const { level } = useContext(ChallengesConstext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/hakainokami.png" alt="Marcus Vinícius" />
      <div>
        <strong>Marcus Vinícius</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          {`Level ${level}`}
        </p>
      </div>
    </div>
  );
}
