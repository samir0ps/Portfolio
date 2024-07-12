import { createLazyFileRoute } from '@tanstack/react-router'
import { Tailwind } from '../../../components/skills/skillsLogo/tailwind'
import { FaExternalLinkAlt } from 'react-icons/fa'

export const Route = createLazyFileRoute('/portfolio/skills/tailwind')({
  component: Tailwind_css
})
const handleOnClick = ()=>{
  window.open('https://tailwindcss.com/docs/installation' , '_blank')
}
function Tailwind_css(){
  return(
    <div className='pt-20 px-5 pb-2'>
      <div className='flex sm:flex-row flex-col items-center text-light gap-3'>
        <Tailwind/>
        <h1 className='text-5xl'>TailwindCss</h1>
        <p className='text-xl w-full sm:w-1/2'>
            <span className='font-bold'>Tailwind CSS</span> is a utility-first CSS framework that streamlines web development by providing a set of pre-designed utility classes.
          </p>
      </div>
      <hr  className='border-dashed mt-10 border-light/10'/>
      <p className='mt-3 sm:text-xl text-lg md:text-2xl'>
        Tailwind Provides classes enable rapid styling without writing custom CSS, promoting consistency and scalability. Tailwind’s approach shifts focus from traditional CSS components to functional classes, empowering developers to efficiently build responsive and visually appealing interfaces with minimal effort.
        Tailwind’s utility-first methodology offers granular control over styling, enabling precise customization and faster prototyping without overriding framework styles.
        Unlike traditional frameworks, Tailwind allows extensive customization and avoids pre-built component styles, offering flexibility in design.
      </p>
      <button onClick={handleOnClick} className='rounded-full py-3 px-10 gap-1 hover:bg-blue-600 transition-all   duration-150 mt-3 bg-blue-500 flex items-center'>Tailwindcss Docs
        <FaExternalLinkAlt />
      </button>
    </div>
  )
}