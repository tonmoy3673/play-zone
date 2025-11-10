import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import { Check } from "lucide-react";

interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  isLoading?: boolean;
  spinnerClassName?: string;
  label?: string;
  labelClassName?: string;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, isLoading, spinnerClassName, label, labelClassName, onChange, ...props }, ref) => {
    return (
      <label className="inline-flex items-center cursor-pointer group">
        <div className="relative">
          <input
            ref={ref}
            type="checkbox"
            className={cn(
              "w-4 h-4 p-0.5 flex items-center justify-center rounded border-2 border-gray-300 appearance-none peer",
              "transition-all duration-300 ease-in-out cursor-pointer",
              "hover:border-blue-400 hover:scale-105",
              "focus:outline-none focus:scale-105",
              "checked:border-transparent checked:bg-gradient-to-br checked:from-[#5C8FF7] checked:to-[#276AEE] checked:scale-105",
              "active:scale-95",
              className
            )}
            onChange={onChange}
            {...props}
          />
          <Check
            className={cn(
              "absolute inset-0 w-4 h-4 m-auto text-white opacity-0 transition-opacity duration-300",
              "peer-checked:opacity-100"
            )}
			size={8}
          />
        </div>
        {label && (
          <span className={cn("ml-2 text-sm text-gray-700 cursor-pointer", labelClassName)}>
            {label}
          </span>
        )}
      </label>
    );
  }
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
