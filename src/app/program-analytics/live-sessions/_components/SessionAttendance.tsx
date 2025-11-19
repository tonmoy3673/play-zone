/* eslint-disable @typescript-eslint/ban-ts-comment */

"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import Select from "@/components/ui/Select";
import { SectionHeader } from "@/components/shared/SectionHeader";
import Card from "@/components/ui/Card";

const attendanceTrendData = [
  { session: "Session 1", value: 60 },
  { session: "Session 2", value: 25 },
  { session: "Session 3", value: 55 },
  { session: "Session 4", value: 80, highlight: true },
  { session: "Session 5", value: 35 },
  { session: "Session 6", value: 30 },
  { session: "Session 7", value: 50 },
  { session: "Session 8", value: 70 },
];

// @ts-expect-error
const CustomTooltip = ({ active, payload }) => {
  if (active) {
    return (
      <div className="custom-tooltip relative bg-white flex-col flex justify-center items-center rounded-lg py-2 px-2.5 shadow-[0_4px_15.7px_0_rgba(178,204,255,0.51)]">
        <span className="text-xs font-medium primary-gradient-text">
          (+{payload?.[0].value}%) Avg
        </span>
        <span className="text-[10px] text-dark">Session 4-86 Attendees</span>

        <svg
          className="absolute left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 -bottom-3"
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          viewBox="0 0 8 7"
          fill="none"
        >
          <path
            d="M4.46368 6C4.07878 6.66667 3.11653 6.66667 2.73163 6L0.133555 1.5C-0.251345 0.833333 0.22978 -7.31543e-07 0.99958 -6.64245e-07L6.19573 -2.09983e-07C6.96553 -1.42685e-07 7.44666 0.833333 7.06176 1.5L4.46368 6Z"
            fill="white"
          />
        </svg>
      </div>
    );
  }

  return null;
};

// @ts-expect-error
const CustomXAxisTick = ({ x, y, payload }) => {
  return (
    <text
      x={x}
      y={y + 10}
      fill="#141B34"
      fontSize={12}
      fontWeight={500}
      textAnchor="middle"
    >
      {payload.value}
    </text>
  );
};

// @ts-expect-error
const CustomYAxisTick = ({ x, y, payload }) => {
  return (
    <text
      x={x}
      y={y + 10}
      fill="#141B34"
      fontSize={12}
      fontWeight={500}
      textAnchor="middle"
    >
      {payload.value}%
    </text>
  );
};

const SessionAttendance = () => {
  return (
    <Card>
      <div className="flex items-center justify-between flex-wrap gap-y-2 mb-5">
        <SectionHeader title="Session Attendance Trends" className="mb-0" />
        <Select
          placeholder="All Sessions"
          options={[
            {
              label: "Week 01",
              value: "Week 01",
            },
            {
              label: "Week 02",
              value: "Week 02",
            },
          ]}
          className="h-12 bg-white/60 border border-white rounded-2xl"
        />
      </div>

      <ResponsiveContainer width="100%" height="100%" className={"min-h-80"}>
        <BarChart
          data={attendanceTrendData}
          margin={{ top: 20, right: 30, left: 0, bottom: 60 }}
        >
          <XAxis
            dataKey="session"
            tick={
              <CustomXAxisTick
                x={undefined}
                y={undefined}
                payload={undefined}
              />
            }
            axisLine={false}
            tickLine={false}
          />

          <YAxis
            tick={
              <CustomYAxisTick
                x={undefined}
                y={undefined}
                payload={undefined}
              />
            }
            axisLine={false}
            tickLine={false}
          />

          <Tooltip
            cursor={{ fill: "transparent" }}
            content={<CustomTooltip active={undefined} payload={undefined} />}
          />

          <Bar dataKey="value" activeBar={false} radius={12}>
            {attendanceTrendData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.highlight ? "#276AEE" : "#CEE1FC"}
                stroke={entry.highlight ? "#255FD0" : "#CADDFB"}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default SessionAttendance;
