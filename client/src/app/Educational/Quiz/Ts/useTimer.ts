import { useState, useEffect } from 'react';

interface TimerConfig {
  initialMinutes: number;
  onTimeEnd?: () => void;
}

export const useTimer = ({ initialMinutes, onTimeEnd }: TimerConfig) => {
  const [timeLeft, setTimeLeft] = useState(initialMinutes * 60);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    if (!isRunning || timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(interval);
          setIsRunning(false);
          onTimeEnd?.();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, timeLeft, onTimeEnd]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const formattedTime = `${String(minutes).padStart(2, '0')} : ${String(
    seconds
  ).padStart(2, '0')}`;

  return {
    timeLeft,
    formattedTime,
    isRunning,
    setIsRunning,
  };
};