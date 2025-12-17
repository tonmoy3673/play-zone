import React from "react";
import Card from "@/components/ui/Card";
import Button, { AnimatedButton } from "@/components/ui/Button";
import Icon from "@/utils/icon";

interface TaskItem {
  id: string;
  title: string;
  subtitle: string;
  dueDate: string;
  progress: number;
}

const BehindTask = () => {
  const tasks: TaskItem[] = [
    {
      id: "1",
      title: "Upper Body Strength Assessment",
      subtitle: "You're behind on this one - clear it first.",
      dueDate: "Due: Today, 6:00 PM",
      progress: 25,
    },
    {
      id: "2",
      title: "Weekly Progress Video",
      subtitle: "Upload your form check video from this week.",
      dueDate: "Due: Today, 6:00 PM",
      progress: 25,
    },
  ];

  return (
    <div className="relative mb-8">
      {/* Background */}
      <div className="absolute inset-0 ">
        <img
          src="/behind_task.png"
          alt="Background"
          className="w-full h-[370px] object-cover rounded-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 p-5">
        {/* Header */}
        <div className="mb-6">
          <div className="text-white flex justify-between items-center">
            <h1 className="text-lg font-medium mb-2">
              Tasks overdue - let's clear these first.
            </h1>
				<Icon name="chevron_up" height={16} width={16} color="#fff" />
          </div>
        </div>

        {/* Task Cards */}
        <div className="space-y-4">
          {tasks.map((task) => (
            <Card
              key={task.id}
              className="bg-[#FFFFFFC2] backdrop-blur-sm border-white"
            >
              <div className="flex items-center space-x-4">
                {/* Task Icon */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl">
                    <Icon
                      name="session"
                      color="#276AEE"
                      height={20}
                      width={20}
                    />
                  </div>
                </div>

                {/* Task Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {task.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">{task.subtitle}</p>

                  {/* Progress and Due Date */}
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <Icon name="calendar" className="w-4 h-4" />
                      <span>{task.dueDate}</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex-shrink-0 flex space-x-2">
                  <AnimatedButton className="flex items-center font-normal px-4 -translate-y-2 py-3 rounded-full text-[#276AEE] bg-white">
                    Start Now
                  </AnimatedButton>
                  <AnimatedButton className="flex items-center font-normal px-4 -translate-y-2 py-3 rounded-full text-white bg-primary-gradient">
                    Message Coach
                  </AnimatedButton>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BehindTask;
