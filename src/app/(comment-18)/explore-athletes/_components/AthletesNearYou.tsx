import Link from "next/link";
import AthleteList from "./AthleteList";

const AthletesNearYou = () => {
  return (
    <div className="space-y-5">
      <div className="flex items-center flex-wrap justify-between">
        <h3 className="text-xl font-medium text-black ">Athletes Near You </h3>
        <Link
          href={"/"}
          className="text-sm font-medium bg-[linear-gradient(177deg,#5C8FF7_10.06%,#276AEE_62.94%)] bg-clip-text text-transparent"
        >
          View All
        </Link>
      </div>

      <AthleteList />
    </div>
  );
};

export default AthletesNearYou;
