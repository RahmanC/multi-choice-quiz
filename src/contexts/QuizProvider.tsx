import { FC, useEffect, useState } from "react";
import axios from "axios";
import { QuizContext } from "./QuizContext";

export const QuizProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [options, setOptions] = useState<(string | null)[]>([]);
  const [score, setScore] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(1 * 60);
  const [isReset, setIsReset] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isReset) {
      setQuestions([]);
      setOptions([]);
      setCurrentQuestion(0);
      setScore(0);
      setTimeRemaining(1 * 60);
      setIsReset(false);
    }
  }, [isReset]);

  useEffect(() => {
    setIsLoading(true);
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(
          `${process.env.VITE_REACT_APP_API_URL}?amount=5&category=21`
        );
        setQuestions(response.data.results);
        setOptions(new Array(response.data.results.length).fill(null));
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching questions:", error);
        setIsLoading(false);
      }
    };

    fetchQuestions();
  }, [isReset]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const value = {
    questions,
    currentQuestion,
    options,
    setOptions,
    setCurrentQuestion,
    score,
    setScore,
    timeRemaining,
    setIsReset,
    setTimeRemaining,
    isLoading,
    setIsLoading,
  };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
