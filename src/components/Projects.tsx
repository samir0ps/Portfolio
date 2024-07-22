import EcommerceNext from "../assets/ecommerce_nextjs.png";
import Ecommerce_Node from "../assets/ecommerce_node - Copy.png";
import Blogs from "../assets/Capture.png";
import Portfolio from "../assets/portfolio.png";

import { Card } from "./utils/ProjectCard";
import { Fragment } from "react/jsx-runtime";

export const Projects = () => {
  const projects = [
    {
      title: "Ecommerce using NextJs, PostgreSQL and TailwindCss",
      description:
        "An eCommerce platform built with Drizzle ORM and styled with Tailwind CSS.",
      image: EcommerceNext,
      link: "https://github.com/samir0ps/ecommerce-nextjs",
    },
    {
      title: "Ecommerce using ReactJs, NodeJs, PostgreSQL and Css",
      description:
        "An eCommerce platform built with React.js and Node.js, utilizing PostgreSQL as the database. It features an admin dashboard, Prisma for ORM, and CSS for styling, without Tailwind CSS in this project.",
      image: Ecommerce_Node,
      link: "https://github.com/samir0ps/e-commerce",
    },
    {
      title: "Blogs using SvelteJs and Svelte-kit",
      description:
        "A blog website built with Svelte and SvelteKit, using Supabase and Tailwind CSS. It features AI semantic search and a rich text editor powered by TinyMCE.",
      image: Blogs,
      link: "https://github.com/samir0ps/Blogs",
    },
    {
      title: "Take a look on my portfolio code",
      description:
        "My portfolio showcases my skills in web development, utilizing technologies like Tailwind CSS for styling, Framer Motion for animations, React.js for the frontend framework, and TanStack Router for efficient routing. It is hosted on GitHub Pages for easy access.",
      image: Portfolio,
      link: "https://github.com/samir0ps/portfolio",
    },
  ];

  return (
    <div id="projects" className="w-full lg:min-h-screen pt-5 min-h-screen pb-5">
      <h1 className="text-5xl w-max mx-auto text-light">Projects</h1>
      <div className="grid  grid-cols-1 sm:grid-cols-2 mt-5 lg:w-3/4 w-full mx-auto gap-3 px-5">
        {projects.map((project, i) => (
          <Fragment key={i}>
            <Card project={project} />
          </Fragment>
        ))}
      </div>
    </div>
  );
};
