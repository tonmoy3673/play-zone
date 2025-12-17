import React from 'react';
import Icon from '@/utils/icon';
import { questions } from './questions';

interface ReviewAnswersProps {
  answers: Record<number, string>;
  onBack: () => void;
  onSubmit: () => void;
}

const ReviewAnswers = ({ answers, onBack, onSubmit }: ReviewAnswersProps) => {
  return (
    <div className="w-full">
      <div className="mb-8">
        <h1 className="text-4xl font-semibold text-[#141B34] mb-2">
          Review answers
        </h1>
        <p className="text-base text-[#5C8FF7]">
          Take a moment to review your submission before proceeding
        </p>
      </div>

      <div className="space-y-4 mb-8">
        {questions.map((question, index) => {
          const answer = answers[question.id] || '';
          const isTextAnswer = !question.options.includes(answer);
          
          return (
            <div
              key={question.id}
              className="bg-[#FFFFFF4D] rounded-2xl p-6 border border-white"
            >
              <p className="text-sm text-[#141b3499] font-normal mb-2">
                Question {index + 1} of {questions.length}
              </p>
              <h3 className="text-base font-semibold text-[#141B34] mb-4">
                {question.title}
              </h3>
              
              {isTextAnswer ? (
                <div className="bg-white rounded-xl p-4 border border-white">
                  <textarea
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

      <div className="flex gap-4 justify-between">
        <button
          onClick={onBack}
          type="button"
          className="px-8 py-3 rounded-full bg-[#F5F5F5] border border-white text-[#141B34] font-semibold hover:bg-gray-100 transition flex gap-2 items-center"
        >
          <Icon name="back" width={18} height={12} />
          Back
        </button>
        
        <button
          onClick={onSubmit}
          type="button"
          className="px-8 py-3 rounded-full bg-primary-gradient text-white font-semibold hover:opacity-90 transition"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ReviewAnswers;
