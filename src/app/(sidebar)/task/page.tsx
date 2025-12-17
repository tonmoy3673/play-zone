'use client';

import { AnimatedButton } from "@/components/ui/Button";
import Select from "@/components/ui/Select";
import Icon from "@/utils/icon";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import TaskCard from "./_components/TaskCard";
import WaitingTask from "./_components/WaitingTask";
import UpComingSession from "./_components/UpComingSession";
import BehindTask from "./_components/BehindTask";

const Page = () => {
  const handlePowerClean = () => console.log('Resume Power Clean');
  const handleNutritionQuiz = () => console.log('Start Nutrition Quiz');
  const handleJournal = () => console.log('Start Journal');
  const handleAnalysis = () => console.log('View Analysis');
  const handleMobility = () => console.log('Start Mobility');

  return (
    <div>
      <div className="flex gap-4 mb-6">
        <Image
          src="/task_image.svg"
          alt="Task"
          width={64}
          height={64}
          className="object-contain"
        />
        <div>
          <h3 className="text-2xl font-semibold text-[#141B34] mb-1">
            My Tasks & Training
          </h3>
          <p className="text-[#141B34] text-xs font-medium">
            Here’s everything on your plate - from every program you’re in.
          </p>
        </div>
      </div>

      <div className="bg-[#FFFFFF4D] border border-white rounded-2xl p-2.5 flex gap-3 flex-wrap mb-6">
        <Select
          placeholder="All Programs"
          options={[{ label: "Program 1", value: "program_1" }]}
          className="h-12 bg-[#1556d81a] placeholder:text-[#276AEE] border-[#1556D81A] rounded-xl"
        />
        <Select
          placeholder="All Coaches"
          options={[{ label: "Program 1", value: "program_1" }]}
          className="h-12 bg-[#1556d81a] placeholder:text-[#276AEE] border-[#1556D81A] rounded-xl"
        />
        <Select
          placeholder="Task Type"
          options={[{ label: "Program 1", value: "program_1" }]}
          className="h-12 bg-[#1556d81a] placeholder:text-[#276AEE] border-[#1556D81A] rounded-xl"
        />
        <Select
          placeholder="All Status"
          options={[{ label: "Program 1", value: "program_1" }]}
          className="h-12 bg-[#1556d81a] placeholder:text-[#276AEE] border-[#1556D81A] rounded-xl"
        />
        <Select
          placeholder="Any Duration"
          options={[{ label: "Program 1", value: "program_1" }]}
          className="h-12 bg-[#1556d81a] placeholder:text-[#276AEE] border-[#1556D81A] rounded-xl"
        />
      </div>

      {/* week at a glance */}
      <div className="bg-[#FFFFFF4D] border border-white rounded-2xl p-5 mb-10">
        <div className="flex justify-between items-center mb-7">
          <h3 className="text-xl font-medium text-[#141B34]">
            Your Week at a Glance
          </h3>
          <Link href={"/athlete/calendar"}>
            <AnimatedButton className="flex items-center font-normal px-3 -translate-y-2 py-2 rounded-xl text-white bg-primary-gradient">
              <Icon
                name="calendar"
                height={14}
                width={14}
                className="text-white"
              />
              View Calendar
            </AnimatedButton>
          </Link>
        </div>

        {/* Weekly Task Cards */}
        <div className="grid lg:grid-cols-7 grid-cols-1 gap-3">
          <TaskCard
            dayName="Mon"
            date="1/12"
            tasks={[
              { type: "uploads", count: 2 },
              { type: "workout", count: 1 },
              { type: "live", count: 1 },
            ]}
          />
          <TaskCard
            dayName="Tue"
            date="1/13"
            isToday={true}
            tasks={[
              { type: "quiz", count: 2 },
              { type: "journal", count: 2 },
            ]}
          />
          <TaskCard
            dayName="Wed"
            date="1/14"
            isTomorrow={true}
            tasks={[
              { type: "workout", count: 1 },
              { type: "live", count: 1 },
            ]}
          />
          <TaskCard
            dayName="Thu"
            date="1/15"
            tasks={[{ type: "uploads", count: 2 }]}
          />
          <TaskCard
            dayName="Fri"
            date="1/16"
            tasks={[
              { type: "uploads", count: 2 },
              { type: "workout", count: 1 },
              { type: "live", count: 1 },
            ]}
          />
          <TaskCard
            dayName="Sat"
            date="1/17"
            tasks={[
              { type: "uploads", count: 2 },
              { type: "live", count: 1 },
            ]}
          />
          <TaskCard
            dayName="Sun"
            date="1/18"
            tasks={[
              { type: "uploads", count: 2 },
              { type: "workout", count: 1 },
              { type: "live", count: 1 },
            ]}
          />
        </div>

        
      </div>

		<BehindTask />

		{/* waiting card */}
        <div className="grid grid-cols-3 gap-5 mt-5">
          <div className="col-span-2">
            <div className="bg-[#FFFFFF99] backdrop-blur-sm border border-white rounded-2xl p-5">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-medium text-[#141B34]">
                  Everything that's waiting for you today.
                </h3>
					 <Icon name="chevron_up" height={16} width={16} className="text-[#276AEE]" />
              </div>
              
              {/* Waiting Tasks List */}
              <div className="space-y-4">
                <WaitingTask
                  icon="dumbbell"
                  title="Power Clean Technique Session"
                  description="You're behind on this one - clear it first."
                  programName="Trench Warfare"
                  duration="Est 45 min"
                  dueDate="Due: Today 6:00 PM"
                  progress="25% Progress"
                  status="in-progress"
                  category="Strength Training"
                  categoryColor="#ff00331a"
						categoryTextColor="#FF0000"
                  onAction={handlePowerClean}
                />
                
                <WaitingTask
                  icon="book"
                  title="Nutrition Knowledge Quiz"
                  description="You're behind on this one - clear it first."
                  programName="Trench Warfare"
                  duration="Est 45 min"
                  dueDate="Due: Today 6:00 PM"
                  status="not-started"
                  category="Education"
                  categoryColor="#784ef81a"
                  categoryTextColor="#8B5CF6"
                  onAction={handleNutritionQuiz}
                />
                
                <WaitingTask
                  icon="edit"
                  title="Weekly Reflection Journal"
                  description="You're behind on this one - clear it first."
                  programName="Trench Warfare"
                  duration="Est 45 min"
                  dueDate="Due: Today 6:00 PM"
                  status="not-started"
                  category="Skills"
                  categoryColor="#457ff31a"
						categoryTextColor="#276AEE "
                  onAction={handleJournal}
                />
                
                <WaitingTask
                  icon="activity"
                  title="Sprint Mechanics Analysis"
                  description="You're behind on this one - clear it first."
                  programName="Trench Warfare"
                  duration="Est 45 min"
                  dueDate="Due: Today 6:00 PM"
                  status="completed"
                  category="Wellness"
                  categoryColor="#784ef81a"
                  categoryTextColor="#8B5CF6"
                  onAction={handleAnalysis}
                />
                
                <WaitingTask
                  icon="target"
                  title="Mobility Flow Session"
                  description="You're behind on this one - clear it first."
                  programName="Trench Warfare"
                  duration="Est 45 min"
                  dueDate="Due: Today 6:00 PM"
                  status="not-started"
                  category="Skills"
                   categoryColor="#457ff31a"
						categoryTextColor="#276AEE "
                  onAction={handleMobility}
                />
              </div>
            </div>
          </div>
			 <div className="col-span-1">
				<UpComingSession />
			 </div>
        </div>
    </div>
  );
};

export default Page;
