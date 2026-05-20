import AnimatedBackground from "../components/AnimatedBackground.jsx";
import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";

export default function SiteLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <AnimatedBackground />
      <Navbar />
      <main className="relative z-10">{children}</main>
      <Footer />
    </div>
  );
}
