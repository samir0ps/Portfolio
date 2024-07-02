import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import EcommerceNext from "../../src/ecommerce_nextjs.png"
import Ecommerce_Node from "../../src/ecommerce_node - Copy.png"
import { IoLogoGithub } from "react-icons/io";

export const Projects = ()=>{
    return (
        <div id='projects' className="w-full lg:h-screen min-h-screen pb-2">
             <h1 className="text-5xl w-max mx-auto text-light">Projects</h1>
             <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 w-full px-5 gap-3 mt-3">
                <div className="h-[50vh] border-warmmain border p-4 grid grid-flow rounded-xl  bg-warmmain/10 w-full overflow-hidden">
                    <LazyLoadImage src={EcommerceNext} effect='blur' className='rounded-xl sm:h-full max-h-52 object-cover w-full' alt='ecommerce image'/>
                    <p className=' text-light'>Ecommerce using NextJs</p>
                    <a href='https://github.com/samir0ps/ecommerce-nextjs' target="_blank" className='bg-light hover:bg-slate-300 effect  flex items-center justify-center text-darkmain rounded-lg'>
                        <IoLogoGithub />
                        Git</a>
                </div>
                <div className="h-[50vh] border-warmmain border p-4 rounded-xl grid grid-flow bg-warmmain/10 w-full overflow-hidden">
                    <div>
                        <LazyLoadImage src={Ecommerce_Node} effect='blur' className='w-full rounded-xl sm:h-full max-h-52 object-cover' alt='ecommerce image'/>
                    </div>
                    <p className=' text-light'>Ecommerce using RaectJs & NodeJs</p>
                    <a href='https://github.com/samir0ps/e-commerce' target="_blank" className='bg-light flex items-center hover:bg-slate-300 effect justify-center text-darkmain rounded-lg'>
                        <IoLogoGithub />
                        Git</a>
                </div>
             </div>
        </div>
    )
}