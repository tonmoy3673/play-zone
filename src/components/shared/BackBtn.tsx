import Link from "next/link";
import Icon from "@/utils/icon";
import { cn } from "@/lib/utils";

const BackBtn = ({
  title,
  href,
  className,
}: {
  title: string;
  href: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "flex items-center gap-2.5 md:gap-4 mb-6 md:mb-8",
        className
      )}
    >
      <Link
        href={href}
        className="text-dark bg-[#ffffff4d] p-0 backdrop-blur-3xl rounded-full size-10 border border-white flex items-center justify-center hover:brightness-110"
      >
        <Icon name="left_arrow" height={20} width={20} />
      </Link>
      <h1 className="text-2xl md:text-3xl font-semibold">{title}</h1>
    </div>
  );
};

export default BackBtn;
