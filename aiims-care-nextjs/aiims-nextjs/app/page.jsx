import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import ProductSection from '@/components/ProductSection'
import AIForm from '@/components/AIForm'
import ReviewsSection from '@/components/ReviewsSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustBar />
      <ProductSection />
      <AIForm />
      <ReviewsSection />
      <CTASection />
      <Footer />
    </>
  )
}
