import Navbar from "../Components/navbar";
import Body from "../Components/body";
import Address from "../Components/Address";
import ContactForm from "@/Components/contactform";
import Footer from "@/Components/footer";

export default function Home() {
  return (
    <div className="grid grid-rows-auto min-h-screen py-8 px-1 pb-20 gap-0 lg:py-20 font-[family-name:var(--font-geist-sans)] bg-[#1F2A45] text-white">
      <Navbar />
      <Body />
      <Address />
      <ContactForm />
      <Footer />
    </div>
  );
}
