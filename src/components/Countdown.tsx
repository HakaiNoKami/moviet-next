import { useContext } from "react";
import { CountdownContext } from "../contexts/CountdownContext";

import styles from "../styles/components/Countdown.module.scss";

export function Countdown() {
  const { minutes, seconds, isActive, hasFinished, resetCountdown, startCountdown } = useContext(CountdownContext);

  const [minuteTens, minuteUnits] = String(minutes).padStart(2, "0").split("");
  const [secondTens, secondUnits] = String(seconds).padStart(2, "0").split("");

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
