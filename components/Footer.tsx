export default function Footer() {
  return (
    <footer className="px-6 py-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[#5e828c]">
        <div className="flex gap-8">
          <a href="#" className="hover:text-[#0f1717] transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-[#0f1717] transition-colors">Terms of Service</a>
        </div>
        <p className="text-sm">© 2024 Excalitech. All rights reserved.</p>
      </div>
    </footer>
  );
}
