import "./globals.css"
import type { Metadata } from "next"
import Navbar from "@/components/layout/Navbar"
import { ThemeProvider } from "next-themes"

export const metadata: Metadata = {
  title: "Vijay | AI & Data Science Portfolio",
  description:
    "AI & Data Science Engineer specializing in Machine Learning, IoT, and Full-Stack Development.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <Navbar />
          <main className="mx-auto max-w-7xl px-6 py-10">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
