import Select from "@/components/ui/Select";

const QuickReplay = () => {
  return (
    <Select
      placeholder="Select Quick Replay..."
      options={[
        { label: "Message One", value: "Message One" },
        { label: "Message Two", value: "Message Two" },
      ]}
      className="rounded-2xl h-14 bg-white/60"
    />
  );
};

export default QuickReplay;
