/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Card from "@/components/ui/Card";
import Select from "@/components/ui/Select";
import Icon, { IconName } from "@/utils/icon";
import { SectionHeader } from "@/components/shared/SectionHeader";

const chartData = [
  {
    name: "QB\nFundamentals",
    value: 96,
    icon: "american_football_fill" as IconName,
  },
  { name: "Film\nStudy 1", value: 73, icon: "flash" as IconName },
  { name: "Pocket\nPresence", value: 56, icon: "play_list" as IconName },
  { name: "Read\nDefense", value: 40, icon: "location_fill" as IconName },
  { name: "Advanced\nReads", value: 36, icon: "route" as IconName },
  { name: "Footwork\nDrills", value: 28, icon: "flash" as IconName },
  { name: "Film\nStudy", value: 20, icon: "play_list" as IconName },
];

// @ts-expect-error
const CustomTooltip = ({ active, payload }) => {
  if (active) {
    return (
      <div className="custom-tooltip relative bg-white border border-white rounded-full flex items-center h-6 px-4 shadow-[0_4px_15.7px_0_rgba(178,204,255,0.51)]">
        <span className="text-[10px] font-medium text-dark">
          {payload?.[0].value}
        </span>

        <svg
          className="absolute left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 -bottom-3 text-white"
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="10"
          viewBox="0 0 8 7"
          fill="none"
        >
          <path
            d="M4.46368 6C4.07878 6.66667 3.11653 6.66667 2.73163 6L0.133555 1.5C-0.251345 0.833333 0.22978 -7.31543e-07 0.99958 -6.64245e-07L6.19573 -2.09983e-07C6.96553 -1.42685e-07 7.44666 0.833333 7.06176 1.5L4.46368 6Z"
            fill="currentColor"
          />
        </svg>
      </div>
    );
  }

  return null;
};

// @ts-expect-error
const CustomTick = ({ x, y, payload }) => {
  const lines = payload.value.split("\n");

  return (
    <text
      x={x}
      y={y + 10}
      fill="#141B34"
      fontSize={12}
      fontWeight={500}
      textAnchor="middle"
    >
      {lines.map((line: string, index: number) => (
        <tspan key={index} x={x} dy={index === 0 ? 0 : 14}>
          {line}
        </tspan>
      ))}
    </text>
  );
};

// @ts-expect-error
const CustomCellWithIcon = ({ x, y, width, height, radius, payload }) => {
  const iconSize = 24;
  const circleSize = 40;
  const offset = -30;

  const centerX = x + width / 2;
  const centerY = y + height + offset;

  const opacity = Math.min(Math.max(payload.value / 100, 0), 1);

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx={radius || 12}
        fill={`rgba(92, 143, 247, ${opacity})`}
      />

      {payload.icon && (
        <>
          <circle
            cx={centerX}
            cy={centerY}
            r={circleSize / 2}
            fill="#FFFFFF1A"
            stroke="#FFFFFF3A"
          />
          <Icon
            name={payload.icon}
            x={centerX - iconSize / 2}
            y={centerY - iconSize / 2}
            width={iconSize}
            height={iconSize}
            className="text-white"
          />
        </>
      )}
    </g>
  );
};

const TaskCompletion = () => {
  return (
    <Card className="lg:col-span-2">
      <div className="flex items-center justify-between flex-wrap mb-6">
        <SectionHeader title="Task Completion Rate by Task" className="mb-0" />

        <Select
          placeholder="All Modules"
          options={[
            {
              label: "Last Month",
              value: "Last Month",
            },
            {
              label: "This Month",
              value: "This Month",
            },
          ]}
          className="h-12 border border-white rounded-2xl"
        />
      </div>

      <ResponsiveContainer width="100%" height="100%" className={"min-h-80"}>
        <BarChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 0, bottom: 70 }}
        >
          <XAxis
            dataKey="name"
            tick={
              <CustomTick x={undefined} y={undefined} payload={undefined} />
            }
            axisLine={false}
            tickLine={false}
          />

          <YAxis
            tick={{ fill: "#515970", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />

          <Tooltip
            cursor={{ fill: "transparent" }}
            content={<CustomTooltip active={undefined} payload={undefined} />}
          />

          {/* @ts-ignore */}
          <Bar dataKey="value" radius={12} shape={<CustomCellWithIcon />} />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default TaskCompletion;
