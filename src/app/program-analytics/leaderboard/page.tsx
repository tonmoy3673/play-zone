import StatCards from "./_components/StatCards";
import RecognitionTools from "./_components/RecognitionTools";
import BadgeDistribution from "./_components/BadgeDistribution";
import LeaderboardRanking from "./_components/LeaderboardRanking";

export default function LeaderboardPage() {
  return (
    <div className="space-y-4">
      <StatCards />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <LeaderboardRanking />

        <div className="space-y-4">
          <BadgeDistribution />
          <RecognitionTools />
        </div>
      </div>
    </div>
  );
}
