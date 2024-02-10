import {
  Blogs,
  Commitment,
  Contact,
  Footer,
  Navbar,
  Portfolio,
  Welcome,
} from "@/components";
import { poppins } from "@/fonts";

export default function Home() {
  return (
    <body className={poppins.className}>
      <div className="pb-wrapperPaddingBottom bg-BlackTan">
        <section className="fixed z-50 flex items-center h-32 w-full bg-BlackTan">
          <div className="container">
            <Navbar />
          </div>
        </section>

        <section className="pt-32 min-h-screen flex items-center bg-BlackTan">
          <div className="container pt-containerPaddingTop h-full">
            <Welcome />
          </div>
        </section>

        <section className="py-sectionPadding bg-NightBlack">
          <div className="container pt-containerPaddingTop">
            <Commitment />
          </div>
        </section>

        <section className="py-sectionPadding bg-BlackTan">
          <div className="container pt-containerPaddingTop">
            <Portfolio />
          </div>
        </section>

        <section className="py-sectionPadding bg-NightBlack">
          <div className="container pt-containerPaddingTop">
            <Blogs />
          </div>
        </section>

        <section className="py-sectionPadding bg-BlackTan">
          <div className="container pt-containerPaddingTop">
            <Contact />
          </div>
        </section>

        <section className="py-sectionPadding bg-BlackTan">
          <div className="container pt-containerPaddingTop">
            <Footer />
          </div>
        </section>
      </div>
    </body>
  );
}
