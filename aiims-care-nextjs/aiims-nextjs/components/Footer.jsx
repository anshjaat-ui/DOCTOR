export default function Footer() {
  return (
    <footer className="bg-ink text-white/60">
      <div className="container-xl py-12 flex flex-col md:flex-row justify-between gap-6 text-sm">
        <div>
          <p className="font-display font-bold text-white text-lg">AIIMS Care</p>
          <p className="mt-2 max-w-xs text-white/50">
            Not affiliated with the All India Institute of Medical Sciences. For informational
            purposes only — not a substitute for professional medical advice.
          </p>
        </div>
        <div className="flex gap-10 flex-wrap">
          <div>
            <p className="font-semibold text-white mb-2">Company</p>
            <p>About</p>
            <p>Contact</p>
          </div>
          <div>
            <p className="font-semibold text-white mb-2">Legal</p>
            <p>Privacy Policy</p>
            <p>Terms</p>
          </div>
        </div>
      </div>
      <p className="text-center text-xs text-white/30 border-t border-white/10 py-5">
        © {new Date().getFullYear()} AIIMS Care Clinic. All rights reserved.
      </p>
    </footer>
  )
}
