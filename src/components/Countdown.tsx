import { useEffect, useState } from "react";
import Timeleft from "./Timeleft";

type CountdownProps = {
  targetDate: string; // e.g., "2025-11-17T00:00:00"
};

export default function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();
      const difference = target - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      <Timeleft
        value={timeLeft.days}
        label="days"
      />
      <Timeleft
        value={timeLeft.hours}
        label="hours"
      />
      <Timeleft
        value={timeLeft.minutes}
        label="minutes"
      />
      <Timeleft
        value={timeLeft.seconds}
        label="seconds"
      />
    </div>
  );
}
