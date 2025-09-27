import { ExternalLink, Github ,ArrowRight} from "lucide-react"
import { projects } from "../lib/projectsSet"
import { cn } from "../lib/utils"
export const ProjectsSection=()=>{
    return(
        <section id="projects" className="py-24 px-4 relative">
          
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Featurd <span className="text-primary"> Projects</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
               
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project,index)=>
              <div key={index} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                <div className="h-48 overflow-hidden ">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag=>
                      <span className=" px-2 py-1 text-xs cosmic-button-second capitalize">
                        {tag}
                      </span>
                    )}
                  </div>
               
                <h3 className="text-xl font-semibold mb-1"> {project.title }</h3>
                 
                
                 
                <p className="text-muted-foreground text-sm mb-4">{project.p_description}</p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3 ">
                    
                      <a href={project.demoUrl} 
                      target="_blank"
                      className={cn("text=foreground/80 hover:text-primary transition-colors duration-300",
                        project.demoUrl?"":"hidden"
                      )}><ExternalLink size={20 }/></a>
                    
                    
                    <a href={project.github_repo}
                    target="_blank"
                      className={cn("text=foreground/80 hover:text-primary transition-colors duration-300",
                        project.github_repo?"":"hidden")}
                    ><Github size={20}/></a>
                  </div>
                   </div>
                </div>
              </div>
              )}

            </div>
            <div className="text-center mt-12">
                <a href="https://github.com/iSMOUSLIH" target="_blank" className="cosmic-button w-fit flex items-center mx-auto gap-2"> 
                  Check My Github <ArrowRight size={16}/>
                </a>
            </div>
          </div>
        </section>
    )
}