"use client";

import Card from "@/components/ui/Card";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const signupSourceData = [
  { name: "Social Media", value: 45.2 },
  { name: "Manual Registration", value: 32.8 },
  { name: "Invite Links", value: 15.3 },
];

const COLORS = ["#276AEE", "#7BA5F4", "#C7D9FA"];

const KeyPerforming = () => {
  return (
    <Card className="bg-white/60 md:rounded-2xl">
      <h4 className="text-sm font-medium text-dark mb-5">Key Performing</h4>

      <div className="flex items-center justify-center absolute right-10 top-10">
        <ResponsiveContainer width={160} height={160}>
          <PieChart>
            <Pie
              data={signupSourceData}
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={70}
              paddingAngle={2}
              dataKey="value"
              cornerRadius={4}
            >
              {signupSourceData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        <p className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-lg text-black font-semibold">
          89%
        </p>
      </div>

      <div className="space-y-5 w-full mt-16">
        {[
          { label: "Key Performance", value: "55.5%" },
          { label: "Signup to Program Conversion", value: "25.6%" },
          { label: "Drop-offs at Program Join", value: "10%" },
        ].map((item, idx) => (
          <div key={idx} className="flex flex-col gap-1">
            <span className="font-semibold text-dark text-2xl">
              {item.value}
            </span>
            <div className="flex items-center gap-1.5">
              <div
                className={`size-2 bg-primary-gradient border-t border-[#68B0EA] rounded-full ${
                  idx == 0
                    ? "opacity-100"
                    : idx == 1
                    ? "opacity-60"
                    : "opacity-30"
                }`}
              />
              <span className="text-xs font-medium text-dark/70">
                {item.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default KeyPerforming;
