import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { FeaturedVerse } from "@/components/home/FeaturedVerse";
import { Activities } from "@/components/home/Activities";
import { UpcomingEvents } from "@/components/home/UpcomingEvents";
import { LatestContent } from "@/components/home/LatestContent";
import { CallToAction } from "@/components/home/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <FeaturedVerse />
        <Activities />
        <UpcomingEvents />
        <LatestContent />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
