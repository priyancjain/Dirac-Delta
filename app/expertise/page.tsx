import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Code, Database, Cloud, Brain, Wrench, BarChart3 } from "lucide-react"
import Link from "next/link"

export default function ExpertisePage() {
  const skillCategories = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Programming Languages",
      skills: ["Python", "C++", "JavaScript", "TypeScript", "SQL"],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI & Machine Learning",
      skills: ["LangChain", "LLMs", "RAG", "NLP", "OpenCV", "TensorFlow", "PyTorch", "Transformers"],
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud & Infrastructure",
      skills: ["AWS", "GCP", "Docker", "Kubernetes", "Terraform", "CI/CD"],
      color: "from-green-500 to-green-600",
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Databases & Backend",
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Flask", "FastAPI", "Node.js"],
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Automation & Integration",
      skills: ["n8n", "Zapier", "API Development", "Workflow Automation", "MCP Servers"],
      color: "from-teal-500 to-teal-600",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Analytics & Visualization",
      skills: ["Power BI", "Tableau", "Excel", "Data Analysis", "Statistical Modeling"],
      color: "from-pink-500 to-pink-600",
    },
  ]

  const certifications = [
    "AWS Certified Solutions Architect",
    "Google Cloud Professional Data Engineer",
    "Microsoft Azure AI Engineer",
    "Docker Certified Associate",
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 lg:pt-32 lg:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-fade-in-up">
            Technical{" "}
            <span className="bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-purple)] bg-clip-text text-transparent">
              Expertise
            </span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed animate-fade-in-up">
            Comprehensive technical skills across modern technologies, frameworks, and platforms to deliver cutting-edge
            solutions.
          </p>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color} text-white`}>{category.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="text-xs bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Professional Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-[var(--color-brand-blue)]/10 to-[var(--color-brand-purple)]/10 rounded-lg p-4 border border-gray-200 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <p className="font-medium text-gray-900">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Experience Highlights</h2>
            <p className="text-lg text-gray-600">Key achievements and project outcomes</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: "5+",
                label: "Years Experience",
                description: "In AI and software development",
              },
              {
                number: "50+",
                label: "Projects Completed",
                description: "Across various industries",
              },
              {
                number: "15+",
                label: "Technologies Mastered",
                description: "Modern frameworks and tools",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center bg-white rounded-xl p-6 shadow-sm animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-purple)] bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Leverage Our Expertise?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how our technical skills can solve your specific challenges.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-purple)] hover:opacity-90 transition-all duration-300"
          >
            <Link href="/contact">Start a Conversation</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
