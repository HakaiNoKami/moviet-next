import { useContext, useState } from "react";
import { ChallengesConstext } from "../contexts/ChallengesContext";

import styles from "../styles/components/ChallengeBox.module.scss";

export function ChallengeBox() {
  const { activeChallenge, resetChallenge } = useContext(ChallengesConstext);

  return (
    <div className={styles.challengeBoxContainer}>
      {activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>{`Ganhe ${activeChallenge.amount}xp`}</header>
          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt="Challegen" />
            <strong>{activeChallenge.type === "body" ? "Exercite-se" : "Mova os olhos"}</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button type="button" className={styles.challengeFailedButton} onClick={resetChallenge}>
              Falhei
            </button>
            <button type="button" className={styles.challengeSucceededButton}>
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>Inicie um ciclo para receber desafios</strong>
          <img src="icons/level-up.svg" alt="Level Up" />
          <p>Avance de level completando os desafios.</p>
        </div>
      )}
    </div>
  );
}
