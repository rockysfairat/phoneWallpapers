import "./globals.css";

import Nav from "../Components/Nav";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative overflow-x-hidden">
        {/* <Nav /> */}
        {children}
      </body>
    </html>
  );
}
