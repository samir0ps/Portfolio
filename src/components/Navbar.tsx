import { BsArrowRight } from "react-icons/bs";
import { LOGO } from "./navbar_subcombonents/logo";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState , useRef ,useEffect } from "react";
import {AnimatePresence , motion} from "framer-motion"
import { Link } from "@tanstack/react-router";
import { IoLogoGithub } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";

export default function Navbar(){
    const [openMenu , setOpenMenu] = useState(false)
    const ref = useRef<HTMLDivElement>(null)
    const links = {
        facebook : 'https://www.facebook.com/profile.php?id=100026521003645' , 
        github : "https://github.com/samir0ps" , 
    }
    const [y , setY] = useState(0)
    useEffect(()=>{
        const handleScroll = ()=>{
            setY(window.scrollY)
        }
        window.addEventListener('scroll',  handleScroll)
        return ()=>{
            window.removeEventListener('scroll' , handleScroll)
        }
    } , [])
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
        <nav className={`w-full z-[100]   border-dashed border-light/10 h-14 lg:h-16 xl:h-20 flex  lg:grid lg:grid-cols-3 sm:px-5 px-1 fixed ${y>0 ?"backdrop-blur-sm bg-black/30 border-b": "bg-transparent"} transition-all duration-100 inset-0`}>
            <div className="h-full">
                <Link to="/"  className="flex group effect hover:text-lightmain w-max font-bold xl:text-2xl text-xl flex-row h-full items-center gap-1 font-Fustat">
                    <LOGO/>
                    <span className="h-10 w-[3px]  bg-lightmain/10 rounded-full"></span>
                    Samir
                </Link>
            </div>
            <div className="flex-1 md:w-full h-max my-auto flex relative lg:hidden justify-end items-center">
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
                    className="absolute w-52 bg-light shadow-lg shadow-black/30 text-darkmain py-2 rounded-xl top-full right-0"
                    >
                        
                        
                        <ul className="grid grid-flow-row gap-1 px-2 ">
                            <li className=" border  rounded-lg flex h-12 "><Link to="/" className="w-full h-full px-2 py-3" hash="#skills" onClick={()=>{setOpenMenu(false)}} >Skills</Link></li>
                            <li className=" border  rounded-lg flex h-12 "><Link to="/" className="w-full h-full px-2 py-3" hash="#projects" onClick={()=>{setOpenMenu(false)}} >Projects</Link></li>
                            <li className=" border  rounded-lg flex h-12 ">                            <Link to='/about' onClick={()=>{setOpenMenu(false)}} className="w-full h-full  flex items-center justify-start px-2">About</Link>
                            </li>
                            <li className=" border  rounded-lg flex h-12 "><Link to="/"  className="w-full h-full px-2 py-3" hash="#contact" onClick={()=>{setOpenMenu(false)}} >Contact Me</Link></li>
                            
                        </ul>
                    </motion.div>
                }
                </AnimatePresence>
            </div>
            <ul className="lg:grid hidden grid-flow-col w-full justify-end gap-10 text-sm md:text-md xl:text-xl items-center text-md">
                <li className="cursor-pointer hover:text-lightmain flex justify-center transition-all duration-200 ease-in-out after:transition-all after:duration-200 after:ease-in-out after:w-0 hover:after:w-full after:absolute relative after:h-[2px] after:bg-lightmain  after:bottom-0 w-max mx-auto after:rounded-full "><Link to="/" hash="#skills" className="w-full h-full">Skills</Link></li>
                <li className="cursor-pointer hover:text-lightmain flex justify-center transition-all duration-200 ease-in-out after:transition-all after:duration-200 after:ease-in-out after:w-0 hover:after:w-full after:absolute relative after:h-[2px] after:bg-lightmain  after:bottom-0 w-max mx-auto after:rounded-full "><Link to="/" hash="#projects" className="w-full h-full">Projects</Link></li>
                <li className="cursor-pointer hover:text-lightmain flex justify-center transition-all duration-200 ease-in-out after:transition-all after:duration-200 after:ease-in-out after:w-0 hover:after:w-full after:absolute relative after:h-[2px] after:bg-lightmain  after:bottom-0 w-max mx-auto after:rounded-full "><Link to='/about' className="w-full h-full [&.active]:font-bold [&.active]:text-lightmain ">About</Link></li>
                <li className="bg-light effect text-darkmain mx-auto w-max rounded-full  cursor-pointer hover:bg-slate-300 transition-all duration-0  group flex items-center gap-1"><Link to="/" hash="#contact" className="w-full  h-full flex px-3 py-1 items-center">Cotact Me<BsArrowRight className="w-5 group-hover:rotate-90  h-5 transition-transform duration-200"/></Link></li>
            </ul>
            <ul className=" w-max lg:w-full flex gap-5 items-center justify-end text-2xl sm:text-3xl md:text-4xl">
                <li className="cursor-pointer hover:text-lightmain transition-all duration-200 "><a href={links.github} target="_blank" rel="noopener noreferrer"><IoLogoGithub/></a></li>
                <li className="cursor-pointer hover:text-lightmain transition-all duration-200 "><a href={links.facebook} target="_blank" rel="noopener noreferrer"><FaFacebook/></a></li>
            </ul>
        </nav>
    )
}