import { useQuiz } from "../hooks/useQuiz";

export const Score = ({ handleClick }: Score) => {
  const { score, questions } = useQuiz();

  const percentage = (score / questions.length) * 100;

  return (
    <div>
      <p className="font-normal text-neutral-700">
        You score:{" "}
        <span
          className={`text-lg font-medium ${
            percentage < 50 ? "text-red-500" : "text-green-500"
          }`}
        >
          {percentage}%
        </span>
      </p>

      <button
        type="button"
        className="bg-blue-500 text-white rounded-md p-2 mt-4"
        onClick={handleClick}
      >
        Restart Quiz
      </button>
    </div>
  );
};
