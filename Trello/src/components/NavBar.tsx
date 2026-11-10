import { LayoutGrid, Megaphone, Bell, CircleQuestionMark, CircleUser, Search } from "lucide-react";

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between bg-[#1F1F21] px-4 py-2 text-[#A9ABAF]">
      <div className="flex items-center gap-3">
        <LayoutGrid className="h-5 w-5 cursor-pointer hover:text-white" />
        <img src="/favicon.svg" alt="Logo" className="h-6 w-6" />
      </div>
      <div className="flex w-full max-w-xl items-center gap-2 px-4">
        <div className="relative flex-1">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Search className="h-4 w-4 text-[#A9ABAF]" />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="w-full rounded-md border border-[#383A3F] bg-[#282A2E] py-1 pl-9 pr-4 text-sm text-white placeholder-[#A9ABAF] focus:border-[#669DF1] focus:outline-none"
          />
        </div>
        <button className="shrink-0 rounded-md bg-[#669DF1] px-3 py-1 text-sm font-medium text-black hover:bg-[#528be3]">
          Create
        </button>
      </div>
      <div className="flex items-center gap-4">
        <Megaphone className="h-5 w-5 cursor-pointer hover:text-white" />
        <Bell className="h-5 w-5 cursor-pointer hover:text-white" />
        <CircleQuestionMark className="h-5 w-5 cursor-pointer hover:text-white" />
        <CircleUser className="h-5 w-5 cursor-pointer hover:text-white" />
      </div>
    </nav>
  );
}
