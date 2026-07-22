import { Mail, Phone, MapPin } from 'lucide-react'

export default function ContactUs() {
  return (
    <main className="bg-medi-bg min-h-[70vh] font-sans">
      <div className="max-w-3xl mx-auto px-4 py-10 bg-medi-panel border border-accent/20 my-6 rounded-lg">
        <h1 className="text-2xl font-bold mb-4 text-white">Contact Us</h1>
        <p className="text-sm text-gray-300 mb-6">
          Have a question about your order, a product, or anything else? We're here to help.
        </p>

        <div className="space-y-4 text-sm text-gray-300">
          <div className="flex items-center gap-3">
            <Mail size={18} className="text-accent" />
            <span>support@aiimscare.com</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone size={18} className="text-accent" />
            <span>+91 97725 01206</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin size={18} className="text-accent" />
            <span>Your business address here, India</span>
          </div>
        </div>

        <p className="text-xs text-gray-500 mt-6">
          We typically respond within 24-48 hours on business days.
        </p>
      </div>
    </main>
  )
}
