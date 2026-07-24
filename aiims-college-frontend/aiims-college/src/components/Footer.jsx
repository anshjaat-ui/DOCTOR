export default function Footer() {
  return (
    <footer className="bg-ink text-white/60 mt-20">
      <div className="container-xl py-10 flex flex-col md:flex-row justify-between gap-6 text-sm">
        <div>
          <p className="font-display font-bold text-white text-lg">AIIMS Care College</p>
          <p className="mt-2 max-w-xs text-white/50">
            Not affiliated with the All India Institute of Medical Sciences. Admissions counselling
            and course information provided here is general guidance, not an official offer of admission.
          </p>
        </div>
        <div>
          <p className="font-semibold text-white mb-2">Contact</p>
          <p>admissions@aiimscarecollege.example</p>
        </div>
      </div>
      <p className="text-center text-xs text-white/30 border-t border-white/10 py-5">
        © {new Date().getFullYear()} AIIMS Care College.
      </p>
    </footer>
  )
}
