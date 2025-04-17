import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 max-w-[1360px] mx-auto px-4 w-full">
        {children}
      </div>
      <Footer />
    </div>
  );
}
