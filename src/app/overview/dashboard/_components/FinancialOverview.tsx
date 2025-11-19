"use client";

import { useState } from "react";
import { type ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";
import Icon, { type IconName } from "@/utils/icon";
import Card from "@/components/ui/Card";
import { AnimatedButton } from "@/components/ui/Button";

type SummaryCard = {
  title: string;
  amount: string;
  change: string;
  positive: boolean;
  icon: IconName;
};

const summaryCards: SummaryCard[] = [
  {
    title: "Total Earnings",
    amount: "$524.34",
    change: "+0.60%",
    positive: true,
    icon: "coins_dollar",
  },
  {
    title: "Total Expenses",
    amount: "$574.34",
    change: "-1.60%",
    positive: false,
    icon: "refresh",
  },
  {
    title: "Total withdraws",
    amount: "$574.34",
    change: "+0.60%",
    positive: true,
    icon: "refresh",
  },
];

const months = [
  { label: "Jan", earnings: 45, withdraws: 25 },
  { label: "Feb", earnings: 40, withdraws: 30 },
  { label: "Mar", earnings: 20, withdraws: 20 },
  { label: "Apr", earnings: 28, withdraws: 18 },
  { label: "May", earnings: 48, withdraws: 15 },
  {
    label: "Jun",
    earnings: 52,
    withdraws: 35,
    highlight: { text: "$24,678", positive: true },
  },
  { label: "Jul", earnings: 60, withdraws: 32 },
  { label: "Aug", earnings: 55, withdraws: 30 },
  { label: "Sep", earnings: 56, withdraws: 32 },
  {
    label: "Oct",
    earnings: 53,
    withdraws: 40,
    highlight: { text: "-$11,678", positive: false },
  },
  { label: "Nov", earnings: 44, withdraws: 36 },
  { label: "Dec", earnings: 32, withdraws: 28 },
];

const maxValue = Math.max(
  ...months.map((month) => Math.max(month.earnings, month.withdraws))
);

const chartData = {
  series: [
    {
      name: "Withdraws",
      data: [
        23000, 9500, 13000, 7500, 4500, 15500, 9500, 8500, 9500, 14000, 20000,
        17500,
      ],
    },
    {
      name: "Earnings",
      data: [
        23000, 30000, 20500, 18000, 24678, 29500, 48000, 30000, 36000, 45000,
        34500, 25000,
      ],
    },
  ],
  options: {
    chart: {
      type: "bar",
      height: 400,
      stacked: true,
      toolbar: { show: false },
      fontFamily: "Inter, system-ui, sans-serif",
      animations: { enabled: true },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "70%",
        borderRadius: 6,
        borderRadiusApplication: "around",
      },
    },
    // :white_check_mark: Color setup — Withdraws (blue), Earnings (#bdd0ff)
    colors: ["#276AEE", "#bdd0ff"],
    fill: {
      type: "solid",
      opacity: 1,
    },
    dataLabels: {
      enabled: true,
      formatter: function (
        val: number,
        opts: {
          seriesIndex: number;
          dataPointIndex: number;
          w: { config: { series: { data: number[] }[] } };
        }
      ) {
        const sIndex = opts.seriesIndex;
        const dIndex = opts.dataPointIndex;
        // Show total for May
        if (sIndex === 1 && dIndex === 4) {
          const withdraws = opts.w.config.series[0].data[dIndex];
          const earnings = opts.w.config.series[1].data[dIndex];
          const total = withdraws + earnings;
          return "$" + total.toLocaleString();
        }
        // Show red negative label for November
        if (sIndex === 1 && dIndex === 10) {
          return "-$11,678";
        }
        return "";
      },
      offsetY: -20,
      style: {
        fontSize: "11px",
        fontWeight: 600,
        colors: ["#1E293B"],
      },
      background: { enabled: false },
    },
    // :white_check_mark: Disable hover/dim effect
    states: {
      normal: { filter: { type: "none", value: 0 } },
      hover: { filter: { type: "none", value: 0 } },
      active: { filter: { type: "none", value: 0 } },
    },
    stroke: {
      show: true,
      width: 3,
      colors: ["#F3F4F6"],
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: {
        style: {
          colors: "#6b7280",
          fontSize: "13px",
          fontWeight: 400,
        },
      },
    },
    yaxis: {
      min: 0,
      max: 55000,
      tickAmount: 5,
      labels: {
        formatter: (val: number) => "$" + val / 1000 + "K",
        style: {
          colors: "#6b7280",
          fontSize: "13px",
          fontWeight: 400,
        },
      },
    },
    grid: {
      borderColor: "#e5e7eb",
      strokeDashArray: 0,
      xaxis: { lines: { show: false } },
      yaxis: { lines: { show: true } },
      padding: { top: 0, right: 20, bottom: 0, left: 10 },
    },
    legend: {
      show: true,
      position: "top",
      horizontalAlign: "left",
      fontSize: "14px",
      fontWeight: 400,
      offsetY: -5,
      markers: { width: 10, height: 10, radius: 12, offsetX: -2 },
      itemMargin: { horizontal: 12, vertical: 0 },
      labels: { colors: "#374151" },
    },
    tooltip: {
      enabled: true,
      shared: true,
      intersect: false,
      y: {
        formatter: (val: number) => "$" + val.toLocaleString(),
      },
    },
  } as ApexOptions,
};

export default function FinancialOverview2() {
  const [period, setPeriod] = useState("Yearly");

  return (
    <Card className="md:p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold leading-[1.5] text-dark">
          My Financial
        </h2>
        <button
          type="button"
          aria-label="Next"
          className="inline-flex items-center justify-center rounded-full border border-white bg-white/60 size-10"
        >
          <Icon name="right_arrow" width={20} height={20} />
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {summaryCards.map(({ title, amount, change, positive, icon }) => (
          <Card key={title} className="px-3.5 py-5 flex items-center gap-2.5">
            <div className="inline-flex size-14 items-center justify-center rounded-full bg-white/60 border border-white shrink-0">
              <Icon name={icon} width={20} height={20} />
            </div>

            <div className="grid gap-[3px]">
              <span className="text-sm font-medium text-dark/70">{title}</span>
              <div className="flex items-end gap-2">
                <span className="text-dark text-2xl font-bold">{amount}</span>
                <div
                  className={`flex items-center pb-1.5 ${
                    positive ? "text-[#38aa4b]" : "text-[#ff0033]"
                  }`}
                >
                  <span className="text-[10px]">{change}</span>
                  <Icon
                    name={positive ? "trend_up" : "trend_down"}
                    height={14}
                    width={14}
                  />
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card className="p-6 ">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">
            Earning Calculation
          </h2>
          <div className="flex items-center gap-2">
            {["Week", "Month", "Yearly"].map((item) => (
              <AnimatedButton
                key={item}
                onClick={() => setPeriod(item)}
                className={`px-3 flex items-center h-9 py-1.5 rounded-full text-xs border font-medium transition-all duration-200 ${
                  period === item
                    ? "bg-primary-gradient border-[rgba(21,86,216,0.30)] text-white"
                    : "text-dark bg-white/60 border-white"
                }`}
              >
                {item}
              </AnimatedButton>
            ))}
          </div>
        </div>
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="bar"
          height={380}
        />
        <style>{`
          .apexcharts-datalabel:has(tspan:contains('-$11,678')) tspan {
            fill: #ff0033 !important;
          }
        `}</style>
      </Card>
    </Card>
  );
}
