import Header from '@/components/Header.jsx'
import Hero from '@/components/Hero.jsx'
import Pain from '@/components/Pain.jsx'
import Enemy from '@/components/Enemy.jsx'
import Transform from '@/components/Transform.jsx'
import Modules from '@/components/Modules.jsx'
import ForWhom from '@/components/ForWhom.jsx'
import Authority from '@/components/Authority.jsx'
import Testimonials from '@/components/Testimonials.jsx'
import Bonus from '@/components/Bonus.jsx'
import Offer from '@/components/Offer.jsx'
import PaymentTrust from '@/components/PaymentTrust.jsx'
import Faq from '@/components/Faq.jsx'
import FinalCta from '@/components/FinalCta.jsx'
import Footer from '@/components/Footer.jsx'
import StickyCTA from '@/components/StickyCTA.jsx'

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Pain />
        <Enemy />
        <Transform />
        <Modules />
        <ForWhom />
        <Authority />
        <Testimonials />
        <Bonus />
        <Offer />
        <PaymentTrust />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <StickyCTA />
    </>
  )
}
