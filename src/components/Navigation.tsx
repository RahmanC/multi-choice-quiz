import { useEffect, useState } from "react";
import { useQuiz } from "../hooks/useQuiz";
import { Score } from "./Score";
import { Modal } from "./Modal";
import { Icon } from "@iconify/react";

export const Navigation: React.FC = () => {
  const {
    options,
    currentQuestion,
    questions,
    setScore,
    setCurrentQuestion,
    timeRemaining,
    setIsReset,
    setTimeRemaining,
  } = useQuiz();
  const [showScore, setShowScore] = useState(false);

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateScore();
      setShowScore(true);
    }
  };

  const calculateScore = () => {
    let newScore = 0;
    for (let i = 0; i < questions.length; i++) {
      if (options[i] === questions[i].correct_answer) {
        newScore++;
      }
    }
    setScore(newScore);
  };

  useEffect(() => {
    if (timeRemaining === 0 && !showScore) {
      calculateScore();
      setShowScore(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeRemaining, showScore]);

  const isLast = currentQuestion === questions.length - 1;
  const isFirst = currentQuestion === 0;

  return (
    <div className="flex w-full items-center justify-between px-7">
      <button
        type="button"
        onClick={handlePrevious}
        disabled={isFirst}
        className="flex gap-3 items-center"
      >
        <Icon icon="ph:caret-circle-left" className="w-6 h-6" />
        <span>Previous</span>
      </button>
      <button
        type="button"
        onClick={handleNext}
        className="flex gap-3 items-center"
      >
        <span>{isLast ? "Finish" : "Next"}</span>
        <Icon
          icon={isLast ? "ph:check-circle" : "ph:caret-circle-right"}
          className="w-6 h-6"
        />
      </button>

      <Modal
        handleClose={() => setShowScore(false)}
        isOpen={showScore}
        isSuccessModal
        title="Quiz Completed"
      >
        <Score
          handleClick={() => {
            setIsReset(true);
            setShowScore(false);
            setTimeRemaining(1 * 60);
          }}
        />
      </Modal>
    </div>
  );
};
