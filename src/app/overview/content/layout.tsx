import SideBar from "./_components/SideBar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen bg-gradient-to-br from-[#E0EDF6] via-[#BAD1FFa6] to-[#AFF4FAa6]">
      <div className="lg:flex min-h-screen bg-white/50 rounded-2xl backdrop-blur-lg shadow-lg overflow-hidden p-5">
        <SideBar />
        <main className="w-full">{children}</main>
      </div>
    </div>
  );
}
