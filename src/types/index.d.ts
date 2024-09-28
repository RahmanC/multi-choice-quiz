type Question = {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

type QuizContextType = {
  questions: Question[];
  currentQuestion: number;
  options: (string | null)[];
  setOptions: React.Dispatch<React.SetStateAction<(string | null)[]>>;
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  timeRemaining: number;
  setCurrentQuestion: (args: number) => void;
  setIsReset: (args: boolean) => void;
  setIsLoading: (args: boolean) => void;
  isLoading: boolean;
  setTimeRemaining: (args: number) => void;
};

type Modal = {
  title?: string;
  isOpen: boolean;
  handleClose: () => void;
  className?: string;
  size?: "small" | "full";
  children?: React.ReactNode;
  label?: string;
  subText?: string;
  item?: string;
  iconType?: string;
  isSuccessModal?: boolean;
  modalTitleColor?: string;
};

type Score = {
  handleClick: () => void;
};
