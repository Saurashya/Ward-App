
import "./globals.css";


import Navbar from './Components/NavBar/Page';
import Navbar2 from './Components/NavBar2/Page';
import Navbar3 from './Components/NavBar3/Page';
import OptionsBar from './Components/OptionsBar/Page';
import LowerBar from './Components/LowerBar/page';

export const metadata = {
  title: "WARD APP",
  description: "Ward App",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body>
        
        <Navbar />
        <Navbar2 />
        <Navbar3 />
        <OptionsBar />
        {children}
        
        <LowerBar />
      </body>
    </html>
  );
}
