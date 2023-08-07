import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Inter, Andada_Pro } from "next/font/google";
import Footer from "@/components/footer/Footer";
import { ThemeProvider } from "@/context/ThemeContext";
import AuthProvider from "@/components/AuthProvider/AuthProvider";

const inter = Inter({ subsets: ["latin"] });
const andada_pro = Andada_Pro({ subsets: ["latin"] });

export const metadata = {
  title: "TechTopic",
  description: "Latest tech news",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={andada_pro.className}>
        <div className="loading ">
          <h1>TechTopic</h1>
          <img className="spinner invert" src="/loading.gif"></img>
        </div>
        <ThemeProvider>
          <AuthProvider>
            <div className="container">
              <Navbar />
              {children}
              <Footer />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
