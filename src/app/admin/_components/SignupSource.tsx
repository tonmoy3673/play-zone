"use client";

import Card from "@/components/ui/Card";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const signupSourceData = [
  { name: "Other", value: 6.7 },
  { name: "Social Media", value: 45.2 },
  { name: "Manual Registration", value: 32.8 },
  { name: "Invite Links", value: 15.3 },
];

const COLORS = ["#E9F1FC", "#276AEE", "#6696F2", "#C6D8FA"];

const SignupSource = () => {
  return (
    <Card className="bg-white/60 md:rounded-2xl">
      <h4 className="text-sm font-medium text-dark mb-5">Signup Source</h4>

      <div className="flex items-center justify-center">
        <ResponsiveContainer width={180} height={180}>
          <PieChart>
            <Pie
              data={signupSourceData}
              labelLine={false}
              paddingAngle={2}
              dataKey="value"
              cornerRadius={6}
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
      </div>

      <div className="mt-5 grid grid-cols-2 gap-10">
        {signupSourceData.map((item, idx) => (
          <div key={idx} className="flex flex-col gap-1">
            <span className="font-semibold text-dark text-2xl">
              {item.value}%
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
                {item.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default SignupSource;
