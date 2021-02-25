import { useContext } from "react";
import { ChallengesConstext } from "../contexts/ChallengesContext";

import styles from "../styles/components/CompletedChallenges.module.scss";

export function CompletedChallenges() {
  const { complitedChallenges } = useContext(ChallengesConstext);

  return (
    <div className={styles.completedChallengesContainer}>
      <span>Desafios concluidos</span>
      <span>{complitedChallenges}</span>
    </div>
  );
}
