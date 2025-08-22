import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-[#0d4b5a] to-[#020230] px-6 py-20 mx-6 rounded-2xl mb-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-white">
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">Crafting Digital Experiences That Resonate</h1>
          <p className="text-lg text-[#d9e3e8] mb-8 leading-relaxed">We are a UI/UX design agency dedicated to creating intuitive and engaging digital products that drive business success.</p>
          <Link href="/contact">
            <Button className="bg-[#88d4c3] hover:bg-[#88d4c3]/90 text-[#0f1717] font-medium text-lg px-8 py-3">
              Request Your Project
            </Button>
          </Link>
        </div>
        <div className="relative flex justify-center">
          <img src="/hero_banner_image.svg" alt="A 3D-rendered laptop open on a desk, displaying a vibrant digital interface. The scene is set in a modern workspace with soft lighting and a creative, optimistic atmosphere. No visible text in the image." className="w-full max-w-md" />
        </div>
      </div>
    </section>
  );
}
