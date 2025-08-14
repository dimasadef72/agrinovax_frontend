import AboutSection from '@/components/About/AboutSection'
import Footer from '@/components/Footer/FooterSection'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <AboutSection />
      </main>
      <Footer />
    </div>
  )
}
