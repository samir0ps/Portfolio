import { createLazyFileRoute } from '@tanstack/react-router'
import { React } from '../../components/skills/skillsLogo/react'
import { FaExternalLinkAlt } from "react-icons/fa";

export const Route = createLazyFileRoute('/skills/react')({
  component: React_page
})
const handleOnClick = ()=>{
  window.open('https://react.dev/learn' , '_blank')
}
function React_page(){
  return(
    <div className='pt-20 px-5'>
      <div className='flex sm:flex-row flex-col items-center text-light gap-3'>
        <React/>
        <h1 className='text-5xl'>React<span className='text-blue-500'>Js</span></h1>
        <p className='text-xl w-full sm:w-1/2'>
          <span className='font-bold'>React</span> is a library.
          It lets you put components together, but it doesn’t prescribe how to do routing and data fetching.
          <br />
          <span className='text-blue-500 underline font-bold'>Note</span> Thats why we need frameworks like NextJs Or RemixJs
        </p>
      </div>
      <hr  className='border-dashed mt-10 border-light/10'/>
      <p className='mt-3 sm:text-xl text-lg md:text-2xl'>
          React enables you to create both web and native applications using a single skill set. By leveraging each platform's distinct features, React ensures that your interfaces are perfectly tailored for every platform.
          React boasts a vast ecosystem, making it the most popular JavaScript library for building web applications. Its extensive resources enhance developer productivity and provide significant relief by simplifying tasks that were previously cumbersome with vanilla JavaScript or AJAX. While AJAX has its merits, React has essentially rendered it obsolete by offering a more efficient and streamlined development experience.
      </p>
      <button onClick={handleOnClick} className='rounded-full py-3 px-10 gap-1 hover:bg-blue-600 transition-all   duration-150 mt-3 bg-blue-500 flex items-center'>React Docs
        <FaExternalLinkAlt />
      </button>
    </div>
  )
}