import './globals.css'

export const metadata = {
  title: 'AIIMS Care — Doctor-Formulated Wellness Kits',
  description:
    'Premium, doctor-formulated wellness kits with an AI symptom check. Kidney, skin, hair, and more — delivered fast.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Sora:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
