import Link from "next/link";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Home() {
  return (
    <>
      <Link href='/pages/pro'>Pro Extsy Page</Link>
      <Footer />
    </>
  );
}
