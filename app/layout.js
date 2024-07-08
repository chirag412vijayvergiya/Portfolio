import { Josefin_Sans } from "next/font/google";
import Header from "./_components/Header";
import "@/app/_styles/globals.css";
import Aboutme from "./_components/Aboutme";

const josefin = Josefin_Sans({
  subsets: ["latin-ext"],
  display: "swap",
});

export const metadata = {
  // title: "The Wild Oasis",
  title: {
    template: "%s | Portfolio",
    default: "Welcome | Chirag Vijayvergiya",
  },
  description: "Chirag Vijayvergiya's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          backgroundImage: `
          radial-gradient(40.87% 69.47% at 85.87% 21.98%, rgba(30, 115, 104, 0.09) 0%, rgba(121, 255, 175, 0) 100%),
          radial-gradient(54.34% 45.76% at 15.8% 79.94%, rgba(0, 0, 204, 0.20) 0%, rgba(69, 3, 255, 0) 100%),
          linear-gradient(to right, #01100F, #01100F)
        `,
        }}
        className={`${josefin.className}  antialiased text-primary-100 min-h-screen flex flex-col`}
      >
        <Header />
        <div className="flex-1  grid min-h-screen">
          <main className="max-w-7xl mx-auto w-full">{children}</main>
          <Aboutme />
        </div>

        {/* <Aboutme /> */}
      </body>
    </html>
  );
}
