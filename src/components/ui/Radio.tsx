import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'onClick' | 'onToggle'> {
    label?: string;
    labelClassName?: string;
    checked?: boolean;
    onToggle?: (value: string | undefined) => void;
}

const Radio = forwardRef<HTMLInputElement, RadioProps>(
    ({ className, label, labelClassName, onChange, checked, onToggle, value, ...props }, ref) => {
        const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
            // If already checked and we have onToggle, deselect it
            if (checked && onToggle) {
                e.preventDefault();
                e.stopPropagation();
                onToggle(undefined);
            }
            // If not checked, let the default onChange handle it
        };

        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            // If onToggle is provided, use it; otherwise use the standard onChange
            if (onToggle) {
                if (e.target.checked) {
                    onToggle(value as string);
                }
            } else {
                onChange?.(e);
            }
        };

        return (
            <label className="inline-flex items-center cursor-pointer group">
                <div className="relative">
                    <input
                        ref={ref}
                        type="radio"
                        className={cn(
                            "w-[18px] h-[18px] flex items-center justify-center rounded-full border-2 border-gray-300 appearance-none peer",
                            "transition-all duration-300 ease-in-out cursor-pointer",
                            "hover:border-blue-400 hover:scale-105",
                            "focus:outline-none focus:scale-105",
                            "checked:border-transparent checked:bg-gradient-to-br checked:from-[#5C8FF7] checked:to-[#276AEE] checked:scale-105",
                            "active:scale-95",
                            className
                        )}
                        checked={checked}
                        onChange={handleChange}
                        onClick={handleClick}
                        value={value}
                        {...props}
                    />
                    {/* Inner circle indicator when selected */}
                    <div
                        className={cn(
                            "absolute inset-0 w-2 h-2 m-auto rounded-full bg-white opacity-0 transition-opacity duration-300",
                            "peer-checked:opacity-100"
                        )}
                    />
                </div>
                {label && (
                    <span className={cn("ml-3 text-base text-gray-700 cursor-pointer", labelClassName)}>
                        {label}
                    </span>
                )}
            </label>
        );
    }
);

Radio.displayName = "Radio";

export default Radio;

