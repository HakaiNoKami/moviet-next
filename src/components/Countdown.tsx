import { useState, useEffect, useContext } from "react";
import { ChallengesConstext } from "../contexts/ChallengesContext";

import styles from "../styles/components/Countdown.module.scss";

let countdownTimeout: NodeJS.Timeout;

export function Countdown() {
  const { startNewChallenge } = useContext(ChallengesConstext);

  const [time, setTime] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteTens, minuteUnits] = String(minutes).padStart(2, "0").split("");
  const [secondTens, secondUnits] = String(seconds).padStart(2, "0").split("");

  const startCountdown = () => setIsActive(true);

  const resetCountdown = () => {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(25 * 60);
  };

  useEffect(() => {
    if (isActive && time > 0) countdownTimeout = setTimeout(() => setTime(time - 1), 1000);
    else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time]);

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteTens}</span>
          <span>{minuteUnits}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondTens}</span>
          <span>{secondUnits}</span>
        </div>
      </div>

      {hasFinished ? (
        <button disabled className={styles.countdownButton}>
          Ciclo encerrado
          <img src="icons/check-circle.svg" alt="Check Circle" />
        </button>
      ) : isActive ? (
        <button
          type="button"
          className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
          onClick={resetCountdown}
        >
          Abandonar ciclo
          <img src="icons/close.svg" alt="Close" />
        </button>
      ) : (
        <button type="button" className={styles.countdownButton} onClick={startCountdown}>
          Iniciar um ciclo
          <img src="icons/play-arrow.svg" alt="Play" />
        </button>
      )}
    </div>
  );
}
