
import EcommerceNext from "../../src/ecommerce_nextjs.png"
import Ecommerce_Node from "../../src/ecommerce_node - Copy.png"
import { IoLogoGithub } from "react-icons/io";
import { Image } from "@unpic/react";
import Blogs from "../assets/Capture.png"
import Portfolio from "../assets/portfolio.png"
export const Projects = ()=>{
    return (
        <div id='projects' className="w-full lg:min-h-screen min-h-screen pb-2">
             <h1 className="text-5xl w-max mx-auto text-light">Projects</h1>
             <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 w-full px-5 gap-3 mt-3">
                <div className="h-[50vh] border-warmmain border p-4 grid grid-flow rounded-xl  bg-warmmain/10 w-full overflow-hidden">
                    <div className="overflow-hidden">
                        <Image src={EcommerceNext} loading="lazy" width={416} height={208} className='rounded-xl hover:scale-110 transition-all duration-150  sm:h-full max-h-52 object-cover w-full' alt='ecommerce image'/>
                    </div>
                    <p className=' text-light'>Ecommerce using NextJs</p>
                    <a href='https://github.com/samir0ps/ecommerce-nextjs' target="_blank" className='bg-light hover:bg-slate-300 effect  flex items-center justify-center text-darkmain rounded-lg'>
                        <IoLogoGithub />
                        Git</a>
                </div>
                <div className="h-[50vh] border-warmmain border p-4 rounded-xl grid grid-flow bg-warmmain/10 w-full overflow-hidden">
                    <div className="overflow-hidden">
                        <Image src={Ecommerce_Node} width={416} height={208} layout="fixed" loading="lazy" className='w-full hover:scale-110 transition-all duration-150  rounded-xl sm:h-full max-h-52 object-cover' alt='ecommerce image'/>
                    </div>
                    <p className=' text-light'>Ecommerce using React and NodeJs</p>
                    <a href='https://github.com/samir0ps/e-commerce' target="_blank" className='bg-light flex items-center hover:bg-slate-300 effect justify-center text-darkmain rounded-lg'>
                        <IoLogoGithub />
                        Git</a>
                </div>
                <div className="h-[50vh] border-warmmain border p-4 rounded-xl grid grid-flow bg-warmmain/10 w-full overflow-hidden">
                    <div className="overflow-hidden">
                        <Image src={Blogs} width={416} height={208} layout="fixed" loading="lazy" className='w-full hover:scale-110 transition-all duration-150  rounded-xl sm:h-full max-h-52 object-cover' alt='ecommerce image'/>
                    </div>
                    <p className=' text-light'>Blogs using SvelteJs and Svelte-kit</p>
                    <a href='https://github.com/samir0ps/Blogs' target="_blank" className='bg-light flex items-center hover:bg-slate-300 effect  justify-center text-darkmain rounded-lg'>
                        <IoLogoGithub />
                        Git</a>
                </div>
                <div className="h-[50vh] border-warmmain border p-4 rounded-xl grid grid-flow bg-warmmain/10 w-full overflow-hidden">
                    <div className="overflow-hidden">
                        <Image src={Portfolio} width={416} height={208} layout="fixed" loading="lazy" className='w-full rounded-xl hover:scale-110 transition-all duration-150 border border-light/30 border-dashed sm:h-full max-h-52 object-cover shadow-md' alt='ecommerce image'/>
                    </div>
                    <p className=' text-light'>Take a look on my portfolio code</p>
                    <a href='https://github.com/samir0ps/portfolio' target="_blank" className='bg-light flex items-center hover:bg-slate-300 effect justify-center text-darkmain rounded-lg'>
                        <IoLogoGithub />
                        Git</a>
                </div>
             </div>
        </div>
    )
}