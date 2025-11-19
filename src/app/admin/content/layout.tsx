import TopHeader from "./_components/TopHeader";
import NavigationTabs from "./_components/NavigationTabs";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <TopHeader />

      <NavigationTabs />

      {children}
    </div>
  );
}
