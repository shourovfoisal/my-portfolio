import {
  Blogs,
  Commitment,
  Contact,
  Footer,
  Navbar,
  Portfolio,
  Welcome,
} from "@/components";

export default function Home() {
  return (
    <>
      <section className="fixed z-50 flex items-center h-28 w-full bg-white dark:bg-BlackTan">
        <div className="container">
          <Navbar />
        </div>
      </section>

      <section className="pt-28 min-h-screen flex items-center bg-white dark:bg-BlackTan">
        <div className="container pt-containerPaddingTop h-full">
          <Welcome />
        </div>
      </section>

      <section className="py-sectionPadding bg-bgLightSecondary dark:bg-NightBlack">
        <div className="container pt-containerPaddingTop">
          <Commitment />
        </div>
      </section>

      <section className="py-sectionPadding bg-white dark:bg-BlackTan">
        <div className="container pt-containerPaddingTop">
          <Portfolio />
        </div>
      </section>

      <section className="py-sectionPadding bg-bgLightSecondary dark:bg-NightBlack">
        <div className="container pt-containerPaddingTop">
          <Blogs />
        </div>
      </section>

      <section className="py-sectionPadding bg-white dark:bg-BlackTan">
        <div className="container pt-containerPaddingTop">
          <Contact />
        </div>
      </section>

      <section className="py-sectionPadding bg-white dark:bg-BlackTan">
        <div className="container pt-containerPaddingTop">
          <Footer />
        </div>
      </section>
    </>
  );
}
