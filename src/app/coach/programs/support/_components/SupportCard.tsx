import GlassCard from '@/components/ui/GlassCard';
import Icon from '@/components/ui/Icon';
import React from 'react';

interface SupportCardProps {
    icon: string;
    title: string;
    description: string;
}

export default function SupportCard({ icon, title, description }: SupportCardProps) {
    return (
        <GlassCard>

            <div
                // style={{
                //     background: "rgba(255, 255, 255, 0.3)",
                //     borderRadius: "16px",
                // }}
                // className="w-full p-5 backdrop-blur-3xl overflow-clip relative"
            >
                <div className="flex flex-col gap-6 items-start">
                    {/* Icon Container */}
                    <div
                        style={{
                            background: "white",
                            borderRadius: "66px",
                        }}
                        className="w-12 h-12 flex items-center justify-center shrink-0"
                    >
                        <Icon
                            name={icon}
                            width={24}
                            height={24}
                            className="text-[#141B34]"
                        />
                    </div>

                    {/* Text Content */}
                    <div className="flex flex-col gap-2 items-start w-full">
                        <p className="font-medium text-base leading-[1.5] text-[#141B34] w-full">
                            {title}
                        </p>
                        <p className="font-normal text-sm leading-[1.3] text-[rgba(20,27,52,0.7)] w-full">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </GlassCard>

    );
}

