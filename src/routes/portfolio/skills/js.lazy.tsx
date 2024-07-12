import { createLazyFileRoute } from '@tanstack/react-router'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { Js } from '../../../components/skills/skillsLogo/js'

export const Route = createLazyFileRoute('/portfolio/skills/js')({
  component: JavaScript
})
const handleOnClick = ()=>{
  window.open('https://www.javascript.com/learn/strings' , '_blank')
}
function JavaScript(){
  return(
    <div className='pt-20 px-5 pb-2'>
      <div className='flex sm:flex-row flex-col items-center text-light gap-3'>
        <Js/>
        <h1 className='text-5xl'>Javascript</h1>
        <p className='text-xl w-full sm:w-1/2'>
          <span className='font-bold'>JavaScript</span> is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes
          </p>
      </div>
      <hr  className='border-dashed mt-10 border-light/10'/>
      <p className='mt-3 sm:text-xl text-lg md:text-2xl'>
        JavaScript is a lightweight, cross-platform, single-threaded, and interpreted compiled programming language. It is also known as the scripting language for webpages. It is well-known for the development of web pages, and many non-browser environments also use it.

        JavaScript is a weakly typed language (dynamically typed). JavaScript can be used for Client-side developments as well as Server-side developments. JavaScript is both an imperative and declarative type of language. JavaScript contains a standard library of objects, like Array, Date, and Math, and a core set of language elements like operators, control structures, and statements. 
      </p>
      <button onClick={handleOnClick} className='rounded-full py-3 px-10 gap-1 hover:bg-yellow-600 transition-all   duration-150 mt-3 bg-yellow-500 flex items-center'>Javascript Docs
        <FaExternalLinkAlt />
      </button>
    </div>
  )
}