import Hero from "./_components/Hero";
import MovingAcross from "./_components/MovingAcross";
import TrustedBy from "./_components/TrustedBy";
import AsanaApart from "./_components/AsanaApart";
import Connect300 from "./_components/Connect300";
import TopCompanies from "./_components/TopCompanies";
import GettingStarted from "./_components/GettingStarted";
import PlatformSupport from "./_components/PlatformSupport";

export default function Home() {
  return (
    <div className="mt-12 flex flex-col">
      <Hero />
      <TrustedBy />
      <MovingAcross />
      <AsanaApart />
      <Connect300 />
      <TopCompanies/>
      <GettingStarted/>
      <PlatformSupport/>
    </div>
  );
}
