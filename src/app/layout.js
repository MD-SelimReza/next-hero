import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import AuthProviders from "@/provider/AuthProviders";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ weight: ["400", "700", "900"], subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Next Hero",
    template: '%s | Next Hero'
  },
  description: "Next Hero Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthProviders>
        <body className={inter.className}>
          <Navbar />
          <div className="min-h-[calc(100vh-180px)] py-10">
            {children}
          </div>
          <footer className="border-t py-10 text-center text-xl">This my footer.</footer>
        </body>
      </AuthProviders>
    </html>
  );
}
