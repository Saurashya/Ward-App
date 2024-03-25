import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from './Components/NavBar/Page'
import Navbar2 from './Components/NavBar2/Page'
import Navbar3 from './Components/NavBar3/Page'
import OptionsBar from './Components/OptionsBar/Page'
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "WARD APP",
  description: "Ward App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar />
    <Navbar2 />
    <Navbar3 />
    <OptionsBar />
        {children}
        </body>
    </html>
  );
}
