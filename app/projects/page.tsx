import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, TrendingUp, Users, Clock, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ProjectsPage() {
  const projects = [
    {
      title: "Content Synergy AI",
      description:
        "An advanced AI-powered content generation and optimization platform that leverages natural language processing and machine learning to create high-quality, contextually relevant content at scale.",
      image: "/ai-content-dashboard.png",
      technologies: ["OpenAI GPT-4", "LangChain", "FastAPI", "PostgreSQL", "React", "Docker", "AWS"],
      outcomes: [
        "85% reduction in content creation time",
        "300% increase in content engagement rates",
        "Served 10,000+ users in first 6 months",
        "99.9% uptime with auto-scaling architecture",
      ],
      features: [
        "Multi-modal content generation",
        "Real-time collaboration tools",
        "Advanced analytics dashboard",
        "Custom AI model fine-tuning",
      ],
      category: "AI & Machine Learning",
    },
    {
      title: "LumosCareer",
      description:
        "A comprehensive career development platform powered by AI that provides personalized career guidance, skill assessments, and job matching services for professionals across various industries.",
      image: "/ai-career-platform.png",
      technologies: ["Python", "TensorFlow", "Flask", "MongoDB", "Vue.js", "Redis", "GCP"],
      outcomes: [
        "92% user satisfaction rate",
        "70% improvement in job match accuracy",
        "50,000+ career assessments completed",
        "Partnerships with 200+ companies",
      ],
      features: [
        "AI-powered career recommendations",
        "Skill gap analysis and learning paths",
        "Industry trend insights",
        "Personalized job matching algorithm",
      ],
      category: "AI & Data Science",
    },
    {
      title: "Offline Q/A System",
      description:
        "A robust offline question-answering system that enables organizations to deploy intelligent Q&A capabilities without internet connectivity, perfect for secure environments and remote locations.",
      image: "/offline-ai-qa-interface.png",
      technologies: ["Transformers", "PyTorch", "BERT", "Elasticsearch", "FastAPI", "SQLite", "Docker"],
      outcomes: [
        "100% offline functionality achieved",
        "Sub-second response times",
        "95% accuracy on domain-specific queries",
        "Deployed in 15+ enterprise environments",
      ],
      features: [
        "Local knowledge base processing",
        "Multi-language support",
        "Custom domain adaptation",
        "Secure on-premise deployment",
      ],
      category: "NLP & AI",
    },
    {
      title: "Traffic Violation Automation",
      description:
        "An intelligent traffic monitoring and violation detection system using computer vision and machine learning to automatically identify and process traffic violations in real-time.",
      image: "/ai-traffic-monitoring.png",
      technologies: ["OpenCV", "YOLO", "TensorFlow", "Python", "PostgreSQL", "Redis", "AWS EC2"],
      outcomes: [
        "98% accuracy in violation detection",
        "60% reduction in manual monitoring",
        "Processing 1000+ vehicles per hour",
        "Integrated with 25+ traffic cameras",
      ],
      features: [
        "Real-time license plate recognition (ANPR)",
        "Multi-violation type detection",
        "Automated report generation",
        "Integration with existing traffic systems",
      ],
      category: "Computer Vision",
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
              Projects
            </span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed animate-fade-in-up">
            Explore our portfolio of cutting-edge solutions that have transformed businesses and delivered measurable
            results across various industries.
          </p>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fade-in-up ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Project Image */}
                <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-brand-blue)]/20 to-[var(--color-brand-purple)]/20 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                    <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="w-full h-64 sm:h-80 object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className={`${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <div className="mb-4">
                    <Badge variant="secondary" className="mb-2">
                      {project.category}
                    </Badge>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{project.title}</h2>
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">{project.description}</p>
                  </div>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-gray-600">
                          <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Outcomes */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Measurable Outcomes</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {project.outcomes.map((outcome, outcomeIndex) => (
                        <div key={outcomeIndex} className="flex items-start gap-2">
                          <TrendingUp size={16} className="text-[var(--color-brand-blue)] mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      variant="outline"
                      className="border-[var(--color-brand-blue)] text-[var(--color-brand-blue)] hover:bg-[var(--color-brand-blue)] hover:text-white transition-all duration-300 bg-transparent"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      View Case Study
                    </Button>
                    <Button
                      variant="ghost"
                      className="text-gray-600 hover:text-[var(--color-brand-purple)] transition-colors"
                    >
                      <Github size={16} className="mr-2" />
                      Technical Details
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Project Impact</h2>
            <p className="text-lg text-gray-600">Our solutions deliver measurable results across all projects</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: <Users className="w-8 h-8" />, value: "75,000+", label: "Users Served" },
              { icon: <TrendingUp className="w-8 h-8" />, value: "95%", label: "Average Accuracy" },
              { icon: <Clock className="w-8 h-8" />, value: "60%", label: "Time Reduction" },
              { icon: <CheckCircle className="w-8 h-8" />, value: "99.9%", label: "System Uptime" },
            ].map((stat, index) => (
              <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-[var(--color-brand-blue)] mb-4 flex justify-center">{stat.icon}</div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how we can create a custom solution that delivers exceptional results for your business.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-purple)] hover:opacity-90 transition-all duration-300"
          >
            <Link href="/contact">Start Your Project</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
