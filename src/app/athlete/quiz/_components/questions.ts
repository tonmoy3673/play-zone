export const questions = [
  {
    id: 1,
    title: "How many hours per week do you typically spend on training?",
    description: "Select the option that best describes your weekly training commitment.",
    options: [
      "Less than 5 hours per week",
      "5-10 hours per week",
      "10-15 hours per week",
      "More than 15 hours per week",
    ],
    type: "multiple_choice" as const
  },
  {
    id: 2,
    title: "What type of training do you prefer?",
    description: "Choose the training style that best suits your goals.",
    options: [
      "Strength Training",
      "Cardio Workouts",
      "Mixed Training",
      "Sports Specific",
    ],
    type: "multiple_choice" as const
  },
  {
    id: 3,
    title: "What is your primary fitness goal?",
    description: "Select your main objective for training.",
    options: [
      "Weight Loss",
      "Muscle Building",
      "Endurance",
      "General Fitness",
    ],
    type: "multiple_choice" as const
  }
];

