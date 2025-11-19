import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import Icon from "@/utils/icon";

const TicketInfo = () => {
  return (
    <Card className="bg-white/60 md:rounded-2xl">
      <div className="flex items-center gap-2">
        <Badge variant="danger">Urgent</Badge>
        <Badge variant="secondary">Bug Report</Badge>
      </div>

      <div className="space-y-2 mt-3 mb-4">
        <h4 className="text-lg font-medium text-dark">
          App crashes when uploading workout videos
        </h4>
        <p className="text-xs text-dark/70">
          The app force closes every time I try to upload a video larger 50MB.
          This happens on both IOS and android versions. I’ve tried clearing
          cache and reinstalling but the issue persists.
        </p>
      </div>

      <div className="flex items-center gap-1.5">
        <Icon name="clock" height={20} width={20} className="text-[#595F70]" />
        <span className="text-xs font-medium text-dark/70">
          Submitted 15 Min Ago
        </span>
      </div>
    </Card>
  );
};

export default TicketInfo;
