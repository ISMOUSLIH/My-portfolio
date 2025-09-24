import { useState } from "react"
import { skills } from "../lib/SkillsSet"
import { cn } from "../lib/utils"
const categories = ["all", ...new Set(skills.map(skill => skill.category))]
export const SkillsSection=()=>{
    const [activeCategory,setActiveCategory]=useState("all")
    const filterd_Categories=skills.filter(
        (skill)=>activeCategory==="all"|| skill.category===activeCategory
    )
    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12  text-center"> 
                    My <span className="text-primary"> Skills</span>
                </h2>
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category ,index)=>
                    <div onClick={()=>setActiveCategory(category)}
                     key={index }
                     className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize cursor-pointer",
                        activeCategory===category? "bg-primary text-primary-foreground":"bg-secondary/70 text-foreground hover:bd"
                     )}>{category}</div>
                        )}
                </div>
                {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6">
                    {filterd_Categories.map((skill,index)=>
                        <div key={index}  className="bg-card p-6 rounded-lg shadow-xs card-hover ">
                            <div className="text-bottom mb-2 mt-4 ">
                                <img src={skill.image} className=""/>
                                <h3 className="font-semibold text-3xl"> 
                                    {skill.name }
                                </h3>
                            </div>
                        </div>
                    )}

                </div> */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {filterd_Categories.map((skill, index) => (
    <div
      key={index}
      className="bg-card p-6 rounded-lg shadow-xs card-hover"
    >
      <div className="flex flex-col items-center text-center mb-2 mt-4">
        <img
          src={skill.image}
          alt={skill.name}
          className="w-16 h-16 object-contain mb-3"
        />
        <h3 className="font-semibold text-3xl">
          {skill.name}
        </h3>
      </div>
    </div>
  ))}
</div>

            </div>

        </section>
    )
}