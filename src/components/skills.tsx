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
import { Tilt } from "react-tilt";
import tippy , {followCursor} from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import { useNavigate } from "@tanstack/react-router";

export const Skills = () => {
  const defaultOptions = {
    reverse: false,
    max: 35,
    perspective: 500,
    scale: 1.1,
    speed: 500,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
  };

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
            followCursor: true,
            plugins: [followCursor],
            content: `Click To Learn About ${skills[i].label}`,
            
        });
      }
    });
  }, [refs, skills]);
  const navigate = useNavigate({from:'/portfolio'})
  const onClickHandle = (path:string)=>{
    navigate({to :path})
  }
  return (
    <div ref={useRef(null)} id="skills" style={{ backgroundImage: `url(${City})`  }} className="min-h-screen main-container w-full px-5 flex justify-center flex-col gap-3 overflow-x-hidden overflow-y-hidden item border-b border-dashed border-light/10 items-center p-auto">
      <h1 className="text-sky-700 backdrop-blur-sm font-bold text-5xl">Skills</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:w-auto w-full sm:grid-cols-2 gap-5">
        {skills.map((Skill, i) => (
          <Tilt  key={i} options={defaultOptions} className="sm:h-52 h-32 w-full cursor-pointer flex shadow-md border border-light border-dashed rounded-3xl bg-warmmain/30 backdrop-blur-sm sm:w-52">
            <div onClick={()=>{onClickHandle(Skill.docs)}} className="w-full h-full flex items-center flex-col justify-center" ref={refs[i]}>
              <Skill.element />
              <h3 className="text-xl text-light mx-auto w-max">{Skill.label}</h3>
            </div>
          </Tilt>
        ))}
      </div>
    </div>
  );
};
