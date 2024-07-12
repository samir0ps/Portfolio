import { createLazyFileRoute } from '@tanstack/react-router'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { Html } from '../../../components/skills/skillsLogo/html'

export const Route = createLazyFileRoute('/portfolio/skills/html')({
  component: Html_page
})
const handleOnClick = ()=>{
  window.open('https://html.com/' , '_blank')
}
function Html_page(){
  return(
    <div className='pt-20 px-5 pb-2'>
      <div className='flex sm:flex-row flex-col items-center text-light gap-3'>
        <Html/>
        <h1 className='text-5xl'>HTML</h1>
        <p className='text-xl w-full sm:w-1/2'>
            <span className='font-bold'>HTML</span> is the language in which most websites are written. HTML is used to create pages and make them functional.
            The code used to make them visually appealing is known as CSS and we shall focus on this in a later tutorial. For now, we will focus on teaching you how to build rather than design.
          </p>
      </div>
      <hr  className='border-dashed mt-10 border-light/10'/>
      <p className='mt-3 sm:text-xl text-lg md:text-2xl'>
        HTML was first created by Tim Berners-Lee, Robert Cailliau, and others starting in 1989. It stands for Hyper Text Markup Language.

        Hypertext means that the document contains links that allow the reader to jump to other places in the document or to another document altogether. The latest version is known as HTML5.

        A Markup Language is a way that computers speak to each other to control how text is processed and presented. To do this HTML uses two things: tags and attributes.
      </p>
      <button onClick={handleOnClick} className='rounded-full py-3 px-10 gap-1 hover:bg-orange-600 transition-all   duration-150 mt-3 bg-orange-500 flex items-center'>Html Docs
        <FaExternalLinkAlt />
      </button>
    </div>
  )
}