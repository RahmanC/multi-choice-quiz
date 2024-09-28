import { useQuiz } from "../hooks/useQuiz";
import { Icon } from "@iconify/react";

export const Question = ({ className }: { className?: string }) => {
  const { questions, currentQuestion, options, setOptions, isLoading } =
    useQuiz();
  const question = questions[currentQuestion];

  if (!question) return null;

  const allOptions = [...question.incorrect_answers, question.correct_answer];

  const handleAnswer = (answer: string) => {
    setOptions((prev) => {
      const newAnswers = [...prev];
      newAnswers[currentQuestion] = answer;
      return newAnswers;
    });
  };

  return isLoading ? (
    <div className="my-10">Loading...</div>
  ) : (
    <div className={`flex flex-col gap-4 my-5 ${className}`}>
      <h2 className="text-text-header text-3xl font-medium ">
        {question.question}
      </h2>
      <div className="flex flex-col gap-4 ">
        {allOptions?.map((option, index) => {
          const checked = options[currentQuestion] === option;
          return (
            <button
              type="button"
              key={index}
              onClick={() => handleAnswer(option)}
              className={`flex items-center gap-[10.5px]  rounded-sm p-2 ${
                checked ? "bg-blue-800 text-white" : "bg-neutral-200 text-black"
              }`}
            >
              <Icon
                icon={checked ? "ph:radio-button-fill" : "ph:radio-button"}
                className={` ${checked ? "text-white" : "text-neutrals/20%"}`}
              />

              <p className="text-base text-neutrals/main">{option}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
};
