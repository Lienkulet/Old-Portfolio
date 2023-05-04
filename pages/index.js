import { About, Language } from '@/components'
import Hero from '@/components/Hero'
import Technologies from '@/components/Technologies'
import Work from '@/components/Work'
import Contact from '@/components/Contact'
import { client } from '@/lib/client'


export default function Home({ technologies, projects }) {
  return (
    <>
      <Hero />
      <About />
      <Technologies technologies={technologies} />
      <Work projects={projects} />
      <Contact />
    </>
  )
}

export const getServerSideProps = async () => {
  const projectsQuery = `*[_type == "project"]{
    image, name, slug, github, liveDemo, details, 
    Technologies[]-> {
    name
  }
  }`;
  const projects = await client.fetch(projectsQuery);

  const technologiesQuery = `*[_type == "technology"]`;
  const technologies = await client.fetch(technologiesQuery);

  

  return {
    props: { projects, technologies }
  }
}
