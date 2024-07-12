import { createLazyFileRoute } from '@tanstack/react-router'
import Main from '../../components/main'
import { Skills } from '../../components/skills'
import { Projects } from '../../components/Projects'
import Contact from '../../components/Contact'

export const Route = createLazyFileRoute('/portfolio/')({
  component: Index,
})

function Index(){
  return (
    <>
      <Main/>
      <Skills/>
      <Projects/>
      <Contact/>
    </>
  )
}