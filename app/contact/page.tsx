import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#ffffff]">
        <section className="px-6 py-20 rounded-2xl max-w-4xl mx-auto mt-16" aria-label="Contact">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-1 md:order-1 mb-8 md:mb-0">
              <h2 className="text-4xl font-bold text-[#0f1717] mb-6 text-left">Why Start Your Project With Us?</h2>
              <ul className="space-y-6 text-lg text-[#5e828c] leading-relaxed">
                <li><span className="font-semibold text-[#0f1717]">User-Centric Design:</span> We craft intuitive interfaces that prioritize your users' needs and maximize engagement.</li>
                <li><span className="font-semibold text-[#0f1717]">Tech-Driven Solutions:</span> Our team leverages the latest technologies to deliver robust, scalable digital products.</li>
                <li><span className="font-semibold text-[#0f1717]">Comprehensive Research:</span> We conduct thorough research to inform every design decision, ensuring your project is both beautiful and effective.</li>
                <li><span className="font-semibold text-[#0f1717]">Collaborative Approach:</span> We work closely with you to turn your vision into reality, supporting you every step of the way.</li>
              </ul>
            </div>
            <div className="order-2 md:order-2">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
