"use client";
import Icon from "@/utils/icon";
import { useState } from "react";
import ReactApexChart from "react-apexcharts";

const iconArrow =
  "https://www.figma.com/api/mcp/asset/d6e34b20-aec7-4803-b025-b383e2e70f4c";
const iconShadow =
  "https://www.figma.com/api/mcp/asset/1d4e7dae-3a06-4436-a0f6-7ad7be533025";
const iconDollar =
  "https://www.figma.com/api/mcp/asset/69d7f4db-ed65-48be-82c2-a554fb79d20c";
const iconUp =
  "https://www.figma.com/api/mcp/asset/ca46400a-06d0-4225-ac95-93f489237a40";
const iconSend =
  "https://www.figma.com/api/mcp/asset/df0e1740-187e-4d7c-b010-262d324a5079";
const iconDown =
  "https://www.figma.com/api/mcp/asset/98a0ef7a-4e04-465c-a3b6-6a86af3f55f5";
const iconReceive =
  "https://www.figma.com/api/mcp/asset/9c5a0d7a-862c-433d-ac53-2d6a83bd717d";
const axisLine =
  "https://www.figma.com/api/mcp/asset/13b1c428-9b91-4546-ad2c-f61010b4633a";
const legendEarnings =
  "https://www.figma.com/api/mcp/asset/98d82e1e-d6d3-43a7-84db-96c17784204f";
const legendWithdraws =
  "https://www.figma.com/api/mcp/asset/6b258c72-ba30-443a-adb6-0d80126d05b4";
const tooltipPointer =
  "https://www.figma.com/api/mcp/asset/7d690942-c6d0-4a02-bd04-ac4468ec2912";

const summaryCards = [
  {
    title: "Total Earnings",
    amount: "$524.34",
    change: "+0.60%",
    positive: true,
    icon: iconDollar,
  },
  {
    title: "Total Expenses",
    amount: "$574.34",
    change: "-1.60%",
    positive: false,
    icon: iconSend,
  },
  {
    title: "Total withdraws",
    amount: "$574.34",
    change: "+0.60%",
    positive: true,
    icon: iconReceive,
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
        formatter: function (val, opts) {
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
          formatter: (val) => "$" + val / 1000 + "K",
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
          formatter: (val) => "$" + val.toLocaleString(),
        },
      },
    },
  };

export default function FinancialOverview2() {
     const [period, setPeriod] = useState("Yearly");
  return (
    <div className="min-h-screen  flex justify-center ">
      <div className="w-full border border-white max-w-[1100px] bg-white/30 rounded-[24px] p-6 flex flex-col gap-6">
        {/* Header */}

        <div className="flex items-center justify-between">
          <h2 className="text-[20px] font-semibold leading-[1.5] text-[#141b34]">
           My Financials
          </h2>
          <button
            type="button"
            aria-label="Next"
            className="relative inline-flex size-10 items-center justify-center rounded-full border border-white bg-white/65"
          >
            <Icon name="arrowRight" width={20} height={20} />
          </button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {summaryCards.map(({ title, amount, change, positive, icon }) => (
            <div
              key={title}
              className="relative bg-white/35 rounded-[24px] px-6 py-5 flex items-center gap-4"
            >
              <div className="relative w-14 h-14">
                <img
                  src={iconShadow}
                  alt="shadow"
                  className="absolute inset-0 w-full h-full"
                />
                <div className="absolute inset-[16px] flex items-center justify-center bg-transparent">
                  <img src={icon} alt={title} className="w-6 h-6" />
                </div>
              </div>
              <div className="flex flex-col text-sm text-[#141b34b3]">
                <span className="font-medium">{title}</span>
                <span className="text-[#141b34] text-2xl font-bold font-['DM Sans',sans-serif]">
                  {amount}
                </span>
              </div>
              <div className="ml-auto flex items-center gap-1 text-xs font-medium">
                <span
                  className={positive ? "text-[#38aa4b]" : "text-[#ff0033]"}
                >
                  {change}
                </span>
                <img
                  src={positive ? iconUp : iconDown}
                  alt={positive ? "increase" : "decrease"}
                  className="w-3.5 h-3.5"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Chart Section */}
    <div className="w-full bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-2xl p-6 border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">
          Earning Calculation
        </h2>
        <div className="flex items-center gap-3">
          <div className="flex bg-white rounded-full p-1 shadow-sm border border-gray-200">
            {["Week", "Month", "Yearly"].map((item) => (
              <button
                key={item}
                onClick={() => setPeriod(item)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  period === item
                    ? "bg-blue-500 text-white shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-white p-3 border border-gray-100 rounded-xl">
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
      </div>
    </div>
      </div>
    </div>
  );
}
