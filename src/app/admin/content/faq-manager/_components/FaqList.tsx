import FaqCard, { FaqProp } from "./FaqCard";
import Pagination from "@/components/shared/Pagination";

const announces: FaqProp[] = [
  {
    title: "The Battle Begins!",
    description:
      "The Max Paly starts this 24 june at NY. Join us for back-to-back matches, thrilling goals, and non-stop energy",
    subject: "Account",
    views: "1,244",
    comments: "98% Helpfull",
    date: "Jan 16, 2025",
  },
  {
    title: "The Battle Begins!",
    description:
      "The Max Paly starts this 24 june at NY. Join us for back-to-back matches, thrilling goals, and non-stop energy",
    subject: "Account",
    views: "1,244",
    comments: "98% Helpfull",
    date: "Jan 16, 2025",
  },
  {
    title: "The Battle Begins!",
    description:
      "The Max Paly starts this 24 june at NY. Join us for back-to-back matches, thrilling goals, and non-stop energy",
    subject: "Account",
    views: "1,244",
    comments: "98% Helpfull",
    date: "Jan 16, 2025",
  },
];

const FaqList = () => {
  return (
    <>
      <div className="grid gap-3">
        {announces?.map((faq, idx) => (
          <FaqCard key={idx} faq={faq} />
        ))}
      </div>

      <Pagination text="Showing 5 of 230 FAQ Manager" />
    </>
  );
};

export default FaqList;
