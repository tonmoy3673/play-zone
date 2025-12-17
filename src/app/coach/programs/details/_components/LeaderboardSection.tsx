import GlassCard from "@/components/ui/GlassCard";
import LeaderboardCard from "./LeaderboardCard";
import LeaderboardList from "./LeaderboardList";
import { AnimatedButton } from "@/components/ui/Button";

export default function LeaderboardSection() {
    return (
        <div className="w-full">
            <GlassCard>
                <div className="flex items-center justify-between">
                    <h1 className="text-xl font-bold">Leaderboard</h1>
                    <AnimatedButton
                        type="button"
                        style={{
                            borderRadius: "100px",
                            background:
                                "var(--Gradient, linear-gradient(177deg, #5C8FF7 10.06%, #276AEE 62.94%))",
                        }}
                        className=" text-white px-5 py-2.5  text-sm font-medium"
                    >
                        View more
                    </AnimatedButton>
                </div>
                <div className="pt-6">
                    <LeaderboardCard />
                </div>

                <div className="pt-4">
                    <LeaderboardList />
                </div>
            </GlassCard>
        </div>
    );
}
