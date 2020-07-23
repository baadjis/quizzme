import { shuffleArray } from './utils';

export type Question = {
  category: string;
  correct_answer: string;
  level: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export type QuestionsState = Question & { answers: string[] };

export const getQuestions = async (amount: number, level: string): Promise<QuestionsState[]> => {
  const url = `https://opentdb.com/api.php?amount=${amount}&difficulty=${level}&type=multiple`;
  const data = await (await fetch(url)).json();
  return data.results.map((question: Question) => ({
    ...question,
    answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
  }))
};