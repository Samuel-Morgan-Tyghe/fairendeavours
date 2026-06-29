import {Geist, Geist_Mono, Inter} from "next/font/google";
import "./globals.css";

const geistSans = Geist_Mono({
  subsets: ["latin"],
});
export const metadata = {
  title: "Fair Endeavours",
  description: "Live music in the South West, UK and beyond",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
