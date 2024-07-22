import React, { useEffect, useRef } from "react";
import { Svelte } from "./skills/svelte";
import { Tailwind } from "./skills/tailwind";
import { Html } from "./skills/html";
import { Js } from "./skills/js";
import { Typescript } from "./skills/typescript";
import { React as ReactIcon } from "./skills/react";
import { Node } from "./skills/Node";
import { Next } from "./skills/Next";
import City from "../assets/skillsbg.png";
import tippy  from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import { useNavigate } from "@tanstack/react-router";
import {motion , useInView} from "framer-motion"

export const Skills = () => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref , {once:true})

  const skills = [
    { label: "SvelteJs", element: Svelte, docs:"/portfolio/skills/svelte" },
    { label: "TailwindCss", element: Tailwind, docs:"/portfolio/skills/tailwind" },
    { label: "HTML", element: Html, docs:"/portfolio/skills/html" },
    { label: "JavaScript", element: Js , docs:"/portfolio/skills/js"},
    { label: "TypeScript", element: Typescript, docs:"/portfolio/skills/type" },
    { label: "ReactJs", element: ReactIcon , docs:"/portfolio/skills/react"},
    { label: "NodeJs", element: Node  , docs:"/portfolio/skills/node"},
    { label: "NextJs", element: Next , docs:"/portfolio/skills/next" }
  ];

  const refs = skills.map(() => React.createRef<HTMLDivElement>());

  useEffect(() => {
    refs.forEach((ref, i) => {
      if (ref.current) {
        tippy(ref.current, {

            content: `Click To Learn About ${skills[i].label}`,
            
        });
      }
    });
  }, [refs, skills]);
  const navigate = useNavigate({from:'/'})
  const onClickHandle = (path:string)=>{
    navigate({to :path})
  }
  return (
    <div ref={useRef(null)} id="skills" style={{ backgroundImage: `url(${City})`  }} className="min-h-screen main-container w-full p-5 flex justify-center flex-col gap-5 overflow-x-hidden overflow-y-hidden item border-b border-dashed border-light/10 items-center p-auto ">
      <motion.div ref={ref} initial={{opacity:0 , x:100}} animate={isInView && {opacity:1 , x:0}}
      transition={{ delay:0.2 }}
       className="text-darkmain bg-light shadow-md p-4 rounded-xl  border border-dashed border-warmmain flex flex-col items-center">
        <h1 className="text-darkmainbackdrop-blur-sm font-bold text-3xl md:text-5xl">Skills</h1>
        <p className="md:text-xl  text-md sm:text-lg backdrop-blur-sm "><span className=" font-semibold underline">Mahmoud Samir</span> Web Developer Extraordinaire <br />
        As a passionate and skilled web developer from Egypt, Mahmoud Samir brings a wealth of knowledge and expertise to every project. Specializing in TypeScript, Samir ensures that his code is robust, maintainable, and scalable. His proficiency extends across various technologies and frameworks, making him a versatile and valuable asset to any development team.</p>
        <div className=" flex flex-wrap  mt-3 md:grid-cols-3 grid-cols-2 md:w-auto w-full sm:grid-cols-2 gap-7 drop-shadow-md">
          {skills.map((Skill, i) => (
            
              <div key={i} onClick={()=>{onClickHandle(Skill.docs)}} className="cursor-pointer flex items-center flex-col justify-center w-20 h-20" ref={refs[i]}>
                <Skill.element />
                <p>{Skill.label}</p>
              </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
