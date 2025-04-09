import { NavBar } from "./_components/navBar";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" dark:bg-[#1F1F1F] ">
      <NavBar />
      <main className=" pt-40">{children}</main>
    </div>
  );
};

export default MarketingLayout;
