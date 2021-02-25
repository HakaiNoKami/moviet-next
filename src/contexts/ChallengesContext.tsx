import { createContext, useState, ReactNode, useContext, useEffect } from "react";

import challenges from "../../challenges.json";

interface Challenge {
  type: "body" | "eye";
  description: string;
  amount: number;
}

interface ChallengesConstextData {
  level: number;
  currentExperience: number;
  complitedChallenges: number;
  activeChallenge: Challenge;
  experienceToNextLevel: number;
  levelUp: () => void;
  startNewChallenge: () => void;
  resetChallenge: () => void;
  completeChallenge: () => void;
}

interface ChallengesProviderProps {
  children: ReactNode;
}

export const ChallengesConstext = createContext({} as ChallengesConstextData);

export function ChallengesProvider({ children }: ChallengesProviderProps) {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [complitedChallenges, setComplitedChallenges] = useState(0);

  const [activeChallenge, setActiveChallenge] = useState(null);

  useEffect(() => {
    Notification.requestPermission();
  }, []);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  const levelUp = () => setLevel(level + 1);

  const startNewChallenge = () => {
    let randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    let challenge = challenges[randomChallengeIndex];

    setActiveChallenge(challenge);

    new Audio("/notification.mp3").play();

    if (Notification.permission === "granted")
      new Notification("🎊 Novo desafio 🎊", {
        body: `Vamos lá, ${challenge.type === "body" ? "exercite-se" : "mova os olhos"} valendo ${challenge.amount}xp `,
        silent: true,
      });
  };

  const resetChallenge = () => setActiveChallenge(null);

  const completeChallenge = () => {
    if (!activeChallenge) return;

    const { amount } = activeChallenge;

    let finalExperience = currentExperience + amount;

    if (finalExperience >= experienceToNextLevel) {
      finalExperience -= experienceToNextLevel;
      levelUp();
    }

    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    setComplitedChallenges(complitedChallenges + 1);
  };

  return (
    <ChallengesConstext.Provider
      value={{
        level,
        currentExperience,
        complitedChallenges,
        activeChallenge,
        experienceToNextLevel,
        levelUp,
        startNewChallenge,
        resetChallenge,
        completeChallenge,
      }}
    >
      {children}
    </ChallengesConstext.Provider>
  );
}
