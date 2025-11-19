import MatrixCard from "@/components/shared/MatrixCard";
import { IconName } from "@/utils/icon";
import Link from "next/link";
import React from "react";

const matrixData = [
  {
    label: "Total Earned",
    icon: "target_dollar" as IconName,
    value: `<span class="primary-gradient-text text-2xl md:text-3xl lg:text-4xl">$14K</span>`,
    subtitle: "Lifetime earnings",
  },
  {
    label: "Total Paid Out",
    icon: "wallet_done" as IconName,
    value: `<span class="primary-gradient-text text-2xl md:text-3xl lg:text-4xl">$10.2K+</span>`,
    subtitle: "Successfully transferred",
  },
  {
    label: "Available Balance",
    icon: "wallet" as IconName,
    value: "$4,620",
    subtitle: (
      <Link
        href="/"
        className="text-xs font-medium primary-gradient-text underline"
      >
        View Payments
      </Link>
    ),
  },
  {
    label: "Pending Payouts",
    icon: "loading" as IconName,
    value: `<span class="danger-gradient-text text-2xl md:text-3xl lg:text-4xl">3</span>`,
    subtitle: "Processing requests",
  },
];

const MatrixCards = () => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {matrixData?.map((matrix, idx) => (
        <MatrixCard
          key={idx}
          label={matrix.label}
          value={matrix.value}
          icon={matrix.icon}
          subtitle={matrix.subtitle}
        />
      ))}
    </div>
  );
};

export default MatrixCards;
