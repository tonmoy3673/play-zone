"use client";

import { SectionHeader } from "@/components/shared/SectionHeader";
import Card from "@/components/ui/Card";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const deviceData = [
  { name: "Mobile", value: 42, percentage: 55 },
  { name: "Desktop", value: 25, percentage: 28 },
  { name: "Tablet", value: 12, percentage: 11 },
];

const COLORS = ["#2563eb", "#93c5fd", "#bfdbfe"];

const DeviceAndPlatform = () => {
  return (
    <Card className="bg-white/60">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <SectionHeader title="Device & Platform Usage" className="mb-13" />

          <div className="space-y-6 text-sm">
            {deviceData.map((item, idx) => (
              <div key={idx} className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <div
                    className={`size-2 rounded-full bg-primary-gradient border-t border-[#68B0EA] ${
                      item.name == "Desktop"
                        ? "opacity-60"
                        : item.name == "Tablet"
                        ? "opacity-30"
                        : "opacity-100"
                    }`}
                  ></div>
                  <span className="text-dark/70 text-xs font-medium">
                    {item.name}
                  </span>
                </div>
                <span className="font-semibold text-dark text-2xl">
                  {item.value} ({item.percentage}%)
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="size-[242px] relative">
          <div className="text-center mb-4 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <p className="text-3xl font-bold text-gray-900">65</p>
            <p className="text-sm text-gray-600">Athletes</p>
          </div>

          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={deviceData}
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={100}
                dataKey="value"
                paddingAngle={2}
              >
                {deviceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Card>
  );
};

export default DeviceAndPlatform;
