import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header/Header";
import WelcomeBanner from "@/components/WelcomeBanner/WelcomeBanner";
import AboutMe from "@/components/AboutMe/AboutMe";
import Projects from "@/components/Projects/Projects";
import ContactMe from "@/components/ContactMe/ContactMe";
import CopyrightDisclaimer from "@/components/CopyrightDisclaimer/CopyrightDisclaimer";

export default function Home() {
  return (
    <div>
      <Header />
      <WelcomeBanner />
      <AboutMe />
      <Projects />
      <ContactMe />
      <CopyrightDisclaimer />
    </div>
  );
}
