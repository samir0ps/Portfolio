import { createLazyFileRoute } from '@tanstack/react-router'
import { Typescript } from '../../../components/skills/skillsLogo/typescript'
import { FaExternalLinkAlt } from 'react-icons/fa'

export const Route = createLazyFileRoute('/portfolio/skills/type')({
  component: TypePage
})
const handleOnClick = ()=>{
  window.open('https://www.typescriptlang.org/docs/' , '_blank')
}
function TypePage(){
  return(
    <div className='pt-20 px-5 pb-2'>
      <div className='flex sm:flex-row flex-col items-center text-light gap-3'>
        <Typescript/>
        <h1 className='text-5xl'>Typescript</h1>
        <p className='text-xl w-full sm:w-1/2'>
          <span className='font-bold'>TypeScript</span> is an open-source, object-oriented programming language developed and maintained by Microsoft Corporation. Its journey began in 2012, and since then, it has gained significant traction in the developer community.
        </p>
      </div>
      <hr  className='border-dashed mt-10 border-light/10'/>
      <p className='mt-3 sm:text-xl text-lg md:text-2xl'>
          It is a Strict Super Set of JavaScript, which means anything implemented in JavaScript can be implemented using TypeScript along with adding enhanced features (every existing JavaScript Code is a valid TypeScript Code). As TypeScript code is converted to JavaScript code it makes it easier to integrate into JavaScript projects. It is designed mainly for large-scale projects.
          <br />
          <span className='text-3xl font-bold'>TypeScript: A Static Type Checker</span><br />
          We said earlier that some languages wouldn’t allow those buggy programs to run at all. Detecting errors in code without running it is referred to as static checking. Determining what’s an error and what’s not based on the kinds of values being operated on is known as static type checking.
      </p>
      <button onClick={handleOnClick} className='rounded-full py-3 px-10 gap-1 hover:bg-blue-600 transition-all   duration-150 mt-3 bg-blue-500 flex items-center'>Typescript Docs
        <FaExternalLinkAlt />
      </button>
    </div>
  )
}