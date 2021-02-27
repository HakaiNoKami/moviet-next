import { useContext } from "react";
import { ChallengesConstext } from "../contexts/ChallengesContext";

import styles from "../styles/components/LevelUpModal.module.scss";

export function LevelUpModal() {
  const { level, closeLevelUpModal } = useContext(ChallengesConstext);

  return (
    <div className={styles.overlay}>
      <div className={styles.levelUpModalContainer}>
        <header>{level}</header>
        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>

        <button type="button" onClick={closeLevelUpModal}>
          <img src="icons/close.svg" alt="Close" />
        </button>

        <footer>
          <button>
            Compartilhar no Twitter
            <img src="icons/twitter.svg" alt="Twitter" />
          </button>
        </footer>
      </div>
    </div>
  );
}
