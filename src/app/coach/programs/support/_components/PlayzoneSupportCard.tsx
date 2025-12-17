import Icon from '@/components/ui/Icon';
import React from 'react';

export default function PlayzoneSupportCard() {
    return (
        <div
            style={{
                background: "rgba(255, 255, 255, 0.3)",
                borderRadius: "16px",
            }}
            className="w-full p-5 backdrop-blur-3xl overflow-clip relative my-5"
        >
            <div className="flex gap-3 items-start">
                {/* Icon */}
                <div className="shrink-0">
                    <Icon
                        name="alert-circle"
                        width={24}
                        height={24}
                        className="text-[#141B34]"
                    />
                </div>

                {/* Text Content */}
                <div className="flex flex-col gap-[7px] items-start flex-1">
                    <p className="font-medium text-base leading-[1.5] text-[#141B34] w-full">
                        Playzone Support
                    </p>
                    <p className="font-normal text-sm leading-[1.3] text-[rgba(20,27,52,0.7)] w-full">
                        Here to ensure your program journey is smooth, secure, and stress-free.
                    </p>
                </div>
            </div>
        </div>
    );
}

