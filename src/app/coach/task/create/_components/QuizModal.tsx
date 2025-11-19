"use client";
import React, { useState } from "react";
import PopupModal from "@/components/Modal/PopupModal";
import Icon from "@/components/ui/Icon";
import Radio from "@/components/ui/Radio";
import Select, { SelectOption } from "@/components/ui/Select";

type QuestionType = "multiple_choice" | "short_answer";

interface QuestionOption {
  id: string;
  text: string;
}

interface Question {
  id: string;
  type: QuestionType;
  question: string;
  options: QuestionOption[];
}

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave?: (data: {
    title: string;
    description: string;
    questions: Question[];
  }) => void;
}

export default function QuizModal({ isOpen, onClose, onSave }: QuizModalProps) {
  const [formTitle, setFormTitle] = useState("Untitled Form");
  const [formDescription, setFormDescription] = useState("");
  const [questions, setQuestions] = useState<Question[]>([
    {
      id: "1",
      type: "multiple_choice",
      question: "",
      options: [
        { id: "opt1", text: "Option 1" },
        { id: "opt2", text: "Option 2" },
      ],
    },
  ]);

  const questionTypeOptions: SelectOption[] = [
    {
      value: "multiple_choice",
      label: "Multiple Choice",
      icon: <Icon name="radio-icon" width={20} height={20} />,
    },
    {
      value: "short_answer",
      label: "Short Answer Text",
      icon: <Icon name="menu-icon" width={20} height={20} />,
    },
  ];

  const addQuestion = () => {
    const newQuestion: Question = {
      id: Date.now().toString(),
      type: "multiple_choice",
      question: "",
      options: [
        { id: `opt-${Date.now()}-1`, text: "Option 1" },
        { id: `opt-${Date.now()}-2`, text: "Option 2" },
      ],
    };
    setQuestions([...questions, newQuestion]);
  };

  const deleteQuestion = (questionId: string) => {
    setQuestions(questions.filter((q) => q.id !== questionId));
  };

  const updateQuestion = (
    questionId: string,
    field: keyof Question,
    value: QuestionType | string | QuestionOption[]
  ) => {
    setQuestions(
      questions.map((q) => (q.id === questionId ? { ...q, [field]: value } : q))
    );
  };

  const addOption = (questionId: string) => {
    setQuestions(
      questions.map((q) => {
        if (q.id === questionId) {
          const newOption: QuestionOption = {
            id: `opt-${Date.now()}`,
            text: `Option ${q.options.length + 1}`,
          };
          return { ...q, options: [...q.options, newOption] };
        }
        return q;
      })
    );
  };

  const removeOption = (questionId: string, optionId: string) => {
    setQuestions(
      questions.map((q) => {
        if (q.id === questionId) {
          return {
            ...q,
            options: q.options.filter((opt) => opt.id !== optionId),
          };
        }
        return q;
      })
    );
  };

  const updateOption = (questionId: string, optionId: string, text: string) => {
    setQuestions(
      questions.map((q) => {
        if (q.id === questionId) {
          return {
            ...q,
            options: q.options.map((opt) =>
              opt.id === optionId ? { ...opt, text } : opt
            ),
          };
        }
        return q;
      })
    );
  };

  const moveQuestion = (questionId: string, direction: "up" | "down") => {
    const index = questions.findIndex((q) => q.id === questionId);
    if (index === -1) return;

    if (direction === "up" && index > 0) {
      const newQuestions = [...questions];
      [newQuestions[index - 1], newQuestions[index]] = [
        newQuestions[index],
        newQuestions[index - 1],
      ];
      setQuestions(newQuestions);
    } else if (direction === "down" && index < questions.length - 1) {
      const newQuestions = [...questions];
      [newQuestions[index], newQuestions[index + 1]] = [
        newQuestions[index + 1],
        newQuestions[index],
      ];
      setQuestions(newQuestions);
    }
  };

  const changeQuestionType = (questionId: string, type: QuestionType) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((q) => {
        if (q.id === questionId) {
          if (type === "short_answer") {
            return { ...q, type, options: [] };
          } else {
            return {
              ...q,
              type,
              options: [
                { id: `opt-${Date.now()}-1`, text: "Option 1" },
                { id: `opt-${Date.now()}-2`, text: "Option 2" },
              ],
            };
          }
        }
        return q;
      })
    );
  };

  const handleSave = () => {
    if (onSave) {
      onSave({
        title: formTitle,
        description: formDescription,
        questions,
      });
    }
    onClose();
  };

  return (
    <PopupModal isOpen={isOpen} onClose={onClose}>
      <div className="bg-white rounded-[30px] w-full max-w-[560px] max-h-[95vh] overflow-y-auto p-8">
        {/* Header */}
        <div className="mb-4">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h2 className="text-base font-semibold text-dark mb-3">
                Quiz Title
              </h2>
              <div className="bg-[rgba(213,237,254,0.16)] rounded-2xl px-5 py-4">
                <input
                  value={formDescription}
                  onChange={(e) => setFormDescription(e.target.value)}
                  placeholder="Form description"
                  className="w-full bg-transparent border-none outline-none text-sm text-dark/70"
                  type="text"
                />
              </div>
            </div>
            {/* <button className="text-sm font-semibold text-[#276AEE] ml-4">
                            Upload PDF
                        </button> */}
          </div>
        </div>

        {/* Questions */}
        <div className="flex flex-col gap-3 mb-4">
          {questions.map((question, index) => (
            <div key={question.id} className="flex gap-2">
              <span className="text-[10px] font-medium text-dark mt-2">
                {index + 1}.
              </span>
              <div className="flex-1 bg-[rgba(213,237,254,0.16)] rounded-xl p-3">
                {/* Question Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-[200px]">
                    <Select
                      options={questionTypeOptions}
                      value={question.type}
                      onChange={(value) =>
                        changeQuestionType(question.id, value as QuestionType)
                      }
                      className="bg-white"
                    />
                  </div>
                  <button
                    onClick={() => deleteQuestion(question.id)}
                    className="p-1 hover:bg-gray-100 rounded transition-colors"
                    aria-label="Delete question"
                  >
                    <Icon name="delete-icon" width={20} height={20} />
                  </button>
                </div>

                {/* Question Input */}
                <div className="mb-4">
                  <label className="text-[10px] font-medium text-dark mb-2 block">
                    Set Question
                  </label>
                  <input
                    type="text"
                    value={question.question}
                    onChange={(e) =>
                      updateQuestion(question.id, "question", e.target.value)
                    }
                    placeholder="Type Question here"
                    className="w-full bg-white rounded-2xl px-5 py-4 text-sm text-[rgba(20,27,52,0.6)] border-none outline-none"
                  />
                </div>

                {/* Options for Multiple Choice */}
                {question.type === "multiple_choice" && (
                  <div className="flex flex-col gap-2">
                    {question.options.map((option, optIndex) => (
                      <div
                        key={option.id}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center gap-3 flex-1">
                          <Radio
                            value={option.text}
                            onChange={(e) =>
                              updateOption(
                                question.id,
                                option.id,
                                e.target.value
                              )
                            }
                            className="flex-1 bg-transparent  text-dark/70"
                            placeholder={`Option ${optIndex + 1}`}
                          />
                          <input
                            type="text"
                            value={option.text}
                            onChange={(e) =>
                              updateOption(
                                question.id,
                                option.id,
                                e.target.value
                              )
                            }
                            className="flex-1 bg-transparent border-none outline-none text-xs text-dark/70"
                            placeholder={`Option ${optIndex + 1}`}
                          />
                        </div>
                        {question.options.length > 2 && (
                          <button
                            onClick={() => removeOption(question.id, option.id)}
                            className="p-2 hover:bg-gray-100 rounded-full"
                          >
                            <Icon name="cancel-icon" width={16} height={16} />
                          </button>
                        )}
                      </div>
                    ))}
                    {question?.type === "multiple_choice" && (
                      <button
                        onClick={() => addOption(question.id)}
                        className="w-fit flex items-center gap-3 text-[10px] font-medium text-[#276AEE] py-2"
                      >
                        <Icon name="circle-icon" width={18} height={18} />
                        <span className="text-[#276AEE]">+ Add Option</span>
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Add Another Button */}
        <button
          onClick={addQuestion}
          className="w-full border-2 border-dashed border-[#276AEE] rounded-xl py-3 flex items-center justify-center gap-3 mb-6 hover:bg-[rgba(39,106,238,0.05)] transition"
        >
          <Icon name="plus-icon" width={24} height={24} />
          <span className="text-xs font-medium text-[#276AEE]">
            Add Another
          </span>
        </button>

        {/* Save Button */}
        <button
          onClick={handleSave}
          className="w-full border border-[rgba(21,86,216,0.3)] border-dashed rounded-[50px] py-3 text-sm font-medium text-white bg-[#276AEE] hover:bg-[#1e5dd4] transition"
        >
          Save
        </button>
        {/* cancel button */}
        <button
          onClick={onClose}
          className="w-full my-4 border border-[#276AEE] rounded-[50px] py-3 text-sm font-medium text-[#276AEE]  transition"
        >
          Cancel
        </button>
      </div>
    </PopupModal>
  );
}
