"use client";
import {
  Blogs,
  Commitment,
  Contact,
  Footer,
  Navbar,
  Portfolio,
  Welcome,
} from "@/components";
import { useThemeContext } from "@/contexts/ThemeContext";
import { poppins } from "@/fonts";

export default function Home() {
  const { theme } = useThemeContext();

  return (
    <body className={poppins.className}>
      <div
        className={`pb-wrapperPaddingBottom ${
          theme === "light" ? "bg-white" : "bg-BlackTan"
        }`}
      >
        <section
          className={`fixed z-50 flex items-center h-40 w-full ${
            theme === "light" ? "bg-white" : "bg-BlackTan"
          }`}
        >
          <div className="container">
            <Navbar />
          </div>
        </section>

        <section
          className={`pt-40 min-h-screen flex items-center ${
            theme === "light" ? "bg-white" : "bg-BlackTan"
          }`}
        >
          <div className="container pt-containerPaddingTop h-full">
            <Welcome />
          </div>
        </section>

        <section
          className={`py-sectionPadding ${
            theme === "light" ? "bg-naplesYellow" : "bg-NightBlack"
          }`}
        >
          <div className="container pt-containerPaddingTop">
            <Commitment />
          </div>
        </section>

        <section
          className={`py-sectionPadding ${
            theme === "light" ? "bg-white" : "bg-BlackTan"
          }`}
        >
          <div className="container pt-containerPaddingTop">
            <Portfolio />
          </div>
        </section>

        <section
          className={`py-sectionPadding ${
            theme === "light" ? "bg-naplesYellow" : "bg-NightBlack"
          }`}
        >
          <div className="container pt-containerPaddingTop">
            <Blogs />
          </div>
        </section>

        <section
          className={`py-sectionPadding ${
            theme === "light" ? "bg-white" : "bg-BlackTan"
          }`}
        >
          <div className="container pt-containerPaddingTop">
            <Contact />
          </div>
        </section>

        <section
          className={`py-sectionPadding ${
            theme === "light" ? "bg-white" : "bg-BlackTan"
          }`}
        >
          <div className="container pt-containerPaddingTop">
            <Footer />
          </div>
        </section>
      </div>
    </body>
  );
}
