import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Dirac Delta - Engineers for Hire | High-Quality Consultants",
  description:
    "Premium engineering consultancy specializing in AI, observability solutions, MCP server development, and cutting-edge automation. Expert consultants for your next project.",
  keywords:
    "Dirac Delta, Engineers for Hire, High-Quality Consultants, Observability Solutions, MCP Server, AI Engineer, Workflow Automation, Data Science Consulting",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        <style>{`
html {
  font-family: ${poppins.style.fontFamily};
  --font-sans: ${poppins.variable};
}
        `}</style>
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
