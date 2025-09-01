import Hero from "./_components/HomePage/Hero";
import MovingAcross from "./_components/HomePage/MovingAcross";
import TrustedBy from "./_components/HomePage/TrustedBy";
import AsanaApart from "./_components/HomePage/AsanaApart";
import Connect300 from "./_components/HomePage/Connect300";
import TopCompanies from "./_components/HomePage/TopCompanies";
import GettingStarted from "./_components/HomePage/GettingStarted";
import PlatformSupport from "./_components/HomePage/PlatformSupport";
import PreFooter from "./_components/HomePage/PreFooter";

export default function Home() {
  return (
    <div className="mt-12 flex flex-col relative">
      <Hero />
      <TrustedBy />
      <MovingAcross />
      <AsanaApart />
      <Connect300 />
      <TopCompanies />
      <GettingStarted />
      <PlatformSupport />
      <PreFooter />
    </div>
  );
}
