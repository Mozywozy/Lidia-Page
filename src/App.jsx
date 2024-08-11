import Content from "./components/Content";
import Cover from "./components/Cover";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Location from "./components/Location";
import Navbar from "./components/Navbar";
import Reviews from "./components/Reviews";
import Services from "./components/Services";

export default function App() {
  return (
    <>
      <Navbar />
      {/* first */}
      <section className="flex">
        <Content />
        <Cover />
      </section>

      {/* two */}
      <section className="">
        <Features />
      </section>

      {/* third */}
      <section>
        <Services />
      </section>

      {/* four */}
      <section>
        <Reviews />
      </section>

      {/* five */}
      <section>
        <Location />
      </section>

      {/* end */}
      <footer className="mt-24">
        <Footer />
      </footer>

    </>
  )
}
