import Icon from "@/utils/icon";
import Card from "@/components/ui/Card";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedButton } from "@/components/ui/Button";

const methods = [
  {
    name: "Paypal",
    amount: "$9,240",
  },
  {
    name: "Master Card",
    amount: "$9,240",
  },
  {
    name: "Visa",
    amount: "$9,240",
  },
  {
    name: "Google Pay",
    amount: "$9,240",
  },
];

const PaymentMethod = () => {
  return (
    <Card className="bg-white/60">
      <div className="mb-5 flex items-center justify-between">
        <SectionHeader title="Payment Method" className="mb-0" />
        <AnimatedButton className="bg-primary-gradient border border-[#1556D84D] whitespace-nowrap px-4 py-2 h-10 flex items-center rounded-full gap-2 text-sm font-medium text-white">
          <Icon name="plus" height={20} width={20} />
          Add Method
        </AnimatedButton>
      </div>

      <div>
        {methods?.map((method, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between py-3 first:pt-0 last:pb-0 border-b border-[#5489F61A] last:border-b-0 text-sm font-medium text-dark"
          >
            <div className="flex items-center gap-3">
              <div className="size-12 flex items-center justify-center rounded-full bg-white">
                {method.name === "Paypal" ? (
                  <Icon name="paypal_emoji" width={17} height={21} />
                ) : method.name === "Master Card" ? (
                  <Icon name="mastercard_emoji" width={25} height={16} />
                ) : method.name === "Visa" ? (
                  <Icon name="visa_emoji" width={27} height={8} />
                ) : (
                  <Icon name="googlepay_emoji" width={31} height={12} />
                )}
              </div>
              <span className="text-dark font-medium text-xs">
                {method.name}
              </span>
            </div>
            <span>{method.amount}</span>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default PaymentMethod;
