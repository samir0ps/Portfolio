import { createLazyFileRoute } from '@tanstack/react-router'
import { Node } from '../../../components/skills/skillsLogo/Node'
import { FaExternalLinkAlt } from 'react-icons/fa'

export const Route = createLazyFileRoute('/portfolio/skills/node')({
  component: NodeJs
})
const handleOnClick = ()=>{
  window.open('https://nodejs.org/docs/latest/api/' , '_blank')
}
function NodeJs(){
  return(
    <div className='pt-20 px-5 pb-2'>
      <div className='flex sm:flex-row flex-col items-center text-light gap-3'>
        <Node/>
        <h1 className='text-5xl'>NodeJs</h1>
        <p className='text-xl w-full sm:w-1/2'>
          <span className='font-bold'>Node.js</span> is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser. Ryan Dahl developed it in 2009. Developers use Node.js to create server-side web applications, and it is perfect for data-intensive applications since it uses an asynchronous, event-driven model.          
        </p>
      </div>
      <hr  className='border-dashed mt-10 border-light/10'/>
      <p className='mt-3 sm:text-xl text-lg md:text-2xl'>
        Node.js is a runtime environment that allows JavaScript to be executed on the server side. It is built on the V8 JavaScript engine from Chrome, which compiles JavaScript into efficient machine code. Node.js operates on a single-threaded event-driven architecture, utilizing an event loop to handle multiple concurrent operations without blocking.

        When a client sends a request to a Node.js server, the request is added to an event queue. The event loop continuously checks this queue and processes each request. If a request involves an I/O operation, Node.js offloads it to the system kernel, which handles it asynchronously. Once the I/O operation is complete, the kernel notifies Node.js, executing the corresponding callback function.

        This non-blocking I/O and event-driven model allows Node.js to handle many simultaneous connections efficiently, making it ideal for building scalable, high-performance network applications.
      </p>
      <button onClick={handleOnClick} className='rounded-full py-3 px-10 gap-1 hover:bg-green-600 transition-all   duration-150 mt-3 bg-green-500 flex items-center'>NodeJs Docs
        <FaExternalLinkAlt />
      </button>
    </div>
  )
}