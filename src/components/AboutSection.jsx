import { Code } from "lucide-react"

export const AboutSection =()=>{
    return (
        <section id="about" className=" py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About 
                    <span className="text-primary">
                         Me
                    </span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">

                        Web developer & tech enthusiast 
                        </h3>
                        <p className="text-muted-foreground"> 
                            with over of 3 years of hands on ecom web porjects i trasnform business from no appear on degital to one of the best on thier neiches 
                        </p>
                        <div className=" flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact " className=" cosmic-button capitalize">Get in touch</a>
                            <a href="/documents/ISMAIL MOUSLIH resume STD v1.2 wp.pdf" target="_blank" className=" cosmic-button-second capitalize">download CV</a>
                        </div>
                    </div>
                    <div>
                    <div className="grid grid-cols-1 gap-6"> 
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary"/>

                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">
                                        Web Development
                                    </h4>
                                    <div className="text muted-foreground"></div>

                                </div>
                            </div>

                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary"/>

                                </div>

                            </div>

                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary"/>

                                </div>

                            </div>

                        </div>

                    </div>
                    </div>

                </div>
            </div>

        </section>
    )
}