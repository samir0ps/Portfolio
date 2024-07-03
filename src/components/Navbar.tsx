import { BsArrowRight } from "react-icons/bs";
import { LOGO } from "./navbar_subcombonents/logo";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState , useRef ,useEffect } from "react";
import {AnimatePresence , motion} from "framer-motion"
export default function Navbar(){
    const [openMenu , setOpenMenu] = useState(false)
    const ref = useRef<HTMLDivElement>(null)
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent | TouchEvent) => {
          if (ref.current && !ref.current.contains(event.target as Node)) {
            setOpenMenu(false);
          }
        };
    
        document.addEventListener('mouseup', handleClickOutside);
        document.addEventListener('touchend', handleClickOutside);
    
    
        return () => {
          document.removeEventListener('mouseup', handleClickOutside);
          document.removeEventListener('touchend', handleClickOutside);
        };
      }, [open]);
    return (
        <nav className="w-full z-[100] border-b border-dashed border-light/10  h-16 grid grid-cols-2 sm:px-5 px-1 absolute inset-0">
            <div className="h-full">
                <a href="#" className="flex group effect hover:text-lightmain w-max font-bold text-lg flex-row-reverse h-full items-center gap-1 font-Fustat">
                    <LOGO/>
                    <span className="h-3/4 w-[3px]  bg-lightmain/10 rounded-full"></span>
                    محمود سمير
                </a>
            </div>
            <div className="w-auto h-max my-auto flex relative lg:hidden justify-end items-center">
                <button onClick={()=>setOpenMenu(true)} className="w-9 h-9 ">
                    <GiHamburgerMenu  className="w-7 h-7 text-light"/>
                </button>
                <AnimatePresence>
                {openMenu && 
                    <motion.div
                    ref={ref}
                    initial={{opacity:0 , translateY:-10}}
                    animate={{opacity:1 , translateY:0}}
                    exit={{opacity:0 , translateY:-10}}
                    className="absolute w-52 bg-light shadow-lg shadow-black/30 text-darkmain p-4 rounded-xl top-full right-0"
                    >
                        
                        
                        <ul className="grid grid-flow-row gap-1">
                            <li className=" border  rounded-lg flex h-12 border-dashed border-warmmain"><a className="w-full  px-2 py-3" href="#skills">Skills</a></li>
                            <li className=" border  rounded-lg flex h-12 border-dashed border-warmmain"><a className="w-full  px-2 py-3" href="#projects">Projects</a></li>
                            <li className=" border  rounded-lg flex h-12 border-dashed border-warmmain"><a className="w-full  px-2 py-3" href="#contact">Contact Me</a></li>
                         
                        </ul>
                    </motion.div>
                }
                </AnimatePresence>
            </div>
            <ul className="lg:grid hidden grid-flow-col w-full justify-end gap-10  items-center text-md">
                <li className="cursor-pointer hover:text-lightmain flex justify-center transition-all duration-200 ease-in-out after:transition-all after:duration-200 after:ease-in-out after:w-0 hover:after:w-full after:absolute relative after:h-[2px] after:bg-lightmain  after:bottom-0 w-max mx-auto after:rounded-full "><a href="#skills" className="w-full h-full">Skills</a></li>
                <li className="cursor-pointer hover:text-lightmain flex justify-center transition-all duration-200 ease-in-out after:transition-all after:duration-200 after:ease-in-out after:w-0 hover:after:w-full after:absolute relative after:h-[2px] after:bg-lightmain  after:bottom-0 w-max mx-auto after:rounded-full "><a href="#projects" className="w-full h-full">Projects</a></li>
                <li className="bg-light effect text-darkmain mx-auto w-max rounded-full px-3 py-1 cursor-pointer hover:bg-warmmain transition-all duration-0 hover:text-light group flex items-center gap-1"><a href="#contact" className="w-full h-full flex items-center">Cotact Me<BsArrowRight className="w-5 group-hover:rotate-90  h-5 transition-transform duration-200"/></a></li>
            </ul>
        </nav>
    )
}