import React, { useState } from "react";
import Icon from '@/utils/icon';
import { questions } from './questions';

interface AllQuestionsProps {
  answers: Record<number, string>;
  onAnswerChange: (questionId: number, answer: string) => void;
  onNext: () => void;
}

const AllQuestions = ({ answers, onAnswerChange, onNext }: AllQuestionsProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const currentQuestion = questions[currentQuestionIndex];
  const progressPercentage = ((currentQuestionIndex + 1) / questions.length) * 100;
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  const handleAnswerChange = (value: string) => {
    onAnswerChange(currentQuestion.id, value);
  };

  const handleNext = () => {
    if (isLastQuestion) {
      onNext(); // Go to review page
    } else {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const isAnswered = answers[currentQuestion.id]?.trim().length > 0;

  return (
    <div>
      <div className="bg-[#FFFFFF4D] border border-white rounded-2xl p-8 mb-4">
        <div className="flex justify-between mb-8 items-center">
          <div>
            <h3 className="text-[#141B34] text-3xl mb-1 font-semibold">
              Finish Answering
            </h3>
            <p className="text-sm text-[#141b34b3]">
              Please make sure to complete all the questions before moving
              forward
            </p>
          </div>

          <div className="flex gap-4 items-center">
            <h6 className="text-sm text-[#141B34] font-normal">
              Submission Time Left
            </h6>
            <p
              className="border-t border-[#F03] px-3 py-2 text-[#FF0033] bg-[#FFFFFF63]"
              style={{ borderRadius: "44px", boxShadow: '0 2px 4px 0 rgba(255, 0, 51, 0.60)' }}
            >
              2:29 Mins
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center mb-4">
          <p className="font-medium text-sm text-[#141B34]">Progress</p>
          <p className="font-medium text-sm text-[#141B34]">{currentQuestionIndex + 1}/{questions.length}</p>
        </div>
        {/* progress bar */}
        <div
          className="w-full bg-[#C4D4FD] h-2.5"
          style={{ borderRadius: "40px" }}
        >
          <div
            className="bg-[linear-gradient(90deg,#7180DF_0%,#2C49FF_100%)] h-full transition-all duration-300"
            style={{
              width: `${progressPercentage}%`,
              borderRadius: "80px",
            }}
          />
        </div>
      </div>

      <div className="bg-[#FFFFFF4D] border border-white rounded-2xl p-8">
        <p className="text-sm text-[#141b3499] font-normal">Question {currentQuestionIndex + 1} of {questions.length}</p>
        <div className="mb-10 mt-4">
          <h3 className="text-base font-semibold text-black">
            {currentQuestion.title}
          </h3>
        </div>

        <div>
          <p className="text-sm text-[#141b3499] font-normal">
            {currentQuestion.description}
          </p>

          {/* options */}
          <div className="mt-6 space-y-4">
            {currentQuestion.options.map((option, index) => (
              <label
                key={index}
                className="flex p-5 bg-[#FFFFFF99] rounded-2xl border border-white items-center space-x-3 cursor-pointer group"
              >
                <input
                  type="radio"
                  name={`question-${currentQuestion.id}`}
                  value={option}
                  checked={answers[currentQuestion.id] === option}
                  onChange={(e) => handleAnswerChange(e.target.value)}
                  className="peer sr-only"
                />
                <div className="size-[18px] rounded-full border-2 border-[#A1A4AE] peer-checked:border-[#5C8FF7] relative after:absolute after:size-2 after:bg-primary-gradient after:rounded-full after:hidden after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 peer-checked:after:block after:transition-all transition-all"></div>
                <span
                  className={`text-sm font-normal ${
                    answers[currentQuestion.id] === option
                      ? "text-[#141B34]"
                      : "text-[#141b3499]"
                  }`}
                >
                  {option}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-4 justify-between mt-12">
          {currentQuestionIndex > 0 && (
            <button 
              onClick={handlePrevious}
              type="button" 
              className="px-8 py-3 rounded-full bg-[#FFFFFF4D] border border-white text-black font-semibold hover:bg-blue-100 transition flex gap-2 items-center"
            >
              <Icon name="back" />
              Previous Question
            </button>
          )}
          
          <div className="flex gap-4 items-center ml-auto">
				<div className="flex items-center gap-3">
					<p className="text-sm font-medium text-[#141B34]">I'm not sure about the answer yet</p>
					<span className="text-[#5C8FF7] font-medium underline text-sm cursor-pointer">Skip For Now</span>
				</div>
            <button 
              onClick={handleNext}
              disabled={!isAnswered}
              type="button" 
              className="px-8 py-3 rounded-full bg-primary-gradient text-white font-semibold transition disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              {isLastQuestion ? 'Review Questions' : 'Next Question'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllQuestions;
