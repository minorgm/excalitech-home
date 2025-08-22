import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CallToActionSection() {
  return (
    <section className="bg-gradient-to-r from-[#0d4b5a] to-[#020230] px-6 py-20 mx-6 rounded-2xl mb-20" aria-label="Call To Action">
      <div className="max-w-4xl mx-auto text-center text-white">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to bring your vision to life?</h2>
        <p className="text-xl text-[#d9e3e8] mb-8">Let's collaborate and create something extraordinary together.</p>
        <Link href="/contact">
          <Button className="bg-[#88d4c3] hover:bg-[#88d4c3]/90 text-[#0f1717] font-medium text-lg px-8 py-3">
            Request Your Project
          </Button>
        </Link>
      </div>
    </section>
  );
}
