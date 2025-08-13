import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Search, Palette } from "lucide-react"

export default function ExcalitechHomepage() {
  return (
    <div className="min-h-screen bg-[#ffffff]">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-[#0f1717] rounded-sm"></div>
          <span className="text-xl font-semibold text-[#0f1717]">Excalitech</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-[#5e828c] hover:text-[#0f1717] transition-colors">
            Services
          </a>
          <a href="#" className="text-[#5e828c] hover:text-[#0f1717] transition-colors">
            Portfolio
          </a>
          <a href="#" className="text-[#5e828c] hover:text-[#0f1717] transition-colors">
            Contact
          </a>
          <Button className="bg-[#88d4c3] hover:bg-[#88d4c3]/90 text-[#0f1717] font-medium">
            Request Your Project
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0d4b5a] to-[#020230] px-6 py-20 mx-6 rounded-2xl mb-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Crafting Digital Experiences That Resonate
            </h1>
            <p className="text-lg text-[#d9e3e8] mb-8 leading-relaxed">
              We are a UI/UX design agency dedicated to creating intuitive and engaging digital products that drive
              business success.
            </p>
            <Button className="bg-[#88d4c3] hover:bg-[#88d4c3]/90 text-[#0f1717] font-medium text-lg px-8 py-3">
              Request Your Project
            </Button>
          </div>
          <div className="relative flex justify-center">
            <img src="/isometric-laptop-code.png" alt="3D laptop illustration" className="w-full max-w-md" />
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="px-6 py-16 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-[#0f1717] mb-12">What We Do</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-[#e5e8eb] hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-[#e5e8eb] rounded-lg flex items-center justify-center mb-6">
                <Palette className="w-6 h-6 text-[#5e828c]" />
              </div>
              <h3 className="text-xl font-semibold text-[#0f1717] mb-4">User-Centric Design</h3>
              <p className="text-[#5e828c] leading-relaxed">
                Crafting intuitive interfaces that prioritize user needs and enhance engagement.
              </p>
            </CardContent>
          </Card>

          <Card className="border-[#e5e8eb] hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-[#e5e8eb] rounded-lg flex items-center justify-center mb-6">
                <Code className="w-6 h-6 text-[#5e828c]" />
              </div>
              <h3 className="text-xl font-semibold text-[#0f1717] mb-4">Tech-Driven Solutions</h3>
              <p className="text-[#5e828c] leading-relaxed">
                Leveraging cutting-edge technologies to deliver robust and scalable digital products.
              </p>
            </CardContent>
          </Card>

          <Card className="border-[#e5e8eb] hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-[#e5e8eb] rounded-lg flex items-center justify-center mb-6">
                <Search className="w-6 h-6 text-[#5e828c]" />
              </div>
              <h3 className="text-xl font-semibold text-[#0f1717] mb-4">Comprehensive Research</h3>
              <p className="text-[#5e828c] leading-relaxed">
                Conducting thorough user research to inform design decisions and ensure optimal usability.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="px-6 py-16 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-[#0f1717] mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gradient-to-br from-[#d9e3e8] to-[#88d4c3] p-6 flex items-center justify-center">
              <img src="/placeholder-y4ws8.png" alt="Project Alpha mockup" className="w-full max-w-[180px]" />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-[#0f1717] mb-2">Project Alpha</h3>
              <p className="text-[#5e828c]">A mobile app designed to streamline personal finance management.</p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gradient-to-br from-[#020230] to-[#0c0a78] p-6 flex items-center justify-center">
              <img src="/laptop-collaboration-mockup.png" alt="Project Beta mockup" className="w-full max-w-[180px]" />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-[#0f1717] mb-2">Project Beta</h3>
              <p className="text-[#5e828c]">A web platform for collaborative project management.</p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gradient-to-br from-[#e8975b] to-[#f8359e] p-6 flex items-center justify-center">
              <img src="/laptop-sustainable-fashion.png" alt="Project Gamma mockup" className="w-full max-w-[180px]" />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-[#0f1717] mb-2">Project Gamma</h3>
              <p className="text-[#5e828c]">An e-commerce site focused on sustainable fashion.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-[#0d4b5a] to-[#020230] px-6 py-20 mx-6 rounded-2xl mb-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to bring your vision to life?</h2>
          <p className="text-xl text-[#d9e3e8] mb-8">Let's collaborate and create something extraordinary together.</p>
          <Button className="bg-[#88d4c3] hover:bg-[#88d4c3]/90 text-[#0f1717] font-medium text-lg px-8 py-3">
            Start a Project
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[#5e828c]">
          <div className="flex gap-8">
            <a href="#" className="hover:text-[#0f1717] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#0f1717] transition-colors">
              Terms of Service
            </a>
          </div>
          <p className="text-sm">© 2024 Excalitech. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
