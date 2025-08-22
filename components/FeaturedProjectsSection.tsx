"use client";
import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    title: "Project Alpha",
    description: "A mobile app designed to streamline personal finance management.",
    image: "/placeholder-y4ws8.png",
    alt: "Project Alpha mockup",
    bg: "from-[#d9e3e8] to-[#88d4c3]"
  },
  {
    title: "Project Beta",
    description: "A web platform for collaborative project management.",
    image: "/laptop-collaboration-mockup.png",
    alt: "Project Beta mockup",
    bg: "from-[#020230] to-[#0c0a78]"
  },
  {
    title: "Project Gamma",
    description: "An e-commerce site focused on sustainable fashion.",
    image: "/laptop-sustainable-fashion.png",
    alt: "Project Gamma mockup",
    bg: "from-[#e8975b] to-[#f8359e]"
  }
];

export default function FeaturedProjectsSection() {
  return (
    <section className="px-6 py-16 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-[#0f1717] mb-12">Featured Projects</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Card key={project.title} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className={`h-48 bg-gradient-to-br ${project.bg} p-6 flex items-center justify-center`}>
              <img src={project.image} alt={project.alt} className="w-full max-w-[180px]" />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-[#0f1717] mb-2">{project.title}</h3>
              <p className="text-[#5e828c]">{project.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
