import { createLazyFileRoute } from '@tanstack/react-router'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { Next } from '../../../components/skills/skillsLogo/Next'

export const Route = createLazyFileRoute('/portfolio/skills/next')({
  component: Next_page
})

const handleOnClick = ()=>{
  window.open('https://nextjs.org/docs' , '_blank')
}
function Next_page(){
  return(
    <div className='pt-20 px-5 pb-2'>
      <div className='flex sm:flex-row flex-col items-center text-light gap-3'>
        <Next/>
        <h1 className='text-5xl'>Next<span className='text-gray-500 text-sm'>.Js</span></h1>
        <p className='text-xl w-full sm:w-1/2'>
          <span className='font-bold'>Next.js </span>is a React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations.
        </p>
      </div>
      <hr  className='border-dashed mt-10 border-light/10'/>
      <p className='mt-3 sm:text-xl text-lg md:text-2xl'>
        Next.js is an open-source web development framework created by Vercel. It's built on top of React and provides a number of features that make it ideal for building full-stack web applications. Some of the key benefits of using Next.js include:
        Server-side rendering (SSR) and static site generation (SSG): Next.js allows you to choose between SSR and SSG for different parts of your application. SSR is ideal for pages that require dynamic data or user authentication, while SSG is a great option for pages that are mostly static and don't change frequently. This flexibility can improve the performance and SEO of your application.
        Improved developer experience: Next.js includes a number of features that can make development faster and easier, such as automatic code splitting, built-in routing, and hot reloading.
        Large community and ecosystem: Next.js has a large and active community of developers, which means that there are a wide range of resources available to help you learn and use the framework. There's also a rich ecosystem of third-party libraries and tools that can be used to extend the functionality of Next.js applications.
      </p>
      <button onClick={handleOnClick} className='rounded-full py-3 px-10 gap-1 hover:bg-zinc-950 transition-all   duration-150 mt-3 bg-black flex items-center'>Next Docs
        <FaExternalLinkAlt />
      </button>
    </div>
  )
}