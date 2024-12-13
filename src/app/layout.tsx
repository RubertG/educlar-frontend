import type { Metadata } from "next"
import "./globals.css"
import { inter } from "@/core/fonts"
import { Nav } from "@/core/components"
import { Toaster } from "sonner"

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
        <link rel="icon" href="/logo.webp" type="image/webp" />
      </head>
      <body
        className={`${inter.className} antialiased bg-bg-100 text-text-100`}
      >
        <div className="min-h-screen grid grid-rows-[auto_1fr]">
          <Nav />
          <main className="container">
            {children}
          </main>
        </div>
        <Toaster toastOptions={{
          classNames: {
            error: "bg-red-600 border !bg-red-700 text-white flex items-center rounded-lg shadow-md",
            success: "bg-green-600 border !bg-green-700 text-white flex items-center rounded-lg shadow-md"
          }
        }} />
      </body>
    </html>
  )
}
