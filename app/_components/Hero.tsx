import Button from "./Button";

export default function Hero() {
  return (
      <header className="h-screen pt-11 bg-[#f0f0f0]">
        <div className="w-full px-8 flex flex-col gap-3">
          <h1 className="text-4xl font-semibold text-[#333333] text-center">
            Where your teams and AI coordinate work together
          </h1>
          <p className="text-center">
            See how your work connects to goals while working alongside AI that
            understands your business.
          </p>
        </div>
        <div className="flex flex-col gap-3 items-center justify-center mt-4 px-11">
          <Button className="w-full rounded-full text-[0.925rem] font-semibold bg-[#333] py-3 hover:bg-[#555] border">
            Get Started
          </Button>
          <Button className="w-full rounded-full text-[0.925rem] font-semibold bg-transparent text-[#222] py-3 hover:bg-[#e7e7e7] border border-[#555]">
            See how it works
          </Button>
        </div>
        <div className="px-11 mt-8">
          <video autoPlay muted loop className="rounded-lg">
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
        </div>
      </header>

  );
}
