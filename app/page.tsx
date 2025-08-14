import Hero from '@/components/Hero/HeroSection'
import Footer from '@/components/Footer/FooterSection'
import FAQSection from '@/components/FAQ/FAQSection'
import TechSection from '@/components/Tech/TechSection'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Hero />
        <TechSection/>
        <FAQSection/>
      </main>
      <Footer />
    </div>
  )
}
