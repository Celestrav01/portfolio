import AboutSection from './components/AboutSection'
import EmailSection from './components/EmailSection'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ProjectSection from './components/ProjectSection'
import TopSection from './components/TopSection'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-20 mx-auto px-4 sm:px-8 py-4">
        <TopSection />
        <AboutSection />
        <ProjectSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  )
}
