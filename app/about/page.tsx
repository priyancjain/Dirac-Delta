import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Award, Users, Zap, Target, BookOpen, Trophy } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 lg:pt-32 lg:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-fade-in-up">
            About{" "}
            <span className="bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-purple)] bg-clip-text text-transparent">
              Dirac Delta
            </span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed animate-fade-in-up">
            We are a premium engineering consultancy dedicated to delivering cutting-edge solutions that transform
            businesses and drive innovation.
          </p>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in-up">
              <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-brand-blue)] to-[var(--color-brand-purple)] rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Mission</h3>
              <p className="text-gray-600">
                To bridge the gap between cutting-edge technology and practical business solutions, delivering
                exceptional engineering expertise that drives measurable results.
              </p>
            </div>

            <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-brand-blue)] to-[var(--color-brand-purple)] rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Approach</h3>
              <p className="text-gray-600">
                We combine deep technical expertise with innovative thinking to create solutions that are not just
                functional, but transformative for your business.
              </p>
            </div>

            <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-brand-blue)] to-[var(--color-brand-purple)] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Values</h3>
              <p className="text-gray-600">
                Excellence, innovation, and integrity guide everything we do. We believe in delivering solutions that
                exceed expectations and create lasting value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Meet Our Founder</h2>
              <h3 className="text-2xl font-semibold text-[var(--color-brand-blue)] mb-4">Priyanshi Jain</h3>
              <p className="text-lg text-gray-600 mb-6">AI Engineer with MTech in AI & Data Science (CGPA 9.04)</p>

              <div className="space-y-4 text-gray-600">
                <p>
                  Priyanshi is an accomplished AI engineer with extensive experience in designing and delivering
                  AI-powered systems, backend workflows, and automation pipelines. Her expertise spans across machine
                  learning, data science, and enterprise-grade system architecture.
                </p>
                <p>
                  With multiple hackathon victories and experience organizing a national 36-hour hackathon, she brings
                  both technical excellence and leadership to every project. Her work with government and enterprise
                  clients demonstrates her ability to deliver solutions that meet the highest standards of quality and
                  reliability.
                </p>
                <p>
                  Priyanshi's passion for innovation and commitment to excellence drives Dirac Delta's mission to
                  provide cutting-edge engineering solutions that transform businesses.
                </p>
              </div>

              <div className="mt-8">
                <Button
                  asChild
                  className="bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-purple)] hover:opacity-90"
                >
                  <Link href="/contact">Work With Us</Link>
                </Button>
              </div>
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8">
                <h4 className="text-xl font-semibold text-gray-900 mb-6">Key Achievements</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <BookOpen className="w-5 h-5 text-[var(--color-brand-blue)] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Academic Excellence</p>
                      <p className="text-sm text-gray-600">MTech in AI & Data Science with 9.04 CGPA</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Trophy className="w-5 h-5 text-[var(--color-brand-purple)] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Competition Success</p>
                      <p className="text-sm text-gray-600">Multiple hackathon wins and national event organization</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-[var(--color-brand-blue)] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Enterprise Experience</p>
                      <p className="text-sm text-gray-600">Government and enterprise tech initiative consulting</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-[var(--color-brand-purple)] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Technical Leadership</p>
                      <p className="text-sm text-gray-600">AI-powered systems and ML-driven analytics expertise</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
