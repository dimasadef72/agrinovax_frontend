import ContactSection from '@/components/Contact/ContactSection'
import Footer from '@/components/Footer/FooterSection'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
