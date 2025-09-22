import { Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitter } from "lucide-react"
import { cn } from "../lib/utils"
import {  useState } from "react"


export const ContactSection=()=>{
    const [isSubmitting,setIsSubmitting ]=useState(false)
    const handleSend=(e)=>{
        setIsSubmitting(true)
        e.preventDefault()
        setTimeout(()=>{
            
            setIsSubmitting(false)
        },1500)
    }
    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl ">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary">Touch</span>
                </h2>
                <p className=" text-center text-muted-foreground mb-12  max-w-2xl mx-auto">
                    dont't hesisate to contact might be your oportunity to get in real what you had in mind
                    
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">
                            Contact informations
                        </h3>
                        <div
                        className=" space-y-6 justify-center"
                        >
                            <div className="flex items-center space-x-4">
                                <div className="p-3 rounded-full bg-primary/10 ">
                                <Mail className="h-6 w-6 text-primary"/>{" "}
                                 </div>
                                 <div className="">
                                    <h4 className="font-medium">
                                        Email
                                    </h4>
                                    <a href="mailto:contact.mouslih@gmail.com" 
                                    className="text-muted-foreground hover:text-primary transition-colors  ">
                                        contact.mouslih@gmail.com
                                    </a>
                                 </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="p-3 rounded-full bg-primary/10 ">
                                <Phone className="h-6 w-6 text-primary"/>{" "}
                                 </div>
                                 <div className="">
                                    <h4 className="font-medium">
                                        Phone
                                    </h4>
                                    <a href="tel:+212689479988" 
                                    className="text-muted-foreground hover:text-primary transition-colors  ">
                                        +212 689479988
                                    </a>
                                 </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="p-3 rounded-full bg-primary/10 ">
                                <MapPin className="h-6 w-6 text-primary"/>{" "}
                                 </div>
                                 <div className="">
                                    <h4 className="font-medium">
                                        Location
                                    </h4>
                                    <a  
                                    className="text-muted-foreground hover:text-primary transition-colors  ">
                                        Sale , Morocco 
                                    </a>
                                 </div>
                            </div>
                           
                        </div>
                        <div className="pt-8">
                            <h4 className="font-medium mb-4">Reach Me At </h4>
                            <div className="flex space-x-4 justify-center"> 
                                <a href="https://www.linkedin.com/in/ismail-mouslih/">
                                    <Linkedin/>
                                </a>
                                {/* <a href="">
                                    <Instagram/>
                                </a>
                                <a href="">
                                    <Twitter/>
                                </a> */}
                            </div>
                        </div>
                    </div>


                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>
                        <form action="" className="space-y-6" onSubmit={handleSend}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2"> Your Name</label>
                                <input 
                                type="text"
                                id="name"
                                name="name"
                                required
                                placeholder="ismail mouslih ..."
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2"> Your Email</label>
                                <input 
                                type="email"
                                id="email"
                                name="email"
                                required
                                placeholder="ismail@gmail.com"
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2"> Your Message</label>
                                <textarea 
                                
                                id="message"
                                name="message"
                                required
                                placeholder="Hello "
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                                />
                            </div>
                            <button type="submit" 
                            disabled={isSubmitting}
                            className={cn("cosmic-button w-full flex items-center justify-center gap-2")}>
{                                isSubmitting ? "message is submiting ... ": "Send Message"
}                                <Send size={16}/>
                            </button>
                        </form>

                    </div>
                </div>
            </div>

        </section>
    )
}