import Card from "@/components/ui/Card";
import Analytics from "./_components/Analytics";
import TopButtons from "./_components/TopButtons";
import Publishing from "./_components/Publishing";
import MatrixCards from "./_components/MatrixCards";
import DocumentStatus from "./_components/DocumentStatus";
import RecentVersions from "./_components/RecentVersions";
import ContentUpdate from "./_components/ContentUpdate";

const TermsAndPrivacyPage = () => {
  return (
    <div className="space-y-5">
      <MatrixCards />

      <Card className="md:px-8 after:absolute after:size-48 after:bg-gradient-to-tr after:blur-3xl after:from-blue-400 after:to-transparent after:bottom-0 after:left-0 after:z-[-1]">
        <TopButtons />

        <div className="grid lg:grid-cols-[1fr_369px] gap-4">
          <ContentUpdate />
          <div className="space-y-4">
            <DocumentStatus />
            <Publishing />
            <RecentVersions />
            <Analytics />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default TermsAndPrivacyPage;
