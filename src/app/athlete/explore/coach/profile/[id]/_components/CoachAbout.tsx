import Link from "next/link";
import Icon from "@/utils/icon";
import Card from "@/components/ui/Card";
import WatchCoachVideo from "./WatchCoachVideo";
import { AnimatedButton } from "@/components/ui/Button";
import { SectionHeader } from "@/components/shared/SectionHeader";

export default function CoachAbout() {
  return (
    <Card className="bg-white/60 space-y-6 lg:space-y-8">
      <div>
        <SectionHeader title="About Coach Michael Thompson" className="mb-4" />

        <p className="text-dark/70 text-sm">
          Michael Thompson is a former NFL quarterback and current elite
          quarterback development specialist with over 15 years of professional
          coaching experience. He has worked with youth academies, high school
          programs, college teams, and professional organizations across the
          United States.
          <br />
          <br />
          His specialized quarterback development programs have helped develop
          numerous college and professional quarterbacks. David&apos;s coaching
          philosophy focuses on fundamentals, mental preparation, and
          game-situation decision making.
        </p>
      </div>

      <div>
        <SectionHeader title="Career Highlights" className="mb-4" />

        <ul className="list-none list-inside space-y-3">
          {[
            "Former NFL Quarterback (2005–2012)",
            "NCAA Division I quarterback coach at USC (2013-2018)",
            "Developed 12 quarterbacks who went on to play professionally",
            'Winner of "Coach of the Year" award (2019, 2021)',
          ].map((item, idx) => (
            <li key={idx} className="flex items-center gap-2 text-dark text-sm">
              <div className="size-4 rounded-full bg-white flex items-center justify-center">
                <div className="size-2 bg-dark rounded-full" />
              </div>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap gap-2 items-center">
        <WatchCoachVideo />

        <Link href={"/gallery-highlights"}>
          <AnimatedButton className="font-medium px-6 flex items-center justify-center gap-2 text-sm h-14 rounded-full transition-all whitespace-nowrap border border-[#1556D81A] bg-[#1556D826]">
            <Icon
              name="image"
              height={24}
              width={24}
              className="text-[#5C8FF7]"
            />
            <span className="primary-gradient-text">Gallery</span>
          </AnimatedButton>
        </Link>
      </div>
    </Card>
  );
}
