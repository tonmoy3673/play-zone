import ExportReport from "./ExportReport";

const TopHeader = () => {
  return (
    <div className="flex items-center justify-between mb-6 flex-wrap">
      <h2 className="text-2xl font-semibold text-dark">
        Executive Business Insights
      </h2>

      <ExportReport />
    </div>
  );
};

export default TopHeader;
