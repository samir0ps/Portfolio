import { BsArrowRight } from "react-icons/bs";
import { LOGO } from "./navbar_subcombonents/logo";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar(){
    return (
        <nav className="w-full z-[100] border-b border-dashed border-light/10  h-16 grid grid-cols-2 sm:px-5 px-1 absolute inset-0">
            <div className="h-full">
                <a href="#" className="flex group effect hover:text-lightmain w-max font-bold text-lg flex-row-reverse h-full items-center gap-1 font-Fustat">
                    <LOGO/>
                    <span className="h-3/4 w-[3px]  bg-lightmain/10 rounded-full"></span>
                    محمود سمير
                </a>
            </div>
            <div className="w-auto flex lg:hidden justify-end items-center">
                <button className="w-9 h-9 ">
                    <GiHamburgerMenu  className="w-7 h-7 text-light"/>
                </button>
            </div>
            <ul className="lg:grid hidden grid-flow-col w-full justify-end gap-10  items-center text-md">
                <li className="cursor-pointer hover:text-lightmain flex justify-center transition-all duration-200 ease-in-out after:transition-all after:duration-200 after:ease-in-out after:w-0 hover:after:w-full after:absolute relative after:h-[2px] after:bg-lightmain  after:bottom-0 w-max mx-auto after:rounded-full "><a href="#skills" className="w-full h-full">Skills</a></li>
                <li className="cursor-pointer hover:text-lightmain flex justify-center transition-all duration-200 ease-in-out after:transition-all after:duration-200 after:ease-in-out after:w-0 hover:after:w-full after:absolute relative after:h-[2px] after:bg-lightmain  after:bottom-0 w-max mx-auto after:rounded-full "><a href="#projects" className="w-full h-full">Projects</a></li>
                <li className="bg-light effect text-darkmain mx-auto w-max rounded-full px-3 py-1 cursor-pointer hover:bg-warmmain transition-all duration-0 hover:text-light group flex items-center gap-1"><a href="#contact" className="w-full h-full flex items-center">Cotact Me<BsArrowRight className="w-5 group-hover:rotate-90  h-5 transition-transform duration-200"/></a></li>
            </ul>
        </nav>
    )
}