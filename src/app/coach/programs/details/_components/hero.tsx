import Image from "next/image";
import CircularProgress from "./CircularProgressBar";
import Icon from "@/components/ui/Icon";

export default function HeroSection() {
    return (
        <div className="w-full h-[525px] bg-white/30 border-l border-t border-white/60 rounded-3xl overflow-hidden relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[200px] after:pointer-events-none after:rounded-b-2xl">
            <Image
                src="/hero-image.png"
                alt="hero-image"
                fill
                className="object-cover rounded-3xl"
                sizes="(max-width: 768px) 100vw, 66vw"
                priority
            />
            <div className="absolute top-0 left-0 p-7">
                <h1 className="text-5xl font-bold text-white">
                    The QB Fundamentals
                </h1>
            </div>
            <div className="absolute bottom-7 left-7 w-[calc(100%-60px)] z-50">
                <div className="flex items-end justify-between">
                    <div className="flex items-end space-x-1 w-max">
                        <div className="bg-white/8 relative rounded-[15px] overflow-hidden min-w-[150px] h-[78px]">
                            {/* Icon with shadow */}
                            <div className="absolute left-[13px] top-[18px] w-[42px] h-[42px]">
                                {/* Shadow */}
                                <div className="absolute left-0 top-0 w-[42px] h-[42px]">
                                    <Icon name="user-icon-shadow" width={42} height={42} />
                                </div>
                                {/* User group icon - centered on shadow */}
                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[20px] h-[20px] overflow-hidden flex items-center justify-center">
                                    <Icon
                                        name="team_people"
                                        width={20}
                                        height={16}
                                        className="[&_path]:stroke-white [&_path]:opacity-100"
                                    />
                                </div>
                            </div>

                            {/* Text Content */}
                            <div className="absolute left-[62px] top-1/2 -translate-y-1/2 flex flex-col gap-[3px]">
                                <p className="text-white/87 text-xs font-medium leading-[24px] tracking-[-0.24px] mr-2">
                                    Total Athletes
                                </p>
                                <p className="text-white text-xl font-semibold leading-[1.5]">
                                    124
                                </p>
                            </div>

                            {/* Increase Percentage */}
                            <div className="absolute left-[100px] top-[41px] flex items-center gap-[2px]">
                                <p className="text-[#38AA4B] text-[11px] font-normal leading-[17px]">
                                    +12%
                                </p>
                                <Icon name="insghts-icon" width={11} height={7} />
                            </div>
                        </div>

                        <div className="bg-white/8 relative rounded-[15px] overflow-hidden min-w-[150px] h-[78px]">
                            {/* Icon with shadow */}
                            <div className="absolute left-[13px] top-[18px] w-[42px] h-[42px]">
                                {/* Shadow */}
                                <div className="absolute left-0 top-0 w-[42px] h-[42px]">
                                    <Icon name="user-icon-shadow" width={42} height={42} />
                                </div>
                                {/* User group icon - centered on shadow */}
                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[20px] h-[20px] overflow-hidden flex items-center justify-center">
                                    <Icon
                                        name="view-icon-white"
                                        width={20}
                                        height={16}
                                        className="[&_path]:stroke-white [&_path]:opacity-100"
                                    />
                                </div>
                            </div>

                            {/* Text Content */}
                            <div className="absolute left-[62px] top-1/2 -translate-y-1/2 flex flex-col gap-[3px]">
                                <p className="text-white/87 text-xs font-medium leading-[24px] tracking-[-0.24px] pr-1">
                                    Program Views
                                </p>
                                <p className="text-white text-xl font-semibold leading-[1.5]">
                                    945
                                </p>
                            </div>

                            {/* Increase Percentage */}
                            <div className="absolute left-[100px] top-[41px] flex items-center gap-[2px]">
                                <p className="text-[#38AA4B] text-[11px] font-normal leading-[17px]">
                                    +12%
                                </p>
                                <Icon name="insghts-icon" width={11} height={7} />
                            </div>
                        </div>


                        <div className="bg-white/8 opacity-90 py-2.5 px-3 rounded-2xl flex w-full min-w-[190px] max-w-[200px] items-center justify-between">
                            <div>
                                <div className="text-xs font-medium leading-[24px] tracking-[-0.24px] text-white/87 ">
                                    Athletes
                                </div>
                                <div className="text-xs font-medium leading-[24px] tracking-[-0.24px] text-white">
                                    Engagement
                                </div>
                            </div>
                            <CircularProgress
                                value={65.3}
                                color="#276AEE"
                                backgroundColor="rgba(122, 211, 255, 0.3)"
                            />
                        </div>

                        <div className="bg-white/8 opacity-90 py-2.5 px-3 rounded-2xl flex w-full min-w-[180px] max-w-[200px] items-center justify-between">
                            <div>
                                <div className="text-xs font-medium leading-[24px] tracking-[-0.24px] text-white/87 ">
                                    Session Attendance
                                </div>
                            </div>
                            <CircularProgress
                                value={35.7}
                                color="#12D85B"
                                backgroundColor="rgba(18, 216, 91, 0.2)"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
