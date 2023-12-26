export default function RootLayout({
  children,
}: {
  children: React.ReactNode
})
 {
  return (
    <html lang="en">
      <head><link rel="shortcut icon" href="/bringer.svg"  /></head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}