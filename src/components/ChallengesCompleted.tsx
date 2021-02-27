import { useContext } from "react";
import { ChallengesConstext } from "../contexts/ChallengesContext";

import styles from "../styles/components/ChallengesCompleted.module.scss";

export function ChallengesCompleted() {
  const { challengesCompleted } = useContext(ChallengesConstext);

  return (
    <div className={styles.challengesCompletedContainer}>
      <span>Desafios concluidos</span>
      <span>{challengesCompleted || 0}</span>
    </div>
  );
}
