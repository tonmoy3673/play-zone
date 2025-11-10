import { cn } from "@/lib/utils";
import Icon, { IconName } from "@/utils/icon";
import Link from "next/link";

export function SectionHeader({
  title,
  href,
  linkText = "View More",
  className,
  iconName,
}: {
  title: string;
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
        <h2 className="text-xl font-medium text-black">{title}</h2>
        {iconName && <Icon name={iconName} height={24} width={24} />}
      </div>

      {href && (
        <Link
          href={href}
          className="bg-[linear-gradient(177deg,#5C8FF7_10.06%,#276AEE_62.94%)] bg-clip-text text-transparent font-medium text-sm transition-colors"
        >
          {linkText}
        </Link>
      )}
    </div>
  );
}
