import { Card, CardContent } from "@/components/ui/card";
import { Palette, Code, Search } from "lucide-react";

export default function WhatWeDoSection() {
  return (
    <section className="px-6 py-16 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-[#0f1717] mb-12">What We Do</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <Card className="border-[#e5e8eb] hover:shadow-lg transition-shadow">
          <CardContent className="p-8">
            <div className="w-12 h-12 bg-[#e5e8eb] rounded-lg flex items-center justify-center mb-6">
              <Palette className="w-6 h-6 text-[#5e828c]" />
            </div>
            <h3 className="text-xl font-semibold text-[#0f1717] mb-4">User-Centric Design</h3>
            <p className="text-[#5e828c] leading-relaxed">Crafting intuitive interfaces that prioritize user needs and enhance engagement.</p>
          </CardContent>
        </Card>
        <Card className="border-[#e5e8eb] hover:shadow-lg transition-shadow">
          <CardContent className="p-8">
            <div className="w-12 h-12 bg-[#e5e8eb] rounded-lg flex items-center justify-center mb-6">
              <Code className="w-6 h-6 text-[#5e828c]" />
            </div>
            <h3 className="text-xl font-semibold text-[#0f1717] mb-4">Tech-Driven Solutions</h3>
            <p className="text-[#5e828c] leading-relaxed">Leveraging cutting-edge technologies to deliver robust and scalable digital products.</p>
          </CardContent>
        </Card>
        <Card className="border-[#e5e8eb] hover:shadow-lg transition-shadow">
          <CardContent className="p-8">
            <div className="w-12 h-12 bg-[#e5e8eb] rounded-lg flex items-center justify-center mb-6">
              <Search className="w-6 h-6 text-[#5e828c]" />
            </div>
            <h3 className="text-xl font-semibold text-[#0f1717] mb-4">Comprehensive Research</h3>
            <p className="text-[#5e828c] leading-relaxed">Conducting thorough user research to inform design decisions and ensure optimal usability.</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
