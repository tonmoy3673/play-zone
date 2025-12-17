import Image from "next/image";

export default function LeaderboardCard() {
    return (
        <div className="h-[400px] bg-white/65 rounded-[20px] relative  overflow-hidden">
            <Image
                src="/images/leaderboard-bg.png"
                alt="leaderboard"
                width={400}
                height={400}
                className="absolute left-[-40px] bottom-[-110px] w-full h-full object-cover rotate-[150deg] blur-3xl opacity-70"
            />

            <div className="absolute text-center pt-4 w-full font-medium">
                Jan 2025
            </div>

            {/* #1 */}
            <div className="relative w-[200px] h-[380px]">
                <Image
                    src={"/images/lead/L-01.svg"}
                    alt="leaderboard"
                    width={200}
                    height={380}
                    className="absolute left-[300px] top-[200px] -translate-x-1/2 -translate-y-1/2 object-cover"
                />
                <Image
                    src={"/images/lead/L-u1.png"}
                    alt="leaderboard"
                    width={105}
                    height={150}
                    className="absolute left-[247px] top-[104px] object-cover rounded-sm"
                />
                <Image
                    src={"/images/lead/L1.svg"}
                    alt="leaderboard"
                    width={37}
                    height={54}
                    className="absolute left-[341px] top-[83px] rounded-sm"
                />
                <div className="absolute left-[287px] bottom-[117px] text-sm font-bold text-white z-10 text-center">
                    {327}
                </div>
                <div className="absolute left-[255px] bottom-[65px] text-sm font-semibold italic text-[#276AEE] z-10 w-[86px] text-center">
                    {"Marcus Williams"}
                </div>
            </div>
            {/* #2 */}
            <div className="relative w-[125px] h-[210px]">
                <Image
                    src={"/images/lead/L-02.svg"}
                    alt="leaderboard"
                    width={125}
                    height={210}
                    className="absolute left-[70px] top-[-250px] object-cover"
                />
                <Image
                    src={"/images/lead/L-u2.png"}
                    alt="leaderboard"
                    width={95}
                    height={100}
                    className="absolute left-[84px] top-[-233px] rounded-sm"
                />
                <Image
                    src={"/images/lead/L2.svg"}
                    alt="leaderboard"
                    width={37}
                    height={54}
                    className="absolute left-[164px] top-[-255px] rounded-sm"
                />
                <div className="absolute left-[120px] bottom-[266px] text-sm font-bold text-[#141B34CC] z-10 w-max text-center">
                    {293}
                </div>
                <div className="absolute left-[85px] bottom-[300px] text-sm font-semibold z-10 w-[100px] text-[#141B34CC] text-center">
                    {"Cameron  C."}
                </div>
            </div>

            {/* #3 */}
            <div className="relative w-[125px] h-[210px]">
                <Image
                    src={"/images/lead/L-03.svg"}
                    alt="leaderboard"
                    width={125}
                    height={210}
                    className="absolute left-[420px] top-[-455px] object-cover"
                />
                <Image
                    src={"/images/lead/L-u3.png"}
                    alt="leaderboard"
                    width={95}
                    height={100}
                    className="absolute left-[435px] top-[-438px] rounded-sm"
                />
                <Image
                    src={"/images/lead/L3.svg"}
                    alt="leaderboard"
                    width={37}
                    height={54}
                    className="absolute left-[520px] top-[-448px] rounded-sm"
                />
                <div className="absolute left-[470px] top-[-285px] text-sm font-bold text-white z-10 w-max text-center">
                    {293}
                </div>
                <div className="absolute left-[445px] top-[-315px] text-xs font-semibold z-10 w-max text-[#141B34] text-center">
                    {"Zaman Shahed"}
                </div>
            </div>
        </div>
    );
}
