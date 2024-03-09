import Banner from "@/organism/home/banner";
import AboutBanner from "@/organism/home/about-banner";
import Project from "@/organism/home/project";
import Contact from "@/organism/home/contact";
import Punchline from "@/organism/home/punchline";

export default function Home() {
  return (
    <main className="selection:bg-primary/30 scroll-smooth">
      <Banner />
      <AboutBanner />
      <Project />
      <Contact />
      <Punchline />
    </main>
  );
}
