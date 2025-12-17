
import { AnimatedButton } from "@/components/ui/Button";
import Image from "next/image";

export default function RecentActivityCard({
    isFeedbackType = false,
    title,
    description,
    timeString,
    isActive = false,
}: {
    isFeedbackType?: boolean;
    title: string;
    description?: string;
    timeString: string;
    isActive?: boolean;
}) {
    return (
        <div className={`flex items-start justify-between p-3 rounded-2xl ${isActive ? "bg-white/40" : ""}`}>
            <div className="flex space-x-3">
                <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center">
                    <Image
                        src={`/images/icons/${isFeedbackType
                                ? "activity-icon-02.svg"
                                : "activity-icon-01.svg"
                            }`}
                        alt="activity-icon"
                        width={24}
                        height={24}
                    />
                </div>
                <div className="flex justify-between">
                    <div>
                        <h2 className="text-sm font-semibold mb-2">{title}</h2>
                        {isFeedbackType ? (
                            <AnimatedButton
                            type="button"
                            style={{
                                borderRadius: "100px",
                                background:
                                    "var(--Gradient, linear-gradient(177deg, #5C8FF7 10.06%, #276AEE 62.94%))",
                            }}
                            className=" text-white px-5 py-2.5  text-sm font-medium"
                        >
                            View Feedback
                        </AnimatedButton>
                        ) : (
                            <p className="text-xs max-w-[270px] w-full wrap-break-word">
                                {description}
                            </p>
                        )}
                    </div>
                </div>
            </div>
            <p className="text-[10px] text-[#2C4AFF] min-w-max">{timeString}</p>
        </div>
    );
}
