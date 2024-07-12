import { createLazyFileRoute } from '@tanstack/react-router'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { Svelte } from '../../components/skills/skillsLogo/svelte'

export const Route = createLazyFileRoute('/skills/svelte')({
  component: Svelte_page
})
const handleOnClick = ()=>{
  window.open('https://svelte.dev/docs/introduction' , '_blank')
}
function Svelte_page(){
  return(
    <div className='pt-20 px-5 pb-2'>
      <div className='flex sm:flex-row flex-col items-center text-light gap-3'>
        <Svelte/>
        <h1 className='text-5xl'>SvelteJs</h1>
        <p className='text-xl w-full sm:w-1/2'>
          <span className='font-bold'>Svelte</span> is a revolutionary web development framework that transforms the way applications are built. It pioneers an innovative approach where most of the work typically performed by the browser is moved to a compile step during app building. This shift results in applications that are faster and more efficient, particularly benefiting mobile devices.
          </p>
      </div>
      <hr  className='border-dashed mt-10 border-light/10'/>
      <p className='mt-3 sm:text-xl text-lg md:text-2xl'>
          Svelte allows developers to write concise components using familiar languages like HTML, CSS, and JavaScript. It simplifies state management by enabling direct updates to variables without additional code or hooks. This advantage makes it easier for developers to handle constant updates and changes in their projects.

          Unlike traditional frameworks such as React or Vue which require loading entire libraries in browsers, Svelte operates as a compiler. This means it doesn't need to load the entire library in the browser - reducing overheads and file sizes significantly. 
      </p>
      <button onClick={handleOnClick} className='rounded-full py-3 px-10 gap-1 hover:bg-orange-600 transition-all   duration-150 mt-3 bg-orange-500 flex items-center'>Svelte Docs
        <FaExternalLinkAlt />
      </button>
    </div>
  )
}