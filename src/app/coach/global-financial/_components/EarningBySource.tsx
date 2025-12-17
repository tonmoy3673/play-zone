"use client";

import Card from "@/components/ui/Card";
import { PieChart, Pie, Cell } from "recharts";
import { SectionHeader } from "@/components/shared/SectionHeader";

const EarningBySource = () => {
  const percent = 65;
  const dots = 22;

  // how many dots should be filled
  const filledDots = Math.round((percent / 100) * dots);

  const data = Array.from({ length: dots }, (_, i) => ({
    value: 1,
    color: i < filledDots ? "#276AEE" : "#D1EAF9",
  }));

  return (
    <Card className="bg-white/60">
      <div className="flex items-center justify-between flex-wrap gap-2 mb-5">
        <SectionHeader title="Earning By Source" className="mb-0" />

        <p>
          <span className="text-dark/70 font-medium text-lg">Toggle:</span>
          <span className="text-2xl font-medium font-dark">$14,820</span>
        </p>
      </div>

      <div className="w-[360px] mx-auto">
        <div className="size-full relative">
          <PieChart width={360} height={180}>
            <Pie
              data={data}
              cx="50%"
              cy="100%"
              startAngle={180}
              endAngle={0}
              innerRadius={100}
              outerRadius={140}
              paddingAngle={2}
              dataKey="value"
              cornerRadius={4}
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={entry.color} stroke="none" />
              ))}
            </Pie>
          </PieChart>

          <div className="absolute bottom-3 text-center left-1/2 -translate-x-1/2 ">
            <p className="text-4xl font-semibold text-dark">{percent}%</p>
          </div>
        </div>

        <div className="flex justify-center mx-auto items-center text-sm gap-5 text-dark mt-4">
          <div className="flex items-center gap-2">
            <div className="size-1.5 rounded-full bg-[#276AEE]" />
            <span>Content Sales-65%</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="size-1.5 rounded-full bg-[#D1EAF9]" />
            <span>Merch-20%</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default EarningBySource;
