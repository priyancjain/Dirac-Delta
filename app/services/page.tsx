import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Eye, Server, Brain, Bot, Sparkles, Camera, Workflow, Cloud, BarChart3, Trophy, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Observability Solutions & Monitoring Systems",
      description:
        "Enterprise-grade monitoring, logging, and observability platforms that provide deep insights into your system performance and health.",
      features: ["Real-time monitoring", "Custom dashboards", "Alert management", "Performance analytics"],
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "MCP Server Development & Integration",
      description:
        "Model Context Protocol server development and seamless integration solutions for modern AI applications and workflows.",
      features: ["Protocol implementation", "API integration", "Custom connectors", "Scalable architecture"],
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI & Data Science Consulting",
      description:
        "Comprehensive AI strategy, machine learning model development, and data science solutions tailored to your business needs.",
      features: ["ML model development", "Data strategy", "AI implementation", "Performance optimization"],
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "Agentic AI Automation",
      description:
        "Advanced automation solutions using n8n, CrewAI, LangChain, and Docker for intelligent workflow orchestration.",
      features: ["Workflow automation", "Agent development", "Process optimization", "Integration solutions"],
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Generative AI & NLP Applications",
      description:
        "Cutting-edge generative AI solutions, NLP applications, RAG systems, and fine-tuning services using OpenAI and Gemini APIs.",
      features: ["Custom AI models", "NLP processing", "RAG implementation", "API integration"],
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Computer Vision & Real-Time Detection",
      description:
        "Advanced computer vision solutions including OpenCV implementations, ANPR systems, and real-time detection applications.",
      features: ["Image processing", "Real-time detection", "ANPR systems", "Custom vision models"],
    },
    {
      icon: <Workflow className="w-8 h-8" />,
      title: "Workflow Automation & API Integration",
      description:
        "Streamline your business processes with intelligent automation and seamless API integrations across platforms.",
      features: ["Process automation", "API development", "System integration", "Workflow optimization"],
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Backend Architecture & Cloud Deployment",
      description:
        "Robust backend systems using Flask, FastAPI, AWS, GCP with PostgreSQL, MongoDB, and MySQL database solutions.",
      features: ["Cloud architecture", "Database design", "API development", "Scalable deployment"],
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Data Analytics & Visualization",
      description:
        "Comprehensive data analytics, visualization dashboards, and statistical analysis using Power BI and advanced Excel solutions.",
      features: ["Data visualization", "Statistical analysis", "Dashboard creation", "Business intelligence"],
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Hackathon & Innovation Programs",
      description:
        "Expert organization and facilitation of hackathons, innovation challenges, and technical competitions for enterprises.",
      features: ["Event planning", "Technical mentorship", "Innovation facilitation", "Competition management"],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 lg:pt-32 lg:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-fade-in-up">
            Our{" "}
            <span className="bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-purple)] bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed animate-fade-in-up">
            Comprehensive engineering solutions designed to accelerate your digital transformation and drive innovation
            across your organization.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-[var(--color-brand-blue)] mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[var(--color-brand-blue)] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-[var(--color-brand-purple)] rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how our expertise can help transform your project and drive your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-purple)] hover:opacity-90 transition-all duration-300"
            >
              <Link href="/contact" className="flex items-center gap-2">
                Get a Consultant
                <ArrowRight size={20} />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-[var(--color-brand-blue)] text-[var(--color-brand-blue)] hover:bg-[var(--color-brand-blue)] hover:text-white transition-all duration-300 bg-transparent"
            >
              <Link href="/projects">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
