export default function Navbar() {
return (
  <nav className="fixed w-full shadow shadow-black/50 flex justify-between px-3 py-2 z-50 bg-amber-100 top-0">
    <div className="flex items-center justify-center gap-2 ">
      <div className="grid grid-cols-2 grid-rows-2 gap-y-0.5 gap-x-1">
        <div className="h-[.7rem] w-[.7rem] rounded-full bg-amber-700 col-span-full mx-auto" />
        <div className="h-[.7rem] w-[.7rem] rounded-full bg-amber-700" />
        <div className="h-[.7rem] w-[.7rem] rounded-full bg-amber-700" />
      </div>
      <div className="self-center bg-amber-300 h-fit">
        <h1 className="text-3xl leading-0">asana</h1>
      </div>
    </div>
    <div></div>
  </nav>
);
}
