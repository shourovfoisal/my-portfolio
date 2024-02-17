import {
  Blogs,
  Contact,
  Footer,
  Navbar,
  Portfolio,
  Stats,
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

      <section className="pt-28 pb-12 xs:pb-16 sm:pb-20 md:pb-24 lg:pb-28 xl:pb-32 min-h-screen flex items-center bg-white dark:bg-BlackTan">
        <div className="container">
          <Welcome />
        </div>
      </section>

      <section className="py-12 xs:py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 bg-bgLightSecondary dark:bg-NightBlack">
        <div className="container">
          <Stats />
        </div>
      </section>

      <section className="py-12 xs:py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 bg-white dark:bg-BlackTan">
        <div className="container">
          <Portfolio />
        </div>
      </section>

      <section className="py-12 xs:py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 bg-bgLightSecondary dark:bg-NightBlack">
        <div className="container">
          <Blogs />
        </div>
      </section>

      <section className="py-12 xs:py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 bg-white dark:bg-BlackTan">
        <div className="container">
          <Contact />
        </div>
      </section>

      <section className="py-12 xs:py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 bg-white dark:bg-BlackTan">
        <div className="container">
          <Footer />
        </div>
      </section>
    </>
  );
}
