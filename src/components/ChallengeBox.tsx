import { useContext, useState } from "react";
import { ChallengesConstext } from "../contexts/ChallengesContext";
import { CountdownContext } from "../contexts/CountdownContext";

import styles from "../styles/components/ChallengeBox.module.scss";

export function ChallengeBox() {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesConstext);
  const { resetCountdown } = useContext(CountdownContext);

  const handleChallengeFailed = () => {
    resetChallenge();
    resetCountdown();
  };

  const handleChallengeSucceeded = () => {
    completeChallenge();
    resetCountdown();
  };

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
            <button type="button" className={styles.challengeFailedButton} onClick={handleChallengeFailed}>
              Falhei
            </button>
            <button type="button" className={styles.challengeSucceededButton} onClick={handleChallengeSucceeded}>
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
