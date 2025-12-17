import Icon from '@/components/ui/Icon';
import React from 'react';

export default function TrustAndSecurity() {
    return (
        <div
            style={{
                background: "rgba(255, 255, 255, 0.6)",
                borderRadius: "16px",
            }}
            className="w-full p-5 overflow-hidden relative"
        >
            {/* Blurred Background Image */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
                <div
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[278px] opacity-50"
                    style={{
                        backgroundImage: `url('/suppor_bg.png')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                />
            </div>

            {/* Content */}
            <div className="relative flex flex-col gap-6 items-start w-full">
                {/* Icon Container */}
                <div
                    style={{
                        background: "rgba(255, 255, 255, 0.6)",
                        borderRadius: "66px",
                    }}
                    className="w-12 h-12 flex items-center justify-center shrink-0"
                >
                    <Icon
                        name="security-icon"
                        width={21}
                        height={21}
                        className="text-[#141B34]"
                    />
                </div>

                {/* Text Content */}
                <div className="flex flex-col gap-2 items-start w-full">
                    <p className="font-semibold text-base leading-[1.5] text-[#141B34] w-full">
                        Trust & Security
                    </p>
                    <p className="font-normal text-sm leading-[1.3] text-[rgba(20,27,52,0.7)] w-full">
                        Your information and payments are always handled with top-level encryption and verified processes. If you suspect suspicious activity, please contact us immediately.
                    </p>
                </div>
            </div>
        </div>
    );
}

