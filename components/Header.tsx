import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
      <Link href="/" className="flex items-center gap-2" aria-label="Excalitech Home">
        <div className="w-6 h-6 bg-[#0f1717] rounded-sm"></div>
        <span className="text-xl font-semibold text-[#0f1717]">Excalitech</span>
      </Link>
      <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
        <a href="#" className="text-[#5e828c] hover:text-[#0f1717] transition-colors">Services</a>
        <a href="#" className="text-[#5e828c] hover:text-[#0f1717] transition-colors">Portfolio</a>
        {/* <a href="/contact" className="text-[#5e828c] hover:text-[#0f1717] transition-colors">Contact</a> */}
        <Link href="/contact">
          <Button className="bg-[#88d4c3] hover:bg-[#88d4c3]/90 text-[#0f1717] font-medium">Request Your Project</Button>
        </Link>
      </nav>
    </header>
  );
}
