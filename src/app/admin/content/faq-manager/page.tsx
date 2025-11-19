import Filter from "./_components/Filter";
import AddFAQ from "./_components/AddFAQ";
import FaqList from "./_components/FaqList";
import MatrixCards from "./_components/MatrixCards";

const FAQPage = () => {
  return (
    <div className="space-y-5">
      <MatrixCards />

      <div className="bg-white/30 rounded-2xl md:rounded-3xl p-5 md:p-8 border border-white/80 overflow-hidden space-y-5">
        <div className="flex items-center gap-4 justify-between flex-wrap">
          <Filter />

          <AddFAQ />
        </div>

        <FaqList />
      </div>
    </div>
  );
};

export default FAQPage;
