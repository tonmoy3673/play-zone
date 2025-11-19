import { cn } from "@/lib/utils";
import Icon, { IconName } from "@/utils/icon";
import Link from "next/link";

export function SectionHeader({
  title,
  titleClass,
  href,
  linkText = "View More",
  className,
  iconName,
}: {
  title: string;
  titleClass?: string;
  href?: string;
  linkText?: string;
  className?: string;
  iconName?: IconName;
}) {
  return (
    <div
      className={cn(
        `flex items-center flex-wrap justify-between mb-[22px]`,
        className
      )}
    >
      <div className="flex items-center gap-3">
        <h2 className={cn("text-lg font-medium text-dark", titleClass)}>
          {title}
        </h2>
        {iconName && <Icon name={iconName} height={24} width={24} />}
      </div>

      {href && (
        <Link
          href={href}
          className="primary-gradient-text font-medium text-sm transition-colors"
        >
          {linkText}
        </Link>
      )}
    </div>
  );
}
