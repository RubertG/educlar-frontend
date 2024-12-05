import type { Metadata } from "next"
import "./globals.css"
import { inter } from "./core/fonts"
import { Nav } from "./core/components"

export const metadata: Metadata = {
  title: "EduCLAR - Gestor académico",
  description: "EduCLAR es un sistema de gestión académica realizado con Next.js."
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <head>
          <link rel="icon" href="/logo.webp" type="image/webp" />
        </head>
      </head>
      <body
        className={`${inter.variable} ${inter.variable} antialiased bg-bg-100 text-text-100`}
      >
        <Nav />
        {children}
      </body>
    </html>
  )
}
