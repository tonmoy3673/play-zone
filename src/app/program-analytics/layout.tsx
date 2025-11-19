import Icon from "@/utils/icon";
import Image from "next/image";
import { AnimatedButton } from "@/components/ui/Button";
import Header from "@/components/Sidebar/DashboardHeader";
import NavigationTabs from "./_components/NavigationTabs";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`min-h-screen pl-4 lg:pl-7 bg-gradient-to-br from-[#E0EDF6] via-[#BAD1FFa6] to-[#AFF4FAa6]`}
    >
      <div className="flex flex-col overflow-x-hidden">
        <Header />

        <main className="scrollbar-thin md:scrollbar scrollbar-thumb-green-500 scrollbar-track-green-100 p-4 flex-1 overflow-y-auto ">
          <div className="max-w-screen-2xl mx-auto">
            {/* Program Header */}
            <div className="flex items-start justify-between mb-6 flex-wrap gap-y-2">
              <div className="flex items-center gap-4">
                <div className="size-16 relative rounded-xl flex-shrink-0 overflow-hidden">
                  <Image
                    src={
                      "https://images.unsplash.com/photo-1544765773-a8dce1f272f6?fit=crop&q=80&w=397"
                    }
                    alt="Profile"
                    fill
                    className="object-cover size-full"
                  />
                </div>

                <div>
                  <h1 className="text-xl sm:text-2xl font-semibold text-dark">
                    QB Elite Vol. 3 - Analytics
                  </h1>
                  <p className="text-xs text-dark font-medium mt-1">
                    65 Total Athletes
                    <span className="bg-[linear-gradient(177deg,#19A855_10.06%,#0B9545_62.94%)] bg-clip-text text-transparent">
                      {" "}
                      • Active
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex gap-2 flex-wrap">
                <AnimatedButton className="bg-primary-gradient border border-[#1556D84D] whitespace-nowrap px-4 py-2.5 md:px-6 md:py-4 md:h-14 flex items-center rounded-full gap-2 text-sm font-medium text-white">
                  <Icon name="left_arrow" height={20} width={20} />
                  Return to Dashboard
                </AnimatedButton>
                <AnimatedButton className="bg-[#1556D826] border border-[#1556D81A] whitespace-nowrap px-4 py-2.5 md:px-6 md:py-4 md:h-14 flex items-center rounded-full gap-2 text-sm font-medium">
                  <Icon
                    name="download"
                    height={20}
                    width={20}
                    className="text-[#276AEE]"
                  />
                  <span className="primary-gradient-text">
                    Export Report PDF
                  </span>
                </AnimatedButton>
              </div>
            </div>

            <NavigationTabs />

            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
