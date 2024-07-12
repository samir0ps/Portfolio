import { createLazyFileRoute } from '@tanstack/react-router'
import MyImage from "../../../assets/mine.jpg"
import { Image } from '@unpic/react'
export const Route = createLazyFileRoute('/portfolio/about')({
  component: About , 
})
import {motion} from "framer-motion"
function About(){
  return (
    <main className='pt-20 px-5 min-h-screen flex flex-col overflow-hidden'>
      <div className='lg:flex grid items-center mt-5 w-full gap-3 flex-1 justify-center'>
        <motion.div initial={{x:-50 , opacity:0}} animate={{opacity:1 , x:0 }} transition={{type:'spring' , damping:10 ,stiffness:100 ,duration:0.3 , delay:0.2}}>
          <Image src={MyImage} priority width={320} height={320} className='rounded-3xl shadow-md border border-light border-dashed shadow-black/50'/>

        </motion.div>
        <div className="lg:h-[350px] lg:w-1 sm:w-3/4 w-[90%] h-2  bg-warmmain lg:flex hidden items-center relative justify-center">
                    <div className="rounded-full w-5 h-5 bg-darkmain absolute border-2 border-warmmain"></div>
        </div>
        <motion.div className='flex-1' initial={{x:50 , opacity:0}} animate={{opacity:1 , x:0 }} transition={{type:'spring' , damping:10 ,stiffness:100 ,duration:0.3 , delay:0.5}}>
          <h3 className='text-3xl font-bold text-light'>About Me</h3>
          <p className='text-light md:text-lg sm:test-sm '>
            Hi there! I'm Mahmoud Samir, a passionate web developer based in Egypt. With a love for clean code and innovative solutions, I specialize in creating dynamic and user-friendly web applications. My go-to language is TypeScript, which I prefer over JavaScript for its robust type-checking and advanced features.

            Currently, I’m working with modern frameworks and tools such as Next.js, leveraging its Theme Provider for seamless dark and light mode integration. I enjoy crafting intuitive interfaces, and my latest project involves a sophisticated combobox designed to efficiently handle subcategories.

            For authentication and database management, I rely on Kinde and Supabase, ensuring secure and scalable applications. My journey in web development is driven by a constant desire to learn and adapt, always striving to deliver the best user experience.

            When I'm not coding, I love exploring new technologies, experimenting with design, and sharing my knowledge with the developer community. Welcome to my corner of the web!
          </p>
        </motion.div>
      </div>
    </main>
  )
}