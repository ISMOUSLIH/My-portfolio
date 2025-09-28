import { ExternalLink, Github, ArrowRight } from "lucide-react"
import { projects } from "../lib/projectsSet"
import { cn } from "../lib/utils"

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"></p>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id || index}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden ">
                <img
                  src={project.image}
                  alt={`${project.title} - ${project.tags.join(", ")} project`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs cosmic-button-second capitalize"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-1">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-4">
                  {project.p_description}
                </p>

                {/* Links */}
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          "text-foreground/80 hover:text-primary transition-colors duration-300"
                        )}
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}

                    {project.github_repo && (
                      <a
                        href={project.github_repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          "text-foreground/80 hover:text-primary transition-colors duration-300"
                        )}
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* JSON-LD structured data for this project */}
              <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "CreativeWork",
                  "name": project.title,
                  "description": project.p_description,
                  "url": project.demoUrl || "https://ismailmouslih.vercel.app",
                  "image": `https://ismailmouslih.vercel.app${project.image}`,
                  "creator": {
                    "@type": "Person",
                    "name": "Ismail Mouslih"
                  },
                  "keywords": project.tags.join(", "),
                  "sameAs": [
                    "https://github.com/ISMOUSLIH",
                    "https://www.linkedin.com/in/ismailmouslih"
                  ]
                })
              }} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/iSMOUSLIH"
            target="_blank"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
