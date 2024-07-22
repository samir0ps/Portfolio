import Computer  from "../assets/me.jpg";
import BackgroundImage from "../assets/bg-image.png"
import {AnimatePresence, motion} from "framer-motion"

import { SplitString } from "./utils/splitCharacters";
import { useEffect, useState } from "react";
import { Image } from "@unpic/react";
export default function Main(){
    const [showScroll ,setShowScroll] = useState(true)
    const charVariants = {
        hidden : {
            opacity:0
        } , 
        reveal : {
            opacity:1
        }
    }
    useEffect(()=>{
        const handleScroll = ()=>{
            if(window.scrollY > 10){
                setShowScroll(false)

            }else{
                setShowScroll(true)
            }
        }
        window.addEventListener('scroll',  handleScroll)
        return ()=>{
            window.removeEventListener('scroll' , handleScroll)
        }
    } , [])
    const header = "Hi,👋🏻 My Name Is Mahmoud Samir";
    const content = "I am a freelance web developer with experience in creating dynamic and responsive websites using modern technologies🚀 like TypeScript, JavaScript, and Next.js. I am passionate about building efficient and scalable web applications."
    const headerSplitted = SplitString(header)
    const contentSplitted= SplitString(content)
    return (
        <main id="main" className="w-full lg:pt-0 min-h-screen h-max relative lg:pb-0 ">
            <div className="min-h-screen pb-5 relative w-full lg:pt-0 pt-16 flex lg:flex-row flex-col items-center px-5 justify-center gap-10 main-container " style={{backgroundImage:`url(${BackgroundImage})` }}>
                <Image width={66*0.25*16} height={66*0.25*16} layout={"constrained"} src={Computer} alt="my image" className="rounded-3xl outline-2 outline-lightmain outline-offset-4 outline border-2 border-lightmain shadow-md object-contain  "/>

                <div className=" sm:w-3/4 w-full bg-warmmain/30 p-4 rounded-xl  md:text-lg text-sm">
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
                    <AnimatePresence>
                        {showScroll &&<motion.div initial={{y:20 , opacity:0}} animate={{y:0 , opacity:1}} exit={{y:-20 , opacity:0}}   className="w-full lg:flex  hidden flex-col items-center justify-center absolute bottom-2">
                            <div  className="w-6 h-12 relative  rounded-full border-2 border-light overflow-hidden">
                                <motion.div
                                    
                                    initial={{translateY:0}}
                                    animate={{translateY:'1.6rem'}}
                                    transition={{repeat:Infinity ,duration:1 ,repeatType:'mirror' , type:"just"}}
                                className="w-5 h-5 absolute top-0 rounded-full bg-light"></motion.div>
                            </div>
                            <p className="text-xs text-slate-300/30">Scroll Down</p>
                        </motion.div>}
                    </AnimatePresence>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-full absolute z-[-1] bottom-0" viewBox="0 0 1440 320">
                <path className="fill-warmmain" fillOpacity="1" d="M0,96L60,128C120,160,240,224,360,256C480,288,600,288,720,282.7C840,277,960,267,1080,245.3C1200,224,1320,192,1380,176L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
            </svg>
        </main>

    )
}