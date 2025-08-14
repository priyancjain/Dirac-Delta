import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Users, Zap, Target } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative section-padding lg:pt-32 lg:pb-24 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 opacity-60"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[var(--color-brand-blue)]/10 to-transparent rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[var(--color-brand-purple)]/10 to-transparent rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>

        <div className="relative max-w-7xl mx-auto container-padding">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-responsive-4xl lg:text-responsive-5xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="block">Engineers for Hire.</span>
              <span className="block gradient-text">High-Quality Consultants</span>
              <span className="block">for Cutting-Edge Solutions.</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Premium engineering consultancy specializing in AI, observability solutions, MCP server development, and
              workflow automation. Transform your ideas into reality with expert consultants who deliver exceptional
              results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                asChild
                size="lg"
                className="btn-gradient hover:opacity-90 transition-all duration-300 text-lg px-8 py-3 hover-lift"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  Hire Expert Engineers
                  <ArrowRight size={20} />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-gray-300 hover:border-gray-400 text-lg px-8 py-3 bg-transparent hover-lift"
              >
                <Link href="/projects">View Our Work</Link>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <CheckCircle size={16} className="text-green-500" />
                <span>MTech AI & Data Science</span>
              </div>
              <div className="flex items-center gap-2 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <Users size={16} className="text-blue-500" />
                <span>Enterprise & Government Clients</span>
              </div>
              <div className="flex items-center gap-2 animate-fade-in" style={{ animationDelay: "0.6s" }}>
                <Zap size={16} className="text-purple-500" />
                <span>Cutting-Edge Technology</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-responsive-2xl font-bold text-gray-900 mb-4">Expertise That Drives Innovation</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From AI-powered solutions to enterprise-grade observability systems, we deliver the technical excellence
              your projects demand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: <Target className="w-8 h-8" />,
                title: "AI & Data Science",
                description: "Generative AI, NLP, computer vision, and ML-driven analytics solutions.",
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Observability Solutions",
                description: "Monitoring systems and MCP server development for enterprise applications.",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Workflow Automation",
                description: "API integration, backend architecture, and cloud deployment solutions.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm card-hover animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-[var(--color-brand-blue)] mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              className="border-2 border-[var(--color-brand-blue)] text-[var(--color-brand-blue)] hover:bg-[var(--color-brand-blue)] hover:text-white transition-all duration-300 bg-transparent hover-lift"
            >
              <Link href="/services">Explore All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding btn-gradient">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <h2 className="text-responsive-2xl font-bold text-white mb-4">Ready to Transform Your Project?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Get expert engineering consultation tailored to your specific needs.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-[var(--color-brand-blue)] hover:bg-gray-100 transition-colors duration-300 text-lg px-8 py-3 hover-lift"
          >
            <Link href="/contact">Get a Consultant</Link>
          </Button>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  )
}
