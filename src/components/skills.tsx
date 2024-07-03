import { useScroll , motion } from "framer-motion"
import { useRef } from "react"
import { Svelte } from "./skills/svelte"
import { Tailwind } from "./skills/tailwind"
import { Html } from "./skills/html"
import { Js } from "./skills/js"
import { Typescript } from "./skills/typescript"
import { React } from "./skills/react"
import { Node } from "./skills/Node"
import { Next } from "./skills/Next"
import City from "../assets/skillsbg.png"
export const Skills  =()=>{
    const ref = useRef<HTMLDivElement>(null)
    const {scrollYProgress} =useScroll({
        target:ref , 
        offset:['0 1.5' , '1 1']
    })
    const skills=[Svelte , Tailwind , Html , Js , Typescript , React , Node ,Next]
    return (
        <div ref={ref} style={{backgroundImage:`url(${City})`}}  id="skills" className="w-full main-container bg-gradient-to-br sm:h-screen  h-auto px-5 pt-1 border-t border-b border-dashed border-light/10">
            <motion.h1  className="text-light text-5xl z-[1600] relative w-max mx-auto backdrop-blur-sm">Skills</motion.h1>
            <div className="grid xs:grid-cols-3 grid-cols-2 sm:w-3/4 w-full mx-auto gap-3 mt-3 py-5">
                {skills.map((Skill , i) =>(
                    <motion.div  key={i} style={{opacity:scrollYProgress , scale:scrollYProgress , y:scrollYProgress}} className="flex  border-warmmain border w-max mx-auto p-3 rounded-full overflow-hidden shadow-inner shadow-lightmain/20 flex-1  items-center justify-center bg-warmmain/30 backdrop-blur-sm">
                        {<Skill/>}
                    </motion.div>
                ))}
            </div>
            <div className="container"></div>
        </div>
    )
}