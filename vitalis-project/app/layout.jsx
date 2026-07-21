import './globals.css';

export const metadata = {
  title: 'Vitalis — Premium Men\'s Health',
  description: 'Clinically-formulated supplements, AI-guided health plans, and expert-backed care for modern men.',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-ink antialiased selection:bg-emerald-300 selection:text-ink">
        {children}
      </body>
    </html>
  );
}
