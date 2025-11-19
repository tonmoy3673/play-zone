import CreatePromoCode from "./CreatePromoCode";

const TopHeader = () => {
  return (
    <div className="flex items-center justify-between gap-2 mb-6 flex-wrap">
      <h2 className="text-2xl font-semibold text-dark">Subscription Control</h2>

      <CreatePromoCode />
    </div>
  );
};

export default TopHeader;
