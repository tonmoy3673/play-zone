import { HTMLAttributes, ReactNode } from "react";
import Icon, { IconName } from "@/utils/icon";
import ProgressBar from "@/components/shared/ProgressBar";
import { cn } from "@/lib/utils";

interface MatrixCardProps extends HTMLAttributes<HTMLDivElement> {
  label?: string;
  value: TrustedHTML;
  subtitle?: string | ReactNode;
  icon: IconName;
  progress?: number;
  className?: string;
}

export default function MatrixCard({
  label,
  value,
  subtitle,
  progress,
  icon,
  className,
  ...props
}: MatrixCardProps) {
  return (
    <div
      {...props}
      className={cn(
        "bg-white/30 relative z-[1] rounded-3xl p-5 border border-white space-y-5 overflow-hidden",
        className
      )}
    >
      <div className="flex items-center justify-between">
        {label && <p className="text-dark font-semibold text-xs">{label}</p>}
        <div className="size-10 flex items-center justify-center rounded-full border border-white bg-white/65">
          <Icon name={icon} height={20} width={20} className="text-dark" />
        </div>
      </div>

      <div>
        <p
          className="text-2xl md:text-3xl font-semibold text-dark"
          dangerouslySetInnerHTML={{ __html: value }}
        />

        {subtitle && typeof subtitle === "string" ? (
          <p className="text-xs font-medium text-dark mt-1">{subtitle}</p>
        ) : (
          <div className="mt-1">{subtitle}</div>
        )}

        {progress && (
          <ProgressBar
            className="mt-2"
            percentage={progress}
            label="Complete"
          />
        )}
      </div>
    </div>
  );
}
