"use client";

import Card from "@/components/ui/Card";
import { PieChart, Pie, Cell } from "recharts";
import { SectionHeader } from "@/components/shared/SectionHeader";

const data = [
  { label: "Jan", value: 20, color: "#276AEE" },
  { label: "Feb", value: 20, color: "#5C8FF3" },
  { label: "Mar", value: 40, color: "#AAC8F9" },
  { label: "Apr", value: 40, color: "#C2DCFA" },
];

const MonthlyRevenue = () => {
  return (
    <Card className="bg-white/60">
      <div className="flex items-center justify-between flex-wrap gap-2 mb-5">
        <SectionHeader title="Monthly Revenue" className="mb-0" />

        <p>
          <span className="text-dark/70 font-medium text-lg">Toggle:</span>
          <span className="text-2xl font-medium font-dark">$14,820</span>
        </p>
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
              paddingAngle={2}
              cornerRadius={4}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.color}
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

        <div className="flex justify-center mx-auto items-center text-sm font-medium gap-6 text-dark mt-4">
          {data?.map(({ label, color }, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <div
                className="size-1.5 rounded-full"
                style={{ background: color }}
              />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default MonthlyRevenue;
