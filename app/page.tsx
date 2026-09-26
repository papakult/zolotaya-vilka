import Header from "@/components/Header";
import CallFab from "@/components/CallFab";
import Hero from "@/components/Hero";
import Delivery from "@/components/Delivery";
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
        <Delivery />
        <BookingDelivery />
        <Contacts />
      </main>
      <Footer />
      <CallFab />
    </>
  );
}
