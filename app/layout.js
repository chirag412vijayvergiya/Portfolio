import { Josefin_Sans } from "next/font/google";
import Header from "./_components/Header";
import "@/app/_styles/globals.css";
import Aboutme from "./_components/Aboutme";

const josefin = Josefin_Sans({
  subsets: ["latin-ext"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s | Portfolio",
    default: "Welcome | Chirag Vijayvergiya",
  },
  description: "Chirag Vijayvergiya's Portfolio",
};

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body
//         style={{
//           backgroundImage: `
//           radial-gradient(40.87% 69.47% at 85.87% 21.98%, rgba(30, 115, 104, 0.09) 0%, rgba(121, 255, 175, 0) 100%),
//           radial-gradient(54.34% 45.76% at 15.8% 79.94%, rgba(0, 0, 204, 0.20) 0%, rgba(69, 3, 255, 0) 100%),
//           linear-gradient(to right, #01100F, #01100F)
//         `,
//         }}
//         className={`${josefin.className}  antialiased text-primary-100 min-h-screen flex flex-col`}
//       >
//         <Header />
//         <div className="flex-1  grid min-h-screen">
//           <main className="max-w-7xl mx-auto w-full border-b border-primary-900">
//             {children}
//           </main>
//           <Aboutme />
//         </div>

//         {/* <Aboutme /> */}
//       </body>
//     </html>
//   );
// }
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
        className={`${josefin.className} antialiased text-primary-100`}
      >
        <div
          className="bubble bubble-small"
          style={{ top: "20%", left: "15%", "--i": 1 }}
        ></div>
        <div
          className="bubble bubble-medium"
          style={{ top: "50%", left: "30%", "--i": 2 }}
        ></div>
        <div
          className="bubble bubble-large"
          style={{ top: "70%", left: "80%", "--i": 3 }}
        ></div>
        <div
          className="bubble bubble-small"
          style={{ top: "40%", left: "60%", "--i": 4 }}
        ></div>
        <div
          className="bubble bubble-medium"
          style={{ top: "80%", left: "40%", "--i": 5 }}
        ></div>

        {/* Main content */}
        <Header />
        <div className="flex-1 min-h-screen grid">
          <main className="max-w-7xl mx-auto w-full border-b border-primary-900">
            {children}
          </main>
          <Aboutme />
        </div>
      </body>
    </html>
  );
}
