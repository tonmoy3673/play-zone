import React from "react";
import Icon from "@/utils/icon";
import Container from "@/components/ui/Container";
import { questions } from "./questions";

interface ResultsProps {
  answers: Record<number, string>;
}

// Mock correct answers - in a real app, this would come from the backend
const correctAnswers: Record<number, string> = {
  1: "5-10 hours per week",
  2: "Mixed Training",
  3: "General Fitness",
};

const Results = ({ answers }: ResultsProps) => {
  // Calculate statistics
  const totalQuestions = questions.length;
  let correctCount = 0;
  let wrongCount = 0;

  questions.forEach((question) => {
    const userAnswer = answers[question.id] || "";
    const correctAnswer = correctAnswers[question.id];
    if (userAnswer === correctAnswer) {
      correctCount++;
    } else if (userAnswer) {
      wrongCount++;
    }
  });

  // Mock completion time (in a real app, this would be calculated)
  const completionTime = "15 Mins";

  return (
    <div className="w-full">
      {/* Your Quiz Result Section */}
      <div className="mb-10">
        <h1 className="text-4xl font-semibold text-[#141B34] mb-2">
          Your Quiz Result
        </h1>
        <p className="text-base text-[#141b3499]">
          Review your score and see how you performed on each question
        </p>
      </div>

      {/* Quiz Details and Performance Breakdown */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Quiz Details Card */}
        <Container className="p-6 mb-10 border border-white">
          <h3 className="text-base font-semibold text-[#141B34] mb-4">
            Quiz Details
          </h3>
          <div className="grid grid-cols-2 gap-4 ">
            {/* Total Questions */}
            <div className="bg-[#FFFFFF99] rounded-2xl p-4 border border-white">
              <div className="flex justify-between items-center">
                <Icon name="question" className="text-[#141B34]" width={24} height={24} />
                <div>
                  <p className="text-3xl font-semibold text-[#141B34] mb-1">
                    {String(totalQuestions).padStart(2, "0")}
                  </p>
                  <p className="text-xs text-[#141b3499]">Total Questions</p>
                </div>
              </div>
            </div>

				 <div className="bg-[#FFFFFF99] rounded-2xl p-4 border border-white">
              <div className="flex justify-between items-center">
                <Icon name="timer" className="text-[#141B34]" width={24} height={24} />
                <div>
                  <p className="text-3xl font-semibold text-[#141B34] mb-1">
                    {completionTime}
                  </p>
                  <p className="text-xs text-[#141b3499]">Completion Time</p>
                </div>
              </div>
            </div>
          </div>
        </Container>

        {/* Performance Breakdown Card */}
        <Container className="p-6 mb-10 border border-white">
          <h3 className="text-base font-semibold text-[#141B34] mb-4">
            Quiz Details
          </h3>
          <div className="grid grid-cols-2 gap-4 ">
            {/* Total Questions */}
            <div className="bg-[#FFFFFF99] rounded-2xl p-4 border border-white">
              <div className="flex justify-between items-center">
                <Icon name="timer" className="text-[#141B34]" width={24} height={24} />
                <div>
                  <p className="text-3xl font-semibold text-[#141B34] mb-1">
                    {String(totalQuestions).padStart(2, "0")}
                  </p>
                  <p className="text-xs text-[#141b3499]">Total Questions</p>
                </div>
              </div>
            </div>

				 <div className="bg-[#FFFFFF99] rounded-2xl p-4 border border-white">
              <div className="flex justify-between items-center">
                <Icon name="timer" className="text-[#141B34]" width={24} height={24} />
                <div>
                  <p className="text-3xl font-semibold text-[#141B34] mb-1">
                    {completionTime}
                  </p>
                  <p className="text-xs text-[#141b3499]">Completion Time</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Your Responses Section */}
      <div className="mb-8">
        <h2 className="text-4xl font-semibold text-[#141B34] mb-6">
          Your Responses
        </h2>
      </div>

      <div className="space-y-4">
        {questions.map((question, index) => {
          const answer = answers[question.id] || "";
          const correctAnswer = correctAnswers[question.id];
          const isCorrect = answer === correctAnswer;
          const isTextAnswer = !question.options.includes(answer);
          const hasAnswer = answer.trim().length > 0;

          return (
            <div
              key={question.id}
              className="bg-[#FFFFFF4D] rounded-2xl p-6 border border-white relative"
            >
              {/* Status Badge */}
              {hasAnswer && (
                <div
                  className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${
                    isCorrect ? "text-[#00E280]" : "text-[#FF0033]"
                  }`}
                  style={{
                    background: isCorrect
                      ? "linear-gradient(180deg, rgba(0, 226, 128, 0.05) 0%, rgba(0, 124, 70, 0.12) 100%)"
                      : "linear-gradient(180deg, rgba(255, 0, 51, 0.05) 0%, rgba(255, 0, 51, 0.12) 100%)",
                  }}
                >
                  {isCorrect ? "Correct Answer" : "Wrong Answer"}
                </div>
              )}

              <p className="text-sm text-[#141b3499] font-normal mb-2">
                Question {index + 1} of {questions.length}
              </p>
              <h3 className="text-base font-semibold text-[#141B34] mb-4 pr-24">
                {question.title}
              </h3>

              {isTextAnswer ? (
                <div className="bg-white rounded-xl p-4 border border-white">
                  <textarea
                    readOnly
                    value={answer}
                    placeholder="Type your detailed answer here..."
                    className="w-full min-h-[100px] resize-none border-none outline-none text-sm text-[#141B34] bg-transparent"
                  />
                </div>
              ) : (
                <div className="bg-white rounded-xl p-4 border border-white">
                  <input
                    type="text"
                    value={answer || ""}
                    placeholder="No answer provided"
                    className="w-full border-none outline-none text-sm text-[#141B34] bg-transparent"
                    readOnly
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Results;
