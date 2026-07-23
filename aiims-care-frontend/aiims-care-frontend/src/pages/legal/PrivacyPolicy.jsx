export default function PrivacyPolicy() {
  return (
    <main className="bg-medi-bg min-h-[70vh] font-sans">
      <div className="max-w-3xl mx-auto px-4 py-10 bg-medi-panel border border-accent/20 my-6 rounded-lg prose">
        <h1 className="text-2xl font-bold mb-4 text-white">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-6">Last updated: {new Date().toLocaleDateString('en-IN')}</p>

        <div className="space-y-4 text-sm text-gray-300">
          <p>AIIMS Care ("we", "us", "our") is committed to protecting your privacy. This policy explains what information we collect, how we use it, and your rights.</p>

          <h2 className="font-bold text-base mt-6 text-accent">Information We Collect</h2>
          <p>When you create an account, place an order, or contact us, we collect: your name, email address, phone number, shipping address, and order history. We currently offer Cash on Delivery (COD) — no online card or bank details are collected at checkout.</p>

          <h2 className="font-bold text-base mt-6 text-accent">How We Use Your Information</h2>
          <p>We use your information to process orders, communicate order updates, provide customer support, and improve our services. We do not sell your personal information to third parties.</p>

          <h2 className="font-bold text-base mt-6 text-accent">Data Security</h2>
          <p>We use industry-standard measures, including password hashing and secure connections (HTTPS), to protect your data. However, no method of transmission over the internet is 100% secure.</p>

          <h2 className="font-bold text-base mt-6 text-accent">Cookies</h2>
          <p>We use browser local storage to keep you signed in and remember your cart. We do not use tracking cookies for advertising purposes.</p>

          <h2 className="font-bold text-base mt-6 text-accent">Your Rights</h2>
          <p>You may request access to, correction of, or deletion of your personal data by contacting us at the email below.</p>

          <h2 className="font-bold text-base mt-6 text-accent">Contact Us</h2>
          <p>For any privacy-related questions, please reach out via our Contact Us page.</p>
        </div>
      </div>
    </main>
  )
}
