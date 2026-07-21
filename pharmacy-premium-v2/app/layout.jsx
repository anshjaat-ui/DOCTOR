export const metadata = {
  title: "Pharmacy App",
  description: "Test App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "Arial", padding: "20px" }}>
        <h1>My App</h1>
        {children}
      </body>
    </html>
  );
}
