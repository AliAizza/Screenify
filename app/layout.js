import "./globals.css";

export const metadata = {
  title: "Screenify",
  description: "Watch all your favourite movies and series for free.",
  icons: {
    icon: '/assets/logo.svg'
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
