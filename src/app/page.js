import Header from "@/components/ui/Header";
import Hero from "@/components/ui/Hero";
import About from "@/components/ui/About";
import Programs from "@/components/ui/Programs";
import Statistics from "@/components/ui/Statistics";
import Timeline from "@/components/ui/Timeline";
import Testimonials from "@/components/ui/Testimonials";
import Contact from "@/components/ui/Contact";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Programs />
      <Statistics />
      <Timeline />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
