import { Link } from 'react-router-dom'

const SOCIAL = {
  facebook: 'https://facebook.com/aiimscare',
  twitter: 'https://twitter.com/aiimscare',
  instagram: 'https://instagram.com/aiimscare',
}

export default function Footer() {
  return (
    <footer className="bg-medi-panel text-white mt-8 font-sans border-t border-accent/20">
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="w-full bg-medi-bg hover:bg-black py-3 text-sm text-accent"
      >
        Back to top
      </button>

      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-6 py-10 text-sm">
        <div>
          <h4 className="font-bold text-accent mb-3">Get to Know Us</h4>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/about" className="hover:text-accent">About AIIMS Care</Link></li>
            <li><Link to="/careers" className="hover:text-accent">Careers</Link></li>
            <li><Link to="/press" className="hover:text-accent">Press Releases</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-accent mb-3">Connect with Us</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href={SOCIAL.facebook} target="_blank" rel="noreferrer" className="hover:text-accent">Facebook</a></li>
            <li><a href={SOCIAL.twitter} target="_blank" rel="noreferrer" className="hover:text-accent">Twitter</a></li>
            <li><a href={SOCIAL.instagram} target="_blank" rel="noreferrer" className="hover:text-accent">Instagram</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-accent mb-3">Make Money with Us</h4>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/sell-with-us" className="hover:text-accent">Sell on AIIMS Care</Link></li>
            <li><Link to="/affiliate" className="hover:text-accent">Become an Affiliate</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-accent mb-3">Let Us Help You</h4>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/contact" className="hover:text-accent">Contact Us</Link></li>
            <li><Link to="/shipping-policy" className="hover:text-accent">Shipping Policy</Link></li>
            <li><Link to="/refund-policy" className="hover:text-accent">Returns & Refunds</Link></li>
            <li><Link to="/terms" className="hover:text-accent">Terms & Conditions</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-accent">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-accent/10 text-center text-xs text-gray-500 py-4">
        © {new Date().getFullYear()} AIIMS Care. All rights reserved.
      </div>
    </footer>
  )
}
