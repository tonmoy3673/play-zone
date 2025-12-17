import Icon from '@/components/ui/Icon';
import React from 'react';

interface ContactCardProps {
    icon: string;
    title: string;
    description: string;
    badge?: string;
    buttonText: string;
    buttonVariant: 'primary' | 'secondary';
    onButtonClick?: () => void;
}

const ContactCard: React.FC<ContactCardProps> = ({
    icon,
    title,
    description,
    badge,
    buttonText,
    buttonVariant,
    onButtonClick
}) => {
    return (
        <div
            style={{
                background: "rgba(255, 255, 255, 0.6)",
                borderRadius: "16px",
            }}
            className="w-full p-5 backdrop-blur-3xl overflow-clip relative"
        >
            <div className="flex flex-col gap-5 items-start">
                {/* Header with Icon, Text, and Badge */}
                <div className="flex flex-col gap-5 items-start w-full relative">
                    {/* Badge - positioned at top right */}
                    {badge && (
                        <div
                            style={{
                                background: "white",
                                borderRadius: "12px",
                            }}
                            className="absolute top-0 right-0 px-3 py-1.5 shrink-0"
                        >
                            <p className="font-medium text-[10px] leading-[1.4] text-[#141B34] whitespace-nowrap">
                                {badge}
                            </p>
                        </div>
                    )}

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
                        <p className="font-semibold text-base leading-[1.5] text-[#141B34] w-full">
                            {title}
                        </p>
                        <p className="font-normal text-sm leading-[1.3] text-[rgba(20,27,52,0.7)] w-full">
                            {description}
                        </p>
                    </div>
                </div>

                {/* Button */}
                <button
                    onClick={onButtonClick}
                    style={{
                        borderRadius: "100px",
                        ...(buttonVariant === 'primary'
                            ? {
                                background: "linear-gradient(177deg, #5C8FF7 10.06%, #276AEE 62.94%)",
                                border: "1px solid rgba(21, 86, 216, 0.3)",
                                color: "white"
                            }
                            : {
                                background: "rgba(69, 127, 243, 0.15)",
                                border: "1px solid rgba(21, 86, 216, 0.1)",
                                color: "#276AEE"
                            })
                    }}
                    className="w-full h-10 px-12 font-medium text-sm leading-[1.3] hover:brightness-110 transition-all duration-300 active:scale-[0.99]"
                >
                    {buttonText}
                </button>
            </div>
        </div>
    );
};

export default function NeedMoreHelp({ setIsOpenModal }: { setIsOpenModal: (isOpen: boolean) => void }) {
    const handleOpenModal = () => {
        setIsOpenModal(true);
    }
    return (
        <div
            style={{
                background: "rgba(255, 255, 255, 0.3)",
                borderRadius: "16px",
            }}
            className="w-full p-6 backdrop-blur-3xl overflow-clip relative"
        >
            <h3 className="text-xl font-medium leading-[1.5] text-[#141B34] mb-6">
                Need More Help?
            </h3>

            <div className="flex flex-col gap-4">
                <ContactCard
                    icon="video-icon"
                    title="Live Chat"
                    description="Connect instantly with a Playzone support agent"
                    badge="Mon–Fri, 9am–6pm"
                    buttonText="Start Chat"
                    buttonVariant="primary"
                    onButtonClick={handleOpenModal}
                />
                <ContactCard
                    icon="email-icon"
                    title="Email Us"
                    description="support@playzone.com"
                    buttonText="Send Email"
                    buttonVariant="secondary"
                />
                <ContactCard
                    icon="support-icon"
                    title="Help Articles"
                    description="Explore step-by-step guides and video tutorials"
                    buttonText="Browse Articles"
                    buttonVariant="secondary"
                />
            </div>
        </div>
    );
}

