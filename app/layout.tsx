import "./globals.css";
import { ThemeProvider } from "next-themes";

export const metadata = {
  title: "Portfolio",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="transition-all duration-300 dark:bg-black bg-white text-black dark:text-white selection:bg-fuchsia-300 selection:text-zinc-900">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
