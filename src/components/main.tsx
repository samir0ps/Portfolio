import { Palm } from "./main_subcombonents/palm";
import BackgroundImage from "../assets/bg-image.png"
import {motion, useScroll } from "framer-motion"
import { useRef } from "react";
import { SplitString } from "./utils/splitCharacters";
export default function Main(){
    const ref = useRef<HTMLDivElement>(null)
    const {scrollYProgress} =useScroll({
        target:ref , 
        offset:['0 0' , '2 1']
    })
    const charVariants = {
        hidden : {
            opacity:0
        } , 
        reveal : {
            opacity:1
        }
    }

    const header = "Hi,👋🏻 My Name Is Mahmoud Samir";
    const content = "I am a freelance web developer with experience in creating dynamic and responsive websites using modern technologies🚀 like TypeScript, JavaScript, and Next.js. I am passionate about building efficient and scalable web applications."
    const headerSplitted = SplitString(header)
    const contentSplitted= SplitString(content)
    return (
        <main id="main" className="w-full lg:pt-0  lg:pb-0 ">
            <div 
                    
                    className="h-screen  relative w-full lg:pt-0 pt-16 flex lg:flex-row flex-col items-center px-5 justify-center gap-10 main-container " style={{backgroundImage:`url(${BackgroundImage})` }}>
                <Palm/>
                <div className="lg:h-3/4 lg:w-1 sm:w-3/4 w-[90%] h-2  bg-warmmain lg:flex hidden items-center relative justify-center">
                    <div className="rounded-full w-5 h-5 bg-darkmain absolute border-2 border-warmmain">

                    </div>
                </div>
                <div className="lg:flex-1 sm:w-3/4 w-[90%] md:text-lg text-sm">
                    <motion.h3 initial='hidden' whileInView="reveal" transition={{staggerChildren:.02}} className="lg:text-3xl md:text-2xl capitalize text-lg  font-bold text-lightmain">{headerSplitted.map((h,i)=>(
                        <motion.span  transition={{duration:0.5}} key={i} variants={charVariants}>
                            {h}
                        </motion.span>
                    ))}</ motion.h3>
                    <motion.p initial='hidden' whileInView="reveal" transition={{staggerChildren:.02}} className="text-light">{contentSplitted.map((c ,i)=>(
                        <motion.span transition={{duration:0.35 }} key={i} variants={charVariants}>
                            {c}
                        </motion.span>
                    ))}</motion.p>
                    </div>
                    <motion.div  style={{opacity:scrollYProgress, scale:scrollYProgress}} className="w-full lg:flex  hidden flex-col items-center justify-center absolute bottom-2">
                        <div ref={ref} className="w-6 h-12 relative  rounded-full border-2 border-light overflow-hidden">
                            <motion.div
                                initial={{translateY:0}}
                                animate={{translateY:'1.6rem'}}
                                transition={{repeat:Infinity ,duration:1 ,repeatType:'mirror' , type:"just"}}
                            className="w-5 h-5 absolute top-0 rounded-full bg-light"></motion.div>
                        </div>
                        <p className="text-xs text-slate-300/30">Scroll Down</p>
                    </motion.div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-full absolute z-[-1] bottom-0" viewBox="0 0 1440 320">
                <path className="fill-warmmain" fillOpacity="1" d="M0,96L60,128C120,160,240,224,360,256C480,288,600,288,720,282.7C840,277,960,267,1080,245.3C1200,224,1320,192,1380,176L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
            </svg>
        </main>

    )
}