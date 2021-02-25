import styles from "../styles/components/Profile.module.scss";

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/hakainokami.png" alt="Marcus Vinícius" />
      <div>
        <strong>Marcus Vinícius</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1
        </p>
      </div>
    </div>
  );
}
