import Image from "next/image";
import React from "react";

type Props = {
    name: string;
    points: number;
    position: number;
    image: string;
};

export default function LeadUserCard({ name, points, position, image }: Props) {
    return (
        <div className="flex items-center gap-3 px-4 py-2 bg-white rounded-[12px] ">
            <div className="text-sm font-medium">
                {"#"}
                {position}
            </div>
            {position > 5 ? (
                <Image src={image} alt={name} width={45} height={45} />
            ) : (
                <div className="relative w-[65px] h-[45px]">
                    <div className="absolute left-0 -top-3 w-[70px] h-[70px]">
                        <Image src={image} alt={name} width={70} height={70} />
                    </div>
                </div>
            )}

            <div>
                <h1 className="font-medium">{name}</h1>
                <p className="text-sm text-[#141B34B2]">{points}</p>
            </div>
        </div>
    );
}
