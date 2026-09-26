import Header from "@/components/Header";
import CallFab from "@/components/CallFab";
import Hero from "@/components/Hero";
import { About, BookingDelivery, Contacts, Footer, MenuLight, Quote } from "@/components/Sections";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Quote />
        <MenuLight />
        <BookingDelivery />
        <Contacts />
      </main>
      <Footer />
      <CallFab />
    </>
  );
}
