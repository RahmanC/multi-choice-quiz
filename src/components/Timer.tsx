import { useQuiz } from "../hooks/useQuiz";

export const Timer: React.FC = () => {
  const { timeRemaining } = useQuiz();

  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;

  return (
    <div>
      <span className="text-xl font-medium">Time remaining:</span> {minutes}:
      {seconds < 10 ? `0${seconds}` : seconds}
    </div>
  );
};
