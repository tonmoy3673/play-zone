"use client";

import Icon from "@/utils/icon";
import Card from "@/components/ui/Card";
import { PieChart, Pie, Cell } from "recharts";
import { SectionHeader } from "@/components/shared/SectionHeader";

const COLORS = ["#3B82F6", "#E5E7EB"];

const data = [
  { name: "Completed", value: 89 },
  { name: "Remaining", value: 11 },
];

const TaskCompletion = () => {
  return (
    <Card>
      <div className="flex items-start justify-between flex-wrap gap-2 mb-11">
        <SectionHeader title="Task Completion Rate" className="mb-0" />

        <div className="space-y-1 text-sm font-medium">
          <p className="text-dark">
            <span className="text-dark/70">Remaining</span> 3,992
          </p>
          <div className="text-dark/70 flex items-center gap-1">
            <div className="flex items-center gap-1">
              <Icon
                name="trend_up"
                height={14}
                width={14}
                className="text-[#38AA4B]"
              />
              <span className="success-gradient-text">+1.28%</span>
            </div>
            vs last month
          </div>
        </div>
      </div>

      <div className="w-[360px] mx-auto">
        <div className="size-full relative">
          <PieChart width="100%" height={180}>
            <Pie
              data={data}
              cx="50%"
              cy="100%"
              startAngle={180}
              endAngle={0}
              innerRadius={100}
              outerRadius={140}
              paddingAngle={4}
              cornerRadius={4}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index]}
                  stroke="none"
                  // cornerRadius="50%"
                />
              ))}
            </Pie>
          </PieChart>

          <div className="absolute bottom-3 text-center left-1/2 -translate-x-1/2 ">
            <p className="text-4xl font-semibold text-dark">89%</p>
            <p className="text-sm font-medium text-dark/70">Completion Rate</p>
          </div>
        </div>

        <div className="flex justify-between w-[78%] mx-auto text-sm font-medium px-2 text-dark/70 mt-2">
          <span>0</span>
          <span>100</span>
        </div>
      </div>
    </Card>
  );
};

export default TaskCompletion;
