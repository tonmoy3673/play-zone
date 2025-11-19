import Icon from "@/utils/icon";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const Box = ({
  children,
  className,
  isActive = false,
}: {
  children: ReactNode;
  className?: string;
  isActive?: boolean;
}) => {
  return (
    <button
      className={cn(
        "text-[10px] font-medium size-8 rounded-lg  flex items-center justify-center transition",
        !isActive
          ? "border border-white bg-white/60 hover:bg-primary-gradient hover:text-white text-dark"
          : "bg-primary-gradient text-white",
        className
      )}
    >
      {children}
    </button>
  );
};

const Pagination = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center lg:justify-between flex-col lg:flex-row gap-y-2",
        className
      )}
    >
      <p className="text-xs font-medium text-dark/70">{text}</p>

      <div className="flex items-center gap-2">
        <Box>
          <Icon name="chevron_left" height={20} width={20} />
        </Box>

        {[1, 2, 3].map((num) => (
          <Box key={num} isActive={num === 1 ? true : false}>
            {num}
          </Box>
        ))}
        <Box>
          <Icon name="more_vertical" height={20} width={20} />
        </Box>
        <Box>15</Box>
        <Box>
          <Icon name="chevron_right" height={20} width={20} />
        </Box>
      </div>
    </div>
  );
};

export default Pagination;
